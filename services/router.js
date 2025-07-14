import { $, $$ } from "../helpers.js";
const Router = {
    init: () => {
        $$("a.navlink").forEach((a) => {
            a.addEventListener("click", (e) => {
                e.preventDefault();
                const url = a.getAttribute("href")
                Router.go(url);
            })
        })
        // Check the initial url
        Router.go(location.pathname);
        
    },
    go: (route, addToHistory = true) => {
        if (addToHistory) {
            history.pushState({route}, "", route)
        }

        let pageElement = null;
        switch (route) {
            case "/": {
                pageElement = document.createElement("h1");
                pageElement.textContent = "Menu";
                break;
            }
            case "/order": {
                pageElement = document.createElement("h1");
                pageElement.textContent = "Your Order";
                break;
            }
            default: {
                if (route.startsWith("/product/")) {
                    pageElement = document.createElement("h1")
                pageElement.textContent = "Details";
                    const paramId = route.substring(route.lastIndexOf("-"));
                }
            }
        }

        const main = $("main");
        main.innerHTML = "";
        main.appendChild(pageElement);
        window.scrollX = 0;
        window.scrollY = 0;
    }
}
export default Router
