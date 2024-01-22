using AutoMapper;
using SportApplication.Backend.Entities;
using SportApplication.Backend.Models;

namespace SportApplication.Backend.MappingProfiles;

public sealed class TrainerMappingProfile : Profile
{
    public TrainerMappingProfile()
    {
        CreateMap<Trainer, TrainerDto>();
        CreateMap<CreateTrainerDto, Trainer>();
    }
}