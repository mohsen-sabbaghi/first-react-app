import React, {useState} from 'react';
import Product from "./Product";

export default function Content() {

    const imgUrl = "https://dkstatics-public.digikala.com/digikala-products/121134106.jpg?x-oss-process=image/resize,h_1600/quality,q_80/watermark,image_ZGstdy8xLnBuZw==,t_90,g_nw,x_15,y_15"
    const [data, setData] = useState(
        [
            {id: 1, title: "react JS", imageUrl: imgUrl},
            {id: 2, title: "react Native", imageUrl: imgUrl},
            {id: 3, title: "ASP.net", imageUrl: imgUrl},
            {id: 4, title: "Java", imageUrl: imgUrl}
        ]
    )

    const loadMore = () => {

    }
    const sortData = () => {

    }

    return (
        <>
            <button onClick={() => loadMore()}> Load More...</button>
            <button onClick={() => sortData()}> Sort</button>
            <div style={{display: "flex", flexWrap: "wrap", flexDirection: "row"}}>
                {data.map((item, index) => {
                    return (
                        <Product item={item} key={index}/>
                    )
                })}
            </div>
        </>
    )
}