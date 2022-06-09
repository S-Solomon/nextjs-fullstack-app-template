import Head from 'next/head';
import styles from './PrimaryLayout.module.css'

export interface IPrimaryLayout {}

const PrimaryLayout: React.FC<IPrimaryLayout> = () => {
  return (
    <>
      <Head>
        <title>NextJs Fullstack App Template</title>
      </Head>
        <main className={styles.main}></main>
        
    </>
  );
};

export default PrimaryLayout;