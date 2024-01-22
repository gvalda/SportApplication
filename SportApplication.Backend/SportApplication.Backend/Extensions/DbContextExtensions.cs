using Microsoft.EntityFrameworkCore;

namespace SportApplication.Backend.Extensions;

public static class DbContextExtensions
{
    public static bool IsRealDatabase(this DbContext context) =>
        context.Database.ProviderName?.Contains("SqlServer") ?? false;
}