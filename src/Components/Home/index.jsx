import React from "react";
import "./Main.css";
import { Layout } from "../Layout";

function Home() {
  return (
    <Layout>
      <div className="main-container">
        <div className="text-container-box text-left">
          <h1 className="animated fadeIn">
            Ask the TierraBot to help you find the best racket to improve your game!
          </h1>
          <p className="animated fadeIn">
            Not happy with your string? No prob, the TierraBot knows a lot about that too ;)
          </p>
        </div>

      </div>
    </Layout>
  );
}

export { Home };
