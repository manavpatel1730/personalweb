using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Options;
using personalweb.Models;

namespace personalweb.applicationDBContext
{
    public class applicationDBContext : DbContext
    {
        protected applicationDBContext(DbContextOptions<applicationDBContext> options): base (options)
        {
          
        }
        public virtual DbSet<ContactU> ContactUs { get; set; } 
    }
}
