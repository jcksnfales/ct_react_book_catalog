import Home from "../pages/Home";

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
    }
]

export default routes;