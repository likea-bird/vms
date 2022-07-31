import Guidelines from '@/components/List/Guidelines'
import Layout from '@/modules/Layout/Layout'


export default function Home() {


  return (
    <div className='flex flex-col space-y-8 bg-zinc-900 min-h-screen pt-20 pb-6 text-white'>
      <Guidelines/>

      {/* about us */}
      <div className='flex flex-col space-y-2 px-4' id='about'>
        <h4 className='text-center uppercase '>About Us</h4>
        <p className='text-base'>{`
          Natural and man-induced disasters cause emergency situations resulting 
          in huge loss of life and cost. Many agencies and volunteers help to deal 
          with situations beyond an extent but lack of systematic process sometimes puts an end 
          to their approach. Hence, we aim to provide users with a Website that results in a 
          planned and rapid response. To avail registration for the public, a web portal, DEFORCE 
          is developed. Interested volunteers are inducted to assist the Disaster Management Authorities during any adversities.`}
        </p>
      </div>

      {/* contact */}
      <div className='flex flex-col space-y-2 px-4' id='contact'>
        <h4 className='text-center uppercase '>Contact</h4>
        <div className='flex flex-col'>

          <div className='flex justify-center items-center'>
            <h6>Email</h6>
            <span>&nbsp;:&nbsp;</span>
            <p>dforcemanagement@gmail.com</p>
          </div>

          <div className='flex justify-center items-center'>
            <h6>Phone</h6>
            <span>&nbsp;:&nbsp;</span>
            <p>+916548231241</p>
          </div>

        </div>
      </div>
        
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