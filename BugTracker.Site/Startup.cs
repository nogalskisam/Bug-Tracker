using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using BugTracker.DataAccess.Context;
using BugTracker.DataAccess.Repositories;
using BugTracker.Site.Services;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;

namespace BugTracker.Site
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

		public void ConfigureServices(IServiceCollection services)
		{
			services.AddTransient<IBugService, BugService>();
			services.AddTransient<IBugRepository, BugRepository>();

			var connection = @"Server=localhost;Database=BugTracker;Trusted_Connection=True;";
			services.AddDbContext<BugTrackerContext>
				(options => options.UseSqlServer(connection));

			services.AddMvc().SetCompatibilityVersion(CompatibilityVersion.Version_2_2);
			services.AddCors();
		}

		// This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
		public void Configure(IApplicationBuilder app, IHostingEnvironment env)
		{
			app.Use(async (context, next) => {
				await next();
				if (context.Response.StatusCode == 404 &&
				   !Path.HasExtension(context.Request.Path.Value) &&
				   !context.Request.Path.Value.StartsWith("/api/"))
				{
					context.Request.Path = "/index.html";
					await next();
				}
			});

			app.UseMvcWithDefaultRoute();

			app.UseDefaultFiles();
			app.UseStaticFiles();
		}
	}
}
