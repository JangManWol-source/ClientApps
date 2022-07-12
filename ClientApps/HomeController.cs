using Microsoft.AspNetCore.Mvc;

namespace ClientApps
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
