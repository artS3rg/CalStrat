using System;
using System.Collections.Generic;

namespace WebAPI.Entities;

public partial class Aim
{
    public int Id { get; set; }

    public string Name { get; set; } = null!;

    public virtual ICollection<User> Users { get; set; } = new List<User>();
}
