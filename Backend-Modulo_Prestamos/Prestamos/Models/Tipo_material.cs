using System.ComponentModel.DataAnnotations;

namespace Prestamos.Models
{
    public class Tipo_material
    {
        [Key]
        public int Id_tipo_material { get; set; }

        [StringLength(150)]
        [Required]
        public string Nombre { get; set; }
    }
}
