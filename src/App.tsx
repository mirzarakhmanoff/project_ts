import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import SingleProductPage from "./pages/singlePage/SinglePage";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<SingleProductPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
