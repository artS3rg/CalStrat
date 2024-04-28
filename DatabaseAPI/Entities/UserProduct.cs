using System;
using System.Collections.Generic;
using DatabaseAPI.Entities;

namespace DatabaseAPI;

public partial class UserProduct
{
    public int Id { get; set; }

    public int UserId { get; set; }

    public int ProductId { get; set; }

    public DateOnly Date { get; set; }

    public int Sum { get; set; }

    public int Kcal { get; set; }

    public int Proteins { get; set; }

    public int Fats { get; set; }

    public int Carbohydrates { get; set; }

    public virtual Product Product { get; set; } = null!;

    public virtual User User { get; set; } = null!;
}
