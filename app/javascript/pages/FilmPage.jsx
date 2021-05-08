import React from "react";
import { useQuery } from 'react-query';
import { Link, useParams } from 'react-router-dom';
import Loader from 'react-loader-spinner';

import { getFilm } from '../requests/[GET]film';
import { snakeCaseToNormal } from '../helpers';
import styles from '../../assets/stylesheets/show-page.module.css'

function FilmPage() {
  let { id } = useParams();
  const { data, isLoading } = useQuery(['films', id], () => getFilm(id))
  // const mainKeys = data ? Object.keys(data) : undefined

  // const mapObject = (object) => {
  //   const keys = Object.keys(object)
  //   keys.map((key) => {
  //     if (typeof key === 'object') {
  //       return mapObject(object);
  //     }
  //     return <Link>{snakeCaseToNormal(key)}: {object[key]}</Link>
  //   })
  // }

  return (
    <>
      <div className={styles.showCard}>
        {isLoading ? <Loader type="ThreeDots" color="#000000" height={80} width={80} /> :
          (<>
            <h1>{data.title}</h1>
            <span>{data.release_date}</span>
            <span>Producer: {data.producer}</span>
            <span>Director: {data.director}</span>
            <p>{data.opening_crawl}</p>
            <p>Species:</p>
            <ul>
              {data.species.map((species) => (
                <li key={species.id}>
                  <Link to={`/species/${species.id}`}>
                    {species.name}
                  </Link>
                </li>
              ))}
            </ul>
            <p>Planets:</p>
            <ul>
              {data.planets.map((planets) => (
                <li key={planets['id']}>
                  <Link to={`/planets/${planets.id}`}>
                    {planets.name}
                  </Link>
                </li>
              ))}
            </ul>
            <p>Starships:</p>
            <ul>
              {data.starships.map((starships) => (
                <li key={starships.id}>
                  <Link to={`/starships/${starships.id}`}>
                    {starships.name}
                  </Link>
                </li>
              ))}
            </ul>
            <p>Vehicles:</p>
            <ul>
              {data.vehicles.map((vehicles) => (
                <li key={vehicles.id}>
                  <Link to={`/vehicles/${vehicles.id}`}>
                    {vehicles.name}
                  </Link>
                </li>
              ))}
            </ul>
          </>)
        }
      </div>
    </>
  )
}

export default FilmPage;
// <div className={styles.showCard}>
//   {isLoading ? <Loader type="ThreeDots" color="#000000" height={80} width={80} /> :
//     (<>
//       <h1>{data.title}</h1>
//       <span>{data.release_date}</span>
//       <span>Producer: {data.producer}</span>
//       <span>Director: {data.director}</span>
//       <p>{data.opening_crawl}</p>
//       <p>Species:</p>
//       <ul>
//         {data.species.map((species) => (
//           <li key={species.id}>
//             <Link to={`/species/${species.id}`}>
//               {species.name}
//             </Link>
//           </li>
//         ))}
//       </ul>
//       <p>Planets:</p>
//       <ul>
//         {data.planets.map((planets) => (
//           <li key={planets['id']}>
//             <Link to={`/planets/${planets.id}`}>
//               {planets.name}
//             </Link>
//           </li>
//         ))}
//       </ul>
//       <p>Starships:</p>
//       <ul>
//         {data.starships.map((starships) => (
//           <li key={starships.id}>
//             <Link to={`/starships/${starships.id}`}>
//               {starships.name}
//             </Link>
//           </li>
//         ))}
//       </ul>
//       <p>Vehicles:</p>
//       <ul>
//         {data.vehicles.map((vehicles) => (
//           <li key={vehicles.id}>
//             <Link to={`/vehicles/${vehicles.id}`}>
//               {vehicles.name}
//             </Link>
//           </li>
//         ))}
//       </ul>

//     </>)
//   }
// </div>
//   )
// }
