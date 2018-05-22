using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace UserLogin.Models
{
    public partial class Modul
    {
        public string ACIKLAMA { get; set; }
        public DateTime CREATEDATE { get; set; }
        public int CREATEUSER { get; set; }
        public bool DURUM { get; set; }
        public string FIRMAKOD { get; set; }
        [Key]
        public int ID { get; set; }
        public string MODULKOD { get; set; }
        public string MODULPATH { get; set; }
        public DateTime UPDATEDATE { get; set; }
        public int UPDATEUSER { get; set; }
    }
}
