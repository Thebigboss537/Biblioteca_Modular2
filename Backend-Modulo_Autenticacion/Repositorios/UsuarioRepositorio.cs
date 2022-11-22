using Auth.Data;
using Auth.Models;
using AutoMapper;
using Auth.Models.Dto;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;

namespace Auth.Repositorio
{
    public class UsuarioRepositorio : IUsuarioRepositorio
    {
        private readonly DataContext _db;
        private IMapper _mapper;
        private readonly IConfiguration _configuration;
        public UsuarioRepositorio(DataContext db, IMapper mapper, IConfiguration configuration)
        {
            _db = db;
            _mapper = mapper;
            _configuration = configuration;
        }

        // TODO: Debería pertenecer a otro Módulo que no es usuario
        

        public async Task<List<RolDto>> GetRoles()
        {
            List<Rol> lista = await _db.Roles.ToListAsync();

            return _mapper.Map<List<RolDto>>(lista);
        }

        public async Task<string> Login(string Nombre_usuario, string password)
        {
            var user = await _db.Usuarios_autenticacion.FirstOrDefaultAsync(x => x.Username.ToString().ToLower().Equals(Nombre_usuario.ToString().ToLower()));

            
            if (user == null)
            {
                return "nouser";
            }
            else if (user.PasswordHash == null)
            {
                return "usuario no registrado";
            }
            else if (!VerificarPasswordHash(password, user.PasswordHash, user.PasswordSalt))
            {
                return "wrongpassword";
            }
            else
            {
                return CrearToken(user);
            }
        }

        public async Task<string> RegistrarUsuario(Usuario_autenticacion usuario, string password)
        {

            try
            {
                if (await UserExiste(usuario.Username.ToString()))
                {
                    if(await Noregistrado(usuario.Username.ToString()))
                    {
                        CrearPasswordHash(password, out byte[] passwordHash, out byte[] passwordSalt);
                        usuario.PasswordHash = passwordHash;
                        usuario.PasswordSalt = passwordSalt;
                        if (await isbibliotecario(usuario.Username.ToString()))
                        {
                            usuario.Id_rol = 4;
                        }
                        else
                        {
                            usuario.Id_rol = 2;
                        }
                        usuario.Id_usuario_autenticacion = _db.Usuarios_autenticacion.AsNoTracking().Where(e => e.Username == usuario.Username).FirstOrDefault().Id_usuario_autenticacion;
                        _db.Usuarios_autenticacion.Update(usuario);
                        await _db.SaveChangesAsync();
                        return CrearToken(usuario);
                    }
                    else
                    {
                        return "usuario registrado";
                    }

                }
                else
                {
                    return "no existe";
                }
            }
            catch (Exception ex)
            {
                return "error";
            }
        }

        public async Task<bool> UserExiste(string Nombre_usuario)
        {
            if (await _db.Usuarios_autenticacion.AnyAsync(x => x.Username.ToString().ToLower().Equals(Nombre_usuario.ToLower())))
            {
                return true;
            }
            return false;
        }


        private void CrearPasswordHash(string password, out byte[] passwordHash, out byte[] passwordSalt)
        {
            using (var hmac = new System.Security.Cryptography.HMACSHA512())
            {
                passwordSalt = hmac.Key;
                passwordHash = hmac.ComputeHash(System.Text.Encoding.UTF8.GetBytes(password));

            }
        }

        public bool VerificarPasswordHash(string password, byte[] passwordHash, byte[] passwrodSalt)
        {
            using (var hmac = new System.Security.Cryptography.HMACSHA512(passwrodSalt))
            {
                var computedHash = hmac.ComputeHash(System.Text.Encoding.UTF8.GetBytes(password));
                for (int i = 0; i < computedHash.Length; i++)
                {
                    if (computedHash[i] != passwordHash[i])
                    {
                        return false;
                    }
                }
                return true;
            }
        }

        private string CrearToken(Usuario_autenticacion usuario)
        {
            var a = _db.Usuarios.FirstOrDefault(e => e.Id_usuario_autenticacion == usuario.Id_usuario_autenticacion);

            var claims = new List<Claim>
            {
                new Claim(ClaimTypes.NameIdentifier, a.Id_usuario.ToString()),
                new Claim(ClaimTypes.Name, usuario.Username.ToString()),
                new Claim(ClaimTypes.Role, usuario.Id_rol.ToString())
            };

            var key = new SymmetricSecurityKey(System.Text.Encoding.UTF8.
                GetBytes(_configuration.GetSection("AppSettings:Token").Value));

            var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha512Signature);

            var tokenDescriptor = new SecurityTokenDescriptor
            {
                Subject = new ClaimsIdentity(claims),
                Expires = System.DateTime.Now.AddDays(1),
                SigningCredentials = creds
            };

            var tokenHandler = new JwtSecurityTokenHandler();
            var token = tokenHandler.CreateToken(tokenDescriptor);

            return tokenHandler.WriteToken(token);
        }

        public async Task<bool> Noregistrado(string cedula)
        {
            var a = await _db.Usuarios_autenticacion.AsNoTracking().Where(e => e.Username.ToString() == cedula).FirstOrDefaultAsync();

            if (a.PasswordHash == null)
            {
                return true;
            }
            return false;
        }

        public async Task<bool> isbibliotecario(string cedula)
        {
            var a = await _db.Usuarios_autenticacion.AsNoTracking().Where(e => e.Username.ToString() == cedula).FirstOrDefaultAsync();

            if (a.Id_rol.Equals(4))
            {
                return true;
            }
            return false;
        }
    }
}
