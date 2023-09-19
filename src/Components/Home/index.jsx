import React from "react";
import "./Main.css";
import { Layout } from "../Layout";

function Home() {
  return (
    <Layout>
      <section className="main-container">
        <div className="text-container-box">
          <h1 className="animated fadeIn">
            Keep track of your racket customization!
          </h1>
          <p className="animated fadeIn">
            Check your racket string and tension
          </p>
        </div>
      </section>
    </Layout>
  );
}

export { Home };
