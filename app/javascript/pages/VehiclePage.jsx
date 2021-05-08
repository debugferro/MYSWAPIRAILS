import React from "react";
import { useQuery } from 'react-query';
import { Link, useParams } from 'react-router-dom';
import Loader from 'react-loader-spinner';

import getResources from '../requests/[GET]resources';
import styles from '../../assets/stylesheets/show-page.module.css'
import { snakeCaseToNormal } from '../helpers';

function VehiclePage() {
  let { id } = useParams();
  const { data, isLoading } = useQuery(['vehicles', id], () => getResources(`vehicles/${id}`))

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
          <p>{data.model}</p>
          <p>Vehicle Class: {data.vehicle_class}</p>
          <p>Cargo Capacity: {data.cargo_capacity}</p>
          <p>Max. Atmosphering Speed: {data.max_atmosphering_speed}</p>
          <p>Manufacturer: {data.manufacturer}</p>
          <p>Num. Passengers: {data.passengers}</p>
          <p>Consumables: {data.consumables}</p>
          <p>Length: {data.length}</p>
          <p>Cost: {data.cost_in_credits}</p>
          <p>Min. Crew: {data.crew}</p>
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
          { data.pilots[0] &&
            <ul>
              <h2>Pilots:</h2>
            {data.pilots.map((pilots) => (
              <li key={pilots['id']}>
                <Link to={`/people/${pilots.id}`}>
                  {pilots.name}
                  </Link>
                </li>
              ))}
            </ul>}
        </>)
      }
    </div>
  )
}

export default VehiclePage;
