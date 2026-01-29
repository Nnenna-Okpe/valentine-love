import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./component/Home.jsx";
import Vals from "./component/vals.jsx";
import Vals2 from "./component/vals2.jsx";
import Vals3 from "./component/vals3.jsx";
import Vals4 from "./component/vals4.jsx";
import Vals5 from "./component/vals5.jsx";
import Vals6 from "./component/vals6.jsx";
import Vals7 from "./component/vals7.jsx";
import Vals8 from "./component/vals8.jsx";
import Vals9 from "./component/vals9.jsx";
import Vals10 from "./component/vals10.jsx";
import Vals11 from "./component/vals11.jsx";
import Vals12 from "./component/vals12.jsx";
import Footer from "./component/footer.jsx";

function App() {
  return (
    <div className="App">
      {/* <Vals /> */}
      {/* <Vals2 /> */}
      {/* <Vals3 /> */}
      {/* <Vals4 /> */}
      {/* <Vals5 /> */}
      {/* <Vals6 /> */}
      {/* <Vals7 /> */}
      {/* <Vals8 /> */}
      {/* <Vals9 /> */}
      {/* <Vals10 /> */}
      {/* <Vals11 /> */}

      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/vals1" element={<Vals />} />
          <Route path="/vals2" element={<Vals2 />} />
          <Route path="/vals3" element={<Vals3 />} />
          <Route path="/vals4" element={<Vals4 />} />
          <Route path="/vals5" element={<Vals5 />} />
          <Route path="/vals6" element={<Vals6 />} />
          <Route path="/vals7" element={<Vals7 />} />
          <Route path="/vals8" element={<Vals8 />} />
          <Route path="/vals9" element={<Vals9 />} />
          <Route path="/vals10" element={<Vals10 />} />
          <Route path="/vals11" element={<Vals11 />} />
          <Route path="/vals12" element={<Vals12 />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
