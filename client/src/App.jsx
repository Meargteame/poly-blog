import Post from "../Post";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Layout from "./Layout";
import './App.css';
import { Routes, Route } from "react-router-dom";
import IndexPage from "./pages/IndexPage";
import { UserContextProvider } from "./UserContext";
import CreatePost from "./pages/CreatePost";
import PostPage from "./pages/PostPage";

function App() {
  return (
  <UserContextProvider>
      <Routes>
      {/* Use Layout as the parent wrapper for these routes */}
      <Route path="/" element={<Layout />}>
        {/* Child routes */}
        <Route index element={<IndexPage />} /> {/* Default homepage */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/create" element={<CreatePost />} />
        <Route path="/post/:id" element={<PostPage/>}/>
      </Route>
    </Routes>
  </UserContextProvider>
  );
}

export default App;
