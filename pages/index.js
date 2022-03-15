import Link from "next/link";
import Head from 'next/head'
import styles from "../styles/Home.module.css";

function HomePage() {
  return (
    <>
    {/* we can include this head tags in any page we want to */}
    <Head>
       <title>
         Ninja List | Home
       </title>
       <meta name="keywords" content="ninjas"></meta>
    </Head>
    <div className={styles.title}>
      Welcome to Next.js!
      <h1>Home Page</h1>
      <p className={styles.text}>dhdhdhhkjdhkdhkjd</p>
      <p className={styles.text}>dddcdcdcdcdcdcdcdcdcdc</p>
      <Link href="/ninjas">
        <a className={styles.btn}>See Ninja Listing</a>
      </Link>
    </div>
    
    </>
  );
}

export default HomePage;
