import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

interface PropTypes{
  dT:boolean
}

function Icon(props: PropTypes) {
  return (
    <Svg width="14" height="14" viewBox="0 0 14 14" fill="none">
      <Path
        d="M7 8.3125V10.5C7 11.375 5.6875 12.25 4.8125 12.25H4.15625C3.9822 12.25 3.81528 12.3191 3.69221 12.4422C3.56914 12.5653 3.5 12.7322 3.5 12.9062V13.5625H10.5V12.9062C10.5 12.7322 10.4309 12.5653 10.3078 12.4422C10.1847 12.3191 10.0178 12.25 9.84375 12.25H9.1875C8.3125 12.25 7 11.375 7 10.5"
        stroke="#8797B1"
        stroke-width="0.5"
        stroke-miterlimit="10"
      />
      <Path
        d="M10.5 4.83438C10.5 5.76263 10.1313 6.65287 9.47487 7.30925C8.8185 7.96563 7.92826 8.33437 7 8.33437C6.07174 8.33437 5.1815 7.96563 4.52513 7.30925C3.86875 6.65287 3.5 5.76263 3.5 4.83438V0.4375H10.5V4.83438Z"
        stroke="#8797B1"
        stroke-width="0.5"
        stroke-miterlimit="10"
      />
      <Path
        d="M10.5 1.72784C11.8125 1.48722 12.6875 2.27472 12.6875 3.47784C12.6875 4.68097 11.7031 6.12472 10.5 6.12472H10.2594M3.5 1.72784C2.1875 1.48722 1.3125 2.27472 1.3125 3.47784C1.3125 4.68097 2.29688 6.12472 3.5 6.12472H3.74063L3.5 1.72784Z"
        stroke="#8797B1"
        stroke-width="0.5"
        stroke-miterlimit="10"
      />
    </Svg>
  );
}

export default Icon;