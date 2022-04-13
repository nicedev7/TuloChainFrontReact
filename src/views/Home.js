import React from 'react';
// import sections
import Welcome from '../components/sections/Welcome';
import FeaturesTiles from '../components/sections/FeaturesTiles';
import Economicsection from '../components/sections/Economicsection';
import UtilitySection from '../components/sections/UtilitySection';
import StructureSection from '../components/sections/StructureSection';
import Roadmap from '../components/sections/Roadmap';

const Home = () => {

  return (
    <>
      <Welcome/>
      <FeaturesTiles id="features" />
      <Economicsection id="economics" />
      <UtilitySection id="chain" />
      <StructureSection id="structure" />
      <Roadmap id="road" />
    </>
  );
}

export default Home;