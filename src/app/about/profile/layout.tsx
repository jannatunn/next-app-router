export default function ProfileLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
        <>
          <h1>Ini Adalah Layout Dari Profile</h1>
          <div>
            {children}
          </div>
        </>
  )
}