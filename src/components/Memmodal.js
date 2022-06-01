import React from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Mem({title, img, up, down }) {
    const tablica = useSelector(store => store) ;
    const dispatch = useDispatch();
    const current = tablica.find((e) => (e.title === title) )

    const clickUpvote = (e) => {
        dispatch({type:"UPVOTE", payload: title});
        // setUpvote(upvote + 1);
    };
    const clickDownvote = (e) => {
        dispatch({type:"DOWNVOTE", payload: title});
        // setDownvote(downvote + 1);
    };

    return (
        <div className="mem" title={title}>
            <div className="title">{title}</div>
            <img src={img} alt=''/>
            <footer>
                <button className="upvote" onClick={clickUpvote}>
                    {current.upvotes}
                </button>
                <button className="downvote" onClick={clickDownvote}>
                    {current.downvotes}
                </button>
            </footer>
        </div>
    );
}
