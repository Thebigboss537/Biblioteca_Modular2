using Usuarios.Models;
using Usuarios.Models.Dto;

namespace Usuarios.Repositorio
{
    public interface IUsuarioRepositorio
    {
        Task<List<UsuarioDto>> GetUsuarios();
        Task<List<Programa_academicoDto>> GetProgramas_academicos();
        Task<UsuarioDto> GetUsuarioById(int id);
        Task<UsuarioDto> CreateUpdate(UsuarioDto clienteDto);
        Task<bool> DeleteUsuario(int id);
    }
}
