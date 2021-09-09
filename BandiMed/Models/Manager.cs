using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BandiMed.Models
{
    public class Manager
    {
        public Guid ID { get; set; }
        public string Nume { get; set; }
        public int Experienta { get; set; }
        public string Email { get; set; }
        public int Telefon { get; set; }
    }
}
