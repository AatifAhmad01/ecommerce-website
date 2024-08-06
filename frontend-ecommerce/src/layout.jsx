import React, {useEffect} from "react";
import { HeadingContent } from "./components/headingContent/headingContent";
import Footer from "./components/footer/footer";
import { Outlet, useLocation } from "react-router-dom";

export default function Layout()
{
    const location = useLocation();

    useEffect(() => {
      window.scrollTo(0,0);
    }, [location])

    return<>
    <HeadingContent/>
    <Outlet/>
    <Footer/>
    </>
}