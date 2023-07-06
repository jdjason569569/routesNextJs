import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Layout from "@/components/Layout";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Layout title="home page">
        <section>
          esta es la pagina del home
        </section>
      </Layout>
    </>
  );
}
