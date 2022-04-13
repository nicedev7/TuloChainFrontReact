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

  const sectionHeader = {
    title: 'The TuloChain Token & Features',
    paragraph: "Tulo is a Finnish word meaning Income, the aim of the Tulo Chain token is to generate a continuous stream of income flow for Tulo token holders by instituting the following utilities and value add elements to the token. The Tulo token is built on the Binance Smart Chain (BEP20 Token Standard)\nTulochain is the first decentralised token with price support feature embedded in the smart contract, that supports the price stability of the token."
  };

  const tilesData = [
    {
      title: 'Automated Liquidity Pool',
      description: 'The TULO token will provide a stable addition to the exchange liquidity pool, this would ensure that irrespective of the market activity the pool will be sufficiently enhanced to support the required stability.'
    },
    {
      title: 'Reflections for Token Holders',
      description: 'TULO token holders will receive rewards in the native token for holding. The reflections in TULO token are deemed more valuable than most other token reflections because of the price support mechanism built into the TULO token smart contract. For every buy and sell transactions, 2% and 3% respectively will be distributed directly to the wallets holding $TULO.'
    },
    {
      title: 'TULO ‘DAO’ Investment',
      description: 'As part of our Phase 3 road map, TULO Chain will be implementing an investment DAO structure that allocates 1% transaction fees as an investment pool fund. The 1% fees will be taken from the current allocation to Marketing, Operations & Product Development category of fees. (See whitepaper for details)'
    },
    {
      title: 'Automated Price Support Features',
      description: 'Tulo Chain has implemented two key features in its smart contract that provides a tested and effective price support mechanism. The price support system, whilst not able to control market activity will provide a stabilizing input into the token price factor:'
    },
    {
      title: '1- Auto LP + Treasury Price Support',
      description: 'The smart contract enables an auto creation of LP plus a treasury add-on function where the treasury initiates an auto buyback from the exchange, the buy back value will be equivalent to at least 50% of the value of the LP created (See Whitepaper)'
    },
    {
      title: '2- Buy Back Price Support',
      description: 'The Smart contract has been developed to track the token price movements, anytime the token price drops below 30% of its all-time high value, the smart contract will auto trigger a chain of buy backs and burn of TULO tokens. (See Whitepaper)'
    }
  ]

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content animated rotateInUpLeft" />
          <div className={tilesClasses}>
            <Grid container spacing={2}>
              <Grid item xs={12} md={4}>
                <TileCard object={tilesData[0]}/>
              </Grid>
              <Grid item xs={12} md={4}>
                <TileCard object={tilesData[1]}/>
              </Grid>
              <Grid item xs={12} md={4}>
                <TileCard object={tilesData[2]}/>
              </Grid>
              <Grid item xs={12} md={12}>
                <TileCard object={tilesData[3]}/>
              </Grid>
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