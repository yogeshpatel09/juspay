
import { PiChartPieSlice } from "react-icons/pi";
import { MdOutlineShoppingCart, MdWork } from "react-icons/md";
import { RiBookOpenLine, RiUser3Line,RiFolder6Line } from "react-icons/ri";
import { PiShoppingBagOpen,PiIdentificationBadge,PiIdentificationCard,PiUsersThree,PiNotebook,PiChatsTeardropBold} from "react-icons/pi";
import { FaBookOpen } from "react-icons/fa";

const sidebarData = {
  favorites: [
    { title: "Overview", path: "/" },
    { title: "Projects", path: "/" },
  ],
  dashboards: [
    {
      title: "Default",
      icon: PiChartPieSlice,
      path: "/dashboard/default",
    },
    { title: "eCommerce", icon: PiShoppingBagOpen, path: "/dashboard/ecommerce" },
    { title: "Projects", icon: RiFolder6Line, path: "/dashboard/project" },
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
        { title: "Projects", path: "/profile/project" },
        { title: "Campaigns", path: "/profile/campaigns" },
        { title: "Documents", path: "/profile/documents" },
        { title: "Followers", path: "/profile/followers" },
      ],
    },
    { title: "Account", icon: PiIdentificationCard, path: "/page/account" },
    { title: "Corporate", icon: PiUsersThree, path: "/page/corporate" },
    { title: "Blog", icon: PiNotebook, path: "/page/blog" },
    { title: "Social", icon: PiChatsTeardropBold, path: "/page/social" },
  ],
};

export default sidebarData;
