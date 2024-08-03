
import { Routes,Route} from "react-router-dom";

import Header from "./Components/Header";
import Home from "./Pages/Home"

import Country from "./Pages/Country";
import Error from "./Components/Error";


function App() {
  return (
    <div>
      <Header />
      <Routes>
<Route path="/" element={<Home/>} />
<Route path="/: id" element={<Country/>} />
<Route path="*" element={<Error/>} />
      </Routes>
    </div>
  );
  
  
  
 
}

export default App;
