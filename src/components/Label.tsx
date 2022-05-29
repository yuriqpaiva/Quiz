import React from 'react';

import styles from '../styles/Label.module.css';

interface LabelProps {
  text: string;
}

const Label: React.FC<LabelProps> = ({ text }) => {
  return (
    <div className={styles.label}>
      <span className={styles.label__text}>{text}</span>
    </div>
  );
};

export default Label;
