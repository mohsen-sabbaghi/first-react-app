import React from 'react';

export default function HasChildren({children}){
    return(
        <div>
            some Text before Children...
            {children}
        </div>
    )
}