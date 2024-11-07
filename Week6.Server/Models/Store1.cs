using System;
using System.Collections.Generic;

namespace Week6.Server.Models;

public partial class Store1
{
    public int StoreId { get; set; }

    public string Name { get; set; } = null!;

    public string Location { get; set; } = null!;
}
