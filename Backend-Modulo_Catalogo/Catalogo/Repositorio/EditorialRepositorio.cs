using AutoMapper;
using Catalogo.Data;
using Catalogo.Models;
using Catalogo.Models.Dto;
using Microsoft.EntityFrameworkCore;

namespace Catalogo.Repositorio
{
    public class EditorialRepositorio : IEditorialRepositorio
    {
        private readonly DataContext _db;
        private IMapper _mapper;

        public EditorialRepositorio(DataContext db, IMapper mapper)
        {
            _db = db;
            _mapper = mapper;
        }
        public async Task<EditorialDto> CreateUpdate(EditorialDto EditorialDto)
        {
            Editorial Editorial = _mapper.Map<EditorialDto, Editorial>(EditorialDto);
            if (Editorial.Id_editorial > 0)
            {
                _db.Editoriales.Update(Editorial);
            }
            else
            {
                await _db.Editoriales.AddAsync(Editorial);
            }
            await _db.SaveChangesAsync();
            return _mapper.Map<Editorial, EditorialDto>(Editorial);
        }

        public async Task<bool> DeleteEditorial(int id)
        {
            try
            {
                Editorial Editorial = await _db.Editoriales.FindAsync(id);
                if (Editorial == null)
                {
                    return false;
                }
                _db.Editoriales.Remove(Editorial);
                await _db.SaveChangesAsync();

                return true;
            }
            catch (Exception)
            {
                return false;
            }
        }

        public async Task<List<EditorialDto>> GetEditorial()
        {
            List<Editorial> lista = await _db.Editoriales.ToListAsync();

            return _mapper.Map<List<EditorialDto>>(lista);
        }

        public async Task<EditorialDto> GetEditorialById(int id)
        {
            Editorial Editorial = await _db.Editoriales.FindAsync(id);

            return _mapper.Map<EditorialDto>(Editorial);
        }
    }
}