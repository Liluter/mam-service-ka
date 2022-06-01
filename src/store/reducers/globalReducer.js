import logo from '../../images/macgyver.png'
import logo2 from '../../images/morfeusz.png'
import alice from '../../images/alice.webp'
import backdev from '../../images/backdev.webp'
import fullstack from '../../images/fullstack.webp'
import child from '../../images/child.webp'
import chuck from '../../images/chuck.jpg'
import covid from '../../images/covid.jpg'
import cssjs from '../../images/css-js.webp'
import dad from '../../images/dad.webp'
import frontend from '../../images/frontend.webp'
import goals from '../../images/goals.jpg'
import guns from '../../images/guns.jpg'
import internet from '../../images/internet.jpg'
import language from '../../images/language.webp'
import learn from '../../images/learn.webp'
import medic from '../../images/medic.gif'
import memstime from '../../images/memstime.jpg'
import newyear from '../../images/newyear.jpg'
import node from '../../images/node.webp'
import paczka from '../../images/paczka.jpg'
import poke from '../../images/poke.webp'
import studia from '../../images/studia.jpg'
import variable from '../../images/variable.webp'
import wash from '../../images/wash.webp'
import wyklad from '../../images/wyklad.jpg'
import znak from '../../images/znak.jpg'
import zyrafa from '../../images/zyrafa.jpg'

// tworzymy reducer
const initialState = [
    {
        title: "Macgyver",
        upvotes: 0,
        downvotes: 0,
        img: logo,
    },
    {
        title: "Morfeusz",
        upvotes: 0,
        downvotes: 0,
        img: logo2,
    },
    {
        title: "Alice",
        upvotes: 0,
        downvotes: 0,
        img: alice,
    },
    {
        title: "BackDev",
        upvotes: 0,
        downvotes: 0,
        img: backdev,
    },
    {
        title: "Fullstack",
        upvotes: 0,
        downvotes: 0,
        img: fullstack,
    },
    {
        title: "Child",
        upvotes: 0,
        downvotes: 0,
        img: child,
    },
    {
        title: "Chuck",
        upvotes: 0,
        downvotes: 0,
        img: chuck,
    },
    {
        title: "Covid",
        upvotes: 0,
        downvotes: 0,
        img: covid,
    },
    {
        title: "Css-Js",
        upvotes: 0,
        downvotes: 0,
        img: cssjs,
    },
    {
        title: "Dad",
        upvotes: 0,
        downvotes: 0,
        img: dad,
    },
    {
        title: "Frontend",
        upvotes: 0,
        downvotes: 0,
        img: frontend,
    },
    {
        title: "Goals",
        upvotes: 0,
        downvotes: 0,
        img: goals,
    },
    {
        title: "Guns",
        upvotes: 0,
        downvotes: 0,
        img: guns,
    },
    {
        title: "Internet",
        upvotes: 0,
        downvotes: 0,
        img: internet,
    },
    {
        title: "Language",
        upvotes: 0,
        downvotes: 0,
        img: language,
    },
    {
        title: "Learn",
        upvotes: 0,
        downvotes: 0,
        img: learn,
    },
    {
        title: "Medic",
        upvotes: 0,
        downvotes: 0,
        img: medic,
    },
    {
        title: "Memstime",
        upvotes: 0,
        downvotes: 0,
        img: memstime,
    },
    {
        title: "NewYear",
        upvotes: 0,
        downvotes: 0,
        img: newyear,
    },
    {
        title: "Node",
        upvotes: 0,
        downvotes: 0,
        img: node,
    },
    {
        title: "Paczka",
        upvotes: 0,
        downvotes: 0,
        img: paczka,
    },
    {
        title: "Poke",
        upvotes: 0,
        downvotes: 0,
        img: poke,
    },
    {
        title: "Studia",
        upvotes: 0,
        downvotes: 0,
        img: studia,
    },
    {
        title: "Variable",
        upvotes: 0,
        downvotes: 0,
        img: variable,
    },
    {
        title: "Wash",
        upvotes: 0,
        downvotes: 0,
        img: wash,
    },
    {
        title: "Wykład",
        upvotes: 0,
        downvotes: 0,
        img: wyklad,
    },
    {
        title: "Znak",
        upvotes: 0,
        downvotes: 0,
        img: znak,
    },
    {
        title: "Żyrafa",
        upvotes: 0,
        downvotes: 0,
        img: zyrafa,
    },
];

export const memReducer = (state = initialState, action) => {
    // state.tablica.filter((e) => (e.title == "Mem 1") || (e.title == "Mem 2"));
    // console.log(state.filter((e) => (e.title == action.payload )));

    switch (action.type) {
        case "UPVOTE": {
            return state.map((e) => {
                if (e.title === action.payload) {
                    e.upvotes = e.upvotes + 1 ;
                };
                return e;
            });
        }
        case "DOWNVOTE": {
            return state.map((e) => {
                if (e.title === action.payload) {
                    e.downvotes = e.downvotes + 1 ;
                };
                return e;
            });
        }
        default:
            return state ;
    }
}

// const ADD_TODO = 'ADD_TODO'
// const TODO_TOGGLED = 'TODO_TOGGLED'

// export const addTodo = text => ({
//   type: ADD_TODO,
//   payload: { text, id: nanoid() }
// })

// export const todoToggled = id => ({
//   type: TODO_TOGGLED,
//   payload: id
// })

// export const todosReducer = (state = [], action) => {
//   switch (action.type) {
//     case ADD_TODO:
//       return state.concat({
//         id: action.payload.id,
//         text: action.payload.text,
//         completed: false
//       })
//     case TODO_TOGGLED:
//       return state.map(todo => {
//         if (todo.id !== action.payload.id) return todo

//         return {
//           ...todo,
//           completed: !todo.completed
//         }
//       })
//     default:
//       return state
//   }
// }