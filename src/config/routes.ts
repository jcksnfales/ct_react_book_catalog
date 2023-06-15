import Home from "../pages/Home";
import Catalogue from "../pages/Catalogue";

interface RouteType {
    path: string,
    component: () => JSX.Element,
    name: string,
    protected: boolean
}

const routes: RouteType[] = [
    {
        path: "/",
        component: Home,
        name: "Home",
        protected: false
    },
    {
        path: "/catalogue",
        component: Catalogue,
        name: "Catalogue",
        protected: false
    }
]

export default routes;