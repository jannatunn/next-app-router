// import { getData } from "@/services/products";
// import Image from "next/image";

// export default async function DetailProductPage(props: any) {
//   const { params } = props;
//   const {data} = await getData("http://localhost:3000/api/product?id=" + params.id)
  
//   return (
//     <div className="container mx-auto py-10">
//       <div className="w-1/2 mx-auto border border-t-gray-700">
//             {/* Menampilkan gambar produk dengan next/image */}
//             {data.image ? (
//           <Image src={data.image} alt="gambar product" width={200} height={200} className="mx-auto object-cover aspect-square col-span-2"/>
//         ) : (
//           <div>Gambar tidak tersedia</div>
//         )}

//         <div className="bg-white p-4 px-6">
//           <h3>{data.title}</h3>
//           <p>Price: {data.price}</p>
//         </div>
//       </div>
//     </div>
//   )
// } 