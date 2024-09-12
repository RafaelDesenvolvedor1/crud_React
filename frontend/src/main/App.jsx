import React from "react";
import Logo from "../components/template/Logo";
import Nav from "../components/template/Nav";

import Footer from "../components/template/Footer";
import 'font-awesome/css/font-awesome.min.css'

import { BrowserRouter } from "react-router-dom";
import Routes from "./Routes";

export default props =>
    <BrowserRouter>
        <div className="m-0 grid lg:grid-cols-appCol lg:grid-rows-appRow h-screen bg-[#f5f5f5] lg:grid-areas-appLayout

        md:grid-cols-tabletAppCol
        md:grid-rows-tabletAppRow
        md:grid-areas-tabletAppLayout

        grid-cols-phoneAppCol
        grid-rows-phoneAppRow
        grid-areas-phoneAppLayout



        ">
            <Logo />
            <Nav />
            <Routes />
            <Footer />
        </div>
    </BrowserRouter>
