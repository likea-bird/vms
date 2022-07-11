import MainCard from '@/components/Cards/MainCard'
import Layout from '@/modules/Layout/Layout'
import WithAuth from '@/modules/Layout/WithAuth'
import { useAuthContext } from '@/store/Context'


export default function AppPage() {

  const { user } = useAuthContext()

  console.log(user);

  return (
    <div className='flex flex-col'>

        <div className='flex'>
            <MainCard/>
        </div>
        
    </div>
  )
}

AppPage.getLayout = function getLayout(page) {
    return (
      <Layout>
        <WithAuth>
          {page}
        </WithAuth>
      </Layout>
    )
  }