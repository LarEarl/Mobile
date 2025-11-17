import React from 'react';
import Svg, { ClipPath, Defs, G, Path, Rect } from 'react-native-svg';

interface IconProps {
  size?: number;
  color?: string;
}

export function TravelIcon({ size = 24, color = '#FE5900' }: IconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <G clipPath="url(#clip0)">
        <Path 
          opacity="0.2" 
          d="M12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0Z" 
          fill={color}
        />
        <Path 
          fillRule="evenodd" 
          clipRule="evenodd" 
          d="M12.3041 12.7363L15.0001 15.4801V23.6219C20.1758 22.2898 24.0001 17.5915 24.0001 12C24.0001 9.38763 23.1653 6.97024 21.748 5H15.5486C13.0365 5 11.0001 7.03641 11.0001 9.54845C11.0001 10.7409 11.4684 11.8857 12.3041 12.7363ZM0.166016 14H6.00009C8.20923 14 10.0001 15.7909 10.0001 18V23.8341C4.97509 22.991 1.00905 19.025 0.166016 14Z" 
          fill={color}
        />
      </G>
      <Defs>
        <ClipPath id="clip0">
          <Rect width="24" height="24" fill="white"/>
        </ClipPath>
      </Defs>
    </Svg>
  );
}

export function DeliveryIcon({ size = 24, color = '#FE5900' }: IconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Path 
        d="M0 1.5V4.5H1.5L4.26 10.59L3.24 12.54C3.09 12.82 3 13.15 3 13.5C3 14.88 4.12 16 5.5 16H18V13.5H5.92C5.77 13.5 5.65 13.38 5.65 13.23L5.67 13.14L6.36 11.5H14.55C15.3 11.5 15.96 11.09 16.3 10.47L19.04 5.48C19.12 5.34 19.16 5.17 19.16 5C19.16 4.45 18.71 4 18.16 4H3.54L2.75 1.5H0ZM5.5 17.5C4.4 17.5 3.51 18.4 3.51 19.5C3.51 20.6 4.4 21.5 5.5 21.5C6.6 21.5 7.5 20.6 7.5 19.5C7.5 18.4 6.6 17.5 5.5 17.5ZM16 17.5C14.9 17.5 14.01 18.4 14.01 19.5C14.01 20.6 14.9 21.5 16 21.5C17.1 21.5 18 20.6 18 19.5C18 18.4 17.1 17.5 16 17.5Z" 
        fill={color}
      />
    </Svg>
  );
}

export function BonusIcon({ size = 24, color = '#FE5900' }: IconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d="M7 5C7 3.89543 7.89543 3 9 3C10.1046 3 11 3.89543 11 5V7.5H13V5C13 3.89543 13.8954 3 15 3C16.1046 3 17 3.89543 17 5C17 5.22614 16.8203 6.08463 15.9453 6.66795L14.4453 7.66795L15.5547 9.33205L17.0547 8.33205C18.5797 7.31537 19 5.77386 19 5C19 2.79086 17.2091 1 15 1C13.8053 1 12.7329 1.52376 12 2.35418C11.2671 1.52376 10.1947 1 9 1C6.79086 1 5 2.79086 5 5C5 5.77386 5.42027 7.31537 6.9453 8.33205L8.4453 9.33205L9.5547 7.66795L8.0547 6.66795C7.17973 6.08463 7 5.22614 7 5Z" 
        fill={color}
      />
      <Path 
        opacity="0.2" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d="M1 7H23V12.5H22V23H2V12.5H1V7Z" 
        fill={color}
      />
      <Path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d="M22 12.5H2V14.5H11V23H13V14.5H22V12.5Z" 
        fill={color}
      />
    </Svg>
  );
}

export function SupportIcon({ size = 24, color = '#FE5900' }: IconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Path 
        d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 6C13.93 6 15.5 7.57 15.5 9.5C15.5 11.43 13.93 13 12 13C10.07 13 8.5 11.43 8.5 9.5C8.5 7.57 10.07 6 12 6ZM12 20C9.97 20 7.57 19.18 6 17.38C6.03 15.32 10 14.2 12 14.2C13.99 14.2 17.97 15.32 18 17.38C16.43 19.18 14.03 20 12 20Z" 
        fill={color}
      />
    </Svg>
  );
}

// Additional Icons for Navigation
export function HomeIcon({ size = 24, color = '#FE5900' }: IconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Path 
        d="M10 20V14H14V20H19V12H22L12 3L2 12H5V20H10Z" 
        fill={color}
      />
    </Svg>
  );
}

export function HistoryIcon({ size = 24, color = '#FE5900' }: IconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Path 
        d="M13 3C8.03 3 4 7.03 4 12H1L4.89 15.89L4.96 16.03L9 12H6C6 8.13 9.13 5 13 5C16.87 5 20 8.13 20 12C20 15.87 16.87 19 13 19C11.07 19 9.32 18.21 8.06 16.94L6.64 18.36C8.27 20 10.51 21 13 21C17.97 21 22 16.97 22 12C22 7.03 17.97 3 13 3ZM12 8V13L16.28 15.54L17 14.33L13.5 12.25V8H12Z" 
        fill={color}
      />
    </Svg>
  );
}

export function AnalyticsIcon({ size = 24, color = '#FE5900' }: IconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Path 
        d="M11 2V22C5.9 21.5 2 17.2 2 12C2 6.8 5.9 2.5 11 2ZM13 2C18.5 2.5 22.5 7.4 21.95 12.95C21.45 18.1 17.1 22.45 11.95 22.95C11.63 22.98 11.32 23 11 23V13H21C21 12.68 20.98 12.37 20.95 12.05L13 12V2Z" 
        fill={color}
      />
    </Svg>
  );
}

