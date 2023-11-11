import { Box, Button } from '@mui/material';
import React, { ReactNode, useEffect, useRef, useState } from 'react';

interface ISliderProps {
  children: ReactNode;
  maxWidthSlide: number;
  slideIndex: number;
  setSlideLength: React.Dispatch<React.SetStateAction<number>>;
  setWidthSlide: React.Dispatch<React.SetStateAction<number>>;
  widthSlide: number;
  mediaBreak: boolean;
}
interface ISlideProps {
  children: ReactNode;
  minWidth: number;
}

export const Slider = ({
  mediaBreak,

  children,
  maxWidthSlide,
  slideIndex,
  setSlideLength,
  setWidthSlide,
  widthSlide,
}: ISliderProps) => {
  const slider = useRef<HTMLDivElement>(null);
  const lengthSlider = slider.current?.querySelectorAll('#content');
  const widthValueSlider = useRef<HTMLDivElement>(null);

  const slideImage = () => {
    if (slider.current) {
      slider.current.style.transform = `translate(-${slideIndex * 100}%)`;
    }
  };

  useEffect(() => {
    if (slideIndex !== 0) slideImage();
    if (slider.current) {
      slider.current.style.transform = `translate(-${slideIndex * 100}%)`;
    }
  }, [slideIndex]);

  useEffect(() => {
    if (lengthSlider) setSlideLength(lengthSlider.length);
  }, [lengthSlider]);

  useEffect(() => {
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    if (widthValueSlider.current) {
      setWidthSlide(widthValueSlider.current.clientWidth);
    }
  }, [widthValueSlider.current?.clientWidth]);

  const handleResize = () => {
    if (widthValueSlider.current) {
      setWidthSlide(widthValueSlider.current.clientWidth);
    }
  };

  return (
    <>
      <Box width={'100%'} ref={widthValueSlider} />
      <Box
        position={mediaBreak ? 'unset' : 'absolute'}
        width={widthSlide}
        overflow={'hidden auto'}
        flexShrink={0}
        sx={{
          '::-webkit-scrollbar': {
            display: 'none',
          },
        }}
      >
        <Box display={'flex'} ref={slider} sx={{ transition: 'all 0.4s ease' }}>
          {React.Children.map(children, (child, index) => (
            <Box minWidth={widthSlide} id='content'>
              {child}
            </Box>
          ))}
        </Box>
      </Box>
    </>
  );
};

export const Slide = ({ children, minWidth }: ISlideProps) => {
  return (
    <Box minWidth={minWidth} height={'100%'} className='slide'>
      {children}
    </Box>
  );
};
