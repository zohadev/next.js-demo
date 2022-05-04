import Head from "next/head";
import Image from "next/image";
import Footer from "../comps/Footer";
import Navbar from "../comps/Navbar";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Homepage</title>
      </Head>
      <div>
        <h1 className={styles.container}>Home</h1>
        <p className={styles.description}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio tempora
          hic, delectus velit cupiditate officia amet sed a reprehenderit nihil!
          Velit soluta ex consequuntur unde omnis rem explicabo consectetur
          dolor.
        </p>
      </div>
    </>
  );
}
