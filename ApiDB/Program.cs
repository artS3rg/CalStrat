using System.Diagnostics;
using ApiDB;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();

builder.Services.AddCors(option => option.AddPolicy(
    name: "Default",
    builder => builder.AllowAnyOrigin().AllowAnyMethod()
    ));

builder.Services.AddDbContext<KcalPlannerDbContext>();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();

builder.Services.AddControllers().AddJsonOptions(x =>
{
    // serialize DateOnly as strings
    x.JsonSerializerOptions.Converters.Add(new DateOnlyJsonConverter());
});

builder.Services.AddSwaggerGen(c =>
{
    c.MapType<DateOnly>(() => new OpenApiSchema
    {
        Type = "string",
        Format = "date"
    });
});

var app = builder.Build();

app.UseCors("Default");

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();

