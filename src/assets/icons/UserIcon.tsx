import React from "react";

function UserIcon({ style }: any) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={style}
    >
      <path
        d="M10 10C13.1562 10 15.7143 7.76172 15.7143 5C15.7143 2.23828 13.1562 0 10 0C6.84375 0 4.28571 2.23828 4.28571 5C4.28571 7.76172 6.84375 10 10 10ZM14 11.25H13.2545C12.2634 11.6484 11.1607 11.875 10 11.875C8.83929 11.875 7.74107 11.6484 6.74554 11.25H6C2.6875 11.25 0 13.6016 0 16.5V18.125C0 19.1602 0.959821 20 2.14286 20H17.8571C19.0402 20 20 19.1602 20 18.125V16.5C20 13.6016 17.3125 11.25 14 11.25Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default UserIcon;