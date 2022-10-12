import React from 'react'
import avatar1 from  '../../assets/avatar1.jpg'
import avatar2 from  '../../assets/avatar2.jpg'
import avatar3 from  '../../assets/avatar3.jpg'
import avatar4 from  '../../assets/avatar4.jpg'
import './Testimonials.css'



import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

import 'swiper/css/pagination';





const data=[{image:avatar1,clientname:"Christiano",review:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad fugit veritatis ex veniam vitae, officia natus praesentium? Nisi sed dignissimos tenetur quos odit eos unde doloremque ab, dolorem rerum neque!"},
{image:avatar2,clientname:"Christiano",review:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad fugit veritatis ex veniam vitae, officia natus praesentium? Nisi sed dignissimos tenetur quos odit eos unde doloremque ab, dolorem rerum neque!"},
{image:avatar3,clientname:"Christiano",review:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad fugit veritatis ex veniam vitae, officia natus praesentium? Nisi sed dignissimos tenetur quos odit eos unde doloremque ab, dolorem rerum neque!"},
{image:avatar4,clientname:"Christiano",review:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad fugit veritatis ex veniam vitae, officia natus praesentium? Nisi sed dignissimos tenetur quos odit eos unde doloremque ab, dolorem rerum neque!"}]

const Testimonials = () => {
  return (
    <section id='Testimonials'
   
 >
        <h5>Review From Clients</h5>
        <h2>Testimonials</h2>
        <Swiper className="container testimonials_container"
         modules={[ Pagination]}
         spaceBetween={40}
         slidesPerView={1}         
         pagination={{ clickable: true }}
         
      >

{
    data.map(({image,clientname,review},index)=>{
        return(

            <SwiperSlide key={index} className='testi'>
                <div className="client_avatar">
                    <img src={image} alt="" />
                </div>
                    <h5 className='clinet_name'>{clientname}</h5>
                    <small className='review_client'>
                        {review}
                    </small>
                
            </SwiperSlide>
        )
    })
}

       
        </Swiper>
    </section>
  )
}

export default Testimonials