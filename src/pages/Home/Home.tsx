import React, { useEffect } from 'react';
import { ThisDay } from './components/ThisDay/ThisDay';
import styles from './Home.module.scss';
import ThisDayInfo from './components/ThisDayInfo/ThisDayInfo';
import Days from './components/Days/Days';
import { useCustomDispatch, useCustomSelector } from '../../hooks/store';
import { fetchCurrentWeather } from '../../store/thunks/fetchCurrentWeather';
import { selectCurrentWeatherData } from '../../store/selectors';
interface Props {}
const Home = () => {
  const dispatch = useCustomDispatch();
  const { weather } = useCustomSelector(selectCurrentWeatherData);
  useEffect(() => {
    dispatch(fetchCurrentWeather('Paris'));
  }, []);
  return (
    <div className={styles.home}>
      <div className={styles.wrapper}>
        <ThisDay weather={weather} />
        <ThisDayInfo />
      </div>
      <Days />
    </div>
  );
};

export default Home;
