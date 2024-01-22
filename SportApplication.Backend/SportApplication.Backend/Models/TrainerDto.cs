namespace SportApplication.Backend.Models;

public sealed record TrainerDto
{
    public required Guid Id { get; init; }
    public required string Name { get; init; }
    public required DateOnly BirthDate { get; init; }
}