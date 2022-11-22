using Catalogo.Models.Dto;

namespace Catalogo.Repositorio
{
    public interface IEditorialRepositorio
    {
        Task<List<EditorialDto>> GetEditorial();

        Task<EditorialDto> GetEditorialById(int id);

        Task<EditorialDto> CreateUpdate(EditorialDto Editorial);

        Task<bool> DeleteEditorial(int id);
    }
}
