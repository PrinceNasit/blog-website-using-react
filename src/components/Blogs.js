import React from 'react'
import { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import Spinner from './Spinner';
// import Card from './Card';

export default function Blogs() {

    const{posts,loading}=useContext(AppContext);


  return (
    <div className='w-11/12 max-w-[600px]  py-8 flex flex-col gap-y-7  mt-[60px] mb-[60px] justify-center items-center'>
      {
        loading ? (<Spinner/>):(
            posts.length===0 ? (
                <div>
                    <p>
                        No Posts Found.
                    </p>
                </div>
            ):(
                posts.map((post)=>(
                    <div key={post.id}>
                        <p className='font-bold font-lg'>{post.title}</p>
                        <p className='text-sm mt-[4px]'>
                            By <span className='italic'>{post.author}</span> on <span className='underline font-bold'>{post.category}</span>
                        </p>
                        <p className='text-sm mt-[4px]'>Posted on {post.date}</p>
                        <p className='text-md mt-[14px]'>{post.content}</p>
                        <div className='flex gap-x-3'>
                            {post.tags.map((tag,index)=>{
                                return <span className='text-blue-600 underline font-bold text-xs mt-[4px]' key={index}>{`#${tag}`}</span>
                            })}
                        </div>
                    </div>
                ))
            )
        )
      }
    </div>
  )
}
