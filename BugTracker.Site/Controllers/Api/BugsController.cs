using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Threading.Tasks;
using BugTracker.DataAccess.Models;
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
		
        [HttpGet]
        public IEnumerable<string> Get()
        {
			return new string[] { "value1", "value2" };
        }
		
        [HttpGet("{open}")]
        public async Task<IActionResult> Get(bool open)
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

        // POST api/<controller>
        [HttpPost]
        public void Post([FromBody]string value)
        {
        }

        // PUT api/<controller>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/<controller>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
