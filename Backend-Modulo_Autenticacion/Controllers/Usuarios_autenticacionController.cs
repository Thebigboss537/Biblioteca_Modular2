#nullable disable
using Microsoft.AspNetCore.Mvc;
using Auth.Models;
using Auth.Repositorio;
using Auth.Models.Dto;
using Auth.Util;

namespace Auth.Controllers
{
    [Route("Auth")]
    [ApiController]
    public class Usuarios_autenticacionController : ControllerBase
    {
        private readonly IUsuarioRepositorio _usuarioRepositorio;
        protected ResponseDto _response;

        public Usuarios_autenticacionController(IUsuarioRepositorio usuarioRepositorio)
        {
            _usuarioRepositorio = usuarioRepositorio;
            _response = new ResponseDto();
        }

        [HttpPost("register")]
       public async Task<IActionResult> crearusuario(Usuario_autenticacionDto usuario)
       {
           var respuesta = await _usuarioRepositorio.RegistrarUsuario(
               new Usuario_autenticacion
               {
                   Username = usuario.Nombre_usuario
               }, usuario.Password);
           if (respuesta == "no existe")
           {
               _response.IsSuccess = false;
               _response.DisplayMessage = "Usuario no existe";
               return BadRequest(_response);
           }

           if (respuesta == "error")
           {
               _response.IsSuccess = false;
               _response.DisplayMessage = "Error al crear el usuario";
               return BadRequest(_response);
           }

           if (respuesta == "usuario registrado")
            {
                _response.IsSuccess = false;
                _response.DisplayMessage = "usuario ya registrado";
                return BadRequest(_response);
            }

            _response.DisplayMessage = "Usuario creado con exito";
            JwTPackage jpt = new JwTPackage();
            jpt.UserName = usuario.Nombre_usuario.ToString();
            jpt.Token = respuesta;
            _response.Result = jpt;
            return Ok(_response);
       }

        /*[HttpGet("register")]
        public async Task<ActionResult<Usuario>> GetProgramas_academicos()
        {
            try
            {
                gets get = new gets();
                
                get.rol = await _usuarioRepositorio.GetRoles();
                get.estado = (Estado[])Enum.GetValues(typeof(Estado));

                var lista = await _usuarioRepositorio.GetProgramas_academicos();

                _response.Result = get;
                _response.DisplayMessage = "Lista de programas academicos";
            }
            catch (Exception ex)
            {
                _response.IsSuccess = false;
                _response.ErrorMessages = new List<string> { ex.ToString() };
            }
            return Ok(_response);
        }*/

        [HttpPost("login")]
        public async Task<IActionResult> Login(Login_usuarioDto usuario)
        {
            var respuesta = await _usuarioRepositorio.Login(usuario.Nombre_usuario, usuario.Password);

            if (respuesta == "usuario no registrado")
            {
                _response.IsSuccess = false;
                _response.DisplayMessage = "Usuario no registrado";
                return BadRequest(_response);
            }
            if (respuesta == "nouser")
            {
                _response.IsSuccess = false;
                _response.DisplayMessage = "Usuario no existe";
                return BadRequest(_response);
            }
            if (respuesta == "wrongpassword")
            {
                _response.IsSuccess = false;
                _response.DisplayMessage = "Contraseña incorrecta";
                return BadRequest(_response);
            }



            //_response.Result = respuesta;
            
            JwTPackage jpt = new JwTPackage();
            jpt.UserName = usuario.Nombre_usuario.ToString();
            jpt.Token = respuesta;
            _response.Result = jpt;
            _response.DisplayMessage = "Usuario conectado";
            return Ok(_response);
        }





       /* [HttpPost]
        public async Task<IActionResult> Login(Login_usuarioDto usuario)
        {
            var respuesta = await _usuarioRepositorio.Login(usuario.Nombre_usuario, usuario.Password);

            if (respuesta == "nouser")
            {
                _response.IsSuccess = false;
                _response.DisplayMessage = "Login_usuario no existe";
                return BadRequest(_response);
            }
            if (respuesta == "wrongpassword")
            {
                _response.IsSuccess = false;
                _response.DisplayMessage = "Contraseña incorrecta";
                return BadRequest(_response);
            }

            //_response.Result = respuesta;
            JwTPackage jpt = new JwTPackage();
            jpt.UserName = usuario.Nombre_usuario.ToString();
            jpt.Token = respuesta;
            _response.Result = jpt;

            _response.DisplayMessage = "Login_usuario conectado";
            return Ok(_response);
        }

        [HttpPost("Register")]
        public async Task<IActionResult> RegistrarUsuario(UsuarioDto usuario)
        {
            var respuesta = await _usuarioRepositorio.RegistrarUsuario(
                new Usuario
                {
                    Cedula = usuario.Cedula,
                    Nombre = usuario.Nombre,
                    Apellido = usuario.Apellido,
                    Telefono = usuario.Telefono,
                    Correo_electronico = usuario.Correo_electronico,
                    Estado = Util.Estado.Inactivo
                }, usuario.Contraseña);
            if (respuesta == "existe")
            {
                _response.IsSuccess = false;
                _response.DisplayMessage = "Login_usuario ya existe";
                return BadRequest(_response);
            }

            if (respuesta == "error")
            {
                _response.IsSuccess = false;
                _response.DisplayMessage = "Error al crear el usuario";
                return BadRequest(_response);
            }

            JwTPackage jpt = new JwTPackage();
            jpt.UserName = usuario.Cedula.ToString();
            jpt.Token = respuesta;
            _response.Result = jpt;
            _response.DisplayMessage = "Usuario creado con exito";
            //_response.Result = respuesta;
            

            return Ok(_response);
        }*/

        public class JwTPackage
        {
            public string UserName { get; set; }
            public string Token { get; set; }
        }


        public class gets
        {

            public List<RolDto> rol { get; set; }

            public Estado[] estado { get; set; }

            
        }

    }
}
