using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace TaskTracker.Api.Controllers;

[ApiController]
[Route("api/[controller]")]
public class TasksController(TaskDbContext context) : ControllerBase
{
    private readonly TaskDbContext _context = context;

    [HttpGet]
    public async Task<ActionResult<IEnumerable<TaskItem>>> GetTasks() =>
        await _context.TaskItems.ToListAsync();

    [HttpPost]
    public async Task<ActionResult<TaskItem>> Create(TaskItem task)
    {
        _context.TaskItems.Add(task);
        await _context.SaveChangesAsync();
        return CreatedAtAction(nameof(GetTasks), new { id = task.Id }, task);
    }

    [HttpPut("{id}")]
    public async Task<IActionResult> Update(int id, TaskItem updatedTask)
    {
        if (id != updatedTask.Id) return BadRequest();
        _context.Entry(updatedTask).State = EntityState.Modified;
        await _context.SaveChangesAsync();
        return NoContent();
    }

    [HttpDelete("{id}")]
    public async Task<IActionResult> Delete(int id)
    {
        var task = await _context.TaskItems.FindAsync(id);
        if (task == null) return NotFound();
        _context.TaskItems.Remove(task);
        await _context.SaveChangesAsync();
        return NoContent();
    }
}
