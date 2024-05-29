// import React, { useEffect, useRef, useState } from 'react';
// import { NavLink, useLocation, useNavigate } from 'react-router-dom';
// import DASHBOARD_ICON from '../../assets/images/sidebar-icons/Dashboard.png';
// import BLOGS_ICON from '../../assets/images/sidebar-icons/school.png';
// import Cookies from 'js-cookie';
// import {
//   AFFLIATE,
//   BULK_EMAIL,
//   CREATE_ADS,
//   LIVE_SESSION,
//   NEWSLETTER,
// } from '../../assets';

// interface MenuItem {
//   path: string;
//   icon: string;
//   label: string;
// }

// const menuItems: MenuItem[] = [
//   { path: '/dashboard', icon: DASHBOARD_ICON, label: 'Dashboard' },
//   { path: '/school', icon: BLOGS_ICON, label: 'School' },
//   { path: '/newsLetters', icon: NEWSLETTER, label: 'Newsletter' },
//   { path: '/live-session', icon: LIVE_SESSION, label: 'Live Session' },
//   { path: '/affliate', icon: AFFLIATE, label: 'Affiliate' },
//   { path: '/create-ads', icon: CREATE_ADS, label: 'Create Ads' },
//   { path: '/bulk-email', icon: BULK_EMAIL, label: 'Bulk Email' },
//   // Add other menu items here if needed
// ];
// interface SidebarProps {
//   sidebarOpen: boolean;
//   setSidebarOpen: (arg: boolean) => void;
// }

// function Sidemenu({ sidebarOpen, setSidebarOpen }: SidebarProps) {
//   const location = useLocation();
//   const { pathname } = location;
//   const trigger = useRef<any>(null);
//   const sidebar = useRef<any>(null);
//   const navigate = useNavigate();
//   const storedSidebarExpanded = localStorage.getItem('sidebar-expanded');
//   const [sidebarExpanded] = useState(
//     storedSidebarExpanded === null ? false : storedSidebarExpanded === 'true'
//   );

//   // close on click outside
//   useEffect(() => {
//     const clickHandler = ({ target }: MouseEvent) => {
//       if (!sidebar.current || !trigger.current) return;
//       if (
//         !sidebarOpen ||
//         sidebar.current.contains(target) ||
//         trigger.current.contains(target)
//       )
//         return;
//       setSidebarOpen(false);
//     };
//     document.addEventListener('click', clickHandler);
//     return () => document.removeEventListener('click', clickHandler);
//   }, [sidebarOpen]);

//   // close if the esc key is pressed
//   useEffect(() => {
//     const keyHandler = ({ keyCode }: KeyboardEvent) => {
//       if (!sidebarOpen || keyCode !== 27) return;
//       setSidebarOpen(false);
//     };
//     document.addEventListener('keydown', keyHandler);
//     return () => document.removeEventListener('keydown', keyHandler);
//   }, [sidebarOpen]);

//   useEffect(() => {
//     localStorage.setItem('sidebar-expanded', sidebarExpanded.toString());
//     if (sidebarExpanded) {
//       document.querySelector('body')?.classList.add('sidebar-expanded');
//     } else {
//       document.querySelector('body')?.classList.remove('sidebar-expanded');
//     }
//   }, [sidebarExpanded]);

//   const handleLogout = () => {
//     Cookies.remove('auth_token');
//     navigate('/');
//   };

//   return (
//     <div
//       ref={sidebar}
//       className={`w-52.5 h-[100%] border-r border-stroke shadow-md bg-white flex flex-col justify-between p-4 ${
//         sidebarOpen ? 'translate-x-0' : '-translate-x-full absolute left-0'
//       }`}
//     >
//       <div className="no-scrollbar flex flex-col overflow-y-auto duration-300 ease-linear">
//         <nav>
//           <div>
//             <ul className="flex flex-col items-center gap-4">
//               {menuItems.map((item) => (
//                 <li key={item.path}>
//                   {item.path === '/dashboard' || item.path === '/school' || item.path==='/newsLetters' ? (
//                     <NavLink
//                       to={item.path}
//                       className={`group relative flex items-center justify-center bg-[#F6F6F9] w-20 h-16 rounded-xl font-medium text-black duration-300 ease-in-out ${
//                         pathname.includes(item.path) &&
//                         ' border-primary border-2 bg-[#FFF3F0]'
//                       }`}
//                     >
//                       <img src={item.icon} alt="" />
//                     </NavLink>
//                   ) : (
//                     <div className="group relative flex items-center justify-center bg-[#F6F6F9] w-20 h-16 rounded-xl font-medium text-black duration-300 ease-in-out cursor-not-allowed">
//                       <img src={item.icon} alt="" />
//                     </div>
//                   )}
//                   <div
//                     className={`group relative flex items-center justify-center gap-2.5 text-lg rounded-sm duration-300 ease-in-out ${
//                       pathname.includes(item.path) && 'text-primary'
//                     }`}
//                   >
//                     <b className="text-sm">{item.label}</b>
//                   </div>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </nav>
//       </div>
//       <div className="flex items-center justify-center">
//         <button
//           className="inline-flex items-center justify-center gap-2.5 py-2 px-10 rounded-md bg-[#FE5512] text-center font-bold text-white hover:bg-opacity-90"
//           onClick={handleLogout}
//         >
//           <span>Logout</span>
//         </button>
//       </div>
//     </div>
//   );
// }

// export default Sidemenu;
