import React from 'react';
import styles from './Days.module.scss';
const Tabs = () => {
  const tabs = [
    {
      value: 'На неделю',
    },
    {
      value: 'На 10 дней',
    },
    {
      value: 'На месяц',
    },
  ];
  return (
    <div className={styles.tabs}>
      <div className={styles.tabs__wrapper}>
        {tabs.map((tab) => {
          return (
            <div className={styles.tab} key={tab.value}>
              {tab.value}
            </div>
          );
        })}
      </div>
      <div className={styles.cancel}>Cancel</div>
    </div>
  );
};

export default Tabs;
