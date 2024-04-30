using Microsoft.AspNetCore.Authentication.OAuth;
using Microsoft.AspNetCore.Mvc;
using System.Security.Claims;
using System.Text;
using System.Runtime.InteropServices;
using ApiDB.Entities;
using System.IdentityModel.Tokens.Jwt;
using Microsoft.IdentityModel.Tokens;

namespace ApiDB.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class DBController : Controller
    {
        private readonly KcalPlannerDbContext _db;

        public DBController(KcalPlannerDbContext db)
        {
            _db = db;
        }

        //Выборка активности
        [HttpGet("GetActivity")]
        public IResult SelectActivity()
        {
            return Results.Json(_db.Activities.ToArray());
        }

        //Выборка веса (для графика)
        [HttpGet("GetWeight")]
        public IResult SelectWeights(int userID)
        {
            Weight[]? result = null;
            result = _db.Weights.Where(x => x.UserId == userID).ToArray();
            return Results.Json(result);
        }

        //Выборка продуктов (для таблицы)
        [HttpGet("GetProduct")]
        public IResult SelectUserProducts(int userID, DateOnly date)
        {
            UserProduct[]? result = null;
            result = _db.UserProducts.Where(x => x.UserId == userID && x.Date == date).ToArray();
            return Results.Json(result);
        }

        //Добавление цели
        [HttpPost("PostAim")]
        public IResult AddAim(Aim newAim)
        {
            Aim? aim = _db.Aims.FirstOrDefault(p => p.Name == newAim.Name);
            if (aim == null)
            {
                _db.Aims.Add(newAim);
                _db.SaveChanges();
                return Results.Json(newAim);
            }
            else
            {
                return Results.NotFound(new { message = "Цель уже существует" });
            }
        }

        //Удаление цели
        [HttpDelete("DelAim")]
        public IResult RemoveAim(Aim targetAim)
        {
            Aim? aim = _db.Aims.FirstOrDefault(p => p.Name == targetAim.Name);
            if (aim != null)
            {
                _db.Aims.Remove(aim);
                _db.SaveChanges();
                return Results.Json(aim);
            }
            else
            {
                return Results.NotFound(new { message = "Цель не существует" });
            }
        }

        //Редактирование цели
        [HttpPut("PutAim")]
        public IResult UpdateAim(Aim targetAim, string newName)
        {
            Aim? aim = _db.Aims.FirstOrDefault(p => p.Name == targetAim.Name);
            if (aim != null)
            {
                aim.Name = newName;
                _db.SaveChanges();
                return Results.Json(aim);
            }
            else
            {
                return Results.NotFound(new { message = "Цель не существует" });
            }
        }


        //Добавление активности
        [HttpPost("PostActivity")]
        public IResult AddActivity([FromQuery] Activity newAct)
        {
            Activity? act = _db.Activities.FirstOrDefault(p => p.Name == newAct.Name);
            if (act == null)
            {
                _db.Activities.Add(newAct);
                _db.SaveChanges();
                return Results.Json(newAct);
            }
            else
            {
                return Results.NotFound(new { message = "Цель уже существует" });
            }
        }

        //Удаление активности
        [HttpDelete("DelActivity")]
        public IResult RemoveAct(Activity targetAct)
        {
            Activity? act = _db.Activities.FirstOrDefault(p => p.Name == targetAct.Name);
            if (act != null)
            {
                _db.Activities.Remove(act);
                _db.SaveChanges();
                return Results.Json(act);
            }
            else
            {
                return Results.NotFound(new { message = "Активность не существует" });
            }
        }

        //Редактирование активности
        [HttpPut("PutActivity")]
        public IResult UpdateAсt(Activity targetAct, string newName)
        {
            Activity? act = _db.Activities.FirstOrDefault(p => p.Name == targetAct.Name);
            if (act != null)
            {
                act.Name = newName;
                _db.SaveChanges();
                return Results.Json(act);
            }
            else
            {
                return Results.NotFound(new { message = "Цель не существует" });
            }
        }

        //Добавление заявки
        [HttpPost("PostRequest")]
        public IResult AddRequest(Request newReq)
        {
            Request? req = _db.Requests.FirstOrDefault(p => p.Equals(newReq));
            if (req == null)
            {
                _db.Requests.Add(newReq);
                _db.SaveChanges();
                return Results.Json(newReq);
            }
            else
            {
                return Results.NotFound(new { message = "Такой запрос уже существует" });
            }
        }

        //Добавление продукта
        [HttpPost("PostProduct")]
        public IResult AddProduct(Product newProduct)
        {
            Product? product = _db.Products.FirstOrDefault(p => p.Name == newProduct.Name);
            if (product == null)
            {
                _db.Products.Add(newProduct);
                _db.SaveChanges();
                return Results.Json(newProduct);
            }
            else
            {
                return Results.NotFound(new { message = "Продукт с таким именем уже существует" });
            }
        }

        //Удаление продукта
        [HttpDelete("RemoveProduct")]
        public IResult RemoveProduct(Product product)
        {
            Product? target = _db.Products.FirstOrDefault(p => p.Name == product.Name);
            if (target != null)
            {
                _db.Products.Remove(product);
                _db.SaveChanges();
                return Results.Json(product);
            }
            else
            {
                return Results.NotFound(new { message = "Продукта не существует" });
            }
        }

        //Редактирование продукта
        [HttpPut("PutProduct")]
        public IResult PutProduct(Product target, string newName)
        {
            Product? product = _db.Products.FirstOrDefault(p => p.Name == target.Name);
            if (product != null)
            {
                product.Name = newName;
                _db.SaveChanges();
                return Results.Json(product);
            }
            else
            {
                return Results.NotFound(new { message = "Продукта не существует" });
            }
        }

        //Добавление юзера
        [HttpPost("PostUser")]
        public IResult AddUser([FromQuery] User newUser)
        {
            User? target = _db.Users.FirstOrDefault(p => p.Email == newUser.Email);
            if (target == null)
            {
                _db.Users.Add(newUser);
                _db.SaveChanges();
                return Results.Json(newUser);
            }
            else
            {
                return Results.NotFound(new { message = "Пользователь уже существует" });
            }
        }

        //Удаление юзера
        [HttpDelete("RemoveUser")]
        public IResult DeleteUser(User user)
        {
            User? target = _db.Users.FirstOrDefault(p => p.Email == user.Email && p.Password == user.Password);
            if (target != null)
            {
                _db.Users.Remove(target);
                _db.SaveChanges();
                return Results.Json(target);
            }
            else
            {
                return Results.NotFound(new { message = "Такого пользователя не существует" });
            }
        }

        //Редактирование юзера
        [HttpPut("PutUser")]
        public IResult PutUser(User[] users)
        {
            User? target = _db.Users.FirstOrDefault(p => p.Email == users[0].Email && p.Password == users[0].Password);
            if (target != null)
            {
                target = users[1];
                _db.SaveChanges();
                return Results.Json(users[1]);
            }
            else
            {
                return Results.NotFound(new { message = "Такого пользователя не существует" });
            }
        }

        //Добавление роли
        [HttpPost("PostRole")]
        public IResult AddRole(Role newRole)
        {
            Role? role = _db.Roles.FirstOrDefault(p => p.Name == newRole.Name);
            if (role == null)
            {
                _db.Roles.Add(newRole);
                _db.SaveChanges();
                return Results.Json(newRole);
            }
            else
            {
                return Results.NotFound(new { message = "Роль уже существует" });
            }
        }

        //Удаление роли
        [HttpDelete("DelRole")]
        public IResult RemoveRole(Role targetRole)
        {
            Role? role = _db.Roles.FirstOrDefault(p => p.Name == targetRole.Name);
            if (role != null)
            {
                _db.Roles.Remove(role);
                _db.SaveChanges();
                return Results.Json(role);
            }
            else
            {
                return Results.NotFound(new { message = "Роль не существует" });
            }
        }

        //Редактирование роли
        [HttpPut("PutRole")]
        public IResult UpdateRole(Aim targetRole, string newName)
        {
            Role? role = _db.Roles.FirstOrDefault(p => p.Name == targetRole.Name);
            if (role != null)
            {
                role.Name = newName;
                _db.SaveChanges();
                return Results.Json(role);
            }
            else
            {
                return Results.NotFound(new { message = "Роль не существует" });
            }
        }

        //Добавление веса
        [HttpPost("PostWeight")]
        public IResult AddWeight(int userID, double weight)
        {
            User? target = _db.Users.FirstOrDefault(p => p.Id == userID);
            if (target != null)
            {
                Weight newWeight = new Weight();
                newWeight.UserId = userID;
                newWeight.Weight1 = weight;
                newWeight.Date = DateOnly.FromDateTime(DateTime.Now);
                _db.Weights.Add(newWeight);
                _db.SaveChanges();
                return Results.Json(newWeight);
            }
            else
            {
                return Results.NotFound(new { message = "Такого пользователя не существует" });
            }
        }

        //Удаление веса
        [HttpDelete("DelWeight")]
        public IResult RemoveWeight(Weight weight)
        {
            Weight? target = _db.Weights.FirstOrDefault(p => p.Id == weight.Id);
            if (target != null)
            {
                _db.Weights.Remove(target);
                _db.SaveChanges();
                return Results.Json(target);
            }
            else
            {
                return Results.NotFound(new { message = "Такой записи с весом не существует" });
            }
        }

        //Добавление продукта пользователя
        [HttpPost("AddUserProduct")]
        public IResult AddUserProduct(int userID, Product product, int sum)
        {
            User? target = _db.Users.FirstOrDefault(p => p.Id == userID);
            if (target != null)
            {
                UserProduct userProduct = new UserProduct();
                userProduct.User = target;
                userProduct.Product = product;
                userProduct.Sum = sum;
                int k = sum / 100;
                userProduct.Kcal = product.Kcal * k;
                userProduct.Proteins = product.Proteins * k;
                userProduct.Fats = product.Fats * k;
                userProduct.Carbohydrates = product.Carbohydrates * k;
                userProduct.Date = DateOnly.FromDateTime(DateTime.Now);
                _db.UserProducts.Add(userProduct);
                _db.SaveChanges();
                return Results.Json(userProduct);
            }
            else
            {
                return Results.NotFound(new { message = "Пользователя не существует" });
            }
        }

        //Удаление продукта пользователя
        [HttpDelete("DelUserProduct")]
        public IResult RemoveUserProduct(UserProduct product)
        {
            User? target = _db.Users.FirstOrDefault(p => p.Id == product.UserId);
            if (target != null)
            {
                _db.UserProducts.Remove(product);
                _db.SaveChanges();
                return Results.Json(product);
            }
            else
            {
                return Results.NotFound(new { message = "Пользователя не существует" });
            }
        }

        //Проверка пользователя
        [HttpGet("CheckUser")]
        public IResult CheckUser([FromQuery] string login, string pass)
        {
            User? target = _db.Users.FirstOrDefault(p => p.Email == login && p.Password == pass); ;
            if (target != null)
            {
                var claims = new List<Claim>
                {
                    new Claim("Id", target.Id.ToString()),
                    new Claim("Email", target.Email),
                    new Claim("Nickname", target.Nickname),
                    new Claim("IdAim", target.IdAim.ToString()),
                    new Claim("InitWeight", target.InitWeight.ToString()),
                    new Claim("CurWeight", target.CurWeight.ToString()),
                    new Claim("AimWeight", target.AimWeight.ToString()),
                    new Claim("IdActivity", target.IdActivity.ToString()),
                    new Claim("KcalPerDay", target.KcalPerDay.ToString()),
                    new Claim("RoleId", target.RoleId.ToString()),
                    new Claim("GenderId", target.GenderId.ToString()),
                    new Claim("Height", target.Height.ToString()),
                    new Claim("Age", target.Age.ToString())
                };
                var jwt = new JwtSecurityToken(
                    claims: claims,
                    expires: DateTime.UtcNow.Add(TimeSpan.FromMinutes(30)));
                var AToken = new JwtSecurityTokenHandler().WriteToken(jwt);
                target.AToken = AToken;
                _db.SaveChanges();
                return Results.Ok(AToken);
            }
            else
            {
                return Results.NotFound("fack");
            }
        }

        //Поиск продуктов по названию
        [HttpGet("SearchProduct")]
        public IResult SearchProduct(string product)
        {
            Product[]? targets = _db.Products.Where(p => p.Name.Contains(product)).ToArray();
            if (targets != null)
            {
                return Results.Json(targets);
            }
            else
            {
                return Results.NotFound();
            }
        }

        //Поиск продуктов по названию (для админ панели)
        [HttpGet("SearchProductAdmin")]
        public IResult SearchProductAdmin(string product)
        {
            Product? target = _db.Products.FirstOrDefault(p => p.Name == product);
            if (target != null)
            {
                return Results.Json(target);
            }
            else
            {
                return Results.NotFound();
            }
        }

        //Поиск пользователя по почте (админ)
        [HttpGet("SearchUserAdmin")]
        public IResult SearchUserAdmin(string email)
        {
            User? target = _db.Users.FirstOrDefault(p => p.Email == email);
            if (target != null)
            {
                var claims = new List<Claim>
                {
                    new Claim("Id", target.Id.ToString()),
                    new Claim("Email", target.Email),
                    new Claim("Nickname", target.Nickname),
                    new Claim("RoleId", target.RoleId.ToString())
                };
                var jwt = new JwtSecurityToken(
                    claims: claims,
                    expires: DateTime.UtcNow.Add(TimeSpan.FromMinutes(30))
                );
                var AToken = new JwtSecurityTokenHandler().WriteToken(jwt);
                return Results.Ok(AToken);
            }
            else
            {
                return Results.NotFound();
            }
        }

        //Получение заявки (админ)
        [HttpGet("GetRequest")]
        public IResult GetRequest()
        {
            Request? target = _db.Requests.FirstOrDefault(p => p.Status == false);
            if (target != null)
            {
                return Results.Json(target);
            }
            else
            {
                return Results.NotFound();
            }
        }
    }
}

public class AuthOptions
{
    public const string ISSUER = "MyAuthServer"; // издатель токена
    public const string AUDIENCE = "MyAuthClient"; // потребитель токена
    const string KEY = "mysupersecret_secretsecretsecretkey!123";   // ключ для шифрации
    public static SymmetricSecurityKey GetSymmetricSecurityKey() =>
        new SymmetricSecurityKey(Encoding.UTF8.GetBytes(KEY));
}
