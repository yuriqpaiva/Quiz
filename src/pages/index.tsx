import Head from 'next/head';
import Button from '../components/Button';
import Layout from '../components/Layout';
import styles from '../styles/Home.module.css';

const Home = () => {
  return (
    <div className={styles.home}>
      <Layout />
      <h1>Bem-vindo ao Quiz</h1>
      <p className={styles.home__text}>
        Selecione as respostas corretas para conseguir o máximo de pontuação
      </p>
      <Button href="/quiz" text="Começar a jogar" />
    </div>
  );
};

export default Home;
