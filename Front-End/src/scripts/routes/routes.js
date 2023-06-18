import Home from '../views/pages/home';
import AddJob from '../views/pages/add-job';
import AboutUs from '../views/pages/about-us';
import ListJobs from '../views/pages/list-jobs';
import SignIn from '../views/pages/sign-in';
import Detail from '../views/pages/detail';

/* <a href="/#/home">Home</a>
<a href="/#/addJob">Add Job</a>
<a href="/#/aboutUs">About Us</a>
<a href="/#/jobs">List Jobs</a>
<a href="/#/signIn">Sign In</a> */

const routes = {
  '/': Home, // default page
  '/home': Home,
  '/add-job': AddJob,
  '/about-us': AboutUs,
  '/list-jobs': ListJobs,
  '/sign-in': SignIn,
  '/jobs/:id': Detail,
};

export default routes;
