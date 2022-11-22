using Catalogo.Models.Dto;

namespace Catalogo.Repositorio
{
    public interface IAutorRepositorio
    {
        Task<List<AutorDto>> GetAutores();
        Task<AutorDto> GetAutorById(int id);
        Task<AutorDto> CreateUpdate(AutorDto autorDto);
        Task<bool> DeleteAutor(int id);

    }
}
