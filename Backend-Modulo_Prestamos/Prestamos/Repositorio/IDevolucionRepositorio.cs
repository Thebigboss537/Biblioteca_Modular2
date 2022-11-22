using Prestamos.Models.Dto;

namespace Prestamos.Repositorio
{
    public interface IDevolucionRepositorio
    {
        Task<List<DevolucionDto>> GetDevoluciones();
        Task<DevolucionDto> GetDevolucionById(int id);
        Task<DevolucionDto> CreateUpdate(DevolucionDto devolucionDto);
        Task<bool> DeleteDevolucion(int id);
    }
}
