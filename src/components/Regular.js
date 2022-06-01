import React from "react";
import Mem from "./Memmodal";
import { useSelector } from "react-redux";

export default function Regular() {
    const tablica = useSelector(store => Array.from(store));

    return (
        <div className="regular">
            {tablica.filter((e) => (e.upvotes - e.downvotes < 5) ).map((item) => {
                return <div key={item.title}><Mem title={item.title} img={item.img} up={item.upvotes} down={item.downvotes} /></div>;
            })}
        </div>
    );
}