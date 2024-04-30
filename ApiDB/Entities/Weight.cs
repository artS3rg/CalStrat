using System;
using System.Collections.Generic;

namespace ApiDB;

public partial class Weight
{
    public int Id { get; set; }

    public int UserId { get; set; }

    public double Weight1 { get; set; }

    public DateOnly Date { get; set; }

    public virtual User User { get; set; } = null!;
}
