using System;
using System.Collections.Generic;

namespace personalweb.Models
{
    public partial class ContactU
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Email { get; set; }
        public string Phone { get; set; }
        public string City { get; set; }
        public string Country { get; set; }
        public string Description { get; set; }
    }
}
