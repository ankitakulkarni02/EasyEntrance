import React,{Fragment,useState} from 'react'
import Exams from './Exams';
import './Card.css';
const Card = () => {
  const [detail,setDetail]=useState(Exams);
  return (
    <div>
      <div className='cards'>
        <div className='center'>
            <h3>Competitive Exams</h3>
        </div>
        <div className='row' >
          {
            detail.map((detail)=>{
              return(
                <div className='column'>
                <div className='single-column'>
                     <div className='card'>
                        <div className='card-img'>
                            <img className='img' src={detail.image} ></img>
                        </div>
                        <div className='card-content'>
                            <h3 className='title'>{detail.title}
                            </h3>
                            <div >
                              <p className='content'>{detail.content} </p>
                            </div>
                        </div>
                        <div className='btn'>
                          <a className='view-btn' href='#'>View</a>
                        </div>

                     </div>
                </div>
            </div>
              )
            })
          }

        </div>
      </div>
    </div>
  )
}

export default Card
