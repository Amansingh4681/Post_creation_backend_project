import React from 'react'
import axios from 'axios'

function Createpost() {

    const handlesubmit = async(e)=>{
        e.preventDefault()

        const formdata=new FormData(e.target)

        axios.post("http://localhost:3000/create-post",formdata)
        .then((res)=>{

             console.log(res.data);

        })


    }
  return (
    <section className='h-screen w-full flex items-center justify-center bg-amber-950'>
        <form onSubmit={handlesubmit} className='h-45 rounded-2xl w-fit flex flex-col p-3 items-center justify-center gap-5 bg-[#f0f2f5]'>
            <input className=' border-2 font-semibold rounded file:border-b-mist-600 file:rounded file:gap-3.5 ' type="file" name="image" accept='image/*' />
            <input className=' border-2 font-semibold rounded w-full' type="text" name='caption' placeholder='Enter caption ' required/>
            <button type="submit"className='bg-green-500 p-3 font-semibold rounded active:scale-95'>submit</button>
        </form>

    </section>
  )
}

export default Createpost 