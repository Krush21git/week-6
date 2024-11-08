using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using Week6.Server.Models;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddControllers();

// Enable Swagger/OpenAPI
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

// Configure Entity Framework with SQL Server
builder.Services.AddDbContext<IndustryConnectWeek2Context>(options =>
     options.UseSqlServer("Server=localhost;Initial Catalog=IndustryConnectWeek2;Integrated Security=True;TrustServerCertificate=Yes"));

// Add CORS policy to allow your frontend to communicate with the backend
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowFrontend",
        builder =>
        {
            builder.WithOrigins("http://localhost:5174")  // Your Vite frontend URL
                   .AllowAnyMethod()                     // Allow all HTTP methods
                   .AllowAnyHeader()                     // Allow all headers
                   .AllowCredentials();                  // Allow credentials if needed
        });
});

var app = builder.Build();

app.UseDefaultFiles();
app.UseStaticFiles();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

// Enable HTTPS redirection
app.UseHttpsRedirection();

// Use the CORS middleware with the "AllowFrontend" policy
app.UseCors("AllowFrontend");

app.UseAuthorization();

// Map controllers (API endpoints)
app.MapControllers();

app.MapFallbackToFile("/index.html");

app.Run();
