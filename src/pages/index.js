import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import styles from './index.module.css';
import useBaseUrl from '@docusaurus/useBaseUrl';


export default function Home() {
  return (
    <Layout title="Greenshirt University">
      <header className={styles.hero}>
      <img
  src={useBaseUrl('/img/pamo-wings.png')}
  className={styles.wings}
  alt="PAMO Wings"
/>


        <h1 className={styles.title}>Greenshirt University</h1>

        <p className={styles.subtitle}>
          AMDO • LDO • CWO Maintenance Leadership
        </p>

        <div className={styles.actions}>
          <Link className={styles.primaryBtn} to="/welcome">
            Start here
          </Link>
          <Link className={styles.secondaryBtn} to="/fundamentals">
            Fundamentals
          </Link>
          <Link className={styles.secondaryBtn} to="/watchstations">
            Watchstations
          </Link>
          <Link className={styles.secondaryBtn} to="/oral-board">
            Oral board
          </Link>
        </div>
      </header>
    </Layout>
  );
}
