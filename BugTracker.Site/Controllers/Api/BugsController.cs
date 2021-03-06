using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Threading.Tasks;
using BugTracker.DataAccess.Models;
using BugTracker.DataAccess.Requests;
using BugTracker.Site.Services;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace BugTracker.Site.Controllers.Api
{
    [Route("api/bugs")]
    public class BugsController : Controller
    {
		private readonly IBugService _bugService;

		public BugsController(IBugService bugService)
		{
			_bugService = bugService;
		}
		
        [HttpGet("{open}")]
        public async Task<IActionResult> Get([FromQuery]bool open = true)
        {
			try
			{
				if (open)
				{
					var result = await _bugService.GetOpenBugs();

					return Ok(result);
				}
				else
				{
					// Currently can only get open or closed bugs, ie. not applying a filter
					// Future development plan to add this as a filter potentially.

					// Return empty list for now as we aren't returning closed bugs
					return Ok(new List<Bug>());
				}
			}
			catch (Exception)
			{
				// Do logging
				return new StatusCodeResult((int)HttpStatusCode.InternalServerError);
			}
        }
		
        [HttpPost]
        public async Task<IActionResult> Post([FromBody]CreateBugRequest request)
        {
			try
			{
				var result = await _bugService.CreateBug(request);

				if (!result)
				{
					// should probably tell why it failed?
					return new StatusCodeResult((int)HttpStatusCode.InternalServerError);
				}

				return Ok();
			}
			catch (Exception)
			{
				// Do logging
				return new StatusCodeResult((int)HttpStatusCode.InternalServerError);
			}
		}
    }
}
