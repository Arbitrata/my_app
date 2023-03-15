import Home from "./components/pages/Home";
import Navbar from "./components/common/Navbar";
import Footer from "./components/common/Footer";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <Routes>
        <Route path="/my_app" element={<Home />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
