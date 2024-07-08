export const getData = async (url: string) => {
  // const res = await fetch("https://fakestoreapi.com/products",{
  //   cache: "no-store"
  // })
  const res = await fetch(url , {
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