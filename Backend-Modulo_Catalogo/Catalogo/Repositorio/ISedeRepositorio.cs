using Catalogo.Models.Dto;

namespace Catalogo.Repositorio
{
    public interface ISedeRepositorio
    {
        Task<List<SedeDto>> GetSede();

        Task<SedeDto> GetSedeById(int id);

        Task<SedeDto> CreateUpdate(SedeDto Sede);

        Task<bool> DeleteSede(int id);
    }
}
