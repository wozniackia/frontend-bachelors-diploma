import PropTypes from "prop-types";
import Header from "./Header";
import Sidebar from "./Sidebar";
import MiniSidebar from "./MiniSidebar";

function Layout({ minisidebar=false,children }) {
  return (
    // Animacja wysuwania

     <div className="flex h-screen w-screen">
       <div className={`${minisidebar ? 'w-3/12':'w-2/12'} custom-transition transition flex relative`}>
         <div className={`base-bg flex flex-col rounded z-30 absolute ${minisidebar ? 'w-6/12':'w-full'} custom-transition h-full transition duration-500`}>
           <Sidebar />
         </div>
         <div className={`${minisidebar ? 'translate-x-full duration-500': 'translate-x-0  duration-1000'} transition w-6/12 flex secondary-bg flex-col gap-3 rounded p-3 z-20`}>
           <MiniSidebar />
         </div>
       </div>
       <div className={`flex-grow flex flex-col z-10 custom-transition`} >
         <Header />
         {children}
       </div>
     </div>
  );
}

Layout.propTypes = {
  minisidebar: PropTypes.bool.isRequired,
  children: PropTypes.object.isRequired,
};

export default Layout;
