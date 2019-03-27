using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace BugTracker.DataAccess.Repositories
{
    public class BugRepository : IBugRepository
    {
        public Task GetBugs(bool open)
        {
            throw new NotImplementedException();
        }
    }
}
