using System;
using System.ComponentModel.DataAnnotations;
using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
using Newtonsoft.Json;

namespace ReactMongoDB.Models
{
    public class LoginEntity
    {
        [Required]
        [EmailAddress]
        public string Email { get; set; }

        [Required]
        [DataType(DataType.Password)]
        public string Password { get; set; }
    }
    public class RegisterEntity
    {
        [Required]
        [EmailAddress]
        [Display(Name = "Email")]
        public string Email { get; set; }

        [Required]
        [StringLength(100, ErrorMessage = "The {0} must be at least {2} and at max {1} characters long.", MinimumLength = 6)]
        [DataType(DataType.Password)]
        [Display(Name = "Password")]
        public string Password { get; set; }

        [DataType(DataType.Password)]
        [Display(Name = "Confirm password")]
        [Compare(nameof(Password), ErrorMessage = "The password and confirmation password do not match.")]
        public string ConfirmPassword { get; set; }

        [Required]
        [Display(Name = "Name")]
        public string Name { get; set; }

        [Required]
        [Display(Name = "LastName")]
        public string LastName { get; set; }

        [Required]
        [Display(Name = "City")]
        public string City { get; set; }
    }

    public class LoginResponse
    {
        public LoginResponse(string token, string userName, string email)
        {
            Token = token;
            UserName = userName;
            Email = email;
        }

        public string Token { get; private set; }

        public string UserName { get; private set; }

        public string Email { get; private set; }
    }


    public class SignUpResponse
    {
        public SignUpResponse(string token, string userName, string email)
        {
            Token = token;
            UserName = userName;
            Email = email;
        }

        public string Token { get; private set; }

        public string UserName { get; private set; }

        public string Email { get; private set; }
    }

    public class UserDataResponse
    {
        public string Name { get; set; }

        public string LastName { get; set; }

        public string City { get; set; }

        public string Email { get; set; }
    }


    public class Book
	{
		[BsonId]
		[BsonRepresentation(BsonType.ObjectId)]
		public string Id { get; set; }

        //Lưu là xuống monogo là Name,Xử lí trong code là BookName , Lấy ra api là Name 
        [BsonElement("Name")]
        [JsonProperty("Name")]
        public string BookName { get; set; }

		public decimal Price { get; set; }

		public string Category { get; set; }

		public string Author { get; set; }
        public string NewItem { get; set; }

	}

    public class BookstoreDatabaseSettings : IBookstoreDatabaseSettings
    {
        public string BooksCollectionName { get; set; }
        public string ConnectionString { get; set; }
        public string DatabaseName { get; set; }
    }

    public interface IBookstoreDatabaseSettings
    {
        string BooksCollectionName { get; set; }
        string ConnectionString { get; set; }
        string DatabaseName { get; set; }
    }
}
