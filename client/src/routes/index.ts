import Dashboard from '../pages/Dashboard/Dashboard';
import Profile from '../pages/Profile';
import AboutUS from '../pages/about/AboutUs';
import SchoolPage from '../pages/schools/School';
import Users from '../pages/users/Users';
const coreRoutes = [
  {
    path: '/dashboard',
    title: 'Dashboard',
    component: Dashboard,
  },
  {
    path: 'school',
    title: 'SchoolPage',
    component: SchoolPage,
  },
 
  {
    path: '/profile',
    title: 'Profile',
    component: Profile,
  },
  {
    path: '/about-us',
    title: 'about-us',
    component: AboutUS,
  },
  
{
  path:'users',
  title:'all-users',
  component:Users
}
  
];

const routes = [...coreRoutes];
export default routes;
