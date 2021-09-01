import React from "react";
import "./App.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";

// // product
import Product from "./Pages/Product";
import ProductDetail from "./Pages/ProductDetail";
import MSFlat from "./Pages/MSFlat";
import MSRound from "./Pages/MSRound";
import MSSquare from "./Pages/MSSquare";
import SalShakti from "./Pages/SalShakti";
import Tmtbar from "./Pages/Tmtbar";
import AngleChannel from "./Pages/AngleChannel";

// // Main Pages
import Dealers from "./Pages/Dealers";
import Blog from "./Pages/Blog";
import Media from "./Pages/Media";
import Contact from "./Pages/Contact";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

// // Blog Pages
import PEB from "./Pages/PEB";
import PowerPlant from "./Pages/PowerPlant";
import Shed from "./Pages/Shed";
import Rail from "./Pages/Rail";
import Building from "./Pages/Building";

// // information Pages
import Carriers from "./Pages/Carriers";
import Privacy from "./Pages/Privacy";
import TermsAndCondition from "./Pages/TermsAndCondition";

function App() {
  return (
    <div className="App">
      {/*  */}

      <Router>
        <Navbar />

        <Switch>
          {/* Rail */}
          <Route path="/Rail" component={Rail}>
            <Rail />
          </Route>

          {/* PEB */}
          <Route path="/PEB" component={PEB}>
            <PEB />
          </Route>

          {/* Building */}
          <Route path="/Building" component={Building}>
            <Building />
          </Route>

          {/* Shed */}
          <Route path="/Shed" component={Shed}>
            <Shed />
          </Route>

          {/* PowerPlant */}
          <Route path="/PowerPlant" component={PowerPlant}>
            <PowerPlant />
          </Route>

          {/* Carriers */}
          <Route path="/Carriers" component={Carriers}>
            <Carriers />
          </Route>

          {/* TermsAndCondition */}
          <Route path="/TermsAndCondition" component={TermsAndCondition}>
            <TermsAndCondition />
          </Route>

          {/* Privacy */}
          <Route path="/Privacy" component={Privacy}>
            <Privacy />
          </Route>

          {/* Media */}
          <Route path="/Media" component={Media}>
            <Media />
          </Route>

          {/* Tmtbar */}
          <Route path="/Tmtbar" component={Tmtbar}>
            <Tmtbar />
          </Route>

          {/* MSSquare */}
          <Route path="/MSSquare" component={MSSquare}>
            <MSSquare />
          </Route>

          {/* MSRound */}
          <Route path="/MSRound" component={MSRound}>
            <MSRound />
          </Route>

          {/* SalShakti */}
          <Route path="/SalShakti" component={SalShakti}>
            <SalShakti />
          </Route>

          {/* MSFlat */}
          <Route path="/MSFlat" component={MSFlat}>
            <MSFlat />
          </Route>

          {/* Angle Channel */}
          <Route path="/AngleChannel" component={AngleChannel}>
            <AngleChannel />
          </Route>

          {/* Contact */}
          <Route path="/Contact" component={Contact}>
            <Contact />
          </Route>

          {/* Blog */}
          <Route path="/Blog" component={Blog}>
            <Blog />
          </Route>

          {/* Dealer */}
          <Route path="/Dealers" component={Dealers}>
            <Dealers />
          </Route>

          {/* Product */}
          <Route path="/Product" component={Product}>
            <Product />
          </Route>

          {/* ProductDetail */}
          <Route path="/ProductDetail" component={ProductDetail}>
            <ProductDetail />
          </Route>

          {/* About */}
          <Route path="/About" component={About}>
            <About />
          </Route>

          {/* Home */}
          <Route path="/" component={Home}>
            <Home />
          </Route>
        </Switch>
        {/* Footer */}
        <Footer />
      </Router>

      {/* floating whatsapp button */}
      <div className="WhatsappFixed wrap">
        <div class="inner_wrap">
          <a
            className="SafeAreaView animate"
            href="https://wa.me/919988013139?text=hi"
            target="__blank"
          >
            <i class="bx bxl-whatsapp" />
            <span>Say hi !!</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
