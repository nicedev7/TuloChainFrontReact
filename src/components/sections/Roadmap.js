import React from 'react';
import classNames from 'classnames';
import {Stack} from '@mui/material';
import { Timeline, TimelineItem }  from 'vertical-timeline-component-for-react';
import ButtonGroup from '../elements/ButtonGroup';
import Button from '../elements/Button';
import Logo from '../layout/partials/Logo';

const Roadmap = (props) => {
  const dotColor = { color: '#86D17E' }
  return (
    <section
      {...props}
    >
      <div className="container">
        <div className="section-inner">
          <h1 className="roadmap-title">Roadmap</h1>
          <Stack direction='row'>
            <Logo style={{alignItems: 'center', display: 'flex'}}/>
            <div style={{flexGrow: 1}}>
              <Timeline lineColor={'#ddd'} animate={false}>
                <TimelineItem
                  dateComponent=''
                  key="001"
                  style={dotColor}
                >
                  <h4 className="base-color">Phase 1</h4>
                  <ul className="roadmap-ul">
                    <li>Project analysis and research – February - March 2022</li>
                    <li>Contract development testing and review – March 2022</li>
                    <li>Contract Audit – April 2022</li>
                    <li>Promotion and Creating Social Media Branding - April 2022</li>
                    <li>Public Presale – April / May 2022</li>
                    <li>Listing on CMC, Coin Gecko, etc – Q2 2022</li>
                  </ul>
                </TimelineItem>
                <TimelineItem
                  dateComponent=''
                  key="002"
                  style={dotColor}
                >
                  <h4 className="base-color">Phase 2</h4>
                  <ul className="roadmap-ul">
                    <li>Marketing & Growth of Tulo Chain Q2 2022</li>
                    <li>Listing on CEX Q2/Q3 2022</li>
                    <li>NFT Market Place Implementation – Q4 2022</li>
                    <li>Partnership – Q3/Q4 2022</li>
                  </ul>
                </TimelineItem>
                <TimelineItem
                  dateComponent=''
                  key="003"
                  style={dotColor}
                >
                  <h4 className="base-color">Phase 3</h4>
                  <ul className="roadmap-ul">
                    <li>Ethereum & Poly Chain Bridge – Q3 /Q4 2022</li>
                    <li>Developing the TULO Investment DAO framework Q4 2022</li>
                    <li>Driving the growth of Tulo Chain beyond 2022</li>
                    <li>Developing additional features for the TULO token – 2023</li>
                  </ul>
                </TimelineItem>
              </Timeline>
            </div>
          </Stack>
          <Stack direction = "row" sx={{justifyContent: 'center'}}>
            <Button tag="a" wideMobile href="https://www.pinksale.finance/#/launchpad/0xe51a530F2E8E227fB72aaFF4aCdF73EC89c5DF56?chain=BSC" target="_blank">
              Buy Now
            </Button>
            <Button tag="a" wideMobile href="#">
              Chart
            </Button>
          </Stack>
          <Stack direction = "row" sx={{justifyContent: 'center', mt: 3}}>
            <Button className='button-icon' tag="a" href="https://t.me/Tulochain" target="_blank">
              <svg aria-hidden="true" viewBox="0 0 24 24" data-testid="TelegramIcon">
                <path d="M9.78 18.65l.28-4.23 7.68-6.92c.34-.31-.07-.46-.52-.19L7.74 13.3 3.64 12c-.88-.25-.89-.86.2-1.3l15.97-6.16c.73-.33 1.43.18 1.15 1.3l-2.72 12.81c-.19.91-.74 1.13-1.5.71L12.6 16.3l-1.99 1.93c-.23.23-.42.42-.83.42z"></path>
              </svg>
            </Button>
            <Button className='button-icon' tag="a" href="https://twitter.com/tulochain" target="_blank">
              <svg aria-hidden="true" role="img" width="24" height="24" viewBox="0 0 1024 1024">
                <path d="M928 254.3c-30.6 13.2-63.9 22.7-98.2 26.4a170.1 170.1 0 0 0 75-94a336.64 336.64 0 0 1-108.2 41.2A170.1 170.1 0 0 0 672 174c-94.5 0-170.5 76.6-170.5 170.6c0 13.2 1.6 26.4 4.2 39.1c-141.5-7.4-267.7-75-351.6-178.5a169.32 169.32 0 0 0-23.2 86.1c0 59.2 30.1 111.4 76 142.1a172 172 0 0 1-77.1-21.7v2.1c0 82.9 58.6 151.6 136.7 167.4a180.6 180.6 0 0 1-44.9 5.8c-11.1 0-21.6-1.1-32.2-2.6C211 652 273.9 701.1 348.8 702.7c-58.6 45.9-132 72.9-211.7 72.9c-14.3 0-27.5-.5-41.2-2.1C171.5 822 261.2 850 357.8 850C671.4 850 843 590.2 843 364.7c0-7.4 0-14.8-.5-22.2c33.2-24.3 62.3-54.4 85.5-88.2z" fill="currentColor"></path>
              </svg>
            </Button>
          </Stack>
        </div>
      </div>
    </section>
  );
}

export default Roadmap;