import React from 'react';
import styles from '../styles/Statistic.module.css';

interface StatisticProps {
  value: any;
  text: string;
  backgroundColor?: string;
  fontColor?: string;
}

const Statistic: React.FC<StatisticProps> = ({
  text,
  value,
  backgroundColor,
  fontColor,
}) => {
  return (
    <div className={styles.statistic}>
      <div
        className={styles.statistic__value}
        style={{
          backgroundColor: backgroundColor || '#FDD60F',
          color: fontColor || '#333333',
        }}
      >
        {value}
      </div>
      <div className={styles.statistic__text}>{text}</div>
    </div>
  );
};

export default Statistic;
