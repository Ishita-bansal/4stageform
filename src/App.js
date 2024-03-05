import { BrowserRouter , Routes , Route} from "react-router-dom";
import Page1 from "./Component/page1";
import Page2 from "./Component/page2";
import Page3 from "./Component/page3";

function App() {
  return (  
    <>
  <BrowserRouter>
      <Routes>
        <Route path="/" element={<Page1 />}></Route>
        <Route path="/page2" element={<Page2 />}></Route>
        <Route path="/page3" element={<Page3 />}></Route>
      </Routes>
  </BrowserRouter>
    </>
  );
}

export default App;
