import React, { useContext } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import {observer} from "mobx-react-lite"

import { authRoutes, publicRoutes } from "../routes";
import { SHOP_Route } from "../utils/constants";
import { Context } from "../context";


const AppRouter = () => {
  const { user } = useContext(Context);
  

  return (

    <Switch>
      {user.isAuth &&
        authRoutes.map(({ path, Component }) => (
          <Route key={path} path={path} component={Component} exact />
        ))}
      {publicRoutes.map(({ path, Component }) => (
        <Route key={path} path={path} component={Component} exact />
      ))}
      <Redirect to={SHOP_Route} />
    </Switch>

  );
};

export default observer(AppRouter);
