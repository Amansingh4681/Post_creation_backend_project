import react,{ useEffect, useState } from 'react'
import axios from 'axios'

function Feed() {
  const [posts, setPosts] = useState([])

  useEffect(()=>{

    axios.get("http://localhost:3000/posts")
    .then((res)=>{
        setPosts(res.data.posts)
        
    })
  },[])

  return (
    <section className='flex flex-col items-center gap-20 h-full w-full bg-[#f0f2f5] p-20'>
      {posts.length > 0 ? (
        posts.map((posts) => (
          <div key={posts._id}>
            <img className=' border-2 mt-10' src={posts.image} alt={posts.caption} />
            <p className='font-semibold text-2xl text-mist-900'>{posts.caption}</p>
          </div>
        ))
      ) : (
        <div>
             <p className='flex items-center justify-center font-bold text-black'>No post avalible...</p>
             <p className="text-gray-600 font-medium">
  Kindly visit{" "}
  <span className="bg-gray-200 px-2 py-1 rounded text-red-600 font-mono">
    /create-post
  </span>{" "}
  and create a post...
</p>
        </div>
       
      )}
    </section>
  )
}

export default Feed