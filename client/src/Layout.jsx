import { Outlet } from "react-router-dom";
import Header from "./Header";

export default function Layout() {
  return (
    <main>
      <Header /> {/* Always displayed */}
      <Outlet /> {/* Dynamically renders the child route */}
    </main>
  );
}
