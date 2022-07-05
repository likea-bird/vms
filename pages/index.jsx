import Layout from "@/modules/Layout/Layout"


export default function Home() {
  return (
    <div className=''>
      ssss
    </div>
  )
}

Home.getLayout = function getLayout(page) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}