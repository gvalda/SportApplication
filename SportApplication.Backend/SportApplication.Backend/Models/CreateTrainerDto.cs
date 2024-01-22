using System.ComponentModel.DataAnnotations;

namespace SportApplication.Backend.Models;

public sealed record CreateTrainerDto
{
    [MinLength(3)] [MaxLength(100)] public required string Name { get; init; }

    [Required] public required DateOnly BirthDate { get; init; }
}