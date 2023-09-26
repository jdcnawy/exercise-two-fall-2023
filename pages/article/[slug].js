import { useRouter } from "next/router"
import Data from "../../app/components/data"
import styles from "./article.module.css"



export default function Article(){
    const router = useRouter();
    const slug = router.query.slug;
    const articleData = Data.find((val) => val.id == slug)
    return(
        <main>
        <h1>Article</h1>
        <p>{articleData.title}</p>
        <p>{articleData.blurb}</p>
        <p>{articleData.date}</p>
        <div>{articleData.articleText.map((textChunk) => (<p>{textChunk.data}</p>))}</div>
        </main>
    )
};
