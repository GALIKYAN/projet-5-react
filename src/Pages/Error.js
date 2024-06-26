import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";


function Error() {
  return (
    <div>
      <Header />
      <div className="errorContainer">
        <h1>404</h1>
        <p>Oups! La page que vous demandez n'existe pas.</p>
        <a href="/">Retourner sur la page d'acceuil</a>
      </div>
      <Footer />
    </div>
  );
}

export default Error;
