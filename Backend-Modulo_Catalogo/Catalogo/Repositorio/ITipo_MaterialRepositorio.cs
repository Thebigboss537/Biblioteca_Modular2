using Catalogo.Models.Dto;

namespace Catalogo.Repositorio
{
    public interface ITipo_materialRepositorio
    {
        Task<List<Tipo_materialDto>> GetTipo_material();
         
        Task<Tipo_materialDto> GetTipo_materialById(int id);

        Task<Tipo_materialDto> CreateUpdate(Tipo_materialDto Tipo_materialDto);

        Task<bool> DeleteTipo_material(int id);

    }
}
