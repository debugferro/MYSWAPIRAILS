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
          <h1 className={styles.title}>{data.name}</h1>
          <div className={styles.miniInfo}>
            <div>
              <p><span>Population:</span>{data.population}</p>
              <p><span>Climate:</span>{data.climate}</p>
              <p><span>Terrain:</span>{data.terrain}</p>
              <p><span>Surface Water:</span>{data.surface_water}</p>
            </div>
            <div>
              <p><span>Diameter:</span>{data.diameter}</p>
              <p><span>Rotation Period:</span>{data.rotation_period}</p>
              <p><span>Orbital Period:</span>{data.orbital_period}</p>
              <p><span>Gravity:</span>{data.gravity}</p>
            </div>
          </div>
          <section>
            <aside>
            <h3>Films:</h3>
            {data.films.map((films) => (
              <ul>
                <li key={films.id}>
                  <Link to={`/films/${films.id}`}>
                    {films.title}
                  </Link>
                </li>
              </ul>
            ))}
            </aside>
          { data.residents[0] &&
          <aside>
            <h3>Residents:</h3>
            <ul>
            {data.residents.map((residents) => (
              <li key={residents['id']}>
                <Link to={`/people/${residents.id}`}>
                  {residents.name}
                  </Link>
                </li>
              ))}
            </ul>
          </aside>}
          </section>
        </>)
      }
    </div>
  )
}

export default PlanetPage;
