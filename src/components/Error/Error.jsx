import React from 'react';
import ContentLoader from 'react-content-loader';

const MyLoader = (props) => (
  <ContentLoader
    speed={1}
    // width={400}
    // height={450}
    viewBox="0 0 400 450"
    backgroundColor="#f3f3f3"
    foregroundColor="#ebebeb"
    {...props}>
    <rect x="97" y="95" rx="0" ry="0" width="0" height="1" />
    <rect x="96" y="96" rx="0" ry="0" width="1" height="0" />
    <rect x="100" y="283" rx="0" ry="0" width="10" height="2" />
    <rect x="89" y="281" rx="0" ry="0" width="21" height="1" />
    <rect x="167" y="237" rx="0" ry="0" width="0" height="1" />
    <rect x="289" y="130" rx="0" ry="0" width="0" height="1" />
    <rect x="265" y="257" rx="0" ry="0" width="2" height="0" />
    <rect x="446" y="93" rx="0" ry="0" width="134" height="138" />
    <rect x="65" y="76" rx="0" ry="0" width="265" height="29" />
    <rect x="117" y="315" rx="0" ry="0" width="158" height="35" />
    <rect x="66" y="120" rx="0" ry="0" width="265" height="29" />
    <rect x="66" y="165" rx="0" ry="0" width="265" height="29" />
  </ContentLoader>
);

export default MyLoader;
