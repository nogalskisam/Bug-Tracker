using BugTracker.DataAccess.Models;
using BugTracker.DataAccess.Requests;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BugTracker.Site.Services
{
    public interface IBugService
    {
		Task<List<Bug>> GetOpenBugs();

		Task<bool> CreateBug(CreateBugRequest request);
	}
}
