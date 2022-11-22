using Reservas.Models.Dto;

namespace Reservas.Repositorio
{
    public interface IReservaRepositorio
    {
        Task<List<ReservaDto>> GetReservas();
        Task<List<MaterialDto>> GetDisponibles();
        Task<List<ReservaDto>> GetReservadosid(int id);
        Task<ReservaDto> GetReservaById(int id);
        Task<ReservaDto> Cancelarreserva(int id);
        Task<ReservaDto> CreateUpdate(ReservaDto reservaDto);
        Task<bool> DeleteReserva(int id);
    }
}
