import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MainHome from "../src/components/Home/MainHome/MainHome";
import MainAbout from "./components/AboutUs/MainAbout/MainAbout";
import MainShop from "./components/Shop/MainShop/MainShop";
import MainPortFolio from "./components/PortFolio/MainPortFolio/MainPortFolio";
import MainBlog from "../src/components/Blogs/MainBlog/MainBlog.js";
import DetailBlog from "./components/Blogs/DetailBlog/DetailBlog.tsx";
import MainAdmin from "./components/Admin/MainAdmin/MainAdmin";
import NavBar from "./components/Home/NavBar/NavBar";
import Footer from "../src/components/Home/Footer/Footer";
import DetailProduct from "./components/Shop/DetailProduct/DetailProduct";
const App = () => {
  return (
    <div>
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/">
            <MainHome></MainHome>
          </Route>
          <Route exact path="/about">
            <MainAbout />
          </Route>
          <Route exact path="/shop">
            <MainShop />
          </Route>
          <Route exact path="/shop/:id">
            <DetailProduct />
          </Route>
          <Route exact path="/portfolio">
            <MainPortFolio />
          </Route>

          <Route exact path="/blog">
            <MainBlog />
          </Route>
          <Route exact path="/blog/:id">
            <DetailBlog />
          </Route>
          <Route exact path="/admin">
            <MainAdmin />
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>

    </div>
  );
};

export default App;
