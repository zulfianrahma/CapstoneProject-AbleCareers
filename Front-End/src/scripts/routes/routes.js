import Detail from '../views/pages/detail';
import Home from '../views/pages/home';
import ListJobs from '../views/pages/jobs';
import Profile from '../views/pages/profile';
import AboutUs from '../views/pages/about-us';
import Register from '../views/pages/register';
import Login from '../views/pages/login';

const routes = {
  '/': Home, // default page
  '/home': Home,
  '/jobs': ListJobs,
  '/jobs/:jobId': Detail,
  '/profile': Profile,
  '/about-us': AboutUs,
  '/register': Register,
  '/login': Login,
};

export default routes;
