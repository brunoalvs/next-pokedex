import { Layout } from "@/templates/Layout"

function Home({ ...props }) {
  return (
    <Layout>
      <div className="container">
        <h1>Hello Next.js</h1>
      </div>
    </Layout>
  )
}

export default Home
