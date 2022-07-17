import Layout from "@/modules/Layout/Layout"


export default function Home() {
  return (
    <div className='bg-zinc-800'>
      ssssssssssssss
    </div>
  )
}

Home.getLayout = function getLayout(page) {
  return (
    <Layout route='no-auth'>
      {page}
    </Layout>
  )
}