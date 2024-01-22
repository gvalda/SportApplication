namespace SportApplication.Backend.Extensions;

public static class IConfigurationExtensions
{
    public static T GetRequired<T>(this IConfiguration configuration) =>
        configuration.Get<T>() ??
        throw new InvalidOperationException($"Configuration section {typeof(T).Name} is not found");
}