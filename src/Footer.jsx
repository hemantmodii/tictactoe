import React from 'react'

const Footer = () => {
  return (
    <div className=''>
      <div className="p-4 bg-green-400 flex flex-row justify-between text-green-950 align-bottom gap-8">
        <div className="w-1/2">
          <h1 className='text-3xl font-semibold'>Get Updates</h1>
          <h2 className='text-xl'>Subscribe to hemantmodi.com</h2>
          <p className='pt-4'>Join our dev team at Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, at. Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae facilis praesentium eius nihil accusantium voluptate dolor beatae vel magnam commodi.</p>
        </div>
        <div className="w-1/4">
          <span><input type="email" placeholder='Email Address'
            className='pl-2 rounded-s-md py-1' /></span>
          <span><button type='submit' className='bg-green-900 px-2 text-white rounded-e-md py-1'>Q</button></span>
        </div>
        <div className="flex flex-col justify-start pr-4 w-1/4">
          <h2 className='text-2xl mb-4'>Follow Us</h2>
          <ul className="flex flex-row gap-2 justify-start align-center font-semibold">
            <li>fb</li>
            <li>tw</li>
            <li>in</li>
            <li>yt</li>
          </ul>
        </div>

      </div>
    </div>
  )
}

export default Footer