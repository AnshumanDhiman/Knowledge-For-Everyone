import Home from "./pages/home/Home";
import HomeLogin from "./pages/home-login/HomeLogin";
import Login from "./pages/login/Login";
import Profile from "./pages/profile/Profile";
import Register from "./pages/register/Register";
import Explore from "./pages/explore/Explore";
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
import Carousel from "./components/Carousel/Carousel";
import Footer from "./components/Footer/Footer";


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
        <Route path="/home">{user ? <HomeLogin /> : <Register />}</Route>
        <Route path="/explore">{user ? <Explore /> : <Register />}</Route>
        <Route path="/login">{user ? <Redirect to="/home" /> : <Login />}</Route>
        <Route path="/register">
          {user ? <Redirect to="/" /> : <Register />}
        </Route>
        <Route path="/profile/:username">
          <Profile />
        </Route>
        <Route path="/notfound">
          <ProfileNotFound />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
