import React from 'react';
import Content from "../components/Content";
import Helmet from "react-helmet";

export default function Main() {
    return (
        <div className="main">
            <Helmet>
                <title> Main page </title>
                <meta name="description" content="this is my main page description"/>
            </Helmet>
            <Content/>
        </div>
    )
}