
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Topnav from "./Components/Topnav/Topnav";
import { BrowserRouter as Router } from "react-router-dom";
import { Route, Switch } from "react-router-dom";

import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";


import Header from "./Components/Header/Header";
import "../node_modules/font-awesome/css/font-awesome.min.css";
import Notmatch from "./Components/Notmatch/Notmatch";

import Signup from "./Components/Signup/Signup";
import SmsVerification from "./Components/Signup/SmsVerification";
import Footer from "./Components/Footer/Footer";

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
import Clients from "./Components/clients/Clients";
import Health from "./Components/health/Health";
import Terms from "./Components/terms/Terms";
import Silver from "./Components/health/views/SilverContainer";
import Bronze from "./Components/health/views/BronzeContainer";
import Gold from "./Components/health/views/GoldContainer";
import Healthform from "./Components/health/Healthform";
import Privacy from "./Components/privacy/Privacy";
import Refund from "./Components/refund/Refund";
import "../src/css/main.css"





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
            <Gallery></Gallery>
            <Headline></Headline>
            <Partners></Partners>
            <Clients></Clients>
          </Route>

          {/* Home */}
          <Route path="/home">
            <Header></Header>
            <Count />
            <Parcel></Parcel>
            <Gallery></Gallery>
            <Headline></Headline>
            <Partners></Partners>
            <Clients></Clients>
          </Route>
          <Route path="/merchnat">
          
            <Signup></Signup>
          </Route>

          {/* <Sms Verifiaction /> */}
          <Route path="/verification">
            <SmsVerification></SmsVerification>
          </Route>

          {/* Parcel */}
          <Route path="/parcel">
            <Header></Header>
            <Count />
            <Parcel></Parcel>
            <Gallery></Gallery>
            <Headline></Headline>
            <Partners></Partners>
            <Clients></Clients>
          </Route>

          {/* Ride */}
          <Route path="/ride">
            <Header></Header>
            <Count />
            <Platform></Platform>
            <Gallery></Gallery>
            <Headline></Headline>
            <Partners></Partners>
            <Clients></Clients>
          </Route>

          {/* Food */}
          <Route path="/food">
            <Header></Header>
            <Count />
            <Food></Food>
            <Gallery></Gallery>
            <Headline></Headline>
            <Partners></Partners>
            <Clients></Clients>
          </Route>

          {/* Truck */}

          <Route path="/truck">
            <Header></Header>
            <Count />
            <Truck></Truck>
            <Gallery></Gallery>
            <Headline></Headline>
            <Partners></Partners>
            <Clients></Clients>
          </Route>
          

          {/* Bazar */}
          <Route path="/bazar">
            <Header></Header>
            <Count />
            <Bazar></Bazar>
            <Gallery></Gallery>
            <Headline></Headline>
            <Partners></Partners>
            <Clients></Clients>
          </Route>

          {/* Ticket */}
          <Route path="/ticket">
            <Header></Header>
            <Count />
            <Ticket></Ticket>
            <Gallery></Gallery>
            <Headline></Headline>
            <Partners></Partners>
            <Clients></Clients>
          </Route>

          {/* sign up */}
          <Route path="/signup">
            <Signup></Signup>
          </Route>

          <Route path="/terms">
           <Terms></Terms>
          </Route>

          <Route path="/privacy">
           <Privacy></Privacy>
          </Route>

          <Route path="/refund">
           <Refund></Refund>
          </Route>

          {/* <Route path="/health">
            <Health></Health>
          </Route> */}
         
          {/* <Route path="/silver">
         <Silver></Silver>
        </Route> */}
        {/* <Route path="/bronze">
        <Bronze></Bronze>
        </Route> */}
        {/* <Route path="/gold">
        <Gold></Gold>
        </Route> */}
        {/* <Route path="/healthform">
        <Healthform></Healthform>
        </Route> */}
          <Route path="*">
            <Notmatch />
          </Route>
        </Switch>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
