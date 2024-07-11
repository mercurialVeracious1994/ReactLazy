import {AppBar, Tab, Tabs} from "@mui/material";
import {Link,useLocation} from "react-router-dom";
import {LazyRouteForArticles} from "../utility/lazyRoutes";

const TabsComponent = () => {
    const routes = ["/books", "/Products","/articles"];
    const location = useLocation();
    const handleTabChange = (e)=>{
        const href= e.target.getAttribute('href');
        if(href === "/articles"){
            LazyRouteForArticles.preload();
        }
;    }
    return (
        <AppBar>
            <Tabs
                value={
                    location.pathname !== "/"
                        ? location.pathname
                        : false
                }
                onMouseEnter={handleTabChange}
            >
                <Tab
                    value={routes[0]}
                    label="Books"
                    component={Link}
                    to={routes[0]}
                />
                <Tab
                    value={routes[1]}
                    label="Products"
                    component={Link}
                    to={routes[1]}
                />
                <Tab
                    value={routes[2]}
                    label="Articles"
                    component={Link}
                    to={routes[2]}
                />
            </Tabs>
        </AppBar>
    )
}
export default TabsComponent;