using Microsoft.EntityFrameworkCore;

namespace TaskTracker.Api;

public static class DbInitializer
{
    public static void Initialize(TaskDbContext context)
    {
        // Apply any pending migrations
        context.Database.Migrate();

        // Seed if empty
        if (!context.TaskItems.Any())
        {
            var tasks = new List<TaskItem>
            {
                new() { Title = "Write documentation", DueDate = DateTime.Today.AddDays(1), IsComplete = false },
                new() { Title = "Push to GitHub", DueDate = DateTime.Today.AddDays(2), IsComplete = false },
                new() { Title = "Review pull request", DueDate = DateTime.Today.AddDays(3), IsComplete = true }
            };

            context.TaskItems.AddRange(tasks);
            context.SaveChanges();
        }
    }
}
