import { Link } from "react-router-dom";
import SidebarLink from "../Components/Layout/Sidebar/SidebarLink";

function Sidebar() {
  return (
    <>
      <Link to="/">
        <div className="text-4xl font-semibold basis-[80px] flex justify-center items-center">
          <span className="text-gray-950">Kids</span>
          <span className="text-white">App</span>
        </div>
      </Link>
      <div className="flex flex-col gap-3 flex-grow mx-auto items-start justify-start pt-20">
        <SidebarLink to="/summary" imgSrc="/images/calendar.png" text="Dzisiaj" />
        <SidebarLink to="/messages" imgSrc="/images/message.png" text="Komunikacja" />
        <SidebarLink to="/personnel" imgSrc="/images/person.png" text="Kadra" />
        <SidebarLink to="/gallery" imgSrc="/images/gallery.png" text="Galeria" />
        <SidebarLink to="/kids" imgSrc="/images/home.png" text="Placówka" />
      </div>
    </>
  );
}
export default Sidebar;
