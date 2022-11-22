using Catalogo.Models.Dto;

namespace Catalogo.Repositorio
{
    public interface IMaterialRepositorio
    {
        Task<List<MaterialDto>> GetMateriales();
        Task<MaterialDto> GetMaterialById(int id);
        Task<MaterialDto> CreateUpdate(MaterialDto MaterialDto);
        Task<MaterialDto> AgregarArchivo(Material_archivoDto Material_archivoDto);
        Task<bool> DeleteMaterial(int id);
        Task<bool> Eliminarpdf(int id);
    }
}
