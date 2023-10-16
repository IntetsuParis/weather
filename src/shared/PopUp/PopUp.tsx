import React from 'react';
import styles from './PopUp.module.scss';
import { Item } from '../../pages/Home/components/ThisDayInfo/ThisDayInfo';
import ThisDayItem from '../../pages/Home/components/ThisDayInfo/ThisDayItem';
import GlobalSvgSelector from '../../assets/icons/global/GlobalSvgSelector';

interface Props {}
const PopUp = ({}: Props) => {
  const items = [
    {
      icon_id: 'temp',
      name: 'Температура',
      value: '20° - ощущается как 17°',
    },
    {
      icon_id: 'pressure',
      name: 'Давление',
      value: '765 мм ртутного столба - нормальное',
    },
    {
      icon_id: 'precipitation',
      name: 'Осадки',
      value: 'Без осадков',
    },
    {
      icon_id: 'wind',
      name: 'Ветер',
      value: '3 м/с юго-запад - легкий ветер',
    },
  ];
  return (
    <>
      <div className={styles.blur}></div>
      <div className={styles.popup}>
        <div className={styles.day}>
          <div className={styles.day__temp}>12°</div>
          <div className={styles.day__name}>Среда</div>
          <div className={styles.img}>
            <GlobalSvgSelector id="sun" />
          </div>
          <div className={styles.day__time}>
            Время: <span>21:54</span>
          </div>
          <div className={styles.day__city}>
            Город: <span>Санк-Петербург</span>
          </div>
        </div>

        <div className={styles.this__day_info_items}>
          {items.map((item: Item) => {
            return <ThisDayItem key={item.icon_id} item={item} />;
          })}
        </div>
        <div className={styles.close}>
          <GlobalSvgSelector id="close" />
        </div>
      </div>
    </>
  );
};

export default PopUp;
