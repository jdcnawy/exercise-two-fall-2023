
import Data from "../app/components/data.js"
import ArticleCard from "../app/components/ArticleCard/index.js"

export default function Home() {
  const projectName = "Exercise Two"
  console.log(Data)
  return (
    <main>
      <h1>(projectName)</h1>
        <ArticleCard title="Cool Title" description="Cool Description"/>
        
    </main>
  )
}
