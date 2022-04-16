import React from 'react';
import classNames from 'classnames';
import Rosa from "react-on-scroll-animation"
import "react-on-scroll-animation/build/index.css";
import {Stack} from '@mui/material';
import { SectionProps } from '../../utils/SectionProps';
import ButtonGroup from '../elements/ButtonGroup';
import Button from '../elements/Button';
import Image from '../elements/Image';

const propTypes = {
  ...SectionProps.types
}

const defaultProps = {
  ...SectionProps.defaults
}

const Welcome = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  ...props
}) => {

  const outerClasses = classNames(
    'hero section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'hero-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  const commonROSA = {
    offset: 800,
    easing: 'ease',
    duration: 600,
    once: true
  }

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container">
        <div className={innerClasses}>
          <Stack sx={{flexDirection: {sm: 'column', md: 'row'}}}>
            <div className="hero-content">
              <Rosa {...commonROSA} animation='fade-up'>
                <h4 className='bounce animated'>Welcome to</h4>
              </Rosa>
              <Rosa {...commonROSA} animation='fade-up-left'>
                <h1 className="mt-0 mb-16 large-title animated lightSpeedIn" data-reveal-delay="200" style={{color: 'inherit'}}>
                  TuloChain
                </h1>
              </Rosa>
              <Rosa {...commonROSA} animation='fade-up'>
                <h6 className="animated fadeInUp" style={{fontWeight: 'normal', fontSize: 16}}>
                  The 1st Defi Token that tracks its token price with in-built Smart Contract Price Support Features
                </h6>
              </Rosa>
              <ButtonGroup>
                <Rosa {...commonROSA} animation='fade-up'>
                  <Button tag="a" wideMobile href="#" className="animated rubberBand">
                    Buy Now
                  </Button>
                  <Button tag="a" wideMobile href="#" className="animated rubberBand">
                    Chart
                  </Button>
                </Rosa>
                <Rosa {...commonROSA} animation='fade-left'>
                  <Button className='button-icon animated bounceInRight' tag="a" href="https://t.me/Tulochain" target="_blank">
                    <svg aria-hidden="true" viewBox="0 0 24 24" data-testid="TelegramIcon">
                      <path d="M9.78 18.65l.28-4.23 7.68-6.92c.34-.31-.07-.46-.52-.19L7.74 13.3 3.64 12c-.88-.25-.89-.86.2-1.3l15.97-6.16c.73-.33 1.43.18 1.15 1.3l-2.72 12.81c-.19.91-.74 1.13-1.5.71L12.6 16.3l-1.99 1.93c-.23.23-.42.42-.83.42z"></path>
                    </svg>
                  </Button>
                  <Button className='button-icon animated bounceInRight' tag="a" href="https://twitter.com/tulochain" target="_blank">
                    <svg aria-hidden="true" role="img" width="24" height="24" viewBox="0 0 1024 1024">
                      <path d="M928 254.3c-30.6 13.2-63.9 22.7-98.2 26.4a170.1 170.1 0 0 0 75-94a336.64 336.64 0 0 1-108.2 41.2A170.1 170.1 0 0 0 672 174c-94.5 0-170.5 76.6-170.5 170.6c0 13.2 1.6 26.4 4.2 39.1c-141.5-7.4-267.7-75-351.6-178.5a169.32 169.32 0 0 0-23.2 86.1c0 59.2 30.1 111.4 76 142.1a172 172 0 0 1-77.1-21.7v2.1c0 82.9 58.6 151.6 136.7 167.4a180.6 180.6 0 0 1-44.9 5.8c-11.1 0-21.6-1.1-32.2-2.6C211 652 273.9 701.1 348.8 702.7c-58.6 45.9-132 72.9-211.7 72.9c-14.3 0-27.5-.5-41.2-2.1C171.5 822 261.2 850 357.8 850C671.4 850 843 590.2 843 364.7c0-7.4 0-14.8-.5-22.2c33.2-24.3 62.3-54.4 85.5-88.2z" fill="currentColor"></path>
                    </svg>
                  </Button>
                </Rosa>
              </ButtonGroup>
            </div>
            <Rosa {...commonROSA} animation='fade-up-right'>
              <div className='logo-icon-rotate animated rollIn'>
                <Image
                    // className='animated rollIn'
                    src='logo_icon.png'
                    alt="Open"
                    width={200}
                    style={{}} />
              </div>
            </Rosa>
          </Stack>
          <div className='presale-link animated rotateInUpLeft'>
            <a href="#0">TOKEN PRESALE - 13th April 2PM UTC</a>
          </div>
        </div>
      </div>
    </section>
  );
}

Welcome.propTypes = propTypes;
Welcome.defaultProps = defaultProps;

export default Welcome;