import React from 'react';
import PackageDetailTemplate from '../components/PackageDetailTemplate';
import { packagesData } from '../data/packagesData';
const PremiumPackage = () => {
  return <PackageDetailTemplate packageData={packagesData.premium} />;
};
export default PremiumPackage;
