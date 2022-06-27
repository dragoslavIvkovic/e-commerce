import React, { useState, useEffect } from "react";
import "../css/App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Database } from "./Context";

import Header from "./Header";
import PageProduct from "./PageProduct";
import ProdListShop from "./ProdListShop";
import Footer from "./Footer";
import Page404 from "./Page404";

const App = () => {
  const [data, setData] = useState([]);
  const getData = () => {
    fetch("https://api.npoint.io/682d515b040aa484f726", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then(function (response) {
        //console.log(response);
        return response.json();
      })
      .then(function (myJson) {
        //console.log(myJson);
        setData(myJson);
      });
  };
  useEffect(() => {
    getData();
  }, []);

  const prodList = data;

  return (
    <Database.Provider value={prodList}>
      <Router>
        <Header />
        <main className="products">
          <Routes>
            <Route
              exact
              path="/"
              element={<ProdListShop type={"Shop List"} />}
            />

            <Route exact path="/men" element={<ProdListShop type={"Men"} />} />
            <Route
              exact
              path="/women"
              element={<ProdListShop type={"Women"} />}
            />
            <Route
              exact
              path="/kids"
              element={<ProdListShop type={"Kids"} />}
            />
            <Route exact path="/search/:search" element={<ProdListShop />} />
            <Route exact path="/size/:size" element={<ProdListShop />} />
            <Route exact path="/color/:color" element={<ProdListShop />} />

            <Route path="/product/:slug" element={<PageProduct />} />
            <Route path="*" element={<Page404 />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </Database.Provider>
  );
};

export default App;
