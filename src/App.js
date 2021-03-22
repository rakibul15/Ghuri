import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Topnav from "./Components/Topnav/Topnav";
import { BrowserRouter as Router } from "react-router-dom";
import { Route, Switch } from "react-router-dom";
import Home from "./Components/Home/Home";
import Header from "./Components/Header/Header";
import "../node_modules/font-awesome/css/font-awesome.min.css";
import Notmatch from "./Components/Notmatch/Notmatch";
import MarchentLogIn from "./Components/MarchentLogIn/MarchentLogIn";
import Signup from "./Components/Signup/Signup";
import Footer from "./Components/Footer/Footer";
import Blog from "./Components/Blog/Blog";
import Count from "./Components/count/count";
import Platform from "./Components/platform/Platform";
import Parcel from "./Components/parcel/parcel";
import Food from "./Components/food/Food";
import Truck from "./Components/truck/Truck";
import Bazar from "./Components/bazar/Bazar";
import Ticket from "./Components/ticket/Ticket";
import Partners from "./Components/partners/Partners";
import Headline from "./Components/haedline/Headline";
import Gallery from "./Components/gallery/Gallery";


function App() {
  return (
    <div>
      <Router>
        <Topnav></Topnav>
        <Switch>
          <Route exact path="/">
          <Header></Header>
            <Count />
            <Parcel></Parcel>
          </Route>
          <Route path="/marchent">
            {/* <MarchentLogIn /> */}
            <Signup></Signup>
          </Route>

          {/* Home */}
          <Route path="/home">
            <Header></Header>
            <Count />
            <Parcel></Parcel>
          </Route>
          <Route path="/marchent">
            {/* <MarchentLogIn /> */}
            <Signup></Signup>
          
          </Route>

          {/* Parcel */}
          <Route path="/parcel">
            <Header></Header>
            <Count />
            <Parcel></Parcel>
          </Route>

          {/* Ride */}
          <Route path="/ride">
            <Header></Header>
            <Count />
            <Platform></Platform>
          </Route>

          {/* Food */}
          <Route path="/food">
            <Header></Header>
            <Count />
            <Food></Food>
          </Route>

          {/* Truck */}

          <Route path="/truck">
            <Header></Header>
            <Count />
            <Truck></Truck>
          </Route>

        {/* Bazar */}
          <Route path="/bazar">
            <Header></Header>
            <Count />
            <Bazar></Bazar>
          </Route>

         {/* Ticket */}
         <Route path="/ticket">
            <Header></Header>
            <Count />
            <Ticket></Ticket>
          </Route>

          {/* sign up */}
          <Route path="/signup">
            <Signup></Signup>
          </Route>
          <Route path="*">
            <Notmatch />
          </Route>
        </Switch>
        <Gallery></Gallery>
        <Headline></Headline>
        <Partners></Partners>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
