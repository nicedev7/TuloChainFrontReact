import React from 'react';
import classNames from 'classnames';
import {Grid} from '@mui/material';
import SectionHeader from './partials/SectionHeader';
import TileCard from '../elements/TileCard'
const StructureSection = (props) => {

  const sectionHeader = {
    title: 'Structure',
    paragraph: ''
  };

  const tilesData = [
    {
      description: '4% of the trading fees is structured by the smart contract to directly go as LP and a treasury function add-on to BNB, which enables price support linked to auto liquidity pool action. The embedded treasury add-on function feature, in the smart contract allows a price support process through the indirect addition of BNB only to existing liquidity as well as adding an LP pair of BNB/TULO.'
    },
    {
      description: '2% of trading fees goes towards an enhanced buy back protocol, as explained in Automated Price Support Feature section, the Tulo Chain solutions has a buy back price tracking solution where the smart contract buys back Tulo tokens and auto burns anytime the price drops below 30% of the ATH price. The smart contract implements a chain of buy back by using 20% of available buy back funds. The team can also trigger a buy back via the smart contract anytime it is required'
    },
    {
      description: '2% of the Buy and 3 % of the Sells goes back to token holders in valuable Tulo tokens as rewards. The reflections for TULO are deemed valuable due to the price control and treasury add-on function built in the smart contract to support price levels.'
    },
    {
      description: '5% of the Buy and 7% of the Sells, provides marketing budget, operations budget, additional treasury support for liquidity/price stability and product development.'
    }
  ]

  return (
    <section
      {...props}
    >
      <div className="container">
        <div className="section-inner">
          <SectionHeader data={sectionHeader} className="center-content" />
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <TileCard object={tilesData[0]}/>
            </Grid>
            <Grid item xs={12} md={6}>
              <TileCard object={tilesData[1]}/>
            </Grid>
            <Grid item xs={12} md={6}>
              <TileCard object={tilesData[2]}/>
            </Grid>
            <Grid item xs={12} md={6}>
              <TileCard object={tilesData[3]}/>
            </Grid>
          </Grid>
        </div>
      </div>
    </section>
  );
}

export default StructureSection;