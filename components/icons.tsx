import { Icon as IconType } from "@/types";
import {
  AppWindow,
  ChevronLeft,
  ChevronRight,
  Globe,
  Instagram,
  Linkedin,
  LucideProps,
  Menu,
  MoveRight,
  Smartphone,
  Twitter,
} from "lucide-react";

interface Props extends LucideProps {
  name: IconType;
}

export function Icon({ name, ...props }: Props) {
  const Icon = Icons[name];
  return <Icon {...props} />;
}

export const Icons = {
  twitter: Twitter,
  linkedin: Linkedin,
  instagram: Instagram,
  menu: Menu,
  appWindow: AppWindow,
  smartphone: Smartphone,
  globe: Globe,
  moveRight: MoveRight,
  chevronLeft: ChevronLeft,
  chevronRight: ChevronRight,
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

  upwork: ({ ...props }: LucideProps) => (
    <svg
      viewBox="0 -179.5 512 512"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      preserveAspectRatio="xMidYMid"
      {...props}
    >
      <svg>
        <g strokeWidth="0"></g>
        <g strokeLinecap="round" strokeLinejoin="round"></g>
        <g>
          <g>
            <path
              d="M140.106589,96.6278184 C131.785652,96.6278184 123.989458,93.1045388 116.905417,87.3698389 L118.629575,79.2737921 L118.704539,78.9739385 C120.241288,70.3531479 125.113909,55.8852123 140.106589,55.8852123 C151.351098,55.8852123 160.496633,65.0307467 160.496633,76.2752562 C160.459151,87.482284 151.313616,96.6278184 140.106589,96.6278184 L140.106589,96.6278184 Z M140.106589,35.2327965 C120.953441,35.2327965 106.110688,47.6767204 100.076135,68.1417277 C90.8556369,54.310981 83.884041,37.7065886 79.7985359,23.7259151 L59.1836018,23.7259151 L59.1836018,77.3622255 C59.1836018,87.9320644 50.5628111,96.5528551 39.9929722,96.5528551 C29.4231332,96.5528551 20.8023426,87.9320644 20.8023426,77.3622255 L20.8023426,23.7259151 L0.187408492,23.7259151 L0.187408492,77.3622255 C0.112445095,99.3265007 17.9912152,117.355198 39.9554905,117.355198 C61.9197657,117.355198 79.7985359,99.3265007 79.7985359,77.3622255 L79.7985359,68.3666179 C83.8090776,76.7250366 88.7191801,85.1584187 94.6787701,92.6547584 L82.0474378,152.025769 L103.149634,152.025769 L112.295168,108.959297 C120.316252,114.09429 129.53675,117.317716 140.106589,117.317716 C162.708053,117.317716 181.111567,98.801757 181.111567,76.2002928 C181.111567,53.6363104 162.708053,35.2327965 140.106589,35.2327965 L140.106589,35.2327965 Z"
              className="fill-muted-foreground"
            ></path>
            <path
              d="M244.043338,37.5566618 L257.349341,91.1929722 L272.004685,37.5566618 L289.471157,37.5566618 L266.944656,115.068814 L249.478184,115.068814 L235.647438,61.0951684 L221.854173,115.031332 L204.387701,115.031332 L181.861201,37.5191801 L199.327672,37.5191801 L213.983016,91.1554905 L227.289019,37.5191801 L244.043338,37.5191801 L244.043338,37.5566618 Z M331.26325,35.2327965 C308.586823,35.2327965 290.220791,53.6363104 290.220791,76.2752562 C290.220791,98.9516837 308.624305,117.317716 331.26325,117.317716 C353.939678,117.317716 372.343192,98.9516837 372.343192,76.2752562 C372.343192,53.5988287 353.939678,35.2327965 331.26325,35.2327965 Z M331.26325,100.450952 C317.919766,100.450952 307.125037,89.6562225 307.125037,76.3127379 C307.125037,62.9692533 317.957247,52.1745242 331.26325,52.1745242 C344.606735,52.1745242 355.401464,62.9692533 355.401464,76.3127379 C355.401464,89.6187408 344.606735,100.450952 331.26325,100.450952 Z M422.231332,54.9106881 C410.499561,54.9106881 401.016691,64.4310395 401.016691,76.1253294 L401.016691,115.031332 L383.437775,115.031332 L383.437775,37.5566618 L401.016691,37.5566618 L401.016691,49.4758419 C401.016691,49.4758419 408.513031,37.5191801 423.918009,37.5191801 L429.315373,37.5191801 L429.315373,54.9106881 L422.231332,54.9106881 Z M481.227526,73.2767204 C493.708931,66.2301611 502.179795,52.8491947 502.179795,37.5191801 L484.600878,37.5191801 C484.600878,50.450366 474.106003,60.9452416 461.174817,60.9452416 L458.81347,60.9452416 L458.81347,0.149926794 L441.234553,0.149926794 L441.234553,115.031332 L458.81347,115.031332 L458.81347,78.5241581 L460.912445,78.5241581 C462.636603,78.5241581 464.885505,79.6486091 465.897511,81.0354319 L490.860322,115.031332 L511.925037,115.031332 L481.227526,73.2767204 Z"
              className="fill-muted-foreground"
            ></path>
          </g>
        </g>
      </svg>
    </svg>
  ),
  fiverr: ({ ...props }: LucideProps) => (
    <svg
      viewBox="0 0 32 32"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g strokeWidth="0"></g>
      <g strokeLinecap="round" strokeLinejoin="round"></g>
      <g>
        <path
          d="M2.139 20.299h2.002v-4.446h1.904v4.446h1.988v-6.091h-3.893v-0.377c-0-0.003-0-0.006-0-0.010 0-0.368 0.298-0.666 0.666-0.666 0.032 0 0.064 0.002 0.095 0.007l-0.004-0h1.147v-1.645h-1.48c-0.068-0.008-0.148-0.012-0.228-0.012-1.215 0-2.2 0.985-2.2 2.2 0 0.002 0 0.004 0 0.005v-0 0.5h-1.133v1.645h1.135v4.445zM10.387 20.299h1.769l2.208-6.091h-2.024l-1.075 3.545-1.097-3.545h-2.016l2.233 6.091zM18.074 16.549c-0.034-0.566-0.501-1.013-1.073-1.013-0.013 0-0.027 0-0.040 0.001l0.002-0c-0.030-0.003-0.065-0.005-0.101-0.005-0.565 0-1.024 0.453-1.034 1.016v0.001zM20.026 17.73h-4.198c0.048 0.604 0.55 1.076 1.163 1.076 0.033 0 0.066-0.001 0.099-0.004l-0.004 0c0.039 0.005 0.083 0.008 0.128 0.008 0.41 0 0.761-0.252 0.907-0.61l0.002-0.007 1.781 0.5c-0.474 1.017-1.488 1.709-2.663 1.709-0.055 0-0.109-0.002-0.163-0.004l0.008 0c-0.035 0.001-0.077 0.002-0.118 0.002-1.694 0-3.068-1.373-3.068-3.068 0-0.027 0-0.054 0.001-0.081l-0 0.004c-0.003-0.050-0.005-0.108-0.005-0.166 0-1.638 1.328-2.966 2.966-2.966 0.035 0 0.070 0.001 0.105 0.002l-0.005-0c0.060-0.004 0.13-0.007 0.2-0.007 1.596 0 2.89 1.294 2.89 2.89 0 0.044-0.001 0.088-0.003 0.132l0-0.006c0 0.28-0.012 0.462-0.025 0.596zM28.506 15.854h-1.062c-0.682 0-1.050 0.512-1.050 1.365v3.082h-2.012v-4.446h-0.855c-0.684 0-1.050 0.512-1.050 1.365v3.082h-2.012v-6.091h2.012v0.925c0.199-0.547 0.714-0.931 1.32-0.931 0.047 0 0.094 0.002 0.139 0.007l-0.006-0h2.464v0.925c0.198-0.547 0.714-0.931 1.319-0.931 0.047 0 0.093 0.002 0.139 0.007l-0.006-0h0.659zM29.751 20.484c0 0 0.001 0 0.001 0 0.687 0 1.243-0.557 1.243-1.243s-0.557-1.243-1.243-1.243c-0.687 0-1.243 0.557-1.243 1.243 0 0.228 0.062 0.443 0.169 0.627l-0.003-0.006c0.219 0.375 0.618 0.622 1.076 0.623h0z"
          className="fill-muted-foreground"
        ></path>
      </g>
    </svg>
  ),
  envato: ({ ...props }: LucideProps) => (
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 523.632 523.632"
      xmlSpace="preserve"
      {...props}
    >
      <g strokeWidth="0"></g>
      <g strokeLinecap="round" strokeLinejoin="round"></g>
      <g>
        <g>
          <g className="fill-muted-foreground">
            <path d="M67.958,222.629c-42.779,46.041-55.167,78.829-55.167,78.829c9.291,10.782,25.127,9.874,25.127,9.874 c16.691,0.521,26.914-9.829,26.914-9.829c20.742-20.893,18.188-80.229,18.188-80.229 C78.827,212.147,67.958,222.629,67.958,222.629z"></path>
            <path d="M1.964,258.634c0,0-6.544,13.087,4.258,35.109l28.708-63.102C34.602,230.759,9.038,239.679,1.964,258.634z"></path>
            <path d="M397.176,297.064c-1.765,0.152-3.507,0.152-5.23-0.312c-2.873-0.745-4.607-2.544-5.129-5.481 c-0.281-1.637-0.193-3.245,0.104-4.853c0.818-4.557,1.675-9.113,2.533-13.67c1.527-8.278,3.075-16.572,4.616-24.851 c0.054-0.372,0.157-0.745,0.239-1.131c7.621,0,15.171,0,22.707,0c0.924-1.89,4.639-11.153,4.677-11.703c-1.422,0-2.852,0-4.275,0 c-1.444,0-2.874,0-4.296,0c-1.438,0-2.867,0-4.312,0c-1.41,0-2.852,0-4.296,0c-1.409,0-2.851,0-4.28,0 c-1.421,0-2.836,0.029-4.362-0.016c1.502-7.653,2.976-15.216,4.45-22.767c-0.038,0-0.09,0-0.127,0 c-0.116,0.089-0.224,0.193-0.35,0.238c-1.646,0.833-3.289,1.638-4.943,2.457c-3.536,1.742-7.063,3.499-10.609,5.227 c-0.401,0.208-0.581,0.461-0.611,0.878c-0.052,0.447-0.126,0.879-0.196,1.325c-0.58,3.648-1.15,7.295-1.734,10.944 c-0.542,3.395-1.088,6.79-1.615,10.17c-0.574,3.632-1.151,7.267-1.712,10.884c-0.545,3.38-1.065,6.759-1.595,10.125 c-0.595,3.692-1.176,7.371-1.748,11.048c-0.552,3.38-1.072,6.76-1.609,10.127c-0.2,1.203-0.461,2.396-0.53,3.604 c-0.143,2.307,0.066,4.572,0.611,6.802c1.273,5.197,4.406,8.772,9.445,10.633c2.465,0.925,5.033,1.312,7.646,1.4 c2.4,0.09,4.781-0.061,7.147-0.415c1.237-0.164,2.486-0.415,3.754-0.641c0.887-3.782,1.763-7.532,2.671-11.358 c-0.283,0.06-0.439,0.089-0.595,0.134C401.509,296.427,399.356,296.887,397.176,297.064z"></path>
            <path d="M522.534,238.071c-0.521-0.045-0.841,0.149-1.132,0.595c-2.092,3.201-4.221,6.388-6.327,9.56 c-0.109,0.15-0.224,0.282-0.388,0.506c-0.082-0.269-0.153-0.447-0.209-0.626c-0.542-1.786-1.076-3.558-1.627-5.331 c-0.416-1.369-0.844-2.725-1.266-4.109c-0.063-0.223-0.133-0.447-0.432-0.447c-0.596,0.015-1.187,0.015-1.832,0.015 c-1.041,4.482-2.068,8.963-3.104,13.49c0.717,0,1.341,0,2.032,0c0.73-2.875,1.457-5.748,2.183-8.621 c0.052-0.016,0.106-0.016,0.155-0.016c0.865,2.964,1.717,5.926,2.6,8.92c0.466,0,0.915-0.015,1.365,0.016 c0.413,0.016,0.678-0.119,0.924-0.492c1.734-2.606,3.507-5.196,5.279-7.802c0.104-0.164,0.237-0.327,0.35-0.492 c0.052,0.016,0.105,0.016,0.134,0.045c-0.23,2.799-0.454,5.614-0.674,8.458c0.751,0,1.406,0,2.1,0 c0.007-0.134,0.029-0.208,0.052-0.282c0.268-3.828,0.521-7.639,0.781-11.451c0.022-0.178,0.09-0.357,0.134-0.55 c0-0.462,0-0.938,0-1.415C523.279,238.071,522.906,238.116,522.534,238.071z"></path>
            <path d="M348.083,232.487c-3.38-0.268-6.748-0.207-10.096,0.209c-4.63,0.595-9.067,1.86-13.325,3.752 c-5.429,2.427-10.274,5.733-14.787,9.574c-3.789,3.246-7.095,6.91-9.679,11.183c-4.733,7.833-7.124,16.259-6.496,25.461 c0.238,3.514,0.979,6.922,2.328,10.183c3.156,7.566,8.494,12.85,16.337,15.472c1.069,0.358,2.174,0.685,3.279,0.82 c2.751,0.313,5.495,0.269,8.242-0.075c4.199-0.536,8.16-1.815,11.825-3.945c5.544-3.23,9.669-7.802,12.453-13.563 c0.1-0.21,0.2-0.387,0.29-0.583c0.045,0.015,0.09,0.029,0.135,0.045c-1.191,5.435-2.383,10.871-3.586,16.336 c4.616,0,9.172,0,13.767,0c4.124-22.782,8.24-45.536,12.358-68.346c-0.804-0.372-1.541-0.716-2.293-1.027 C362.191,235.107,355.335,233.083,348.083,232.487z M354.776,250.385c-0.692,7.162-2.465,14.101-4.438,21.01 c-1.987,6.938-5.636,12.865-10.611,18.001c-2.887,2.993-6.21,5.404-10.148,6.879c-2.238,0.847-4.545,1.295-6.946,1.279 c-1.323-0.016-2.649,0.045-3.928-0.358c-5.527-1.682-9.094-5.33-10.783-10.794c-0.682-2.263-0.871-4.618-0.715-6.968 c0.312-4.72,1.758-9.112,3.712-13.386c0.737-1.609,1.565-3.217,2.445-4.78c1.078-1.877,2.494-3.515,4.017-5.033 c5.637-5.628,12.359-9.276,20.169-10.855c5.613-1.101,11.168-0.803,16.595,1.116c0.261,0.105,0.514,0.195,0.873,0.327 C354.94,248.033,354.889,249.208,354.776,250.385z"></path>
            <path d="M480.574,239.992c-5.681-4.839-12.348-7.236-19.759-7.683c-5.286-0.312-10.49,0.372-15.501,2.129 c-12.856,4.497-22.334,12.866-28.328,25.075c-2.759,5.583-4.124,11.523-4.176,17.525c0.015,2.858,0.238,5.465,0.855,8.026 c2.36,9.826,8.004,17.063,17.146,21.441c5.696,2.725,11.753,3.572,18.032,3.097c4.087-0.298,8.056-1.221,11.883-2.679 c6.804-2.562,12.693-6.523,17.741-11.748c5.032-5.184,8.771-11.168,10.996-18.045c2.145-6.597,2.717-13.327,1.199-20.147 C489.158,250.221,485.839,244.518,480.574,239.992z M471.887,281.564c-3.624,5.896-8.533,10.408-14.831,13.326 c-3.559,1.638-7.311,2.49-11.231,2.383c-8.108-0.223-14.711-5.048-17.164-13.074c-0.931-3.037-1.151-6.148-0.826-9.306 c0.826-7.701,4.169-14.176,9.5-19.701c3.432-3.574,7.46-6.284,12.136-7.998c3.324-1.221,6.765-1.816,10.308-1.444 c7.534,0.804,12.739,4.735,15.523,11.793c1.012,2.576,1.374,5.271,1.393,8.115C476.599,271.35,474.916,276.68,471.887,281.564z"></path>
            <path d="M155.973,250.787c-0.134-1.519-0.276-3.023-0.716-4.482c-1.653-5.51-5.07-9.441-10.422-11.644 c-2.517-1.043-5.145-1.549-7.847-1.714c-3.403-0.208-6.775,0.12-10.118,0.82c-5.696,1.19-11.019,3.334-16.029,6.253 c-5.569,3.231-10.491,7.281-14.518,12.329c-2.948,3.692-5.228,7.742-6.582,12.284c-0.581,1.935-0.901,3.901-1.176,5.896 c-0.282,2.069-0.626,4.125-0.752,6.225c-0.238,3.976,0.022,7.893,1.095,11.736c2.025,7.312,6.373,12.761,13.208,16.124 c3.79,1.861,7.833,2.77,12.008,3.127c3.73,0.315,7.43,0.12,11.116-0.387c4.28-0.61,8.457-1.636,12.567-2.991 c1.191-0.404,2.367-0.819,3.574-1.236c0.537-4.602,1.072-9.144,1.623-13.789c-0.245,0.134-0.387,0.208-0.528,0.298 c-5.517,3.754-11.577,6.094-18.233,6.775c-2.948,0.298-5.881,0.179-8.771-0.548c-3.224-0.837-6.045-2.338-8.315-4.796 c-2.256-2.442-3.566-5.39-4.296-8.607c-0.015-0.073,0.029-0.15,0.045-0.252c0.275-0.017,0.521-0.045,0.789-0.045 c2.763-0.134,5.539-0.238,8.309-0.403c4.809-0.252,9.574-0.744,14.316-1.547c3.708-0.641,7.363-1.475,10.922-2.696 c3.499-1.205,6.804-2.739,9.796-4.942c4.512-3.335,7.423-7.714,8.547-13.253C156.151,256.49,156.224,253.632,155.973,250.787z M141.505,258.336c-0.677,2.651-2.196,4.735-4.266,6.463c-1.98,1.683-4.251,2.843-6.664,3.751 c-3.045,1.181-6.202,1.88-9.419,2.324c-3.722,0.521-7.445,0.714-11.182,0.596c-2.055-0.075-4.095-0.239-6.135-0.372 c-0.148,0-0.297-0.062-0.536-0.106c0.09-0.342,0.156-0.639,0.239-0.907c1.504-4.988,4.064-9.397,7.579-13.222 c4.005-4.393,8.755-7.744,14.369-9.768c2.487-0.893,5.048-1.458,7.705-1.37c1.318,0.029,2.591,0.253,3.806,0.76 c2.233,0.893,3.677,2.517,4.318,4.824C141.959,253.632,142.109,255.982,141.505,258.336z"></path>
            <path d="M219.836,234.914c-2.822-1.176-5.779-1.801-8.831-1.965c-3.619-0.208-7.207,0.09-10.75,0.893 c-6.366,1.431-11.66,4.617-15.754,9.724c-1.592,1.995-2.932,4.154-4.08,6.418c-0.074,0.149-0.164,0.296-0.245,0.446 c-0.038-0.029-0.067-0.044-0.097-0.061c0.803-4.988,1.607-9.961,2.427-15.008c-4.884,0-9.679,0-14.519,0 c-4.124,24.018-8.241,48.004-12.374,72.04c4.773,0,9.44,0,14.108,0c0.053-0.195,0.111-0.36,0.135-0.521 c0.863-5.051,1.689-10.127,2.583-15.161c0.893-4.959,1.994-9.872,3.461-14.694c1.705-5.627,3.879-11.079,6.99-16.112 c3.551-5.748,8.323-10.2,14.385-13.222c3.588-1.787,7.385-2.77,11.436-2.472c1.445,0.104,2.814,0.46,4.117,1.103 c1.51,0.759,2.568,1.95,3.192,3.514c0.35,0.908,0.538,1.846,0.655,2.8c0.283,2.397,0.075,4.795-0.312,7.146 c-0.819,4.884-1.698,9.768-2.553,14.64c-0.916,5.238-1.846,10.468-2.761,15.692c-1.014,5.762-2.025,11.509-3.038,17.271 c-0.016,0.164-0.016,0.326-0.03,0.521c4.796,0,9.545,0,14.325,0c0.045-0.195,0.09-0.357,0.119-0.521 c0.61-3.291,1.228-6.578,1.846-9.872c1.005-5.42,2.011-10.828,3.029-16.229c0.953-5.152,1.906-10.291,2.875-15.442 c0.602-3.156,1.212-6.327,1.288-9.574c0.081-3.26-0.157-6.477-1.088-9.617C228.71,241.093,225.209,237.163,219.836,234.914z"></path>
            <path d="M303.979,234.721c-0.319,0-0.548,0-0.771,0c-4.53,0-9.053,0-13.579-0.015c-0.522,0-0.79,0.163-1.043,0.61 c-5.375,9.664-10.773,19.312-16.17,28.975c-3.634,6.491-7.267,12.999-10.9,19.508c-0.104,0.195-0.224,0.389-0.342,0.567 c-0.037-0.019-0.082-0.03-0.12-0.045c-3.619-16.394-7.244-32.774-10.87-49.167c-4.743,0-9.425,0-14.169,0 c5.979,24.598,11.95,49.167,17.936,73.809c0.291,0,0.499,0,0.716,0c1.37,0,2.732-0.03,4.096,0 c0.499,0.014,0.759-0.151,1.014-0.569c2.886-4.868,5.808-9.705,8.731-14.562c11.675-19.431,23.349-38.863,35.029-58.31 C303.667,235.286,303.8,235.048,303.979,234.721z"></path>
            <path d="M507.101,238.22c-3.483,0-6.908,0-10.385,0c-0.12,0.715-0.253,1.429-0.403,2.19c0.745,0,1.367,0,2.022,0.014 c0.648,0.016,1.295-0.074,1.976,0.075c-0.7,3.737-1.398,7.444-2.099,11.181c0.853,0,1.628,0,2.409,0 c0.722-3.767,1.422-7.489,2.146-11.257c1.349-0.029,2.622,0.016,3.899-0.029C506.825,239.634,506.968,238.934,507.101,238.22z"></path>
          </g>
        </g>
      </g>
    </svg>
  ),
  asus: ({ ...props }: LucideProps) => (
    <svg
      viewBox="0 0 24 24"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g strokeWidth="0"></g>
      <g strokeLinecap="round" strokeLinejoin="round"></g>
      <g>
        <path
          d="M23.904 10.788V9.522h-4.656c-.972 0-1.41.6-1.482 1.182v.018-1.2h-1.368v1.266h1.362zm-6.144.456l-1.368-.078v1.458c0 .456-.228.594-1.02.594H14.28c-.654 0-.93-.186-.93-.594v-1.596l-1.386-.102v1.812h-.03c-.078-.528-.276-1.14-1.596-1.23L6 11.22c0 .666.474 1.062 1.218 1.14l3.024.306c.24.018.414.09.414.288 0 .216-.18.24-.456.24H5.946V11.22l-1.386-.09v3.348h5.646c1.26 0 1.662-.654 1.722-1.2h.03c.156.864.912 1.2 2.19 1.2h1.41c1.494 0 2.202-.456 2.202-1.524zm4.398.258l-4.338-.258c0 .666.438 1.11 1.182 1.17l3.09.24c.24.018.384.078.384.276 0 .186-.168.258-.516.258h-4.212v1.29h4.302c1.356 0 1.95-.474 1.95-1.554 0-.972-.534-1.338-1.842-1.422zm-10.194-1.98h1.386v1.266h-1.386zM3.798 11.07l-1.506-.15L0 14.478h1.686zm7.914-1.548h-4.23c-.984 0-1.416.612-1.518 1.2v-1.2H3.618c-.33 0-.486.102-.642.33l-.648.936h9.384Z"
          className="fill-muted-foreground"
        ></path>
      </g>
    </svg>
  ),
};
