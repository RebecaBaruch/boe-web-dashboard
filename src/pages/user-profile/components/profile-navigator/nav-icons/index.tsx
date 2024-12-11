import React from 'react';

interface IconProps {
  color?: string;
  width?: number;
  height?: number;
}

export const UserIcon: React.FC<IconProps> = ({
  color = '#636075',
  width,
  height,
}) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 29 30"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M24.1666 25.875V23.4583C24.1666 22.1765 23.6574 20.9471 22.7509 20.0407C21.8445 19.1342 20.6151 18.625 19.3333 18.625H9.66659C8.38471 18.625 7.15533 19.1342 6.2489 20.0407C5.34248 20.9471 4.83325 22.1765 4.83325 23.4583V25.875"
      stroke={color}
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M14.5001 13.7917C17.1695 13.7917 19.3334 11.6277 19.3334 8.95833C19.3334 6.28896 17.1695 4.125 14.5001 4.125C11.8307 4.125 9.66675 6.28896 9.66675 8.95833C9.66675 11.6277 11.8307 13.7917 14.5001 13.7917Z"
      stroke={color}
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const TratorIcon: React.FC<IconProps> = ({
  color = '#636075',
  width,
  height,
}) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 40 41"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <mask
      id="mask0_3240_310"
      style={{ maskType: 'alpha' }}
      maskUnits="userSpaceOnUse"
      x="0"
      y="0"
      width="40"
      height="41"
    >
      <rect y="0.5" width="40" height="40" fill="url(#pattern0_3240_310)" />
    </mask>
    <g mask="url(#mask0_3240_310)">
      <rect y="0.5" width="40" height="40" fill={color} />
    </g>
    <defs>
      <pattern
        id="pattern0_3240_310"
        patternContentUnits="objectBoundingBox"
        width="1"
        height="1"
      >
        <use href="#image0_3240_310" transform="scale(0.0111111)" />
      </pattern>
      <image
        id="image0_3240_310"
        width="90"
        height="90"
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAYAAAA4qEECAAAACXBIWXMAAAsTAAALEwEAmpwYAAAFbklEQVR4nO2cXYhVVRTH/5Vzr5H1kM5oc5N6qrCxfNGZ8aGgh0jowb4eIuohehiz0WpKDQnCxD7oQyUyAt8qFIK+7SnKPpyUYALBwqeMrETNMsfJuTePrFgDB7t7n73P/rj7zl0/WDDcuWftff5nn3XWXvvsCwiCIAiCIAiCIAiC0OHMAHBRqzuRGhUAKwGMAjgFIAtsJwC8BuBidBBXAPgugrhZE3sDHTSSWyVyBmAcwIXoAFa2UOSspNA0OF4A8KvGb3J822Kht5Xo8/MGfpPj7xYJ/AeArSUfhofbUegQHR1Q+KSL2hWwzx0n9AwAJxV+BwL2ueOEJj5V+F0Hd0ToHOsUgtAFcKVtRnGMTg8EjNMidKQ4LUJHitMidKQ4LUJHitMidKQ4LUJHitMidKQ4LUJHitMidKQ4LUJHitPTUugeAHcDeIUFO8i15EkAEwB+A/ADgF0ANgG4B8DswHF6Wgk9BOArAGcNq2VZzuoAPmMflwSI09NKaF92nNf36h7jtAiN9rXDvBZJC79BaPUJZokZie2dWxM4sSzBke2V+zlzaPWJZYkZZVTeeKBkNpF1gL3nS+RbAJxJ4ISyRO0hHyJfDeDPEo03AHwO4FEA/TyJ6WLr4c8e4+80EhCrrNFdXvNRc/jGsmF6fXdjk5mejtl8zHgCwtnaGDzwuGWjb/PrvGXpBfBOAuLZGA0QJy7nGZpJY3Trr4U/VrdROFnqerIvW4h8B/xzZxuIfcx1G8ilFg/AEYRjTQJi6uwt1xN8xCImh2ZHAoKq7D7Xkxs1aOQ0gCsRnt5Es5GGZWb1P7oNY+MGxGNTAsKeb1+7ntS9Bo3ULa5mFcAq3o5xio3+Hub/+bz4MW09HHnRoBGazZlQA/B9QbJvOqvanYC4eVsER3YZNELT6iKqBSLnxa4GmDyFtF8AXOAq9EGDhqhOUcQqi45TllPEYAICT9mb8MARg4YoZhax16LjlOUUMTcBgadsuQed8Y9BQxXPW+ROGvirJiDwlNGrFM7odpaK0PhPA8qAHnQV+iUJHTAZ1f8CuN1F6JkANvM6WObwXsWw54fh0gRCxvl2nJ8dzuxUNEArIyYxdcygs2OGMX9EcTz10ZStBSUFqlgu5jelyJbwa20TmuO2wwNPKZx/YXh8rUBsmwnLlwofVOEzoUfzoP8JwALNsX0ADimOnfSxlDWomYLPMfRR4dAwypkI2R7+rOJhCk6jDg6h7HSByHmxJxzucC1U1D4aagnHgucUfThi8bsdHyh8ULgw5VWFD5pNO7NF4XycS5ihqfGocxVJdetTTDZlicLHz/DA9ZoXZ2ghNTQ7NenVtRZ+VBdrluXKUzMfFFK88K7mgfYEwrFW065NtgHNVg0boS9T+PgLnrhO86ZSgxdSfXMXj9pmbVL2cI2lvx89hI5+hQ/aveCNjZrRRWI/6bGtNRqRyZ4p4fMThS/Kk03ZrPDxETzSZVCR2+GYU9Y0MXnK9pTcWvGwJr5S6lbEQk0evgKeucqg6DTOa3zdFn67OYVTPbDyBff5DhdRtVXjUIHYCzVZSz1U9rWooA6SDye7eeo8yDWBCttc/myEv9MwrCvc6Nj3bRr/E5wn9/MDchbXdLYUlI5fR0DohH83ECfzZNTWDR76Pa/km7G630r1UlTSMT/Sz2bucwgXzVjmaUWdfNyGSFQ5G1HFvszBqFjzbKAdT0OOYjfYR3SoKPOhp60XZ3mrAuXuIVlWMoyciDmSVfTxA+dYiRM4yg8Wk0qaL+Zxf03uyDr3L3hMtt0pcDOApwG8D2B/bi/4JP+9n0cufecmPqZV9HIu/DGAA7ly7gH+bChSAU0QBEEQBEEQBEEQBAEpcw7sI/MeBtp+ZwAAAABJRU5ErkJggg=="
      />
    </defs>
  </svg>
);

