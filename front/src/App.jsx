import React from "react";
import { Helmet } from "react-helmet";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { TinyButton as ScrollUpButton } from "react-scroll-up-button";
import Home from "./components/views/Home/Home";
import Product from "./components/views/Product/Product";
import Header from "./components/commons/Header/Header";
import Footer from "./components/commons/Footer/Footer";
import Cart from "./components/views/Cart/Cart";
import Page404 from "./components/views/Page404/Page404";

function App() {
  return (
    <Router>
      <Helmet>
        <title>Magic Pills</title>
        <meta
          name="description"
          content="C'est un site fictif pour acheter des pillules permettant de devenir un super-héros pendant un bref moment."
        />
      </Helmet>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/produits" component={Home} />
        <Route exact path="/produits/:categorie" component={Home} />
        <Route path="/produit/:power" component={Product} />
        <Route path="/panier" component={Cart} />
        <Route path="/:all" component={Page404} />
      </Switch>
      <Footer />
      <ScrollUpButton
        style={{
          backgroundColor: "none",
          width: "35px",
          height: "35px",
          transform: "translateY(-1.75rem) translateX(1.3rem)",
          borderRadius: "5px",
          boxShadow: "#FF0000 3px 3px 5px",
        }}
      />
    </Router>
  );
}

export default App;
