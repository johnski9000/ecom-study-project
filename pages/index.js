import Layout from "../components/Layout";
import Product from "../components/Product";
import data from "../utils/data";


export default function Home() {
  return (
    <Layout>
      <div className="main-element">
      {data.products.map(product => {
        return (
          <Product key={product.slug} product={product}/>
        )
      })}
    </div>
    </Layout>
    
  )
}
