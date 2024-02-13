import { AccountController } from "./controllers/AccountController.js";
import { HomeController } from "./controllers/HomeController.js";
import { AuthGuard } from "./services/AuthService.js";
import { Router } from "./utils/Router.js";


export const router = new Router([
  {
    path: '',
    controllers: [],
    view: /*html*/`
    <div class="container">
      <section class="row">
        <div class="col-12">
          <h1 class="m-3">Welcome to Gregslist</h1>
        </div>
      </section>
    </div>
    `
  },
  {
    path: '#/cars',
    view: 'app/views/CarsView.html'
  },
  {
    path: '#/account',
    middleware: [AuthGuard],
    controllers: [AccountController],
    view: 'app/views/AccountView.html',
  }
])




