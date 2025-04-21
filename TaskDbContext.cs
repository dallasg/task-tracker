namespace TaskTracker.Api;

using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

public class TaskDbContext : DbContext
{
    public TaskDbContext(DbContextOptions<TaskDbContext> options) : base(options) { }

    public DbSet<TaskItem> TaskItems { get; set; }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        foreach (var entityType in modelBuilder.Model.GetEntityTypes())
        {
            foreach (var property in entityType.GetProperties()
                         .Where(p => p.ClrType == typeof(DateTime)))
            {
                property.SetValueConverter(new ValueConverter<DateTime, DateTime>(
                    v => v.ToUniversalTime(), // to DB
                    v => DateTime.SpecifyKind(v, DateTimeKind.Utc) // from DB
                ));
            }
        }
    }
}
