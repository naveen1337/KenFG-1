import React from 'react';
import SvG, {
  G,
  Path,
  Defs,
  RadialGradient,
  Rect,
  Stop,
  ClipPath,
} from 'react-native-svg';

interface PropTypes {
  color: strinG;
}

function Icon(props: PropTypes) {
  return (
    <SvG width="73" height="72" viewBox="0 0 73 72" fill="none">
      <G clipPath="url(#clip0_1860_3844)">
        <Path
          d="M62.2695 58.129C62.0952 59.2471 61.7644 60.3727 61.4512 61.4382C61.3123 61.9095 61.181 62.3858 61.0573 62.8671C60.3476 65.5596 59.8349 68.3549 59.4688 71.1476C59.4309 71.4309 59.3955 71.7167 59.3602 72H13.6373C13.607 71.7167 13.5716 71.4309 13.5338 71.1476C13.1651 68.3549 12.6524 65.5596 11.9427 62.8671C11.819 62.3858 11.6902 61.9095 11.5513 61.4382C11.2356 60.3727 10.9073 59.2471 10.7331 58.129C10.5058 56.6624 10.5512 55.2109 11.2811 53.9373C11.7205 53.1702 12.3569 52.5685 13.0792 52.0471C13.7989 51.5181 14.602 51.0694 15.3647 50.6106C18.9357 48.4571 22.0975 45.6292 24.628 42.3276C24.926 41.9365 25.2164 41.5404 25.4967 41.1368C25.7442 41.6908 26.0624 42.2223 26.4008 42.7312C27.7999 44.8446 29.6056 46.785 31.6411 48.3192H41.3614C43.3944 46.785 45.2001 44.8446 46.6017 42.7312C46.9401 42.2223 47.2583 41.6908 47.5033 41.1343C48.0336 41.8964 48.5968 42.6359 49.1928 43.3504C51.5718 46.2159 54.4381 48.6827 57.6353 50.6106C58.4005 51.0694 59.2011 51.5181 59.9208 52.0471C60.6431 52.5685 61.2795 53.1702 61.7214 53.9373C62.4488 55.2109 62.4967 56.6624 62.2695 58.129Z"
          fill={props.color ? props.color : '#E84097'}
        />
        <Path
          d="M3.55073 70.2025C3.34617 67.6855 3.3386 65.1535 3.53558 62.6365C3.56588 62.2454 3.60629 61.8418 3.70731 61.4632C3.81085 61.0822 4.34119 61.032 4.51797 61.3855C5.19226 62.7468 5.84129 64.1181 6.47012 65.5019C6.84894 66.3343 7.21765 67.1691 7.57879 68.0089C7.90962 68.776 8.40713 69.6259 8.57886 70.4381C8.25055 70.1875 8.02074 69.5206 7.81113 69.1521C7.55353 68.6958 7.29594 68.237 7.03835 67.7808C6.51558 66.8507 5.99282 65.9231 5.47006 64.9955C5.33621 64.7599 5.19731 64.5167 5.03063 64.3011C4.79324 63.9953 4.30078 64.1231 4.25533 64.5067L3.55073 70.2025Z"
          fill="#1A3C59"
        />
        <Path
          d="M8.35157 64.973C8.26065 64.5819 8.77584 64.3262 9.03091 64.6395C9.2784 64.9479 9.47791 65.3114 9.65974 65.6624C10.5361 67.3872 11.3063 69.1671 11.968 70.9847C12.0917 71.3256 12.2155 71.6716 12.3721 72H10.6421C10.6396 71.9925 10.6371 71.9824 10.6346 71.9749C9.91986 69.6259 8.90464 67.3571 8.35157 64.973Z"
          fill="#1A3C59"
        />
        <Path
          d="M24.4259 38.7025C24.6128 38.5772 24.7946 38.4568 24.9663 38.339C24.7946 38.4568 24.6153 38.5797 24.4259 38.7025Z"
          fill="#1A3C59"
        />
        <Path
          d="M25.2997 38.1084C25.2416 38.151 25.1785 38.1936 25.1179 38.2387C25.0674 38.2713 25.0169 38.3039 24.9664 38.339C25.0169 38.3039 25.0674 38.2688 25.1179 38.2337C25.1482 38.2111 25.176 38.1936 25.2088 38.171C25.2391 38.1485 25.2694 38.1284 25.2997 38.1084Z"
          fill="#1A3C59"
        />
        <Path
          d="M25.7593 37.7774C25.7113 37.815 25.6608 37.8501 25.6129 37.8852C25.6457 37.8602 25.6785 37.8351 25.7113 37.81C25.729 37.8 25.7442 37.7875 25.7593 37.7774Z"
          fill="#1A3C59"
        />
        <Path
          d="M45.7405 37.8702C45.733 37.8978 45.7279 37.9253 45.7178 37.9529C45.6875 38.0707 45.6496 38.1886 45.6092 38.3014C45.4425 38.7526 45.1976 39.1788 44.9476 39.5925C42.8464 43.1022 40.1164 46.3638 36.5 48.3192C32.8861 46.3638 30.1536 43.1022 28.055 39.5925C27.8176 39.2014 27.5878 38.8003 27.4236 38.3766C27.3681 38.2387 27.3201 38.0983 27.2847 37.9529C27.2746 37.9253 27.2696 37.8978 27.262 37.8702C27.1408 37.3688 27.1433 36.8248 27.3352 36.356C27.3883 36.2858 27.4463 36.2231 27.507 36.168C27.8176 35.8797 28.1913 35.7693 28.6181 35.7693C28.7015 35.7693 28.7899 35.7744 28.8783 35.7819C28.8934 35.7844 28.9086 35.7844 28.9237 35.7869C28.9667 35.7919 29.0096 35.7969 29.0525 35.8044C29.1005 35.8095 29.1535 35.8195 29.204 35.8295C29.2546 35.837 29.3076 35.8496 29.3606 35.8596C29.5197 35.8947 29.6839 35.9373 29.8506 35.9849C29.944 36.015 30.0374 36.0426 30.1334 36.0727C30.4945 36.1905 30.8759 36.3284 31.2698 36.4688C33.0124 37.0955 36.5 36.9978 36.5 36.9978C36.5 36.9978 39.9876 37.0955 41.7302 36.4688C42.1065 36.3359 42.4676 36.2031 42.8136 36.0902C42.8717 36.0727 42.9297 36.0551 42.9853 36.0376C43.1545 35.9824 43.3212 35.9348 43.4803 35.8972C43.5535 35.8797 43.6242 35.8621 43.695 35.8496C43.7707 35.832 43.8439 35.8195 43.9172 35.8095C43.9273 35.807 43.9374 35.8044 43.945 35.8044C43.9525 35.8019 43.9601 35.8019 43.9652 35.8019C44.0258 35.7919 44.0864 35.7844 44.1445 35.7819C44.2707 35.7693 44.3894 35.7668 44.5031 35.7744C44.5283 35.7744 44.5536 35.7769 44.5814 35.7794C44.6571 35.7844 44.7304 35.7944 44.8011 35.812C44.8263 35.817 44.8491 35.822 44.8743 35.8295C44.9122 35.837 44.9501 35.8496 44.9854 35.8621C45.0284 35.8772 45.0688 35.8922 45.1117 35.9122C45.1496 35.9298 45.19 35.9499 45.2279 35.9724C45.2506 35.985 45.2708 35.9975 45.2935 36.0125C45.3643 36.0551 45.4299 36.1078 45.4956 36.168C45.5562 36.2231 45.6117 36.2858 45.6673 36.356C45.8567 36.8248 45.8592 37.3688 45.7405 37.8702Z"
          fill="#1A3C59"
        />
        <Path
          d="M46.1017 36.8524L46.0714 36.8223C46.0739 36.8273 46.0789 36.8298 46.084 36.8323C46.089 36.8398 46.0941 36.8448 46.1017 36.8524Z"
          fill="#1A3C59"
        />
        <Path
          d="M46.5841 37.2685C46.5664 37.256 46.5436 37.2384 46.526 37.2234C46.5159 37.2134 46.5058 37.2058 46.4957 37.1958C46.5234 37.2184 46.5538 37.2434 46.5841 37.2685Z"
          fill="#1A3C59"
        />
        <Path
          d="M46.9679 37.5719C46.9452 37.5568 46.9275 37.5418 46.9073 37.5242C46.9224 37.5368 46.9401 37.5493 46.9578 37.5618C46.9603 37.5644 46.9654 37.5669 46.9679 37.5719Z"
          fill="#1A3C59"
        />
        <Path
          d="M64.4211 70.4381C64.5929 69.6259 65.0904 68.776 65.4212 68.0089C65.7823 67.1691 66.1536 66.3343 66.5299 65.5019C67.1587 64.1181 67.8103 62.7468 68.4846 61.3855C68.6588 61.032 69.1892 61.0822 69.2927 61.4632C69.3962 61.8418 69.4366 62.2454 69.467 62.6365C69.6614 65.1535 69.6564 67.6855 69.4493 70.2025L68.7472 64.5067C68.6992 64.1231 68.2068 63.9953 67.9719 64.3011C67.8052 64.5167 67.6638 64.7599 67.5325 64.9955C67.0097 65.9231 66.4844 66.8507 65.9617 67.7808C65.7041 68.237 65.4465 68.6958 65.1889 69.1521C64.9818 69.5206 64.7494 70.1875 64.4211 70.4381Z"
          fill="#1A3C59"
        />
        <Path
          d="M64.6484 64.973C64.0978 67.3571 63.0826 69.6259 62.3654 71.9749C62.3629 71.9824 62.3603 71.9925 62.3578 72H60.6304C60.7845 71.6716 60.9082 71.3256 61.032 70.9847C61.6936 69.1671 62.4639 67.3872 63.3427 65.6624C63.522 65.3114 63.7216 64.9479 63.9716 64.6395C64.2266 64.3262 64.7393 64.5819 64.6484 64.973Z"
          fill="#1A3C59"
        />
        <Path
          d="M10.6346 71.9749C10.6371 71.9824 10.6396 71.9925 10.6422 72H0C0.97229 68.5655 2.46987 63.1554 2.69463 61.6136C3.03304 59.3072 2.74261 46.9529 10.6851 44.9323C11.0563 44.837 11.4276 44.7368 11.7988 44.629C11.9503 44.5838 12.1018 44.5387 12.2534 44.4936C12.4049 44.4459 12.5539 44.3983 12.7054 44.3507C12.8822 44.2955 13.0565 44.2379 13.2332 44.1777C13.4429 44.1075 13.6525 44.0373 13.8621 43.9621C14.049 43.8969 14.2358 43.8292 14.4202 43.7615C14.6803 43.6638 14.9379 43.566 15.193 43.4657C15.3698 43.3955 15.544 43.3278 15.7183 43.2551C15.9228 43.1749 16.1249 43.0922 16.3244 43.0044C16.5163 42.9242 16.7082 42.844 16.8976 42.7588C17.3042 42.5808 17.7032 42.4003 18.0947 42.2173C18.4786 42.0393 18.8548 41.8563 19.2236 41.6732C19.4079 41.5805 19.5897 41.4902 19.7716 41.3975C19.9509 41.3047 20.1302 41.212 20.307 41.1192C21.0116 40.7482 21.6808 40.3746 22.3046 40.0111C22.3829 39.966 22.4612 39.9209 22.5369 39.8758C23.2289 39.4696 23.8602 39.0735 24.4259 38.7025C24.6153 38.5797 24.7946 38.4568 24.9664 38.339C25.0169 38.3039 25.0674 38.2713 25.1179 38.2387C25.0346 38.6047 25.0017 38.9808 25.0245 39.3568C25.0421 39.6025 25.08 39.8432 25.1381 40.0813C25.2214 40.4423 25.3452 40.7933 25.4967 41.1368C25.2164 41.5404 24.926 41.9365 24.628 42.3276C22.0975 45.6292 18.9357 48.4571 15.3647 50.6106C14.602 51.0694 13.7989 51.5181 13.0792 52.0471C12.3569 52.5685 11.7205 53.1702 11.2811 53.9373C10.5512 55.2109 10.5058 56.6624 10.7331 58.129C10.9073 59.2471 11.2356 60.3727 11.5513 61.4382C11.6902 61.9095 11.819 62.3858 11.9427 62.8671C12.6524 65.5596 13.1651 68.3549 13.5338 71.1476C13.5716 71.4309 13.607 71.7167 13.6373 72H12.3721"
          fill="#2E292F"
        />
        <Path
          opacity="0.2"
          d="M3.55073 70.2025C3.34617 67.6855 3.3386 65.1535 3.53558 62.6365C3.56588 62.2454 3.60629 61.8418 3.70731 61.4632C3.81085 61.0822 4.34119 61.032 4.51797 61.3855C5.19226 62.7468 5.84129 64.1181 6.47012 65.5019C6.84894 66.3342 7.21765 67.1691 7.57879 68.0089C7.90962 68.776 8.40713 69.6259 8.57886 70.4381C8.25055 70.1874 8.02074 69.5206 7.81113 69.1521C7.55353 68.6958 7.29594 68.237 7.03835 67.7808C6.51558 66.8507 5.99282 65.9231 5.47006 64.9955C5.33621 64.7599 5.19731 64.5167 5.03063 64.3011C4.79324 63.9952 4.30078 64.1231 4.25533 64.5067L3.55073 70.2025Z"
          fill="white"
        />
        <Path
          opacity="0.2"
          d="M8.35157 64.973C8.26065 64.5819 8.77584 64.3262 9.03091 64.6395C9.2784 64.9479 9.47791 65.3114 9.65974 65.6624C10.5361 67.3872 11.3063 69.1671 11.968 70.9847C12.0917 71.3256 12.2155 71.6716 12.3721 72H10.6421C10.6396 71.9925 10.6371 71.9824 10.6346 71.9749C9.91986 69.6259 8.90464 67.3571 8.35157 64.973Z"
          fill="white"
        />
        <Path
          d="M46.9679 37.5719C46.9452 37.5568 46.9275 37.5418 46.9073 37.5242C46.9224 37.5368 46.9401 37.5493 46.9578 37.5618C46.9603 37.5644 46.9654 37.5669 46.9679 37.5719Z"
          fill="url(#paint0_radial_1860_3844)"
        />
        <Path
          d="M47.4301 37.9153C47.4174 37.9053 47.4048 37.8953 47.3922 37.8877C47.3568 37.8627 47.3215 37.8376 47.2886 37.81C47.3215 37.8351 47.3568 37.8602 47.3922 37.8852C47.4048 37.8953 47.4174 37.9053 47.4301 37.9153Z"
          fill="url(#paint1_radial_1860_3844)"
        />
        <Path
          d="M60.6305 72H59.3602C59.3955 71.7167 59.4309 71.4309 59.4688 71.1476C59.835 68.3549 60.3476 65.5596 61.0573 62.8671C61.181 62.3858 61.3123 61.9095 61.4512 61.4382C61.7644 60.3727 62.0952 59.2471 62.2695 58.129C62.4968 56.6624 62.4488 55.2109 61.7214 53.9373C61.2795 53.1702 60.6431 52.5685 59.9208 52.0471C59.2011 51.5181 58.4005 51.0694 57.6353 50.6106C54.4381 48.6827 51.5718 46.2159 49.1928 43.3504C48.5968 42.6359 48.0336 41.8964 47.5033 41.1343C47.6649 40.7733 47.7937 40.4022 47.8771 40.0212C47.925 39.8031 47.9604 39.5824 47.9755 39.3568C47.9983 38.9783 47.9654 38.6047 47.8846 38.2362C48.8948 38.9356 50.208 39.7554 51.7233 40.5953C51.8698 40.6755 52.0213 40.7582 52.1728 40.8409C53.0315 41.3047 53.9482 41.7685 54.9078 42.2173C55.0543 42.2875 55.2033 42.3551 55.3523 42.4228C56.0872 42.7588 56.8449 43.0847 57.6202 43.3905C57.8348 43.4758 58.0495 43.561 58.2667 43.6412C58.3879 43.6863 58.5066 43.7315 58.6278 43.7766C59.0041 43.917 59.3854 44.0499 59.7693 44.1777C59.9461 44.2379 60.1229 44.2955 60.2996 44.3532C60.3703 44.3758 60.4411 44.3983 60.5118 44.4209C60.6532 44.4635 60.7921 44.5061 60.931 44.5487C61.0194 44.5763 61.1103 44.6014 61.1987 44.6265C61.2214 44.634 61.2441 44.6415 61.2669 44.6465C61.4032 44.6866 61.5396 44.7242 61.676 44.7618C61.8881 44.822 62.1028 44.8772 62.3149 44.9323C70.2599 46.9529 69.967 59.3072 70.3054 61.6136C70.5327 63.1554 72.0302 68.5655 73 72H62.3579C62.3604 71.9925 62.3629 71.9824 62.3654 71.9749"
          fill="#2E292F"
        />
        <Path
          opacity="0.2"
          d="M64.4211 70.4381C64.5929 69.6259 65.0904 68.776 65.4212 68.0089C65.7823 67.1691 66.1536 66.3343 66.5299 65.5019C67.1587 64.1181 67.8103 62.7468 68.4846 61.3855C68.6588 61.032 69.1892 61.0822 69.2927 61.4632C69.3962 61.8418 69.4366 62.2454 69.467 62.6365C69.6614 65.1535 69.6564 67.6855 69.4493 70.2025L68.7472 64.5067C68.6992 64.1231 68.2068 63.9953 67.9719 64.3011C67.8052 64.5167 67.6638 64.7599 67.5325 64.9955C67.0097 65.9231 66.4844 66.8507 65.9617 67.7808C65.7041 68.237 65.4465 68.6958 65.1889 69.1521C64.9818 69.5206 64.7494 70.1875 64.4211 70.4381Z"
          fill="white"
        />
        <Path
          opacity="0.2"
          d="M64.6484 64.973C64.0978 67.3571 63.0826 69.6259 62.3654 71.9749C62.3629 71.9824 62.3603 71.9925 62.3578 72H60.6304C60.7845 71.6716 60.9082 71.3256 61.032 70.9847C61.6936 69.1671 62.4639 67.3872 63.3427 65.6624C63.522 65.3114 63.7216 64.9479 63.9716 64.6395C64.2266 64.3262 64.7393 64.5819 64.6484 64.973Z"
          fill="white"
        />
        <Path
          d="M25.7594 37.7774C25.7114 37.815 25.6609 37.8501 25.6129 37.8852C25.5876 37.9028 25.5599 37.9203 25.5346 37.9404C25.5952 37.8978 25.6533 37.8526 25.7114 37.81C25.7291 37.8 25.7442 37.7875 25.7594 37.7774Z"
          fill="url(#paint2_radial_1860_3844)"
        />
        <Path
          d="M26.0018 37.5944C25.9892 37.6044 25.974 37.617 25.9589 37.6295C25.9336 37.6471 25.9084 37.6671 25.8831 37.6847C25.9235 37.6546 25.9639 37.6245 26.0018 37.5944Z"
          fill="url(#paint3_radial_1860_3844)"
        />
        <Path
          d="M26.2998 37.3638C26.2948 37.3688 26.2922 37.3738 26.2872 37.3763C26.2493 37.4064 26.2064 37.439 26.1635 37.4716C26.2114 37.434 26.2569 37.3989 26.2998 37.3638Z"
          fill="url(#paint4_radial_1860_3844)"
        />
        <Path
          d="M45.7405 37.8702C45.733 37.8978 45.7279 37.9253 45.7178 37.9529C45.4425 37.7148 44.9324 37.6621 44.344 37.7273H44.3415C43.5459 37.8125 42.604 38.1083 41.8918 38.4418C40.2452 39.2114 36.5 39.0685 36.5 39.0685C36.5 39.0685 32.7548 39.2114 31.1082 38.4418C30.4036 38.1109 29.4717 37.8175 28.6813 37.7298C28.0828 37.6621 27.565 37.7122 27.2847 37.9529C27.2746 37.9253 27.2696 37.8978 27.262 37.8702C27.1408 37.3688 27.1433 36.8248 27.3352 36.356C27.3883 36.2858 27.4463 36.2231 27.507 36.168C27.8176 35.8797 28.1913 35.7693 28.6181 35.7693C28.7015 35.7693 28.7899 35.7744 28.8783 35.7819C28.8934 35.7844 28.9086 35.7844 28.9237 35.7869C28.9667 35.7919 29.0096 35.7969 29.0525 35.8044C29.1005 35.8095 29.1535 35.8195 29.204 35.8295C29.2546 35.837 29.3076 35.8496 29.3606 35.8596C29.5197 35.8947 29.6839 35.9373 29.8506 35.9849C29.944 36.015 30.0374 36.0426 30.1334 36.0727C30.4945 36.1905 30.8759 36.3284 31.2698 36.4688C33.0124 37.0955 36.5 36.9978 36.5 36.9978C36.5 36.9978 39.9876 37.0955 41.7302 36.4688C42.1065 36.3359 42.4676 36.2031 42.8136 36.0902C42.8717 36.0727 42.9297 36.0551 42.9853 36.0376C43.1545 35.9824 43.3212 35.9348 43.4803 35.8972C43.5535 35.8797 43.6242 35.8621 43.695 35.8496C43.7707 35.832 43.8439 35.8195 43.9172 35.8095C43.9273 35.807 43.9374 35.8044 43.945 35.8044C43.9525 35.8019 43.9601 35.8019 43.9652 35.8019C44.0258 35.7919 44.0864 35.7844 44.1445 35.7819C44.2707 35.7693 44.3894 35.7668 44.5031 35.7744C44.5283 35.7744 44.5536 35.7769 44.5814 35.7794C44.6571 35.7844 44.7304 35.7944 44.8011 35.812C44.8263 35.817 44.8491 35.822 44.8743 35.8295C44.9122 35.837 44.9501 35.8496 44.9854 35.8621C45.0284 35.8772 45.0688 35.8922 45.1117 35.9122C45.1496 35.9298 45.19 35.9499 45.2279 35.9724C45.2506 35.985 45.2708 35.9975 45.2935 36.0125C45.3643 36.0551 45.4299 36.1078 45.4956 36.168C45.5562 36.2231 45.6117 36.2858 45.6673 36.356C45.8567 36.8248 45.8592 37.3688 45.7405 37.8702Z"
          fill="#2E292F"
        />
        <Path
          d="M46.1623 36.9075C46.1421 36.89 46.1219 36.8699 46.1017 36.8524L46.0714 36.8223C46.0739 36.8273 46.0789 36.8298 46.084 36.8323C46.1092 36.8574 46.1345 36.8824 46.1623 36.9075Z"
          fill="url(#paint5_radial_1860_3844)"
        />
        <Path
          d="M46.9679 37.5719C46.9452 37.5568 46.9275 37.5418 46.9073 37.5242C46.9224 37.5368 46.9401 37.5493 46.9578 37.5618C46.9603 37.5644 46.9654 37.5669 46.9679 37.5719Z"
          fill="url(#paint6_radial_1860_3844)"
        />
        <Path
          d="M47.3922 37.8852V37.8877C47.3568 37.8627 47.3215 37.8376 47.2886 37.81C47.3215 37.8351 47.3568 37.8602 47.3922 37.8852Z"
          fill="url(#paint7_radial_1860_3844)"
        />
        <Path
          d="M36.5 48.3192H31.6411C29.6056 46.785 27.7999 44.8446 26.4008 42.7312C26.0624 42.2223 25.7442 41.6908 25.4967 41.1368C25.3452 40.7933 25.2215 40.4423 25.1381 40.0813C25.08 39.8432 25.0422 39.6025 25.0245 39.3568C25.0017 38.9808 25.0346 38.6047 25.1179 38.2387C25.1785 38.1936 25.2417 38.151 25.2997 38.1084C25.3174 38.0958 25.3326 38.0833 25.3477 38.0733C25.3856 38.0457 25.4235 38.0206 25.4588 37.9955C25.4841 37.978 25.5094 37.9579 25.5346 37.9404C25.5599 37.9203 25.5876 37.9028 25.6129 37.8852C25.6609 37.8501 25.7114 37.815 25.7594 37.7774C25.7695 37.7699 25.7771 37.7649 25.7846 37.7574C25.8175 37.7348 25.8503 37.7097 25.8831 37.6847C25.9084 37.6671 25.9336 37.6471 25.9589 37.6295C25.974 37.617 25.9892 37.6045 26.0018 37.5944C26.017 37.5844 26.0321 37.5744 26.0447 37.5618C26.0852 37.5318 26.1256 37.5017 26.1634 37.4716C26.2064 37.439 26.2493 37.4064 26.2872 37.3763C26.2922 37.3738 26.2948 37.3688 26.2998 37.3638C26.3049 37.3588 26.3099 37.3563 26.315 37.3538L26.3175 37.3513C26.3352 37.3362 26.3554 37.3212 26.3731 37.3061C26.3832 37.2986 26.3933 37.2886 26.4034 37.2836C26.4109 37.276 26.416 37.271 26.4236 37.266C26.4539 37.2409 26.4842 37.2159 26.512 37.1933C26.6711 37.0604 26.8049 36.9401 26.9185 36.8323C26.9488 36.8047 26.9792 36.7746 27.0044 36.7496C27.1155 36.6393 27.1963 36.5465 27.2494 36.4688C27.2746 36.4287 27.3024 36.3911 27.3352 36.356C27.1433 36.8248 27.1408 37.3688 27.262 37.8702C27.2696 37.8978 27.2746 37.9253 27.2847 37.9529C27.3201 38.0983 27.3681 38.2387 27.4236 38.3766C27.5878 38.8003 27.8176 39.2014 28.055 39.5925C30.1536 43.1022 32.8861 46.3638 36.5 48.3192Z"
          fill="#2E292F"
        />
        <Path
          d="M25.2998 38.1084C25.2417 38.151 25.1785 38.1936 25.1179 38.2387C25.1179 38.2362 25.1179 38.2362 25.1179 38.2337C25.1482 38.2111 25.176 38.1936 25.2088 38.171C25.2391 38.1485 25.2694 38.1284 25.2998 38.1084Z"
          fill="white"
        />
        <Path
          d="M25.7594 37.7774C25.7114 37.815 25.6609 37.8501 25.6129 37.8852C25.6457 37.8602 25.6786 37.8351 25.7114 37.81C25.7291 37.8 25.7442 37.7875 25.7594 37.7774Z"
          fill="white"
        />
        <Path
          d="M47.9755 39.3568C47.9604 39.5824 47.925 39.8031 47.877 40.0212C47.7937 40.4022 47.6649 40.7733 47.5033 41.1343C47.2583 41.6908 46.9401 42.2223 46.6017 42.7312C45.2001 44.8446 43.3944 46.785 41.3614 48.3192H36.5C40.1164 46.3638 42.8464 43.1022 44.9476 39.5925C45.1976 39.1788 45.4425 38.7526 45.6092 38.3014C45.6496 38.1886 45.6875 38.0707 45.7178 37.9529C45.7279 37.9253 45.733 37.8978 45.7405 37.8702C45.8592 37.3688 45.8567 36.8248 45.6673 36.356C45.6976 36.3911 45.7254 36.4287 45.7532 36.4688C45.7784 36.5064 45.8112 36.549 45.8517 36.5941C45.8517 36.5967 45.8567 36.5992 45.8592 36.6042C45.8971 36.6493 45.9426 36.6969 45.9956 36.7496C46.0183 36.7721 46.0436 36.7972 46.0714 36.8223L46.1017 36.8524C46.1219 36.8699 46.1421 36.89 46.1623 36.9075C46.1825 36.9276 46.2027 36.9451 46.2254 36.9652C46.2456 36.9827 46.2658 37.0003 46.286 37.0178C46.3239 37.0504 46.3618 37.0855 46.4022 37.1181C46.43 37.1432 46.4603 37.1682 46.4906 37.1933C46.4906 37.1933 46.4931 37.1958 46.4956 37.1958C46.5057 37.2058 46.5158 37.2134 46.5259 37.2234C46.5436 37.2384 46.5664 37.256 46.584 37.2685C46.5866 37.271 46.5866 37.2735 46.5891 37.2735C46.6118 37.2936 46.6371 37.3136 46.6623 37.3312C46.6699 37.3387 46.6749 37.3437 46.6825 37.3487C46.7027 37.3638 46.7229 37.3813 46.7431 37.3964C46.7633 37.4139 46.7835 37.429 46.8037 37.444C46.8391 37.4716 46.8719 37.4967 46.9073 37.5242C46.9275 37.5418 46.9452 37.5568 46.9679 37.5719C47.0108 37.607 47.0563 37.6396 47.1043 37.6746C47.1169 37.6847 47.127 37.6922 47.1396 37.6997C47.1674 37.7223 47.1952 37.7423 47.223 37.7624C47.2432 37.7799 47.2659 37.795 47.2886 37.81C47.3215 37.8376 47.3568 37.8627 47.3922 37.8877C47.4048 37.8953 47.4174 37.9053 47.43 37.9153C47.4351 37.9203 47.4427 37.9228 47.4477 37.9279C47.4528 37.9329 47.4604 37.9354 47.4654 37.9404C47.526 37.9855 47.5891 38.0281 47.6523 38.0733C47.6977 38.1058 47.7432 38.1384 47.7912 38.171C47.824 38.1936 47.8518 38.2111 47.8846 38.2337V38.2362C47.9654 38.6047 47.9983 38.9783 47.9755 39.3568Z"
          fill="#2E292F"
        />
        <Path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M50.4808 18.4212C50.1979 18.2708 49.8141 18.3059 49.3317 18.534C49.2256 18.5841 49.112 18.6468 48.9933 18.717C48.8898 18.7797 48.7887 18.8474 48.6928 18.9201C48.1271 19.3462 47.7154 19.9329 47.4275 20.5897C46.9401 21.7078 46.8113 23.0164 46.9098 24.0343C46.9654 24.6334 47.1497 25.5786 47.8947 26.4635C48.0286 26.624 48.1549 26.7418 48.266 26.8245C48.4352 26.9524 48.5817 27.0025 48.6953 26.99C49.2559 26.9373 49.4655 25.8919 49.9277 24.5432C50.5161 22.8234 51.0869 21.8908 51.0768 20.1936C51.0692 19.1808 50.8747 18.6242 50.4808 18.4212Z"
          fill="#E5856E"
        />
        <Path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M24.287 19.3061C23.4486 18.5214 22.8576 18.2733 22.5016 18.4187C22.2313 18.529 22.0116 18.8774 21.9056 19.5994C21.7237 20.8429 22.1834 21.5223 22.5016 22.851C22.7162 23.751 22.691 24.3827 23.0976 25.215C23.6683 26.3858 24.2643 26.9925 24.883 26.9875C25.7644 26.9824 26.4336 25.744 26.6685 24.9192C27.3605 22.4925 25.128 20.0933 24.287 19.3061Z"
          fill="#E5856E"
        />
        <Path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M44.3439 37.7273H44.3414C44.3338 37.7248 44.3237 37.7223 44.3162 37.7173C44.2076 37.0705 44.0864 36.4387 43.9449 35.8044C43.902 35.6064 43.8591 35.4083 43.8111 35.2103C43.7025 34.7465 43.5863 34.2877 43.46 33.8315C43.3338 33.3702 43.1974 32.9114 43.0535 32.4526C38.4243 32.6181 33.7927 32.7861 29.1636 32.954C29.1434 33.1571 29.1232 33.3577 29.103 33.5607C29.0272 34.3003 28.954 35.0423 28.8782 35.7819C28.8126 36.4312 28.7494 37.0805 28.6812 37.7298C28.6737 37.81 28.6661 37.8877 28.6585 37.968C28.2469 38.1033 27.8352 38.2387 27.4236 38.3766C27.5877 38.8003 27.8176 39.2014 28.0549 39.5925C30.1536 43.1022 32.8861 46.3638 36.5 48.3192C40.1164 46.3638 42.8464 43.1022 44.9475 39.5925C45.1975 39.1788 45.4425 38.7526 45.6092 38.3014C45.1874 38.1083 44.7657 37.9178 44.3439 37.7273Z"
          fill="#CC7564"
        />
        <Path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M48.3973 11.4643C47.6472 10.098 44.9172 7.58356 40.3614 6.14457C35.3762 4.57019 31.684 5.24958 30.2394 6.14457C29.4869 6.61086 27.618 8.86211 26.3705 11.7602C25.1179 14.6682 24.4815 17.4159 24.287 20.0331C24.2542 20.4593 24.2365 20.8805 24.2264 21.2966C24.1809 23.746 24.5143 25.9596 24.8805 27.1228C25.3149 28.5017 26.0927 30.1187 27.262 31.851C27.4337 32.1042 27.6079 32.3423 27.7847 32.5655C28.5626 33.5632 29.3858 34.3379 30.2369 35.3958C30.4516 35.6616 30.6486 35.9097 30.8354 36.1429V36.1454C31.6133 37.1206 32.2143 37.8326 33.2144 38.349C34.0074 38.7602 34.8206 38.9808 35.6262 39.066H35.6388C36.207 39.1287 36.7677 39.1212 37.293 39.066H37.3056C37.995 38.9958 38.6239 38.8404 39.1693 38.6423C40.4674 38.1685 41.3614 37.2886 42.2857 36.1103C43.0055 35.1978 43.7454 34.1047 44.7076 32.8813C44.7455 32.8312 44.7859 32.7836 44.8238 32.7334C45.7708 31.5426 46.5891 30.7153 47.2053 29.4819C47.8088 28.276 48.1144 27.1529 48.2659 26.0649C48.372 25.3003 48.4023 24.5557 48.4048 23.8161C48.4099 23.1418 48.3947 22.4749 48.3947 21.798C48.3947 20.4568 48.5336 19.256 48.6902 18.1604C49.0614 15.5407 49.516 13.4975 48.3973 11.4643Z"
          fill="#F59275"
        />
        <Path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M48.0993 5.84874C47.3998 4.61531 46.4957 3.53481 45.4198 2.59721C42.7252 2.06573 40.0457 1.45905 37.6794 0.824784C35.2979 0.183001 32.4315 -0.659339 29.9389 0.824784C29.0904 1.32618 28.401 2.03314 27.8555 2.89303C27.459 2.82033 27.06 2.81531 26.666 2.89303C25.5447 3.10863 24.4057 3.99609 23.3905 6.14456C21.8247 9.45375 22.6405 12.9058 23.0925 15.0092C23.5218 16.9947 23.8981 19.1081 24.2239 21.2966C24.3527 22.144 24.4714 23.0039 24.58 23.8738C24.5598 22.9813 24.6532 22.0914 24.878 21.2139C25.0497 20.532 25.3376 20.1284 25.474 19.4415C25.6962 18.2983 25.5018 17.5512 26.07 16.7816C26.368 16.378 26.7796 16.0897 27.2595 15.8941C27.3201 15.1045 27.3201 14.3173 27.2595 13.5301C27.2064 12.8331 27.1079 12.1437 26.9615 11.4618C27.757 11.0657 28.5474 10.6721 29.3429 10.2811C30.6309 10.3788 31.9239 10.4766 33.2119 10.5769C34.8004 11.5621 36.495 12.3518 38.2729 12.9409C40.4851 13.668 42.7858 14.0641 45.1193 14.1217C45.0486 14.6081 45.0461 15.1019 45.1193 15.5983C45.3718 17.288 46.4148 18.1329 47.2028 19.439C47.2811 19.5694 47.3543 19.6997 47.4225 19.8351C48.0362 20.9933 48.3544 22.337 48.3922 23.8713C48.3948 23.8538 48.3973 23.8387 48.4023 23.8212C48.8039 21.8031 49.117 19.7799 49.3292 17.7794C49.4428 16.7515 49.5262 15.7287 49.5842 14.7134C49.8014 10.9655 49.5337 8.37325 48.0993 5.84874Z"
          fill="#0C0C0C"
        />
      </G>
      <Defs>
        <RadialGradient
          id="paint0_radial_1860_3844"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(46.8921 37.5607) scale(0.0786135 0.078026)">
          <Stop offset="0.3262" stopColor="#FFBC36" />
          <Stop offset="0.5407" stopColor="#FDB933" />
          <Stop offset="0.7052" stopColor="#F8B129" />
          <Stop offset="0.8526" stopColor="#EEA419" />
          <Stop offset="0.99" stopColor="#E19102" />
          <Stop offset="1" stopColor="#E08F00" />
        </RadialGradient>
        <RadialGradient
          id="paint1_radial_1860_3844"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(47.2532 37.8907) scale(0.183243 0.181907)">
          <Stop offset="0.3262" stopColor="#FFBC36" />
          <Stop offset="0.5407" stopColor="#FDB933" />
          <Stop offset="0.7052" stopColor="#F8B129" />
          <Stop offset="0.8526" stopColor="#EEA419" />
          <Stop offset="0.99" stopColor="#E19102" />
          <Stop offset="1" stopColor="#E08F00" />
        </RadialGradient>
        <RadialGradient
          id="paint2_radial_1860_3844"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(25.647 37.8589) scale(0.0983902 0.0976689)">
          <Stop offset="0.3262" stopColor="#FFBC36" />
          <Stop offset="0.5407" stopColor="#FDB933" />
          <Stop offset="0.7052" stopColor="#F8B129" />
          <Stop offset="0.8526" stopColor="#EEA419" />
          <Stop offset="0.99" stopColor="#E19102" />
          <Stop offset="1" stopColor="#E08F00" />
        </RadialGradient>
        <RadialGradient
          id="paint3_radial_1860_3844"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(25.9425 37.6395) scale(0.0528602 0.0524715)">
          <Stop offset="0.3262" stopColor="#FFBC36" />
          <Stop offset="0.5407" stopColor="#FDB933" />
          <Stop offset="0.7052" stopColor="#F8B129" />
          <Stop offset="0.8526" stopColor="#EEA419" />
          <Stop offset="0.99" stopColor="#E19102" />
          <Stop offset="1" stopColor="#E08F00" />
        </RadialGradient>
        <RadialGradient
          id="paint4_radial_1860_3844"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(26.2316 37.4177) scale(0.0616206 0.0611743)">
          <Stop offset="0.3262" stopColor="#FFBC36" />
          <Stop offset="0.5407" stopColor="#FDB933" />
          <Stop offset="0.7052" stopColor="#F8B129" />
          <Stop offset="0.8526" stopColor="#EEA419" />
          <Stop offset="0.99" stopColor="#E19102" />
          <Stop offset="1" stopColor="#E08F00" />
        </RadialGradient>
        <RadialGradient
          id="paint5_radial_1860_3844"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(46.1168 36.8649) scale(0.0442222 0.0438944)">
          <Stop offset="0.3262" stopColor="#FFBC36" />
          <Stop offset="0.5407" stopColor="#FDB933" />
          <Stop offset="0.7052" stopColor="#F8B129" />
          <Stop offset="0.8526" stopColor="#EEA419" />
          <Stop offset="0.99" stopColor="#E19102" />
          <Stop offset="1" stopColor="#E08F00" />
        </RadialGradient>
        <RadialGradient
          id="paint6_radial_1860_3844"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(46.9376 37.5481) scale(0.0273241 0.0271199)">
          <Stop offset="0.3262" stopColor="#FFBC36" />
          <Stop offset="0.5407" stopColor="#FDB933" />
          <Stop offset="0.7052" stopColor="#F8B129" />
          <Stop offset="0.8526" stopColor="#EEA419" />
          <Stop offset="0.99" stopColor="#E19102" />
          <Stop offset="1" stopColor="#E08F00" />
        </RadialGradient>
        <RadialGradient
          id="paint7_radial_1860_3844"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(47.3404 37.8489) scale(0.0458886 0.0455499)">
          <Stop offset="0.3262" stopColor="#FFBC36" />
          <Stop offset="0.5407" stopColor="#FDB933" />
          <Stop offset="0.7052" stopColor="#F8B129" />
          <Stop offset="0.8526" stopColor="#EEA419" />
          <Stop offset="0.99" stopColor="#E19102" />
          <Stop offset="1" stopColor="#E08F00" />
        </RadialGradient>
        <ClipPath id="clip0_1860_3844">
          <Rect width="73" height="72" fill="white" />
        </ClipPath>
      </Defs>
    </SvG>
  );
}

export default React.memo(Icon);