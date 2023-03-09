import React from "react";
import ContentLoader from "react-content-loader";

const Skeleton = (props) => (
  <ContentLoader
    speed={2}
    width={250}
    height={262}
    viewBox="0 0 250 262"
    backgroundColor="#e2dfdf"
    foregroundColor="#f1e9e9"
    {...props}
  >
    <rect x="14" y="45" rx="0" ry="0" width="19" height="0" />
    <rect x="7" y="220" rx="0" ry="0" width="77" height="30" />
    <rect x="168" y="219" rx="6" ry="6" width="38" height="31" />
    <rect x="44" y="50" rx="11" ry="11" width="121" height="87" />
    <rect x="8" y="166" rx="10" ry="10" width="198" height="35" />
  </ContentLoader>
);

export default Skeleton;
