import React from "react";
import { Route, Switch } from "react-router-dom";

import User from "./components/user";

const Routes = () => {
  return (
    <div>
      <Switch>
        <Route path="/user" exact component={User} />
      </Switch>
    </div>
  );
};

export default Routes;
