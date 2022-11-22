using System.ComponentModel.DataAnnotations;

namespace Catalogo.Models
{
    public class Categoria
    {
        [Key]
        public int Id_categoria { get; set; }

        [Required]
        [StringLength(70)]
        public string Nombre { get; set; }
    }
}
