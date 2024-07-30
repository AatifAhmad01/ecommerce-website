import React from "react";
import { HeadingContent } from "./components/headingContent/headingContent";
import Footer from "./components/footer/footer";
import { Outlet } from "react-router-dom";

export default function Layout()
{
    return<>
    <HeadingContent/>
    <Outlet/>
    <Footer/>
    </>
}