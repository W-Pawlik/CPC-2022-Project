using Microsoft.EntityFrameworkCore;

namespace campaignManager.Models
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options)
            :base(options)
        { }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Post>()
                .HasKey(x => x.Id);
        }

        public DbSet<Post> Posts { get; set; }
    }
}
