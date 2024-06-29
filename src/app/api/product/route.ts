import { NextRequest, NextResponse } from "next/server";

const data = [
  {
    id: 1,
    name: "Sepatu Baru",
    price: 75000
  },
  {
    id: 2,
    name: "Sepatu Lama",
    price: 50000
  }
]
export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const id = searchParams.get("id")
  if (id){
    const productDetail = data.find((item) => item.id === Number(id))
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