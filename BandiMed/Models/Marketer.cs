using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BandiMed.Models
{
    public class Marketer
    {
        public Guid ID { get; set; }
        public string Nume { get; set; }
        public string Skills { get; set; }
        public string Email { get; set; }
        public int Telefon { get; set; }
    }
}
