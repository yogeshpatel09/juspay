// src/data/sidebarData.js
import { PiChartPieSlice } from "react-icons/pi";
import { MdOutlineShoppingCart, MdWork } from "react-icons/md";
import { RiBookOpenLine, RiUser3Line,RiFolder6Line } from "react-icons/ri";
import { PiShoppingBagOpen,PiIdentificationBadge,PiIdentificationCard,PiUsersThree,PiNotebook,PiChatsTeardropBold} from "react-icons/pi";
import { FaBookOpen } from "react-icons/fa";

const sidebarData = {
  favorites: [
    { title: "Overview", path: "/overview" },
    { title: "Projects", path: "/projects" },
  ],
  dashboards: [
    {
      title: "Default",
      icon: PiChartPieSlice,   // yaha string ki jagah direct component reference
      path: "/dashboard/default",
    },
    { title: "eCommerce", icon: PiShoppingBagOpen, path: "/dashboard/ecommerce" },
    { title: "Projects", icon: RiFolder6Line, path: "/dashboard/projects" },
    {
      title: "Online Courses",
      icon: FaBookOpen,
      path: "/dashboard/online-courses",
    },
  ],
  pages: [
    {
      title: "User Profile",
      icon: PiIdentificationBadge,
      path: "/profile",
      children: [
        { title: "Overview", path: "/profile/overview" },
        { title: "Projects", path: "/profile/projects" },
        { title: "Campaigns", path: "/profile/campaigns" },
        { title: "Documents", path: "/profile/documents" },
        { title: "Followers", path: "/profile/followers" },
      ],
    },
    { title: "Account", icon: PiIdentificationCard, path: "/account" },
    { title: "Corporate", icon: PiUsersThree, path: "/corporate" },
    { title: "Blog", icon: PiNotebook, path: "/blog" },
    { title: "Social", icon: PiChatsTeardropBold, path: "/social" },
  ],
};

export default sidebarData;
