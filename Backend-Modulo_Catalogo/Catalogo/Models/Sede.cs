using System.ComponentModel.DataAnnotations;

namespace Catalogo.Models
{
    public class Sede
    {
        [Key]
        public int Id_sede { get; set; }

        [Required]
        [StringLength(100)]
        public string Nombre { get; set; }
    }
}
