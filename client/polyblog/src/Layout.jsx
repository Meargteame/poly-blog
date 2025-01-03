import { Outlet } from "react-router-dom";
import Header from './Header'; // Ensure Header is imported

export default function Layout() {
  return (
    <main>
      <Header />
      <Outlet />
    </main>
  );
}
