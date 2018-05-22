using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace UserLogin.Models
{
    public partial class User
    {
        [Key]
        public int USERID { get; set; }
        public string USERNAME { get; set; }
        public string EMAIL { get; set; }
        public string PASSWORD { get; set; }
    }
}
