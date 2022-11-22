using Auth.Models;
using Microsoft.EntityFrameworkCore;

namespace Auth.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options) { }
        public DbSet<Usuario_autenticacion> Usuarios_autenticacion { get; set; }
        public DbSet<Rol> Roles { get; set; }
        public DbSet<Usuario> Usuarios { get; set; }
    }
}

