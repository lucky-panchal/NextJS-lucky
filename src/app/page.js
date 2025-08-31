"use client"
import { useEffect,useState } from "react"
const Page = () => {
  const [posts, setPosts] = useState([]);
  

  useEffect(() => {
    setTimeout(() => {
      setPosts([
        { id: 1, title: "Post 1", content: "This is the content of post 1" },
        { id: 2, title: "Post 2", content: "This is the content of post 2" },
        { id: 3, title: "Post 3", content: "This is the content of post 3" },
      ])
  
    }, 2000)
  }, [])  
  return (
    <>
      {posts.length === 0 ? (
        Array(3).fill(0).map((_, index) => (
          <div className="post skeleton" key={index}>
            <div className="skeleton-title"></div>
            <div className="skeleton-content"></div>
          </div>
        ))
      ) : (
        <div>
          {posts.map((post) => (
            <div key={post.id} className="post">
              <h2>{post.title}</h2>
              <p>{post.content}</p>
            </div>
          ))}
        </div>
      )}
    </>
  )
}

export default Page;