using Microsoft.EntityFrameworkCore.Migrations;

namespace BugTracker.DataAccess.Migrations
{
    public partial class Bug_AddIsOpenColumn : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<bool>(
                name: "IsOpen",
                table: "Bugs",
                nullable: false,
                defaultValue: false);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "IsOpen",
                table: "Bugs");
        }
    }
}
