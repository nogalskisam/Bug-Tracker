using BugTracker.DataAccess.Models;
using Dapper;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BugTracker.DataAccess.Repositories
{
    public class BugRepository : IBugRepository
    {
		private readonly string _connectionString;

		public BugRepository(IConfiguration configuration)
		{
			_connectionString = configuration.GetConnectionString("defaultConnection");
		}

        public async Task<List<Bug>> GetBugs(bool open = true)
        {
			using (var connection = new SqlConnection(_connectionString))
			{
				var bugs = await connection.QueryAsync<Bug>("SELECT * FROM Bugs WHERE IsOpen = @IsOpen", new { IsOpen = open });

				return bugs.ToList();
			}
        }
    }
}
