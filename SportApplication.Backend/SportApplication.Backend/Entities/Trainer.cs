namespace SportApplication.Backend.Entities;

public class Trainer(string name, DateOnly birthDate)
{
    public Guid Id { get; init; }
    public string Name { get; init; } = name;
    public DateOnly BirthDate { get; init; } = birthDate;
}