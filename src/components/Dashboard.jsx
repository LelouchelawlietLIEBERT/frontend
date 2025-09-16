import { useState } from "react";
import { HiMenuAlt3, HiOutlineX } from "react-icons/hi";
import Verifications from "./dash/Verifications";
import Alerts from "./dash/Alerts";
import Reports from "./dash/Reports";
import {
  MdDashboard,
  MdVerified,
  MdNotifications,
  MdLogout,
  MdAnalytics,
} from "react-icons/md";
import { BsSun, BsMoon } from "react-icons/bs";

const menus = [
  { name: "Dashboard", icon: MdDashboard ,content:"Dashboard"},
  { name: "Verifications", icon: MdVerified ,content:<Verifications/> },
  { name: "Alerts", icon: MdNotifications,content:<Alerts/> },
  {name:"Reports",icon:MdAnalytics,content:<Reports/>},
];

export default function Sidebar() {
  const [open, setOpen] = useState(true);
  const [activeMenu, setActiveMenu] = useState("Dashboard");
  const [darkMode, setDarkMode] = useState(false);
  const [content, setContent] = useState("Dashboard");

  return (
    <div
      className={`${
        darkMode ? "dark" : ""
      } flex min-h-screen bg-white dark:bg-gray-200`}
    >
      {/* Sidebar */}
      <div
        className={`bg-white dark:bg-white h-screen ${
          open ? "w-64" : "w-16"
        } transition-all duration-300 shadow-lg flex flex-col`}
      >
        <div className="flex items-center justify-between p-4">
          {open && (
            <h1 className="text-xl font-semibold dark:text-white">Menu</h1>
          )}
          <button
            onClick={() => setOpen(!open)}
            className="p-1.5 rounded-lg bg-gray-100 dark:bg-gray-300"
          >
            {open ? <HiOutlineX size={20} /> : <HiMenuAlt3 size={20} />}
          </button>
        </div>
        <ul className="mt-4 flex-1 px-2 space-y-2">
          {menus.map((menu, idx) => (
            <li key={idx}>
              <button
                onClick={() => {
                  setActiveMenu(menu.name);
                  setContent(menu.content);}}
                className={`flex items-center gap-4 p-2 w-full rounded-lg hover:bg-gray-100 dark:hover:bg-gray-300 transition-colors
                  ${
                    activeMenu === menu.name
                      ? "bg-gray-100 dark:bg-gray-300"
                      : ""
                  }`}
              >
                <menu.icon size={24} />
                {open && <span>{menu.name}</span>}
              </button>
            </li>
          ))}
        </ul>

        {/* Bottom buttons */}
        <div className="p-4 border-t dark:border-gray-300 flex flex-col gap-2">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="flex items-center gap-4 p-2 rounded-lg w-full hover:bg-gray-100 dark:hover:bg-gray-300 transition-colors"
          >
            {darkMode ? <BsSun size={24} /> : <BsMoon size={24} />}
            {open && <span>{darkMode ? "Light Mode" : "Dark Mode"}</span>}
          </button>
          <button className="flex items-center gap-4 p-2 rounded-lg w-full hover:bg-gray-100 dark:hover:bg-gray-300 text-red-500">
            <MdLogout size={24} />
            {open && <span>Logout</span>}
          </button>
        </div>
      </div>

      {/* Main content */}
      <div className="flex-1 p-6">
        <h1 className="text-3xl font-bold text-gray-900">{content}</h1>
      </div>
    </div>
  );
}
