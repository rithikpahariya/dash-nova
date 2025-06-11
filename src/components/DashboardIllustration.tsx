import * as React from 'react';

export default function DashboardIllustration({ className = '', ...props }) {
  return (
    <svg
      width="80"
      height="80"
      viewBox="0 0 80 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <rect x="8" y="18" width="64" height="44" rx="6" fill="#23234F" />
      <rect x="14" y="24" width="52" height="32" rx="3" fill="#F3F0FF" />
      <circle cx="40" cy="40" r="7" fill="#F7B0C3" />
      <ellipse cx="40" cy="48" rx="12" ry="5" fill="#E0D7FF" />
      <rect x="18" y="30" width="10" height="6" rx="2" fill="#A78BFA" />
      <rect x="52" y="30" width="10" height="6" rx="2" fill="#A78BFA" />
      <rect x="18" y="50" width="12" height="4" rx="2" fill="#FBBF24" />
      <rect x="34" y="50" width="12" height="4" rx="2" fill="#34D399" />
      <rect x="50" y="50" width="12" height="4" rx="2" fill="#60A5FA" />
      <rect x="60" y="18" width="8" height="4" rx="2" fill="#A78BFA" />
      <circle cx="16" cy="20" r="1.5" fill="#FBBF24" />
      <circle cx="22" cy="20" r="1.5" fill="#34D399" />
      <circle cx="28" cy="20" r="1.5" fill="#60A5FA" />
      <rect x="24" y="36" width="32" height="2" rx="1" fill="#E0D7FF" />
      <rect x="24" y="40" width="32" height="2" rx="1" fill="#E0D7FF" />
      <rect x="24" y="44" width="20" height="2" rx="1" fill="#E0D7FF" />
      <circle cx="40" cy="40" r="4" fill="#23234F" />
      <circle cx="40" cy="39" r="2" fill="#fff" />
    </svg>
  );
} 