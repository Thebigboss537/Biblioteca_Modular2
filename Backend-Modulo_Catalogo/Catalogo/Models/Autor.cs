using System.ComponentModel.DataAnnotations;

namespace Catalogo.Models
{
    public class Autor
    {
        [Key]
        public int Id_autor { get; set; }

        [StringLength(250)]
        [Required]
        public string Nombre { get; set; }
    }
}
