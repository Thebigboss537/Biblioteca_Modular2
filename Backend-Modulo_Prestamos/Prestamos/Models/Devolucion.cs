using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Prestamos.Models
{
    public class Devolucion
    {
        [Key]
        public int Id_devolucion { get; set; }

        [ForeignKey("Prestamo")]
        public int Id_prestamo { get; set; }
        public Prestamo ?Prestamo { get; set; }

        [Required]
        public DateTime Fecha_devolucion { get; set; }

        [Required]
        [StringLength(250)]
        public string ?Observacion { get; set; }



    }
}
