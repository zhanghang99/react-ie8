import App from "./App"
import Home from "./route/Home/Home"
import About from "./route/About/About"
import Welcome from "./route/Welcome/Welcome"
import ToDo from "./route/ToDo/ToDo"

const routes = [
    {
        path: "/",
        component: App,
        indexRoute: {
            component: Home
        },
        childRoutes: [
            {
                path: "home",
                component: Home,
                childRoutes:[
                    {
                        path:"about",
                        component:About
                    },
                    {
                        path:"welcome",
                        component:Welcome
                    },
                    {
                        path:"todo",
                        component:ToDo
                    }
                ]
            }
        ]
    }
];

export default routes;