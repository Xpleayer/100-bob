import React from 'react';
import PackageDetailTemplate from '../components/PackageDetailTemplate';
import { packagesData } from '../data/packagesData';
const StandaardPackage = () => {
  return <PackageDetailTemplate packageData={packagesData.standaard} />;
};
export default StandaardPackage;
