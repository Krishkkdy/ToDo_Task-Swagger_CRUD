using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ToDoApi.Models;

[ApiController]
[Route("api/[controller]")]
public class ToDoController : ControllerBase
{
    private readonly ToDoContext _context;

    public ToDoController(ToDoContext context)
    {
        _context = context;
    }

    // GET: api/todo
    [HttpGet]
    public async Task<ActionResult<IEnumerable<ToDoTask>>> GetTasks()
    {
        return await _context.ToDoTasks.ToListAsync();
    }

    // POST: api/todo
    [HttpPost]
    public async Task<ActionResult<ToDoTask>> CreateTask(ToDoTask task)
    {
        _context.ToDoTasks.Add(task);
        await _context.SaveChangesAsync();
        return CreatedAtAction(nameof(GetTasks), new { id = task.Id }, task);
    }

    // PUT: api/todo/{id}
    [HttpPut("{id}")]
    public async Task<IActionResult> UpdateTask(int id, ToDoTask task)
    {
        var taskToUpdate = await _context.ToDoTasks.FindAsync(id);
        if (taskToUpdate == null) return NotFound();

        taskToUpdate.TaskName = task.TaskName;
        await _context.SaveChangesAsync();

        return NoContent();
    }

    // DELETE: api/todo/{id}
    [HttpDelete("{id}")]
    public async Task<IActionResult> DeleteTask(int id)
    {
        var task = await _context.ToDoTasks.FindAsync(id);
        if (task == null) return NotFound();

        _context.ToDoTasks.Remove(task);
        await _context.SaveChangesAsync();

        return NoContent();
    }
}
