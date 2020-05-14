import React from "react";
import "./Main.scss";
import { Switch, Route } from "react-router-dom";
import Home from "../../pages/Home/Home";
import NotFound from "../../pages/NotFound/NotFound";

const Main: React.FC = () => {
  return (
    <>
      <section className="Main">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route component={NotFound} />
        </Switch>
        <footer></footer>
      </section>
    </>
  );
};

export default Main;
