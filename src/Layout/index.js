import Header from "./Header";
import Sidebar from "./Sidebar";
import MiniSidebar from "./MiniSidebar";
import Sidebar1 from "./Sidebar1";

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


    // Bez animacji
//
  //  <div className="flex h-screen w-screen">
    //  <div className={`${minisidebar ? 'w-3/12': 'w-2/12'} flex`}>
			//	<div className="base-bg flex-grow flex flex-col rounded">
        //  <Sidebar />
     //   </div>
       // <div className={`${!minisidebar && 'hidden'} secondary-bg w-6/12 flex flex-col gap-3 rounded p-3`}>
         // <MiniSidebar />
       // </div>
     // </div>
     // <div className={`flex-grow flex flex-col z-10`} >
     //   <Header />
     //   {children}
     // </div>
   // </div>

  );

  
}

function Layout1({ sidebar1=false,children }) {
  return (

    // Animacja wysuwania

     <div className="flex h-screen w-screen">
       <div className={`${sidebar1 ? 'w-3/12':'w-2/12'} custom-transition transition flex relative`}>
         <div className={`base-bg flex flex-col rounded z-30 absolute ${sidebar1 ? 'w-6/12':'w-full'} custom-transition h-full transition duration-500`}>
           <Sidebar />
         </div>
         <div className={`${sidebar1 ? 'translate-x-full duration-500': 'translate-x-0  duration-1000'} transition w-6/12 flex secondary-bg flex-col gap-3 rounded p-3 z-20`}>
           <Sidebar1 />
         </div>
       </div>
       <div className={`flex-grow flex flex-col z-10 custom-transition`} >
         <Header />
         {children}
       </div>
     </div>
  )
}

export default Layout;
