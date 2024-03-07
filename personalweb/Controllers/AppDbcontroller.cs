using log4net;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;

//using NLog.Fluent;
using personalweb.applicationDBContext;
using personalweb.Models;
using Serilog;
using System.Reflection;
using System.Xml.Linq;

namespace personalweb.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AppDbcontroller : ControllerBase
    {

        public static readonly ILog log = LogManager.GetLogger(MethodBase.GetCurrentMethod().DeclaringType);
        public readonly ApplicationDBContext _Db;

 
        public AppDbcontroller(ApplicationDBContext db)
        {
            _Db = db;
          
         
        }

        [HttpPost]
        public async Task<IActionResult> AddUpdateMenu(ContactU vm)
        {
            try
            {
                using (var db = _Db)
                {
                    ContactU entity;
                    if (vm.Id > 0)
                    {
                        entity = db.ContactUs.Find(vm.Id);
                        if (entity == null)
                            return BadRequest("No record found to update.");

                        entity.Name = vm.Name;
                        entity.Email = vm.Email;
                        entity.Description = vm.Description;
                        entity.Country = vm.Country;
                        entity.City = vm.City;
                        entity.Phone = vm.Phone;



                        db.ContactUs.Update(entity);
                        _ = await db.SaveChangesAsync();
                        return Ok();
                    }



                    else

                    {
                        entity = new ContactU();

                        entity.Name = vm.Name;
                        entity.Email = vm.Email;
                        entity.Description = vm.Description;
                        entity.Country = vm.Country;
                        entity.City = vm.City;
                        entity.Phone = vm.Phone; ;

                        db.ContactUs.Add(entity);
                        _ = await db.SaveChangesAsync();
                        return Ok(entity.Id);
                    }
                }
            }


            catch (Exception ex)
            {
                //Log.Error(ex);
                return BadRequest(ex.Message);
            }
        }




    }
}
