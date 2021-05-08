import React from "react";
import { useQuery } from 'react-query';
import { Link, useParams } from 'react-router-dom';
import Loader from 'react-loader-spinner';

import getResources from '../requests/[GET]resources';
import styles from '../../assets/stylesheets/show-page.module.css'
import { snakeCaseToNormal } from '../helpers';

function PeoplePage() {
  let { id } = useParams();
  const { data, isLoading } = useQuery(['people', id], () => getResources(`people/${id}`))

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
          <p>{data.birth_year}</p>
          <p>Eye Color: {data.eye_color}</p>
          <p>Gender: {data.gender}</p>
          <p>Hair Color:{data.hair_color}</p>
          <p>Height:{data.height}</p>
          <p>Mass:{data.mass}</p>
          { data.homeworld &&
            <Link to={`planets/${data.homeworld.id}`}>
              Homeworld: {data.homeworld.name}
            </Link> }
          <p>Skin Color:{data.language}</p>
          { data.species[0] &&
            <Link to={`species/${data.species[0].id}`}>
              Species: {data.species[0].name}
            </Link> }
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
          { data.vehicles[0] &&
          <ul>
            <h2>Vehicles:</h2>
            {data.vehicles.map((vehicles) => (
              <li key={vehicles['id']}>
                <Link to={`/vehicles/${vehicles.id}`}>
                  {vehicles.name}
                </Link>
              </li>
            ))}
          </ul> }
          { data.starships[0] &&
          <ul>
          <h2>Starships:</h2>
            {data.starships.map((starships) => (
              <li key={starships['id']}>
                <Link to={`/starships/${starships.id}`}>
                  {starships.name}
                </Link>
              </li>
            ))}
          </ul> }
        </>)
      }
    </div>
  )
}

export default PeoplePage;
