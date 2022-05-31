import { BrowserRouter, Route, Routes} from "react-router-dom"; 

import Navigation from "./components/Navigation";
import Main from "./components/Main";
import Hot from "./components/Hot";
import Regular from "./components/Regular";


function App() {
  
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
