import React from "react";
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import Loader from 'react-loader-spinner';
import Slider from "react-slick";

import styles from '../../assets/stylesheets/home-page.module.css';
import "../../assets/stylesheets/react-slick-carousel-style.css";
import settings from './react-slick-carousel-settings';
import { getFilms } from '../requests/[GET]films';
import { titleToSnakeCase } from '../helpers';

function HomePage() {
  const { data, isLoading } = useQuery('films', getFilms)


  return(
    <div className={styles.sliderContainer}>
      { isLoading ? (<Loader type="ThreeDots" color="#000000" height={80} width={80} />)
        :
        <Slider {...settings}>
        {data.map((data) => {
          return(
            <Link to={`/films/${data.id}`}>
              <div className={styles.banner}>
                <img src={`/images/${titleToSnakeCase(data.title)}.jpg`} />
              </div>
            </Link>
          )
        })}
      </Slider>
      }
    </div>
  )
}

export default HomePage;
