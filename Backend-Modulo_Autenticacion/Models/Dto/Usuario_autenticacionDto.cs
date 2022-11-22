using Auth.Models;
using Auth.Util;

namespace Auth.Models.Dto
{
    public class Usuario_autenticacionDto
    {
        public int Nombre_usuario { get; set; }

        public string Password { get; set; }
    }
}
