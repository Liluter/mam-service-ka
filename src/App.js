import { BrowserRouter, Route, Routes} from "react-router-dom"; 

import Navigation from "./components/Navigation";
import Main from "./components/Main";
import Hot from "./components/Hot";
import Regular from "./components/Regular";
import { useState } from "react";


const tablicaMemow = [
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


function App() {
  const [tablica, setTablica] = useState(tablicaMemow);
  return (
    <>
    <BrowserRouter>
    <div className="container">
          <Navigation/>
          <Routes>
            <Route exact path="/" element={<Main />} />
            <Route path="/hot" element={<Hot />} />
            <Route path="/regular" element={<Regular />} />
          </Routes>
    </div>
    </BrowserRouter>
    </>
  );
}

export default App;
