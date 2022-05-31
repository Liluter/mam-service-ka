const initialState = [
    {
        title: "Mem 1",
        upvotes: 6,
        downvotes: 1,
        img: "../images/macgyver.png",
    },
    {
        title: "Mem 2",
        upvotes: 2,
        downvotes: 1,
        img: "../images/morfeusz.png",
    },
];

export const memReducer = (state = initialState, action ) => {
    switch (action.type) {
        case "UPVOTES": {
            return {
                state,
                 
            }
        }
    }
}