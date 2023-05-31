import Home from "./pages/home/Home";
import HomeLogin from "./pages/home-login/HomeLogin";
import Login from "./pages/login/Login";
import Profile from "./pages/profile/Profile";
import Register from "./pages/register/Register";
import Explore from "./pages/explore/Explore";
import Notes from "./components/Notes/Notes"
import ProfileNotFound from "./pages/profile-notfound/ProfileNotFound";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";
import Navbar from "./components/Navbar/Navbar";
import NavbarLogin from "./components/NavbarLogin/NavbarLogin";
import Carousel from "./components/Carousel/Carousel";
import Footer from "./components/Footer/Footer";
import Course_1 from './components/Courses/Course_1/Course_1';
import Course_2 from './components/Courses/Course_2/Course_2';
import Course_3 from './components/Courses/Course_3/Course_3';
import Course_4 from './components/Courses/Course_4/Course_4';
import Course_5 from './components/Courses/Course_5/Course_5';
import Course_6 from './components/Courses/Course_6/Course_6';
import C1 from './components/Courses_Data/c1/c1';
import C2 from './components/Courses_Data/c2/c2';
import C3 from './components/Courses_Data/c3/c3';
import C4 from './components/Courses_Data/c4/c4';
import C5 from './components/Courses_Data/c5/c5';
import C6 from './components/Courses_Data/c6/c6';
import BlogPage from './components/BlogPage/BlogPage'
import Offers from "./components/Offers/Offers";
import AboutUs from "./components/About/About";
import FAQ from "./components/FAQs/FAQs";
import Development from "./components/Development/Development";


function App() {
  const { user } = useContext(AuthContext);
  return (
    <Router>
      <Switch>
        
        <Route exact path="/">
        <Navbar/>
        <Carousel/>
        
        <Home/>
          {/* {user ? <Home /> : <Register />} */}
        <Footer/>
        </Route>
        <Route path="/notes">  <NavbarLogin/><Notes /><Footer/> </Route>
        <Route path="/c1">  <NavbarLogin/><C1 /><Footer/> </Route>
        <Route path="/c2">  <NavbarLogin/><C2 /><Footer/> </Route>
        <Route path="/c3">  <NavbarLogin/><C3 /><Footer/> </Route>
        <Route path="/c4">  <NavbarLogin/><C4 /><Footer/> </Route>
        <Route path="/c5">  <NavbarLogin/><C5 /><Footer/> </Route>
        <Route path="/c6">  <NavbarLogin/><C6 /><Footer/> </Route>
        <Route path="/home">{user ? <HomeLogin /> : <Register />}</Route>
        <Route path="/explore">{user ? <Explore /> : <Register />}</Route>
        <Route path="/login">{user ? <Redirect to="/home" /> : <Login />}</Route>
        <Route path="/register">
          {user ? <Redirect to="/" /> : <Register />}
        </Route>
        <Route path="/course1">
        { user ? <Course_1 /> : <Register /> }
        </Route>
        <Route path="/course2">
        { user ? <Course_2 /> : <Register /> }
        </Route>
        <Route path="/course3">
        { user ? <Course_3 /> : <Register /> }
        </Route>
        <Route path="/course4">
        { user ? <Course_4 /> : <Register /> }
        </Route>
        <Route path="/course5">
        { user ? <Course_5 /> : <Register /> }
        </Route>
        <Route path="/course6">
        { user ? <Course_6 /> : <Register /> }
        </Route>
        <Route path="/profile/:username">
          <Profile />
        </Route>
        <Route path="/notfound">
          <ProfileNotFound />
        </Route>
         <Route path="/blogs">
          <BlogPage />
        </Route>

        <Route path="/offers">
          <Offers />
        </Route>

        <Route path="/about">
          <AboutUs />
        </Route>

        <Route path="/faq">
          <FAQ />
        </Route>

        <Route path="/development">
          <Development />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
