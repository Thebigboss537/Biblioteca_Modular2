using AutoMapper;
using Usuarios.Models;
using Usuarios.Models.Dto;

namespace Usuarios
{
    public class MappingConfig
    {
        public static MapperConfiguration RegisterMaps()
        {
            var mappingConfig = new MapperConfiguration(config =>
            {
                config.CreateMap<Programa_academicoDto, Programa_academico>();
                config.CreateMap<Programa_academico, Programa_academicoDto>();

                config.CreateMap<UsuarioDto, Usuario>();
                config.CreateMap<Usuario, UsuarioDto>();

            });
            
            return mappingConfig;
        }
         
    }
}
