import Store from "./services/store.js";
import Router from "./services/router.js";
import { loadData } from "./services/menu.js";

window.app = {};
app.store = Store;
app.router = Router;

// use as our intialiser
window.addEventListener("DOMContentLoaded", async () => {
    loadData();
    app.router.init();
})

window.addEventListener("popstate", event => {
    let url = location.url
})
