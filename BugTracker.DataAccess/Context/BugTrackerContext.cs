using BugTracker.DataAccess.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Text;

namespace BugTracker.DataAccess.Context
{
    public class BugTrackerContext : DbContext
    {
        public BugTrackerContext(DbContextOptions<BugTrackerContext> options)
            : base(options)
        { }

        public DbSet<Bug> Bugs { get; set; }

        public DbSet<Person> People { get; set; }
    }
}
