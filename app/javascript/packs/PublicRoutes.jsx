import React from 'react';
import { Route } from 'react-router-dom';

import HomePage from '../pages/HomePage';
import FilmPage from '../pages/FilmPage';
import SpeciesPage from '../pages/SpeciesPage';
import PeoplePage from '../pages/PeoplePage';
import VehiclePage from '../pages/VehiclePage';
import StarshipPage from '../pages/StarshipPage';
import PlanetPage from '../pages/PlanetPage';

const PublicRoutes = () => (
  <>
    <Route exact path="/" component={HomePage} />
    <Route exact path="/films/:id" component={FilmPage} />
    <Route exact path="/species/:id" component={SpeciesPage} />
    <Route exact path="/people/:id" component={PeoplePage} />
    <Route exact path="/vehicles/:id" component={VehiclePage} />
    <Route exact path="/starships/:id" component={StarshipPage} />
    <Route exact path="/planets/:id" component={PlanetPage} />
  </>
)

export default PublicRoutes;
