using Catalogo.Models;
using Microsoft.EntityFrameworkCore;

namespace Catalogo.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options): base(options) { }

        public DbSet<Autor> Autores { get; set; }

        public DbSet<Categoria> Categorias { get; set; }

        public DbSet<Editorial> Editoriales { get; set; }

        public DbSet<Material> Materiales { get; set; }

        public DbSet<Material_autor> Material_Autores { get; set; }

        public DbSet<Material_categoria> Material_Categorias { get; set; }

        public DbSet<Sede> Sedes { get; set; }

        public DbSet<Tipo_material> Tipo_materiales { get; set; }
    }
}

