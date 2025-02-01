import {BrowserRouter, Routes, Route } from "react-router-dom"

// import Home pages
import { Home } from './pages/Home';

const Hej = () => {
  return <div>Home</div>
};

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hej" element={<Hej />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App
