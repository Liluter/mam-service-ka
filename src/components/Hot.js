import React from "react";
import Mem from "./Memmodal";
import { useSelector } from "react-redux";

export default function Hot() {
    const tablica = useSelector(store => store);

    return (
        <div className="hot">
            {tablica.filter((e) => (e.upvotes - e.downvotes >= 5) ).map((item) => {
                return <div key={item.title}><Mem title={item.title} img={item.img} up={item.upvotes} down={item.downvotes} /></div>;
            })}
        </div>
    );
}
