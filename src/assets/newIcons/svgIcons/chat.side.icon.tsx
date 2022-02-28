import React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';

interface PropTypes {
  dT: boolean;
}

function Icon(props: PropTypes) {
  return (
    <Svg width="20" height="14" viewBox="0 0 20 14" fill="none">
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M8.78455 10.4069L8.43832 11.3451C8.33524 11.6244 8.2091 11.9334 8.05557 12.2501C8.7844 11.8003 9.46403 11.2121 10.0329 10.6432L10.2555 10.4207L10.57 10.4094C13.0878 10.3193 15.3017 9.69111 16.8591 8.76881C18.437 7.83434 19.2 6.69698 19.2 5.61033C19.2 4.47992 18.3733 3.29203 16.6774 2.34097C15.0071 1.40434 12.6471 0.8 10 0.8C7.34684 0.8 4.98693 1.40444 3.31847 2.34083C1.62476 3.2914 0.8 4.47911 0.8 5.61033C0.8 6.57961 1.3983 7.58359 2.64783 8.45853C3.88943 9.32792 5.68173 9.99427 7.79325 10.2751L8.78455 10.4069ZM7.26352 13.5316C6.78045 13.7095 6.28431 13.8146 5.78638 13.8146C6.17038 13.5746 6.49746 13.2364 6.77483 12.8531C7.00597 12.5337 7.20259 12.1829 7.36888 11.8314C7.49099 11.5733 7.59674 11.3148 7.68779 11.0681C7.41423 11.0317 7.14505 10.989 6.88074 10.9404C2.88126 10.2045 0 8.09848 0 5.61033C0 2.51174 4.47183 0 10 0C15.5164 0 20 2.51174 20 5.61033C20 8.59155 15.8451 11.0211 10.5986 11.2089C9.71419 12.0933 8.53406 13.064 7.26352 13.5316Z"
        fill="#816D2E"
      />
    </Svg>
  );
}

export default Icon;
