using Microsoft.EntityFrameworkCore;
using ToDoApi.Models;

public class ToDoContext : DbContext
{
    public ToDoContext(DbContextOptions<ToDoContext> options) : base(options) { }

    public DbSet<ToDoTask> ToDoTasks { get; set; }
}
