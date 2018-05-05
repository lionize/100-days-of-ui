import React from 'react'

const Logo = ({size = '100%', animate = false}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 186 186">
    <defs>
      <linearGradient id="a" x1="50%" x2="50%" y1="0%" y2="100%">
        <stop offset="0%" stopColor="#6574CD" />
        <stop offset="50%" stopColor="#9561E2" />
        <stop offset="100%" stopColor="#3490DC" />
      </linearGradient>
    </defs>
    <g
      fill="none"
      fillRule="evenodd"
      stroke="url(#a)"
      strokeDasharray="0 0"
      strokeLinecap="round"
      strokeWidth="7"
      transform="translate(-11 -17)">
      <path
        id="inner"
        style={{
          animationPlayState: animate ? 'running' : 'paused',
        }}
        d="M74 80c33.137085 0 60 26.862915 60 60M134 80c-33.137085 0-60 26.862915-60 60M134 140c-33.137085 0-60-26.862915-60-60M74 140c33.137085 0 60-26.862915 60-60"
      />
      <g>
        <path
          id="outer"
          style={{
            animationPlayState: animate ? 'running' : 'paused',
          }}
          d="M134 20C54 60 34 120 74 200M194 140C154 60 94 40 14 80M74 200c80-40 100-100 60-180M14 80c40 80 100 100 180 60"
        />
      </g>
    </g>
  </svg>
)

export default Logo
