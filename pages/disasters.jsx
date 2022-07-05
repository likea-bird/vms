import BigCard from "@/components/Cards/BigCard"
import Layout from "@/modules/Layout/Layout"

export default function Disasters() {
  return (
    <div className="flex flex-col space-y-4 pt-4">
			<BigCard/>
    </div>
  )
}

Disasters.getLayout = function getLayout(page) {
    return (
      <Layout>
        {page}
      </Layout>
    )
  }