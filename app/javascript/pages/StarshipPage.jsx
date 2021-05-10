import React from "react";
import { useQuery } from 'react-query';
import { Link, useParams } from 'react-router-dom';
import Loader from 'react-loader-spinner';

import getResources from '../requests/[GET]resources';
import styles from '../../assets/stylesheets/show-page.module.css'
import { snakeCaseToNormal } from '../helpers';

function StarshipPage() {
  let { id } = useParams();
  const { data, isLoading } = useQuery(['starships', id], () => getResources(`starships/${id}`))

  return (
    <div className={styles.showCard}>
      { isLoading ? <Loader type="ThreeDots" color="#000000" height={80} width={80} /> :
        (<>
          <h1 className={styles.title}>{data.name}</h1>
          <div className={styles.miniInfo}>
            <div>
              <p><span>Model:</span>{data.model}</p>
              <p><span>Max. Atmosphering Speed:</span>{data.max_atmosphering_speed}</p>
              <p><span>Cargo Capacity:</span>{data.cargo_capacity}</p>
            </div>
            <div>
              <p><span>Manufacturer:</span>{data.manufacturer}</p>
              <p><span>MGLT:</span>{data.MGLT}</p>
              <p><span>Min. Crew:</span>{data.crew}</p>
              <p><span>Num. Passengers:</span>{data.passengers}</p>
            </div>
            <div>
              {data.startship_class && <p><span>Starship Class:</span>{data.starship_class}</p> }
              <p><span>Consumables:</span>{data.consumables}</p>
              <p><span>Length:</span>{data.length}</p>
              <p><span>Cost:</span>{data.cost_in_credits}</p>
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
            <aside>
            <h3>Pilots:</h3>
            { data.pilots[0] &&
              <ul>
                {data.pilots.map((pilots) => (
                  <li key={pilots['id']}>
                    <Link to={`/people/${pilots.id}`}>
                      {pilots.name}
                    </Link>
                  </li>
                ))}
              </ul>}
            </aside>
          </section>
        </>)
      }
    </div>
  )
}

export default StarshipPage;
