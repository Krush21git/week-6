using System;
using System.Collections.Generic;

namespace Week6.Server.Models;

public partial class CustomerSaleView
{
    public int Id { get; set; }

    public string? FirstName { get; set; }

    public string? LastName { get; set; }

    public string FullName { get; set; } = null!;

    public DateTime? DateSold { get; set; }
}
