
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Layout from "./Layout";

import Insert from "./component/Insert";
import Display from "./component/Display";

import Search from "./component/Search";

const App=()=>{
    return(
        <>
        <BrowserRouter>
        <Routes>
        <Route path="/" element={< Layout/>}>
        <Route path="Insert" element={<Insert/>}/>
        <Route path="Insert" element={<Insert/>}/>
       
        <Route path="Display" element={<Display/>}/>
      
        <Route path="Search" element={<Search/>}/>
      
            </Route>
        </Routes>
        </BrowserRouter>
        
        </>
    );
}
export default App;