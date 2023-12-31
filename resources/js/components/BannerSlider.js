import React from 'react'
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
export const BannerSlider = () => {
    const images = [
        "https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
        "https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80",
        "https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
    ];
  return (
 <Slide>
    <div className="each-slide-effect">
        <div className='h-[350px] flex item-center bg-cover  justify-center'>
        <img src="/img/georgie-unsplash.jpg" alt="" />
        </div>
    </div>
    <div className="each-slide-effect">
        <div className='h-[350px] flex item-center bg-cover  justify-center'>
        <img src="/img/georgie-unsplash-2.jpg" alt="" />
        </div>
    </div>
    <div className="each-slide-effect">
        <div className='h-[350px] flex item-center bg-cover  justify-center' >
           <img src="/img/georgie-unsplash-3.jpg" alt="" />
        </div>
    </div>
</Slide>
  )
}
