using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.EntityFrameworkCore;
using Microsoft.OpenApi.Models;
using SportApplication.Backend.Database;
using SportApplication.Backend.Utils;

namespace SportApplication.Backend.Extensions;

public static class StartupExtensions
{
    public static WebApplicationBuilder ConfigureApiServices(this WebApplicationBuilder builder)
    {
        builder.Services.AddAutoMapper(typeof(Program).Assembly);
        builder.Services.AddControllers();
        builder.Services.AddEndpointsApiExplorer();
        builder.Services.ConfigureCors(builder.Configuration);
        builder.Services.ConfigureSwaggerGen();

        return builder;
    }

    public static WebApplication ConfigureApplicationServices(this WebApplicationBuilder builder)
    {
        var connectionString = builder.Configuration.GetConnectionString("DefaultConnection");
        builder.Services.AddDbContext<AppDbContext>(options => options.UseSqlServer(connectionString));
        builder.Services.AddTransient<AppDbContextSeed>();

        return builder.Build();
    }

    public static WebApplication ConfigurePipeline(this WebApplication app)
    {
        if (app.Environment.IsDevelopment())
        {
            app.UseSwagger();
            app.UseSwaggerUI();
        }

        app.UseAuthentication();
        app.UseHttpsRedirection();
        app.UseCors();
        app.UseAuthorization();
        app.MapControllers();

        app.SeedDatabase();

        return app;
    }

    private static void ConfigureCors(this IServiceCollection services, IConfiguration configuration)
    {
        var corsOptions = configuration
            .GetSection(CorsOptions.SectionName)
            .GetRequired<CorsOptions>();

        services.AddCors(options =>
            options.AddDefaultPolicy(policy =>
                policy
                    .WithOrigins(corsOptions.Origins)
                    .AllowAnyHeader()
                    .AllowAnyMethod()));
    }

    private static void ConfigureSwaggerGen(this IServiceCollection services) =>
        services.AddSwaggerGen(setup =>
        {
            var jwtSecurityScheme = new OpenApiSecurityScheme
            {
                BearerFormat = "JWT",
                Name = "JWT Authentication",
                In = ParameterLocation.Header,
                Type = SecuritySchemeType.Http,
                Scheme = JwtBearerDefaults.AuthenticationScheme,
                Description = "Put **_ONLY_** your JWT Bearer token on textbox below!",
                Reference = new OpenApiReference
                {
                    Id = JwtBearerDefaults.AuthenticationScheme,
                    Type = ReferenceType.SecurityScheme
                }
            };

            setup.AddSecurityDefinition(jwtSecurityScheme.Reference.Id, jwtSecurityScheme);

            setup.AddSecurityRequirement(
                new OpenApiSecurityRequirement { { jwtSecurityScheme, Array.Empty<string>() } });
        });

    private static void SeedDatabase(this IHost app)
    {
        using var scope = app.Services.CreateScope();
        var seedService = scope.ServiceProvider.GetRequiredService<AppDbContextSeed>();

        seedService.SeedAsync().Wait();
    }
}