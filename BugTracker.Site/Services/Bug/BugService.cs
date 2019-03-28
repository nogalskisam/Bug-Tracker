using BugTracker.DataAccess.Models;
using BugTracker.DataAccess.Repositories;
using BugTracker.DataAccess.Requests;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BugTracker.Site.Services
{
    public class BugService : IBugService
    {
        private readonly IBugRepository _bugRepository;

        public BugService(IBugRepository bugRepository)
        {
            _bugRepository = bugRepository;
        }

        public async Task<List<Bug>> GetOpenBugs()
        {
            var response = await _bugRepository.GetBugs(true);

            return response;
        }

		public async Task<bool> CreateBug(CreateBugRequest request)
		{
			var response = await _bugRepository.CreateBug(request);

			return response;
		}
    }
}
