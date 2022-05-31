import React from "react";
import Mem from "./Memmodal";
import logo from '../images/macgyver.png'
import logo2 from '../images/morfeusz.png'

const tablicaMemow = [
    {
        title: "Mem 1",
        upvotes: 6,
        downvotes: 1,
        img: logo,
    },
    {
        title: "Mem 2",
        upvotes: 2,
        downvotes: 1,
        img: logo2,
    },
];

export default function Hot() {
    return (
        <div className="hot">
            {tablicaMemow.map((item) => {
                return <div key={item}><Mem title={item.title} img={item.img} up={item.upvotes} down={item.downvotes} /></div>;
            })}
        </div>
    );
}
