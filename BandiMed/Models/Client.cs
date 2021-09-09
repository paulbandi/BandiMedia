using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BandiMed.Models
{
    public class Client
    {
        public Guid ID { get; set; }
        public string Nume { get; set; }
        public string Prenume { get; set; }
        public string Locatia { get; set; }
        public string Email { get; set; }
        public int Telefon { get; set; }
    }
}
