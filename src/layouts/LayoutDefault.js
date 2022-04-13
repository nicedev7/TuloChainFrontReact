import React from 'react';
import Particles from 'react-tsparticles';
import Zoom from '@mui/material/Zoom';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import { Box } from '@mui/material';
import Image from '../components/elements/Image';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';

function ScrollTop(props) {
  const { children } = props;

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = (event) => {
    window.scrollTo({
      top: 0, 
      behavior: 'smooth'
    });
  };

  return (
    <Zoom in={trigger}>
      <Box
        onClick={handleClick}
        role="presentation"
        sx={{ position: 'fixed', bottom: {xs: 56, sm: 36}, right: 22, zIndex: 1 }}
      >
        {children}
      </Box>
    </Zoom>
  );
}

const LayoutDefault = ({ children }) => (
  <>
    <Header navPosition="right" className="reveal-from-bottom" />
    <Particles options={{
      background: {
        color: "#000000"
      },
      particles: {
        color: { value: "#fff" },
        move: {
          direction: "top",
          enable: true,
          outModes: "out",
          speed: 8
        },
        number: {
          density: {
            enable: true,
            area: 800
          },
          value: 100
        },
        opacity: {
          value: 0.7
        },
        shape: {
          type: "circle"
        },
        size: {
          value: 3
        },
        wobble: {
          enable: true,
          distance: 10,
          speed: 10
        },
        zIndex: {
          value: { min: 0, max: 100 }
        }
      }
    }}/>
    <main className="site-content">
      {children}
    </main>
    <Footer />
    <ScrollTop>
      <Image
        src='2top.png'
        alt="Open"
        width={64}
        style={{cursor: 'pointer'}} />
    </ScrollTop>
  </>
);

export default LayoutDefault;  