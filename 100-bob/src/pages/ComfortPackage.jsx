import React from 'react';
import PackageDetailTemplate from '../components/PackageDetailTemplate';
import { packagesData } from '../data/packagesData';
const ComfortPackage = () => {
  return <PackageDetailTemplate packageData={packagesData.comfort} />;
};
export default ComfortPackage;