export const KeyIcon: React.FC<IconProps> = ({
  color = '#636075',
  width,
  height,
}) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 33 34"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M28.8749 3.25L26.1249 6M26.1249 6L30.2499 10.125L25.4374 14.9375L21.3124 10.8125M26.1249 6L21.3124 10.8125M15.6611 16.4637C16.3711 17.1643 16.9355 17.9983 17.3218 18.9178C17.7081 19.8374 17.9087 20.8242 17.9121 21.8216C17.9154 22.819 17.7214 23.8072 17.3413 24.7293C16.9611 25.6514 16.4023 26.4892 15.6971 27.1944C14.9918 27.8997 14.154 28.4585 13.2319 28.8386C12.3098 29.2188 11.3216 29.4128 10.3243 29.4094C9.32688 29.4061 8.34001 29.2055 7.42048 28.8192C6.50094 28.4329 5.66691 27.8685 4.96639 27.1585C3.58882 25.7322 2.82656 23.8219 2.84379 21.839C2.86102 19.8562 3.65636 17.9594 5.05851 16.5572C6.46066 15.1551 8.35743 14.3598 10.3403 14.3425C12.3232 14.3253 14.2335 15.0876 15.6598 16.4651L15.6611 16.4637ZM15.6611 16.4637L21.3124 10.8125"
      stroke={color}
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
