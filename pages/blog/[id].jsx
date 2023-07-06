import Layout from "@/components/Layout";
import Link from "next/link";

export default function primerPost({data}) {
  return (
    <>
    <Layout>
      <h1>{data.id} - {data.title}</h1>
      <p>{data.body}</p>
      <Link href="/">
        Volver al inicio
      </Link>
      </Layout>
    </>
  );
}

export async function getStaticPaths() {
  // Retorna los paths (rutas) y los parámetros para generar las páginas estáticas
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await res.json();
  const paths = data.map(({id}) => ({params: {id: `${id}`}}))
  console.log('paths -> ', paths);
  return {
    paths,
    fallback: false, // Si fallback es false, muestra un 404 para rutas no definidas
  };
}

export async function getStaticProps({ params }) {
  // Hace una llamada a una API o consulta una base de datos utilizando los parámetros
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`);
  const data = await res.json();

  // Retorna los datos como props
  return {
    props: {
      data,
    },
  };
}
