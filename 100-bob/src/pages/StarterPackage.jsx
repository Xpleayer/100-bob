import React from 'react';
import PackageDetailTemplate from '../components/PackageDetailTemplate';
import { packagesData } from '../data/packagesData';
const StarterPackage = () => {
  return <PackageDetailTemplate packageData={packagesData.starter} />;
};
export default StarterPackage;
