import { Route, Routes } from "react-router-dom";
import Pages from "./routers";

const PageRoutes = ()=> {
    const routes = Pages.map(item=> {
        if(item.nestedRoute){
            const nestedRoutes = item.nestedRoute.map(nestedItem=> (
                <Route path={nestedItem.path} Component={nestedItem.component} />
            ))
            return <Route path={item.path} Component={item.component}>{nestedRoutes}</Route>
        }
        else{
            return <Route path={item.path} Component={item.component} />
        }
    })

    return <Routes>{routes}</Routes>
}

export default PageRoutes