import { FaBell, FaUserPlus } from "react-icons/fa"; // example icons
import active1 from "../assets/users/active1.png";
import active2 from "../assets/users/active2.png";
import active3 from "../assets/users/active3.png";
import active4 from "../assets/users/active4.png";
import active5 from "../assets/users/active5.png";
import Natali from "../assets/users/Natali.png";
import Drew from "../assets/users/Drew.png";
import Orlando from "../assets/users/Orlando.png";
import Andi from "../assets/users/Andi.png";
import Kate from "../assets/users/Kate.png";
import Koray from "../assets/users/Koray.png";
export const AsideData = {
  notifications: [
    {
      icon: <FaBell className="text-blue-500" />,
      title: "You have a bug that needs to be fixed.",
      time: "2m ago",
    },
    {
      icon: <FaUserPlus className="text-green-500" />,
      title: "New user registered",
      time: "5m ago",
    },
    {
      icon: <FaBell className="text-red-500" />,
      title: "You have a bug that needs to be fixed.",
      time: "12m ago",
    },
    {
      icon: <FaUserPlus className="text-purple-500" />,
      title: "Andi Lane subscribed to you",
      time: "25m ago",
    },
  ],

  activities: [
    { title: "You have a bug that needs to be fixed.", time: "10m ago",image: active1 },
    { title: "Released a new version", time: "30m ago",image: active2 },
    { title: "Submitted a bug", time: "1h ago",image: active3 },
    { title: "Modified A data in Page X", time: "2h ago",image: active4 },
    { title: "Deleted a page in Project X", time: "3h ago",image: active5 },
  ],

  contacts: [
    { image: Natali, title: "Natali Craig" },
    { image: Drew, title: "Drew Cano" },
    { image: Orlando, title: "Orlando Diggs" },
    { image: Andi, title: "Andi Lane" },
    { image: Kate, title: "Kate Morrison" },
    { image: Koray, title: "Koray Okumus" },
  ],
};
