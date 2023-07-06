import Layout from "@/components/Layout";
import Link from "next/link";


export default function index({data}) {
  return (
  <Layout title="lista de blogs">
     <div>lista de blogs</div>
     {
      data.map(({id, title, body})=>(
      <div key={id}>
        <Link href={`/blog/${id}`}><h3>{id} - {title}</h3></Link>
        <p>{body}</p>
      </div>
      ))
     }
  </Layout>
  )
}

export async function getStaticProps() { // Es importante tener en cuenta que getStaticProps solo 
  //se ejecuta en el lado del servidor durante la compilación y no se ejecuta en el lado del cliente en 
  //tiempo de ejecución. Esto significa que no se puede utilizar getStaticProps para obtener datos en tiempo 
  //real o para realizar operaciones que requieran interacción del usuario. 
  // Hace una llamada a una API o consulta una base de datos para obtener los datos necesarios
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await res.json();
  // Retorna los datos como props
  return {
    props: {
      data,
    },
  };
}
