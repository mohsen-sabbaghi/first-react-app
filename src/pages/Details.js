import React from 'react';
import {Redirect, useParams} from 'react-router-dom';

export default function Details() {

    let {id, title} = useParams();
    if (id === "0") {
        return (
            <Redirect to="/"/>
        )
    }
    return (
        <div>
            <p>id: {id} title: {title}</p>
        </div>
    )
}