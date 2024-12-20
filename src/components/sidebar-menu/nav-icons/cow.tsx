import React from 'react';

interface IconProps {
  color?: string;
  width?: number;
  height?: number;
}

const CowIcon: React.FC<IconProps> = ({
  color = '#636075',
  width = 23,
  height = 24,
}) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 33 34"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
  >
    <g clipPath="url(#clip0_2629_142)">
      <mask
        id="mask0_2629_142"
        style={{ maskType: 'alpha' }}
        maskUnits="userSpaceOnUse"
        x="-2"
        y="0"
        width="37"
        height="36"
      >
        <rect
          x="-2"
          y="0.000244141"
          width="37"
          height="35.2381"
          fill="url(#pattern0_2629_142)"
        />
      </mask>
      <g mask="url(#mask0_2629_142)">
        <rect y="-0.166748" width="37" height="37" fill={color} />
      </g>
    </g>
    <defs>
      <pattern
        id="pattern0_2629_142"
        patternContentUnits="objectBoundingBox"
        width="1"
        height="1"
      >
        <use
          xlinkHref="#image0_2629_142"
          transform="matrix(0.010582 0 0 0.0111111 0.0238095 0)"
        />
      </pattern>
      <clipPath id="clip0_2629_142">
        <rect
          width="33"
          height="33"
          fill="white"
          transform="translate(0 0.166748)"
        />
      </clipPath>
      <image
        id="image0_2629_142"
        width="90"
        height="90"
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAYAAAA4qEECAAAACXBIWXMAAAsTAAALEwEAmpwYAAAGFklEQVR4nO2da4hVVRTH/87ojI0FGvawmcksJqRAZCoze2FF0bdIwg/RB016kBQ6pVFG74dhlqWQkmUPIaOwQhDKwaIywoiZXlNUxtA0qU2T6ahTM94TC/4XhsvZ5+6zzz737n3m/GDBxXvOXmvtOffsvddeawvk5OTk5OTk5IRQA4dpAPASgKMABgC8AKAO/lAPYB1tFx820ifnWA8gKJHV8IdnQ+wXn5zjUIihRwBMhvtMpq2l9v8DB/k7xFCRB+E+Dyls74eDrFMYewhAI9ylie/lMNvXwkGmASgoDP7Q0ZFcbNqhsLlAn5zkPYXRAYBH4B6PRdgrvjjLrAjDAwAPwB2Wl7F1DhynvYwDz3DOWi3qFVO5kSKvE+e5qowTAYBOADNiDFaLAWwH8AMHrgF+3s7v5BodZgL4WsO+K+AJX2g4MwTgNQDnKdo4jQuG/zTakmte5D1hnA/gdeos19bn8IhLImYgQYh0AVgDYD6AVgDzAPTFuL8ofby3lW2t4ZOve7/YfDE8Y7NBRwVVFvmFecepXMIGnsjBiFeP8yxzoAMDTbkbHlPDmUHguMjKtRaecyKAPQ50pkq6PYkwaq8YBxzo1LCAl0z9MsWlEaHUaki/j1M5XeY60MFFEVsyySlcmASOyE+uxskbudpaBWAr4xU9/AkOAzjMgWUHdywuGHFvA68PHJOOkg1YGUseZmCsmz4N08ce+rCVfTDf5h9qPIM2uw0d+R7AIsdXiW/QRtNf2272kfSVETfxr1jtjgg8kR72WWy+ccD4wDOREGxs7nPA8MAzudeko09mxk61jQ88kUEG0ox4pYqG/wXgTQamrgXQAuAkbkXV83MLv1vGa/uraK+kwxlzRoWf6n8BbAJwmWGQZyyAywG8yrYqZbdkOU1FQp6qgKGFMltRJjRyKyzOTo+pPGHD4AmcD6c5LZqL9LgSwO8p2v+tzazTc7lKsm3kXgDTkT4tKXW2RCTPsW3sDVyO2hylZ6ByzLT83pYd9evTMnaexSf7eVSetRaf5OvSNlZeI59ZMHYWKs9sC3Z/ksbrotwg8zKAH/mUH+bnzZoj/QRUnuM17CrQh6JfxayojS5mMA153NFD8IiwMougRC509NUh+R3e8KeGQ+9XODm9hjrL2bUPHvGr5sCyk9mnaeZU1FLHTk2bfoFH7Io5kh8AsA1AGxcXSWlhW9vYdhxbPoVHvJ1g+lRgMajJU17LuXKS+MZb8IhyGfWBhiwx0LvEgl6pSPCGRRYc7jTQa2OnfQE8olzRUKAhsliIS1j1a1yRJHZvOI5Bo6RO18XQWWdB35EqFzIZ8ZEFxyfG0DfJgj4vqrFKWWHB8eYY+pot6JOdf++YbsHxi2Lom2NB39nwlK8qOANYkFDXl/CYWxI6vyGGrg0Jdd0Mj5HZx/4Ezv8BYJyGnnG81lTPviRJiq5wV8InbaGGjoUJdUg2qPfUJUxAl2rYKRHtTzGssi3Kd5q/Gi+YnXAHfUtE21sStDtUpb3LVLk9QYfIjk2S3RyV3IaM8qhhh8g0UUWHYZsunohjlTs0N2+L8jOTX1S0xiwYHaINmecEzWL8PZyH6wR5xvPVpLOFdoC74ZlncZmOkDyKOw1nAnLPUo1sqlsxCtgV0QHdlpIeJZPotwg9HyPjTAFwTOF8L4DTLeqaymzVMF3DLB3JLDcqHJfN1KtT0HdNxEatFGRmllUKp99JUee7Cp0rkWHaFU7L4JcWSxU6P0CG6bIQ4Dc5sSxMp5SLZJa9CqdtDoKlTFPolLBqZhlUOJ3mEe8NCp1iS2Y5qHD6zBR1nqXQ6eRp57boUDjdyeLRYvx6NStnezk7iMrvkO+e5rV9nNnUjXhtdBoEqrznyYjVmlToPseq19Lv5D4VK0Ou38S2oqp+H0eGaTbMYOrlibqTWIY8lp+bDPcKB2Oc0Ostyw06xrbcg1HAGAupAUlkPW0YFYzhU1XJkxOO8vzRUdPJI2niE2az9LlUjjGL39n/gaLSg2Qb07JsHPtQ4OldbaNh0DNlIsObKzjVa2fl6n6eMFOg9PPfuniNTOnu571x0n1zcnJycnJycpAd/gfcd4N7ikI2GQAAAABJRU5ErkJggg=="
      />
    </defs>
  </svg>
);

export default CowIcon;
