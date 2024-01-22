using SportApplication.Backend.Extensions;

var app = WebApplication
    .CreateBuilder(args)
    .ConfigureApiServices()
    .ConfigureApplicationServices()
    .ConfigurePipeline();

app.Run();