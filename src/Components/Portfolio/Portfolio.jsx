import React from 'react'
import './Portfolio.css'
import pic1 from '../../assets/portfolio1.jpg'
import pic2 from '../../assets/portfolio2.jpg'
import pic3 from '../../assets/portfolio3.jpg'
import pic4 from '../../assets/portfolio4.jpg'
import pic5 from '../../assets/portfolio5.png'
import pic6 from '../../assets/portfolio6.jpg'

// Portfolio data 

const data=[{id:'1',img:pic1, title:"Portfoli title",shower:"#",visiter:"#"},
{id:'2',img:pic2, title:"Portfoli title",shower:"#",visiter:"#"},
{id:'3',img:pic3, title:"Portfoli title",shower:"#",visiter:"#"},
{id:'4',img:pic4, title:"Portfoli title",shower:"#",visiter:"#"},
{id:'5',img:pic5, title:"Portfoli title",shower:"#",visiter:"#"},
{id:'6',img:pic6, title:"Portfoli title",shower:"#",visiter:"#"}]

const Portfolio = () => {
  return (
    <section id='Portfolio'>
        <h5>My Recent Works</h5>
        <h2>Portfolio</h2>



        <div className="container portfolio_container">

            {
                data.map(({id,img,title,shower,visiter})=>{
                    return(
                        <article key={id} className='portfolio_item'>
                        <div className="portfolio_img">
                            <img src={img} alt={title} />
                        </div>
                        <h3>{title}</h3>
                        <a href={shower} className='btn' target='_blank'>SHOW</a>                
                        <a href={visiter} className='btn btn-primary' target='_blank'>VISIT</a>
                    </article>
                    )
                })
            }

           
       

        </div>
    </section>
  )
}

export default Portfolio