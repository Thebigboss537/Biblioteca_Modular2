using Usuarios.Models;
using Microsoft.EntityFrameworkCore;

namespace Usuarios.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options): base(options) { }

       

        public DbSet<Programa_academico> Programas_academicos { get; set; }

        public DbSet<Usuario_autenticacion> Usuarios_autenticacion { get; set; }


        public DbSet<Usuario> Usuarios { get; set; }
    }
}

