type ProductPageProps = { params: { slug: string[] } }

async function getData() {
  // const res = await fetch("https://fakestoreapi.com/products",{
  //   cache: "no-store"
  // })
  const res = await fetch("http://localhost:3000/api/productss", {
    cache: "force-cache",
    next : {
      tags:  ["products"],
      // revalidate: 1,
    }
  })

  if(!res.ok){
    throw new Error("Faild To Fetch Data")
  }

  return res.json()
}

export default async function DetailProductPage( props: ProductPageProps ) {
  const { params } = props;
  const products = await getData()
  

  return (
    <div className="">
      <h1>{ params.slug ? "Detail Product Page" : "Product Page"}</h1>
      <div className="grid grid-cols-3 place-items-center mt-5">
        { products.data.length > 0 && products.data.map((product: any) => (
          <div key={product.id} className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mb-5">
              <a href="#">
                  <img className="p-8 rounded-t-lg object-cover h-96 w-full" src={product.image} alt="product image" />
              </a>
              <div className="px-5 pb-5">
                  <a href="#">
                      <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white truncate">{product.title}</h5>
                  </a>
                  <div className="flex items-center mt-5 justify-between">
                      <span className="text-3xl font-bold text-gray-900 dark:text-white">${ product.price }</span>
                      <a href="#" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add to cart</a>
                  </div>
              </div>
          </div>

        ))}
        <h2>{ params.slug && (
          <div>
            <p>Category : {params.slug[0]}</p>
            <p>Gender : {params.slug[1]}</p>
            <p>Id : {params.slug[2]}</p>
          </div>
        )}</h2>
      </div>
    </div>
 
  )
}