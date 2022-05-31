import React, { useState } from "react";


export default function Mem({title, img, up, down }) {
    const [upvote, setUpvote] = useState(up);
    const [downvote, setDownvote] = useState(down);

    const clickUpvote = () => {
        setUpvote(upvote + 1);
    };
    const clickDownvote = () => {
        setDownvote(downvote + 1);
    };

    return (
        <div className="mem">
            <div className="title">{title}</div>
            <img src={img} alt=''/>
            <footer>
                <button className="upvote" onClick={clickUpvote}>
                    {upvote}
                </button>
                <button className="downvote" onClick={clickDownvote}>
                    {downvote}
                </button>
            </footer>
        </div>
    );
}
