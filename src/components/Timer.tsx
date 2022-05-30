import React from 'react';
import { CountdownCircleTimer } from 'react-countdown-circle-timer';
import styles from '../styles/Timer.module.css';

interface TimerProps {
  duration: number;
  timesUp: () => void;
  key: number;
}

const Timer: React.FC<TimerProps> = ({ duration, timesUp }) => {
  return (
    <div className={styles.timer}>
      <CountdownCircleTimer
        colors={[
          ['#BCE596', 0.33],
          ['#F7B801', 0.33],
          ['#ED827A', 0.33],
        ]}
        size={120}
        isPlaying
        duration={duration}
        onComplete={timesUp}
      >
        {({ remainingTime }) => remainingTime}
      </CountdownCircleTimer>
    </div>
  );
};

export default Timer;
