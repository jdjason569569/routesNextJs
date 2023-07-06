import Head from "next/head";
import styles from "../styles/Layout.module.css";
import Link from "next/link";

export default function Layout({ children, title }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>{title}</title>
      </Head>
      <nav>
        <Link href="/">Inicio</Link>
        <Link href="/blog">Blog</Link>
        <Link href="/about">About</Link>
      </nav>
      <main>{children}</main>
    </div>
  );
}
