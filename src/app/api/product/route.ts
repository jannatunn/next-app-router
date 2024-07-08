import { NextRequest, NextResponse } from "next/server";

const data = [
  {
    id: 1,
    title: "Sepatu Baru",
    price: 75000,
    image: "https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.5/h_381,c_limit/87e1a107-173c-4c79-b111-7e3f4b03504e/vaporfly-3-road-racing-shoes-xsDgvM.png"
  },
  {
    id: 2,
    title: "Sepatu Lama",
    price: 50000,
    image: "https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.5/h_381,c_limit/87e1a107-173c-4c79-b111-7e3f4b03504e/vaporfly-3-road-racing-shoes-xsDgvM.png"
  },
  {
    id: 3,
    title: "Sepatu Lama",
    price: 50000,
    image: "https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.5/h_381,c_limit/87e1a107-173c-4c79-b111-7e3f4b03504e/vaporfly-3-road-racing-shoes-xsDgvM.png"
  },
  {
    id: 4,
    title: "Sepatu Lama",
    price: 50000,
    image: "https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.5/h_381,c_limit/87e1a107-173c-4c79-b111-7e3f4b03504e/vaporfly-3-road-racing-shoes-xsDgvM.png"
  }
]

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const id = searchParams.get("id")
  if (id){
    const productDetail = data.find((item) => item.id === Number(id))
    console.log("ini product detail =>", productDetail);
    
    if(productDetail){
      return NextResponse.json({
        status: 200,
        message: "success",
        data: productDetail
      })
    }
    return NextResponse.json({
      status: 404,
      message: "datanya nggk ada bro",
      data: "datanya ngkk ada hahahaahh"
    })
  }
  return NextResponse.json({status: 200, message: "success", data})
}