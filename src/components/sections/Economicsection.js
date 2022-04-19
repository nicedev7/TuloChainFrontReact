import React from 'react';
import {Grid} from '@mui/material';
import SectionHeader from './partials/SectionHeader';
import AmountCard from '../elements/AmountCard'
const Economicsection = (props) => {

  const commonClasses = "reveal-from-bottom animated"

  const sectionHeader = {
    title: 'TOKENOMICS',
    paragraph: "ERADEX has a total of 100,000,000 tokens. 55% of the tokens will be allocated to presale and initial exchange liquidity. 10%private sale, 10% of the tokens will be allocated to the team, 5% of the tokens will be allocated to strategic advisors and 20% of the tokens will be retained for the ecosystem, this would be allocated towards evolving the utility of the ERA as well as project operations"
  };

  const cardData = [
    {
      value: '5%',
      description: 'Liquidity'
    },
    {
      value: '100,000,000',
      description: 'Total Supply'
    },
    {
      value: '20%',
      description: 'Ecosystem'
    },
    {
      value: '10%',
      description: 'Private Sale'
    },
    {
      value: '10%',
      description: 'Team Tokens'
    },
    {
      value: '5%',
      description: 'Advisor tokens'
    }
  ]

  return (
    <section
      {...props}
    >
      <div className="container">
        <div className="section-inner">
          <SectionHeader data={sectionHeader} className={`${commonClasses} center-content fadeInUp`} />
          <div className="center-content">
            <Grid container className="reveal-from-bottom animated fadeInLeft">
              <Grid item xs={12} md={6}>
                <AmountCard object={cardData[0]}/>
              </Grid>
              <Grid item xs={12} md={6}>
                <AmountCard object={cardData[1]}/>
              </Grid>
            </Grid>
            <Grid container className="reveal-from-bottom animated fadeInRight" sx={{mt: 2}}>
              <Grid item xs={12} md={3}>
                <AmountCard object={cardData[2]}/>
              </Grid>
              <Grid item xs={12} md={3}>
                <AmountCard object={cardData[3]}/>
              </Grid>
              <Grid item xs={12} md={3}>
                <AmountCard object={cardData[4]}/>
              </Grid>
              <Grid item xs={12} md={3}>
                <AmountCard object={cardData[5]}/>
              </Grid>
            </Grid>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Economicsection;