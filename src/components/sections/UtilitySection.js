import React from 'react';
import {Grid} from '@mui/material';
import SectionHeader from './partials/SectionHeader';
import AmountCard from '../elements/AmountCard'
const UtilitySection = (props) => {

  const sectionHeader = {
    title: 'Utility of Tulo Chain Fees',
    paragraph: "The trading fees for Tulo Chain has been implemented to provide a stable structure for price support, product development and the ecosystem management. The amount of fees for all buys is 13% and all sells is 16%"
  };

  const buyFeeData = [
    {
      value: '4%',
      description: 'Liquidity + LMM'
    },
    {
      value: '2%',
      description: 'Buy Back + LMM'
    },
    {
      value: '2%',
      description: 'Reflection'
    },
    {
      value: '5%',
      description: 'Marketing, Treasury2 & Product Development'
    }
  ]

  const sellFeeData = [
    {
      value: '4%',
      description: 'Liquidity + LMM'
    },
    {
      value: '2%',
      description: 'Buy Back + LMM'
    },
    {
      value: '3%',
      description: 'Reflection'
    },
    {
      value: '7%',
      description: 'Marketing, Treasury2 & Product Development'
    }
  ]

  return (
    <section
      {...props}
    >
      <div className="container">
        <div className="section-inner">
          <SectionHeader data={sectionHeader} className="center-content" />
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <div className="center-content group-box">
                <h3>Buy Trading Fees</h3>
                <Grid container>
                  <Grid item xs={12} md={6}>
                    <AmountCard size='small' object={buyFeeData[0]}/>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <AmountCard size='small' object={buyFeeData[1]}/>
                  </Grid>
                </Grid>
                <Grid container sx={{mt: 1}}>
                  <Grid item xs={12} md={6}>
                    <AmountCard size='small' object={buyFeeData[2]}/>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <AmountCard size='small' object={buyFeeData[3]}/>
                  </Grid>
                </Grid>
              </div>
            </Grid>
            <Grid item xs={12} md={6}>
              <div className="center-content group-box">
                <h3>Sell Trading Fees</h3>
                <Grid container>
                  <Grid item xs={12} md={6}>
                    <AmountCard size='small' object={sellFeeData[0]}/>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <AmountCard size='small' object={sellFeeData[1]}/>
                  </Grid>
                </Grid>
                <Grid container sx={{mt: 1}}>
                  <Grid item xs={12} md={6}>
                    <AmountCard size='small' object={sellFeeData[2]}/>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <AmountCard size='small' object={sellFeeData[3]}/>
                  </Grid>
                </Grid>
              </div>
            </Grid>
          </Grid>
          
        </div>
      </div>
    </section>
  );
}

export default UtilitySection;