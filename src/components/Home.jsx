
import * as React from 'react';
import TabsComponent from "./Tabs";
import {Outlet, useLocation} from "react-router-dom";

const Home = () => {
    const location = useLocation();
    return (
        <section>
            <TabsComponent/>
            <section className="routes-container">
                {location.pathname === "/" && <h1>Demo for Preload and prefetch techniques</h1>}
                <Outlet/>
            </section>
        </section>

    )
};

export default Home;
