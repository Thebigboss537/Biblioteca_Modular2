using Auth.Models;
using Auth.Models.Dto;
using AutoMapper;

namespace Auth
{
    public class MappingConfig
    {
        public static MapperConfiguration RegisterMaps()
        {
            var mappingConfig = new MapperConfiguration(config =>
            {
                config.CreateMap<Usuario_autenticacionDto, Usuario_autenticacion>();
                config.CreateMap<Usuario_autenticacion, Usuario_autenticacionDto>();

                config.CreateMap<RolDto, Rol>();
                config.CreateMap<Rol, RolDto>();

            });

            return mappingConfig;
        }

    }
}
