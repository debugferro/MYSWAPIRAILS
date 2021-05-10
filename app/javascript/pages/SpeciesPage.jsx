import React from "react";
import { useQuery } from 'react-query';
import { Link, useParams } from 'react-router-dom';
import Loader from 'react-loader-spinner';

import getResources from '../requests/[GET]resources';
import styles from '../../assets/stylesheets/show-page.module.css'

function SpeciesPage() {
  let { id } = useParams();
  const { data, isLoading } = useQuery(['species', id], () => getResources(`species/${id}`))

  return (
    <div className={styles.showCard}>
      { isLoading ? <Loader type="ThreeDots" color="#000000" height={80} width={80} /> :
        (<>
          <h1 className={styles.title}>{data.name}</h1>
          <div className={styles.miniInfo}>
            <div>
              <p><span>Classification:</span>{data.classification}</p>
              <p><span>Average Height:</span>{data.average_height}</p>
              <p><span>Avergae Lifespan:</span>{data.average_lifespan}</p>
            </div>
            <div>
              <p><span>Eye Colors:</span>{data.eye_colors}</p>
              <p><span>Hair Colors:</span>{data.eye_colors}</p>
              <p><span>Skin Colors:</span>{data.skin_colors}</p>
            </div>
            <div>
              <p><span>Language:{data.language}</span></p>
              {data.homeworld && <p><span>Homeworld:</span>{data.homeworld}</p> }
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
              <h3>People:</h3>
              <ul>
                {data.people.map((people) => (
                  <li key={people['id']}>
                    <Link to={`/people/${people.id}`}>
                      {people.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </aside>
        </section>
        </>)
      }
    </div>
  )
}

export default SpeciesPage;
