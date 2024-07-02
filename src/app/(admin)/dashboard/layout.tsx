
export default function Layout({ 
  children,
  products,
  analitics,
  payments
} : { 
  children: React.ReactNode;
  products: React.ReactNode;
  analitics: React.ReactNode;
  payments: React.ReactNode;
}) {
  return (
    <div className="p-5">
      <div>{ children }</div>
      <div className="mt-5 flex gap-3 justify-center items-center">  
        { products }
        { analitics }
      </div>
      <div>
        { payments }
      </div>
    </div>
  )
}