import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsLetterBox from '../components/NewsLetterBox'

const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT'} text2={'US'} />
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-16'>
      <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
      
      <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet nisi magnam iure, et officia ab explicabo possimus maiores veniam aperiam labore, sapiente quos. Nobis quo ut magnam suscipit delectus nisi?</p>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit cum tempore amet vel natus obcaecati sint asperiores perferendis. Inventore provident vero nam autem illo commodi dicta in molestias, quidem excepturi.</p>
          <b className='text-gray-800'>Our Mission</b>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et illo quibusdam ipsum sed dignissimos, cumque iusto magni neque. Quibusdam corrupti assumenda unde blanditiis ducimus repellendus dolore quos perferendis quaerat explicabo?</p>
      </div>
      </div>

      <div className='text-xl py-4'>
        <Title text1={'WHY'} text2={'CHOOSE US'}/>
      </div>
      <div className='flex flex-col md:flex-row text-sm mb-20'>
        
      <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
            <b>Quality Assurance:</b>
            <p  className='text-gray-600'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam asperiores aliquid nisi, dignissimos id facere nemo perspiciatis voluptates esse deserunt corrupti minima laudantium veritatis sapiente accusamus ea, nulla iste fugit?</p>
        </div>  
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
            <b>Convenience:</b>
            <p  className='text-gray-600'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam asperiores aliquid nisi, dignissimos id facere nemo perspiciatis voluptates esse deserunt corrupti minima laudantium veritatis sapiente accusamus ea, nulla iste fugit?</p>
        </div>  
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
            <b>Exceptional Customer Service:</b>
            <p  className='text-gray-600'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam asperiores aliquid nisi, dignissimos id facere nemo perspiciatis voluptates esse deserunt corrupti minima laudantium veritatis sapiente accusamus ea, nulla iste fugit?</p>
        </div>  
      </div>
      <NewsLetterBox/>
    </div>
  )
}

export default About
