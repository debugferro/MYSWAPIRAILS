import React from "react";
import { useQuery } from 'react-query';
import { Link, useParams } from 'react-router-dom';
import Loader from 'react-loader-spinner';

import getResources from '../requests/[GET]resources';
import styles from '../../assets/stylesheets/show-page.module.css'
import { snakeCaseToNormal } from '../helpers';

function PlanetPage() {
  let { id } = useParams();
  const { data, isLoading } = useQuery(['planets', id], () => getResources(`planets/${id}`))

  const mapObject = (object) => {
    const keys = Object.keys(object)
    keys.map((key) => {
      if (typeof key === 'object') {
        return mapObject(object);
      }
      return (<li><Link>{snakeCaseToNormal(key)}: {object[key]}</Link></li>)
    })
    return (
      <ul>
        {keys}
      </ul>
    )
  }

  return (
    <div className={styles.showCard}>
      { isLoading ? <Loader type="ThreeDots" color="#000000" height={80} width={80} /> :
        (<>
          <h1>{data.name}</h1>
          <p>Population: {data.population}</p>
          <p>Climate: {data.climate}</p>
          <p>Terrain: {data.terrain}</p>
          <p>Surface Water: {data.surface_water}</p>
          <p>Diameter: {data.diameter}</p>
          <p>Rotation Period: {data.rotation_period}</p>
          <p>Orbital Period: {data.orbital_period}</p>
          <p>Gravity: {data.gravity}</p>
          <h2>Films:</h2>
          <ul>
            {data.films.map((films) => (
              <li key={films.id}>
                <Link to={`/films/${films.id}`}>
                  {films.title}
                </Link>
              </li>
            ))}
          </ul>
          { data.residents[0] &&
            <ul>
              <h2>Residents:</h2>
            {data.residents.map((residents) => (
              <li key={residents['id']}>
                <Link to={`/people/${residents.id}`}>
                  {residents.name}
                  </Link>
                </li>
              ))}
            </ul>}
        </>)
      }
    </div>
  )
}

export default PlanetPage;
