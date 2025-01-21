import Post from "../Post";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Layout from "./Layout";
import './App.css';
import { Routes, Route } from "react-router-dom";
import IndexPage from "./pages/IndexPage";

function App() {
  return (
    <Routes>
      {/* Use Layout as the parent wrapper for these routes */}
      <Route path="/" element={<Layout />}>
        {/* Child routes */}
        <Route index element={<IndexPage />} /> {/* Default homepage */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Route>
    </Routes>
  );
}

export default App;
