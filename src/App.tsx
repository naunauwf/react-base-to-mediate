import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Detail from "./components/Detail";
import NotFound from "./pages/NotFound";
// import Counter from "./components/Counter";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      {/* <Counter /> */}
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/detail/:id" element={<Detail />} />
          {/* 404 */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
