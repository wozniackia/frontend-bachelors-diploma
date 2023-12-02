import { Link } from "react-router-dom";
import SidebarLink from "../../Components/Layout/Sidebar/SidebarLink";

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
        <SidebarLink to="/parent/summary" imgSrc="/images/calendar.png" text="Dzisiaj" />
        <SidebarLink to="/parent/messages" imgSrc="/images/message.png" text="Komunikacja" />
        <SidebarLink to="/parent/gallery" imgSrc="/images/gallery.png" text="Galeria" />
      </div>
    </>
  );
}
export default Sidebar;
