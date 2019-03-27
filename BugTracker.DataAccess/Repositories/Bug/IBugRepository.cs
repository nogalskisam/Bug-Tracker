using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace BugTracker.DataAccess.Repositories
{
    public interface IBugRepository
    {
        Task GetBugs(bool open);
    }
}
