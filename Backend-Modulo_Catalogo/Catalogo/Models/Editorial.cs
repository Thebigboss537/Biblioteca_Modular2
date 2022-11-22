using System.ComponentModel.DataAnnotations;

namespace Catalogo.Models
{
    public class Editorial
    {
        [Key]
        public int Id_editorial { get; set; }

        [Required]
        [StringLength(250)]
        public string Nombre { get; set; }

    }
}
