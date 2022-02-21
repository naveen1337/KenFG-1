import * as React from 'react';
import Svg, {SvgProps, Path, Rect} from 'react-native-svg';

interface PropTypes {
  white: boolean;
}

function Icon(props: PropTypes) {
  console.log('<< DEPRECATED MOVE TO cap.icon SVG ICON LOCATION >>');

  return (
    <Svg width="17" height="17" viewBox="0 0 17 17" fill="none">
      <Path
        d="M11.2065 11.4243C10.7466 11.647 10.146 11.7583 9.40479 11.7583C8.43799 11.7583 7.67773 11.4741 7.12402 10.9058C6.57031 10.3374 6.29346 9.58008 6.29346 8.63379C6.29346 7.62598 6.604 6.80859 7.2251 6.18164C7.84912 5.55469 8.65771 5.24121 9.65088 5.24121C10.2661 5.24121 10.7847 5.31885 11.2065 5.47412V6.84082C10.7847 6.58887 10.3042 6.46289 9.76514 6.46289C9.17334 6.46289 8.6958 6.64893 8.33252 7.021C7.96924 7.39307 7.7876 7.89697 7.7876 8.53271C7.7876 9.14209 7.95898 9.62842 8.30176 9.9917C8.64453 10.3521 9.10596 10.5322 9.68604 10.5322C10.2397 10.5322 10.7466 10.3975 11.2065 10.1279V11.4243Z"
        fill={props.white ? '#FFFFFF' : '#8797B1'}
      />
      <Rect
        x="1.25"
        y="1"
        width="15"
        height="15"
        rx="7.5"
        stroke={props.white ? '#FFFFFF' : '#8797B1'}
      />
    </Svg>
  );
}

export default Icon;
