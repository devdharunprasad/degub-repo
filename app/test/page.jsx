"use client"

import React, { useEffect } from 'react'


const Page = () => {


  useEffect(() => {
    const html = document.documentElement;
    const canvas = document.getElementById("hero-lightpass");
    const context = canvas.getContext("2d");
    
    const frameCount = 173;
    const currentFrame = index => {
      console.log(`https://res.cloudinary.com/dosjh2min/image/upload/pactron/seq/image-${index.toString().padStart(3, '0')}.png`)
      return `https://res.cloudinary.com/dosjh2min/image/upload/pactron/seq/image-${index.toString().padStart(3, '0')}.png`
    }
    
    const preloadImages = () => {
      for (let i = 1; i < frameCount; i++) {
        const img = new Image();
        img.src = currentFrame(i);
      }
    };
    
    const img = new Image()
    img.src = currentFrame(1);
    canvas.width=1158;
    canvas.height=770;
    img.onload=function(){
      context.drawImage(img, 0, 0);
    }
    
    const updateImage = index => {
      img.src = currentFrame(index);
      context.drawImage(img, 0, 0);
    }
    
    window.addEventListener('scroll', () => {  
      const scrollTop = html.scrollTop;
      const maxScrollTop = html.scrollHeight - window.innerHeight;
      const scrollFraction = scrollTop / maxScrollTop;
      const frameIndex = Math.min(
        frameCount - 1,
        Math.ceil(scrollFraction * frameCount)
      );
      
      requestAnimationFrame(() => updateImage(frameIndex + 1))
    });
    
    preloadImages()
  },[])

  return (
    <div className = "min-h-screen">
<canvas id="hero-lightpass" className='w-6/12 z-20 sticky top-20' />
</div>
  )
}

export default Page