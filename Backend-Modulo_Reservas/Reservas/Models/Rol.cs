using System.ComponentModel.DataAnnotations;

namespace Reservas.Models
{
    public class Rol
    {
        [Key]
        public int Id_rol { get; set; }

        [Required]
        [StringLength(100)]
        public string Nombre { get; set; }
    }
}
