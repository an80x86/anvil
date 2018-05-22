using Dapper;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;
using Npgsql;
using UserLogin.Models;

namespace UserLogin.DataProvider
{
    public class UserDataProvider : IUserDataProvider
    {
        private readonly string connectionstring = "Server=localhost;Port=5432;Database=ors;Userid=postgres;Password=postgres;";
        private NpgsqlConnection sqlConnection;

        //ADD USER
        public async Task AddUser(User user)
        {

            using (var sqlConnection = new NpgsqlConnection(connectionstring))
            {
                await sqlConnection.OpenAsync();
                /* var parameters = new DynamicParameters();
                 parameters.Add("@UserId", user.UserId);
                 parameters.Add("@UserName", user.UserName);
                 parameters.Add("@Email", user.Email);
                 parameters.Add("@Password", user.Password);
                 await sqlConnection.ExecuteAsync("spAddUser", parameters, commandType: CommandType.StoredProcedure);*/
                var useid = new SqlParameter("@UserId", user.USERID);
                var username= new SqlParameter("@UserName", user.USERNAME);
                var email= new SqlParameter("@Email", user.EMAIL);
                var password= new SqlParameter("@Password", user.PASSWORD);
                //_logincontext.User.FromSql("spAddUser").ToArrayAsync();

            }

        }
        //DELETE USER
        public async Task DeleteUser(int UserId)
        {
            using (var sqlConnection = new NpgsqlConnection(connectionstring))
            {
                await sqlConnection.OpenAsync();
                var parameters = new DynamicParameters();
                parameters.Add("@UserId", UserId);
                await sqlConnection.ExecuteAsync("spDeleteUser", parameters, commandType: CommandType.StoredProcedure);
            }

        }

        //GET USER BY ID
        public async Task<User> GetUser(int UserId)
        {
            using (var sqlConnection = new NpgsqlConnection(connectionstring))
            {
                await sqlConnection.OpenAsync();
                return await sqlConnection.QuerySingleOrDefaultAsync<User>("select * from \"USER\" where \"USERID\" = @UserId",
                    new {UserId = UserId});

            }
        }

        //GET ALL USERS
        public async Task<IEnumerable<User>> GetUsers()
        {
            using (var sqlConnection = new NpgsqlConnection(connectionstring))
            {
                await sqlConnection.OpenAsync();
                return await sqlConnection.QueryAsync<User>(
                    "select * from \"USER\"",
                    null,
                    commandType: CommandType.Text);
            }
        }

        //UPDATE USER
        public async Task UpdateUser(User user)
        {
            using (var sqlConnection = new NpgsqlConnection(connectionstring))
            {
                await sqlConnection.OpenAsync();
                var parameters = new DynamicParameters();
                parameters.Add("@UserId", user.USERID);
                parameters.Add("@UserName", user.USERNAME);
                parameters.Add("@Email", user.EMAIL);
                parameters.Add("@Password", user.PASSWORD);

                await sqlConnection.ExecuteAsync(
                    "spUpdateUser",
                    parameters,
                    commandType: CommandType.StoredProcedure);
            }
        }
    }
}
