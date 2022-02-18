import * as React from 'react';
import Svg, {Path, Circle} from 'react-native-svg';

interface PropTypes {
  Isbrown: boolean;
}

function Icon(props: PropTypes) {
  console.log('<< MOVE TO NEW POINTS ICON LOCATION >>');

  return (
    <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <Circle
        cx="12"
        cy="12"
        r="10.5"
        stroke={props.Isbrown ? '#614920' : 'white'}
      />
      <Path
        d="M6.08906 12.7872V15.2254H5.33333V8.77465H7.10571C7.79547 8.77465 8.32928 8.94259 8.70715 9.27847C9.08801 9.61436 9.27845 10.0882 9.27845 10.7C9.27845 11.3118 9.06702 11.8126 8.64417 12.2024C8.22432 12.5923 7.65602 12.7872 6.93927 12.7872H6.08906ZM6.08906 9.45841V12.1035H6.88079C7.4026 12.1035 7.79997 11.985 8.07287 11.7481C8.34877 11.5082 8.48673 11.1708 8.48673 10.736C8.48673 9.88426 7.9829 9.45841 6.97525 9.45841H6.08906Z"
        fill={props.Isbrown ? '#614920' : 'white'}
      />
      <Path
        d="M14.3122 9.45841H12.4498V15.2254H11.6941V9.45841H9.83625V8.77465H14.3122V9.45841Z"
        fill={props.Isbrown ? '#614920' : 'white'}
      />
      <Path
        d="M15.0274 14.9645V14.0738C15.1294 14.1638 15.2509 14.2447 15.3918 14.3167C15.5358 14.3887 15.6857 14.4502 15.8417 14.5011C16.0006 14.5491 16.1595 14.5866 16.3185 14.6136C16.4774 14.6406 16.6244 14.6541 16.7593 14.6541C17.2242 14.6541 17.5705 14.5686 17.7985 14.3977C18.0294 14.2237 18.1448 13.9748 18.1448 13.6509C18.1448 13.477 18.1059 13.3256 18.0279 13.1966C17.9529 13.0676 17.848 12.9507 17.713 12.8457C17.578 12.7378 17.4176 12.6358 17.2317 12.5398C17.0487 12.4409 16.8508 12.3374 16.6379 12.2294C16.413 12.1155 16.203 12 16.0081 11.8831C15.8132 11.7661 15.6437 11.6371 15.4998 11.4962C15.3558 11.3552 15.2419 11.1963 15.1579 11.0194C15.0769 10.8394 15.0364 10.6295 15.0364 10.3896C15.0364 10.0957 15.1009 9.84078 15.2299 9.62485C15.3588 9.40593 15.5283 9.22599 15.7382 9.08504C15.9481 8.94409 16.1865 8.83913 16.4534 8.77015C16.7233 8.70117 16.9977 8.66669 17.2767 8.66669C17.9124 8.66669 18.3758 8.74316 18.6667 8.89611V9.74631C18.2858 9.4824 17.797 9.35045 17.2002 9.35045C17.0352 9.35045 16.8703 9.36844 16.7054 9.40443C16.5404 9.43742 16.3935 9.4929 16.2645 9.57087C16.1355 9.64884 16.0306 9.74931 15.9496 9.87227C15.8686 9.99522 15.8282 10.1452 15.8282 10.3221C15.8282 10.487 15.8581 10.6295 15.9181 10.7495C15.9811 10.8694 16.0726 10.9789 16.1925 11.0778C16.3125 11.1768 16.4579 11.2728 16.6289 11.3657C16.8028 11.4587 17.0022 11.5607 17.2272 11.6716C17.4581 11.7856 17.677 11.9056 17.8839 12.0315C18.0909 12.1575 18.2723 12.2969 18.4282 12.4499C18.5842 12.6028 18.7071 12.7722 18.7971 12.9582C18.8901 13.1441 18.9366 13.357 18.9366 13.597C18.9366 13.9148 18.8736 14.1848 18.7476 14.4067C18.6247 14.6256 18.4567 14.804 18.2438 14.942C18.0339 15.0799 17.791 15.1789 17.5151 15.2389C17.2392 15.3019 16.9483 15.3334 16.6424 15.3334C16.5404 15.3334 16.4145 15.3244 16.2645 15.3064C16.1146 15.2914 15.9616 15.2674 15.8057 15.2344C15.6497 15.2044 15.5013 15.1669 15.3603 15.1219C15.2224 15.0739 15.1114 15.0215 15.0274 14.9645Z"
        fill={props.Isbrown ? '#614920' : 'white'}
      />
      <Path
        d="M6.08906 12.7872V15.2254H5.33333V8.77465H7.10571C7.79547 8.77465 8.32928 8.94259 8.70715 9.27847C9.08801 9.61436 9.27845 10.0882 9.27845 10.7C9.27845 11.3118 9.06702 11.8126 8.64417 12.2024C8.22432 12.5923 7.65602 12.7872 6.93927 12.7872H6.08906ZM6.08906 9.45841V12.1035H6.88079C7.4026 12.1035 7.79997 11.985 8.07287 11.7481C8.34877 11.5082 8.48673 11.1708 8.48673 10.736C8.48673 9.88426 7.9829 9.45841 6.97525 9.45841H6.08906Z"
        stroke={props.Isbrown ? '#614920' : 'white'}
      />
      <Path
        d="M14.3122 9.45841H12.4498V15.2254H11.6941V9.45841H9.83625V8.77465H14.3122V9.45841Z"
        stroke={props.Isbrown ? '#614920' : 'white'}
      />
      <Path
        d="M15.0274 14.9645V14.0738C15.1294 14.1638 15.2509 14.2447 15.3918 14.3167C15.5358 14.3887 15.6857 14.4502 15.8417 14.5011C16.0006 14.5491 16.1595 14.5866 16.3185 14.6136C16.4774 14.6406 16.6244 14.6541 16.7593 14.6541C17.2242 14.6541 17.5705 14.5686 17.7985 14.3977C18.0294 14.2237 18.1448 13.9748 18.1448 13.6509C18.1448 13.477 18.1059 13.3256 18.0279 13.1966C17.9529 13.0676 17.848 12.9507 17.713 12.8457C17.578 12.7378 17.4176 12.6358 17.2317 12.5398C17.0487 12.4409 16.8508 12.3374 16.6379 12.2294C16.413 12.1155 16.203 12 16.0081 11.8831C15.8132 11.7661 15.6437 11.6371 15.4998 11.4962C15.3558 11.3552 15.2419 11.1963 15.1579 11.0194C15.0769 10.8394 15.0364 10.6295 15.0364 10.3896C15.0364 10.0957 15.1009 9.84078 15.2299 9.62485C15.3588 9.40593 15.5283 9.22599 15.7382 9.08504C15.9481 8.94409 16.1865 8.83913 16.4534 8.77015C16.7233 8.70117 16.9977 8.66669 17.2767 8.66669C17.9124 8.66669 18.3758 8.74316 18.6667 8.89611V9.74631C18.2858 9.4824 17.797 9.35045 17.2002 9.35045C17.0352 9.35045 16.8703 9.36844 16.7054 9.40443C16.5404 9.43742 16.3935 9.4929 16.2645 9.57087C16.1355 9.64884 16.0306 9.74931 15.9496 9.87227C15.8686 9.99522 15.8282 10.1452 15.8282 10.3221C15.8282 10.487 15.8581 10.6295 15.9181 10.7495C15.9811 10.8694 16.0726 10.9789 16.1925 11.0778C16.3125 11.1768 16.4579 11.2728 16.6289 11.3657C16.8028 11.4587 17.0022 11.5607 17.2272 11.6716C17.4581 11.7856 17.677 11.9056 17.8839 12.0315C18.0909 12.1575 18.2723 12.2969 18.4282 12.4499C18.5842 12.6028 18.7071 12.7722 18.7971 12.9582C18.8901 13.1441 18.9366 13.357 18.9366 13.597C18.9366 13.9148 18.8736 14.1848 18.7476 14.4067C18.6247 14.6256 18.4567 14.804 18.2438 14.942C18.0339 15.0799 17.791 15.1789 17.5151 15.2389C17.2392 15.3019 16.9483 15.3334 16.6424 15.3334C16.5404 15.3334 16.4145 15.3244 16.2645 15.3064C16.1146 15.2914 15.9616 15.2674 15.8057 15.2344C15.6497 15.2044 15.5013 15.1669 15.3603 15.1219C15.2224 15.0739 15.1114 15.0215 15.0274 14.9645Z"
        stroke={props.Isbrown ? '#614920' : 'white'}
      />
    </Svg>
  );
}

export default Icon;
