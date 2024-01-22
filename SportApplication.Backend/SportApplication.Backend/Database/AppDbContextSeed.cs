using System.Data.Common;
using Microsoft.EntityFrameworkCore;
using SportApplication.Backend.Extensions;

namespace SportApplication.Backend.Database;

public sealed class AppDbContextSeed(AppDbContext context, ILogger<AppDbContextSeed> logger)
{
    public async Task SeedAsync()
    {
        logger.LogInformation("Seeding data");
        logger.LogInformation("DbContext Type: {DatabaseProviderName}", context.Database.ProviderName);

        try
        {
            if (context.IsRealDatabase()) await MigrateDatabase();

            await context.SaveChangesAsync();
        }
        catch (DbException e)
        {
            logger.LogError(e, "An error occurred while seeding the database. Error: {Message}", e.Message);
            throw;
        }
    }

    private async Task MigrateDatabase()
    {
        logger.LogInformation("Migrating database associated with context {DbContextName}", nameof(AppDbContext));
        await context.Database.MigrateAsync();
    }
}