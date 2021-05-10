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

  return (
    <div className={styles.showCard}>
      { isLoading ? <Loader type="ThreeDots" color="#000000" height={80} width={80} /> :
        (<>
          <h1 className={styles.title}>{data.name}</h1>
          <div className={styles.miniInfo}>
            <div>
              <p><span>Birthday:</span>{data.birth_year}</p>
              <p><span>Eye Color:</span>{data.eye_color}</p>
              <p><span>Gender:</span>{data.gender}</p>
            </div>
            <div>
              <p><span>Hair Color:</span>{data.hair_color}</p>
              { data.homeworld &&
                <p><span>Homeworld:</span>
                <Link to={`planets/${data.homeworld.id}`}>
                  {data.homeworld.name}
                </Link></p> }
              { data.species[0] &&
                <p><span>Species:</span>
                <Link to={`species/${data.species[0].id}`}>
                  {data.species[0].name}
                </Link></p> }
            </div>
            <div>
              <p><span>Height:</span>{data.height}</p>
              <p><span>Mass:</span>{data.mass}</p>
              <p><span>Skin Color:</span>{data.skin_color}</p>
              <p><span>Language:</span>{data.language ? data.language : 'unknown'}</p>
            </div>
          </div>
          <section>
            <aside>
              <h3>Films:</h3>
              <ul>
                {data.films.map((films) => (
                  <li key={films.id}>
                    <Link to={`/films/${films.id}`}>
                      {films.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </aside>
            { data.vehicles[0] &&
            <aside>
              <h3>Vehicles:</h3>
              <ul>
              {data.vehicles.map((vehicles) => (
                <li key={vehicles['id']}>
                  <Link to={`/vehicles/${vehicles.id}`}>
                    {vehicles.name}
                  </Link>
                </li>
              ))}
              </ul>
            </aside> }
            { data.starships[0] &&
            <aside>
              <h3>Starships:</h3>
              <ul>
                {data.starships.map((starships) => (
                <li key={starships['id']}>
                  <Link to={`/starships/${starships.id}`}>
                    {starships.name}
                  </Link>
                </li>
              ))}
              </ul>
            </aside> }
        </section>
        </>)
      }
    </div>
  )
}

export default PeoplePage;
