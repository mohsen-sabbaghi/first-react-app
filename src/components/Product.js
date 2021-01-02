import React, {memo} from 'react';
import {useHistory} from 'react-router-dom';

function Product({item}) {
    let history = useHistory()
    return (
        <div onClick={() => {
            console.log(`/details/${item.id}/${item.title.replaceAll(" ","_")}`)
            history.push('/details/' + item.id + "/" + item.title.replaceAll(" ","_"))
        }} style={{width: 200, height: 300, margin: 15, border: "1px solid black"}}>
            <img src={item.imageUrl} alt="#" style={{width: "100%"}}/>
            <br/>
            <span>{item.title}</span>
            <button>delete item</button>
        </div>
    )
}

export default memo(Product)