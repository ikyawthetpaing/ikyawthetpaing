import {
  Twitter,
  Linkedin,
  Instagram,
  Menu,
  AppWindow,
  Smartphone,
  Globe,
  LucideProps,
} from "lucide-react";

export const Icons = {
  twitter: Twitter,
  linkedin: Linkedin,
  instagram: Instagram,
  menu: Menu,
  appWindow: AppWindow,
  smartphone: Smartphone,
  globe: Globe,
  kyax: ({ ...props }: LucideProps) => (
    <svg
      aria-hidden="true"
      focusable="false"
      data-prefix="fab"
      data-icon="kyax"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 187.22447400726642 60"
      {...props}
    >
      <defs>
        <linearGradient
          gradientTransform="rotate(25)"
          id="a65d0dc5-ac3d-43ed-838a-8e47b523ba41"
          x1="0%"
          y1="0%"
          x2="100%"
          y2="0%"
        >
          <stop
            offset="0%"
            style={{ stopColor: "rgb(233, 13, 218)", stopOpacity: 1 }}
          ></stop>
          <stop
            offset="100%"
            style={{ stopColor: "rgb(21, 207, 241)", stopOpacity: 1 }}
          ></stop>
        </linearGradient>
      </defs>
      <g
        id="50e0717c-284c-4fc7-9af3-4733e3751337"
        fill="url(#a65d0dc5-ac3d-43ed-838a-8e47b523ba41)"
        transform="matrix(6.1224488604322,0,0,6.1224488604322,-11.387758452065299,-25.71428452288795)"
      >
        <path d="M6.73 14L3.42 9.20L2.32 9.20L2.32 14L1.86 14L1.86 4.20L2.32 4.20L2.32 8.75L3.43 8.75L6.50 4.20L7.08 4.20L3.85 8.99L7.32 14L6.73 14ZM15.26 4.20L15.75 4.20L12.84 9.98L12.84 14L12.38 14L12.38 10.00L9.45 4.20L9.94 4.20L12.59 9.31L12.63 9.31L15.26 4.20ZM23.70 14L22.93 10.58L19.07 10.58L18.30 14L17.81 14L20.01 4.20L21.99 4.20L24.19 14L23.70 14ZM19.17 10.14L22.83 10.14L21.60 4.65L20.40 4.65L19.17 10.14ZM32.44 4.20L30.21 9.17L32.44 14L31.88 14L29.78 9.38L28.97 9.38L26.87 14L26.32 14L28.55 9.17L26.32 4.20L26.87 4.20L28.95 8.93L29.81 8.93L31.88 4.20L32.44 4.20Z"></path>
      </g>
    </svg>
  ),
};
