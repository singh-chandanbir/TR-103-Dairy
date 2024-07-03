import React from "react";
import { Link, Outlet } from "react-router-dom";

const Layout = () => {
  const days = Array.from({ length: 2 }, (_, i) => i + 1);

  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
        {/* Page content here */}

        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden"
        >
          Open drawer
        </label>

        <div className="py-12">
          <Outlet />
        </div>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-2"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
          {/* Sidebar content here */}
          <li>
            <Link to="/">Home</Link>
          </li>
          {days.map((day) => (
            <li key={day}>
              <Link to={`day${day}`}>Day {day}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Layout;
