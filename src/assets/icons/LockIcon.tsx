import React from "react";

function LockIcon() {
  return (
    <svg
      width="50"
      height="56"
      viewBox="0 0 50 56"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_d_257_48)">
        <path
          d="M40.7143 23.125H38.5714V16.6562C38.5714 9.12734 32.4821 3 25 3C17.5179 3 11.4286 9.12734 11.4286 16.6562V23.125H9.28571C6.91964 23.125 5 25.0566 5 27.4375V44.6875C5 47.0684 6.91964 49 9.28571 49H40.7143C43.0804 49 45 47.0684 45 44.6875V27.4375C45 25.0566 43.0804 23.125 40.7143 23.125ZM31.4286 23.125H18.5714V16.6562C18.5714 13.0895 21.4554 10.1875 25 10.1875C28.5446 10.1875 31.4286 13.0895 31.4286 16.6562V23.125Z"
          fill="white"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_257_48"
          x="0"
          y="0"
          width="50"
          height="56"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="2" />
          <feGaussianBlur stdDeviation="2.5" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_257_48"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_257_48"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
}

export default LockIcon;
