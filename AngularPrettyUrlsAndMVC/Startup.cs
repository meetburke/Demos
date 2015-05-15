using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(AngularPrettyUrlsAndMVC.Startup))]
namespace AngularPrettyUrlsAndMVC
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
