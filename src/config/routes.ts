import Home from "../pages/Home";
import Catalog from "../pages/Catalog";

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
        path: "/catalog",
        component: Catalog,
        name: "Catalog",
        protected: false
    }
]

export default routes;