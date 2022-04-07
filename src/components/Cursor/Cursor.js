import React, { useEffect } from 'react';
import gsap from 'gsap';
import { CursorWrapper, CursorStyled, FollowCursorStyled } from './CursorStyles';

const Cursor = () => {

    useEffect(() => {

      window.addEventListener('mousemove', (event) => {
        const mouseX = event.clientX;
        const mouseY = event.clientY;
  
        gsap.set(".cursor", {
          x: mouseX,
          y: mouseY,
        })

        gsap.to(".followCursor", {
          x: mouseX,
          y: mouseY,
          stagger: -0.3,
        })
      })
      
    }, [])

    return(
        <CursorWrapper>
            <CursorStyled  className = 'cursor' />
            <FollowCursorStyled className = 'followCursor' />
        </CursorWrapper>
    );
};

export default Cursor;
