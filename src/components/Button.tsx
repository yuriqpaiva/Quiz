import Link from 'next/link';
import React from 'react';
import styles from '../styles/Button.module.css';

interface ButtonProps {
  text: string;
  href?: string;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ text, href, onClick }) => {
  const renderButton = () => {
    return (
      <button className={styles.button} onClick={onClick}>
        {text}
      </button>
    );
  };

  return href ? <Link href={href}>{renderButton()}</Link> : renderButton();
};

export default Button;
