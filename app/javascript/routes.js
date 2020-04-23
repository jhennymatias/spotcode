import React from "react";
import HomeScreen from "./screens/home";
import Discovery from "./screens/discovery";
import Search from "./screens/search";
import Album from "./screens/album";
import Favorites from "./screens/favorite";
 
import { Switch, Route } from 'react-router-dom'
 
const Routes = (props) => (
  <Switch>
    <Route exact path='/' component={HomeScreen} />
    <Route exact path='/discovery' component={Discovery} />
    <Route exact path='/search' component={Search} />
    <Route exact path='/album/:id' component={Album} />
    <Route exact path='/favorites' component={Favorites} />
  </Switch>
);
 
export default Routes;