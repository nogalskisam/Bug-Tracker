using BugTracker.DataAccess.Models;
using BugTracker.DataAccess.Requests;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace BugTracker.DataAccess.Repositories
{
    public interface IBugRepository
    {
        Task<List<Bug>> GetBugs(bool open);

        Task<bool> CreateBug(CreateBugRequest request);
    }
}
