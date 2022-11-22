using Auth.Models;
using Auth.Models.Dto;

namespace Auth.Repositorio
{
    public interface IUsuarioRepositorio
    {
        Task<string> RegistrarUsuario(Usuario_autenticacion Usuario, string password);
        Task<string> Login(string Nombre_usuario, string password);
        Task<List<RolDto>> GetRoles();
    }
}
