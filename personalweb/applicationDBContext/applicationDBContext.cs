using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Options;
using personalweb.Models;

namespace personalweb.applicationDBContext
{
    public class ApplicationDBContext : DbContext
    {
        public ApplicationDBContext()
        {
        }
        public ApplicationDBContext(DbContextOptions<ApplicationDBContext> options)
           : base(options)
        {
        }
        public virtual DbSet<ContactU> ContactUs { get; set; } 
    }
}
