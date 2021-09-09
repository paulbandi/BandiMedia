using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using BandiMed.Models;

namespace BandiMed.Data
{
    public class BandiMedContext : DbContext
    {
        public BandiMedContext (DbContextOptions<BandiMedContext> options)
            : base(options)
        {
        }

        public DbSet<BandiMed.Models.Client> Client { get; set; }

        public DbSet<BandiMed.Models.PR> PR { get; set; }
    }
}
