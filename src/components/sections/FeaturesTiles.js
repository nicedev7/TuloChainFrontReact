import React from 'react';
import classNames from 'classnames';
import {Grid} from '@mui/material';
import { SectionTilesProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import TileCard from '../elements/TileCard'
const propTypes = {
  ...SectionTilesProps.types
}

const defaultProps = {
  ...SectionTilesProps.defaults
}
const FeaturesTiles = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  pushLeft,
  ...props
}) => {

  const outerClasses = classNames(
    'features-tiles section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'features-tiles-inner section-inner pt-0',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  const tilesClasses = classNames(
    'tiles-wrap center-content',
    pushLeft && 'push-left'
  );

  const commonClasses = "reveal-from-bottom animated"

  const sectionHeader = {
    title: 'ABOUT ERADEX',
    paragraph: "The concept of EraDex is one of it's kind with lots of potentials. Almost all the token suffers from the inevitable valuation bubble ,inflation which is then followed by the burst and the impending collapse of the price.\nThis is why we have seen the mass adoption of static rewards, also known as reflection, a separate concept that seeks to eliminate the troubles caused by farming rewards."
  };

  const tilesData = [
    {
      title: 'Automated Liquidity Pool',
      description: 'Era token will provide a stable addition to the exchange liquidity pool, this would ensure that irrespective of the market activity the pool will be sufficiently enhanced to support the required stability.The goal here is to prevent the larger dips when whales decide to sell their tokens later in the game, which keeps the price from fluctuating as much as if there was no automatic LP function.'
    },
    {
      title: 'Reflections for Token Holders',
      description: 'EraDex token holders will receive rewards in the $Cro for holding. For every buy and sell transactions, 2% and 3% respectively will be distributed directly to the wallets holding $ERA'
    },
    {
      title: 'ERA ‘DAO’ Investment',
      description: 'As part of our Phase 3 road map, ERADEX will be implementing an investment DAO structure that allocates 1% transaction fees as an investment pool fund. The 1% fees will be taken from the current allocation to Marketing, Operations & Product Development category of fees. (See whitepaper for details)'
    },
    {
      title: 'Automated Price Support Features',
      description: 'ERADEX has implemented two key features in its smart contract that provides a tested and effective price support mechanism. The price support system, whilst not able to control market activity will provide a stabilizing input into the token price factor:'
    },
    {
      title: '1- Auto LP + Treasury Price Support',
      description: 'The smart contract enables an auto creation of LP plus a treasury add-on function where the treasury initiates an auto buyback from the exchange, the buy back value will be equivalent to at least 50% of the value of the LP created (See Whitepaper)'
    },
    {
      title: '2- Buy Back Price Support',
      description: 'The Smart contract has been developed to track the token price movements, anytime the token price drops below 30% of its all-time high value, the smart contract will auto trigger a chain of buy backs and burn of ERA tokens. (See Whitepaper)'
    }
  ]
  
  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className={`${commonClasses} center-content rotateInUpLeft`} />
          <div className={tilesClasses}>
            <Grid container spacing={2} className={`${commonClasses} rotateInUpRight`} sx={{pb: 2}}>
              <Grid item xs={12} md={4}>
                <TileCard object={tilesData[0]}/>
              </Grid>
              <Grid item xs={12} md={4}>
                <TileCard object={tilesData[1]}/>
              </Grid>
              <Grid item xs={12} md={4}>
                <TileCard object={tilesData[2]}/>
              </Grid>
            </Grid>
            <Grid container spacing={2} className={`${commonClasses} rotateInUpRight`} sx={{pb: 2}}>
              <Grid item xs={12} md={12}>
                <TileCard object={tilesData[3]}/>
              </Grid>
            </Grid>
            <Grid container spacing={2} className={`${commonClasses} rotateInUpRight`}>
              <Grid item xs={12} md={6}>
                <TileCard object={tilesData[4]}/>
              </Grid>
              <Grid item xs={12} md={6}>
                <TileCard object={tilesData[5]}/>
              </Grid>
            </Grid>
          </div>
        </div>
      </div>
    </section>
  );
}

FeaturesTiles.propTypes = propTypes;
FeaturesTiles.defaultProps = defaultProps;

export default FeaturesTiles;