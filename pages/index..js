
import Data from "../app/components/data.js"
import ArticleCard from "../app/components/ArticleCard/index.js"
import styles from "../app/page.module.css"

export default function Home() {
  const projectName = "Exercise Two"
  
  return (
    <main className={styles.page}>
      <h1>{(projectName)}</h1>
      {Data.map((article) =>
        <ArticleCard id = {article.id} key={article.id} title={article.title} description={article.blurb}  imgSrc={article.image.url} imageAlt={article.image.alt} date={new Date(article.publishedDate).toDateString()}/>
        )}
    </main>
  )
}
