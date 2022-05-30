import { GetStaticProps, NextPage } from 'next';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Button from '../components/Button';
import Statistic from '../components/Statistic';
import styles from '../styles/Result.module.css';

const Result: NextPage = () => {
  const router = useRouter();

  const [total, setTotal] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [percentual, setPercentual] = useState(0);

  useEffect(() => {
    if (router.isReady) {
      setTotal(Number(router.query.total));
      setCorrectAnswers(Number(router.query.correctAnswers));
    }
  }, [router]);

  useEffect(() => {
    setPercentual(Math.round((correctAnswers / total) * 100));
  }, [total, correctAnswers]);

  return router.isReady ? (
    <div className={styles.result}>
      <h1>Resultado</h1>
      <div style={{ display: 'flex' }}>
        <Statistic text="Perguntas" value={total} />
        <Statistic
          text="Certas"
          value={correctAnswers}
          backgroundColor="#9CD2A4"
        />
        <Statistic
          text="Percentual"
          value={`${percentual}%`}
          backgroundColor="#DE6A33"
        />
      </div>
      <Button href='/' text='Tentar novamente'/>
    </div>
  ) : (
    <div />
  );
};

export default Result;