export function ChatsIcon({ size = 24, color = '#FE5900' }: IconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Path 
        d="M20 2H4C2.9 2 2.01 2.9 2.01 4L2 22L6 18H20C21.1 18 22 17.1 22 16V4C22 2.9 21.1 2 20 2ZM6 9H18V11H6V9ZM14 14H6V12H14V14ZM18 8H6V6H18V8Z" 
        fill={color}
      />
    </Svg>
  );
}

export function NotificationIcon({ size = 24, color = '#FE5900' }: IconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Path 
        d="M12 22C13.1 22 14 21.1 14 20H10C10 21.1 10.9 22 12 22ZM18 16V11C18 7.93 16.37 5.36 13.5 4.68V4C13.5 3.17 12.83 2.5 12 2.5C11.17 2.5 10.5 3.17 10.5 4V4.68C7.64 5.36 6 7.92 6 11V16L4 18V19H20V18L18 16Z" 
        fill={color}
      />
    </Svg>
  );
}

// Avatar Icons for Users/Services
export function ShieldIcon({ size = 24, color = '#FE5900' }: IconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 20 20" fill="none">
      <Path 
        d="M10 0.000189244L9.42133 0.558605C7.76043 2.16137 5.20514 2.38492 3.29117 1.09491L2.96575 0.875581L1.66667 0V15.497L2.10404 15.7332L9.604 19.7832L9.99992 19.997L10 0.000189244Z" 
        fill={color}
      />
      <Path 
        opacity="0.2" 
        d="M9.99992 0.000189244L10.5786 0.558605C12.2395 2.16137 14.7948 2.38492 16.7088 1.09491L17.0342 0.875581L18.3333 0V15.497L17.8959 15.7332L10.3959 19.7832L10 19.997L9.99992 0.000189244Z" 
        fill={color}
      />
    </Svg>
  );
}

export function TransferIcon({ size = 24, color = '#FE5900' }: IconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 20 20" fill="none">
      <G clipPath="url(#clip0_transfer)">
        <Path 
          d="M6.66667 3.33333L10 3.97496e-08L13.3333 3.33333L13.3333 4.16667L11.25 4.16667L11.25 12.5L8.75 12.5L8.75 4.16667L6.66667 4.16667L6.66667 3.33333Z" 
          fill={color}
        />
        <Path 
          fillRule="evenodd" 
          clipRule="evenodd" 
          d="M2.92893 17.0711C1.05357 15.1957 8.7622e-08 12.6522 1.19249e-07 10C1.50876e-07 7.34783 1.05357 4.80433 2.92893 2.92892C4.14327 1.71458 5.63776 0.844833 7.26048 0.382584L5 2.643L5 5.83342L7.08333 5.83342L7.08333 14.1667L12.9167 14.1667L12.9167 5.83342L15 5.83342L15 2.643L12.7395 0.382584C14.3622 0.844834 15.8567 1.71458 17.0711 2.92892C18.9464 4.80433 20 7.34783 20 10C20 12.6522 18.9464 15.1957 17.0711 17.0711C15.1957 18.9464 12.6522 20 10 20C7.34783 20 4.8043 18.9464 2.92893 17.0711Z" 
          fill={color}
          fillOpacity="0.2"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_transfer">
          <Rect width="20" height="20" fill="white" transform="translate(0 20) rotate(-90)" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

export function MatthewBillsonIcon({ size = 24, color = '#6B7280' }: IconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Rect width="24" height="24" rx="12" fill={color} />
      <Path 
        d="M12 11C13.66 11 15 9.66 15 8C15 6.34 13.66 5 12 5C10.34 5 9 6.34 9 8C9 9.66 10.34 11 12 11ZM12 12.5C9.99 12.5 6 13.51 6 15.5V17H18V15.5C18 13.51 14.01 12.5 12 12.5Z" 
        fill="white"
      />
    </Svg>
  );
}

export function StarbucksIcon({ size = 24, color = '#00704A' }: IconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Rect width="24" height="24" rx="12" fill={color} />
      <Path 
        d="M12 7C10.34 7 9 8.34 9 10C9 10.35 9.07 10.69 9.18 11H6.82C6.93 10.69 7 10.35 7 10C7 8.34 5.66 7 4 7C4 7 4 7 4 7.01C4 8.66 5.34 10 7 10C7.35 10 7.69 9.93 8 9.82V11H16V9.82C16.31 9.93 16.65 10 17 10C18.66 10 20 8.66 20 7.01C20 7 20 7 20 7C18.34 7 17 8.34 17 10C17 10.35 17.07 10.69 17.18 11H14.82C14.93 10.69 15 10.35 15 10C15 8.34 13.66 7 12 7Z" 
        fill="white"
      />
      <Path 
        d="M8 12V17H16V12H8Z" 
        fill="white"
      />
    </Svg>
  );
}

export function NetflixIcon({ size = 24, color = '#E50914' }: IconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Rect width="24" height="24" rx="4" fill={color} />
      <Path 
        d="M8 5L10.5 12.5L10.5 5H11.5V19H10L7.5 11.5V19H6.5V5H8ZM13 5H14V19H13V5ZM15.5 5L18 12.5V5H19V19H17.5L15 11.5V19H14V5H15.5Z" 
        fill="white"
      />
    </Svg>
  );
}
