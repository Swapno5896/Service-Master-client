import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MainHome from "../src/components/Home/MainHome/MainHome";
import MainAbout from "./components/AboutUs/MainAbout/MainAbout";
import MainShop from "./components/Shop/MainShop/MainShop";
import MainPortFolio from "./components/PortFolio/MainPortFolio/MainPortFolio";
import MainBlog from "../src/components/Blogs/MainBlog/MainBlog.js";
import DetailBlog from "./components/Blogs/DetailBlog/DetailBlog.tsx";
import MainAdmin from "./components/Admin/MainAdmin/MainAdmin";
import NavBar from "./Shered/NavBar/NavBar";
import Footer from "./Shered/Footer/Footer";
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
          <Route path="/about">
            <MainAbout />
          </Route>
          <Route path="/shop">
            <MainShop />
          </Route>
          <Route path="/shop/:id">
            <DetailProduct />
          </Route>
          <Route path="/portfolio">
            <MainPortFolio />
          </Route>

          <Route path="/blog">
            <MainBlog />
          </Route>
          <Route path="/blog/:id">
            <DetailBlog />
          </Route>
          <Route path="/admin">
            <MainAdmin />
          </Route>
        </Switch>

      </Router>
      <Footer></Footer>
    </div>
  );
};

export default App;
