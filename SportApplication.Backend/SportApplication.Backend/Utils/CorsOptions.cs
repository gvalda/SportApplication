namespace SportApplication.Backend.Utils;

public sealed record CorsOptions
{
    public const string SectionName = "Cors";
    
    public required string[] Origins { get; init; }
}