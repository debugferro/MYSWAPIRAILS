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
          <h1>{data.name}</h1>
          <p>{data.classification}</p>
          <p>Average Height: {data.average_height}</p>
          <p>Avergae Lifespan: {data.average_lifespan}</p>
          <p>Eye Colors:{data.eye_colors}</p>
          <p>Hair Colors:{data.eye_colors}</p>
          <p>Skin Colors:{data.skin_colors}</p>
          <p>Language:{data.language}</p>
          { data.homeworld && <p>Homeworld: {data.homeworld}</p> }
          <p>Films:</p>
          <ul>
            {data.films.map((films) => (
              <li key={films.id}>
                <Link to={`/films/${films.id}`}>
                  {films.title}
                </Link>
              </li>
            ))}
          </ul>
          <p>People:</p>
          <ul>
            {data.people.map((people) => (
              <li key={people['id']}>
                <Link to={`/people/${people.id}`}>
                  {people.name}
                </Link>
              </li>
            ))}
          </ul>
        </>)
      }
    </div>
  )
}

export default SpeciesPage;
