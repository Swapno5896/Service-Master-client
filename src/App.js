import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MainHome from "./Pages/MainHome/MainHome";
import MainAbout from "./Pages/MainAbout/MainAbout";
import MainShop from "./Pages/MainShop/MainShop";
import MainPortFolio from "./Pages/MainPortFolio/MainPortFolio";
import MainBlog from "./Pages/MainBlog/MainBlog.js";
import DetailBlog from "./components/Admin/DeletBlog/DeletBlog";
import MainAdmin from "./Pages/MainAdmin/MainAdmin";
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
