import React from 'react';
import Seguidor from '../Seguidor/Container';
import EstadoCarrera from '../Seguidor/EstadoCarrera';

const Home = () => (
  <div className="main-body">
    <EstadoCarrera />
    <Seguidor />
  </div>
);

export default Home;
