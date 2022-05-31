import React from "react";
import Mem from "./Memmodal";
import { useDispatch, useSelector } from "react-redux";


export default function Hot() {
    const tablica = useSelector(store => Array.from(store));
    const dispatch = useDispatch();

    // console.log( tablica.forEach((e)=> console.log(e.upvotes)));
    // console.log(tablica.filter((e) => (e.title == "Mem 1") || (e.title == "Mem 2")))
    // console.log(tablica.find((e) => (e.title == "Mem 1") ))

    return (
        <div className="hot">
            {tablica.map((item) => {
                return <div key={item.title}><Mem title={item.title} img={item.img} up={item.upvotes} down={item.downvotes} /></div>;
            })}
        </div>
    );
}
