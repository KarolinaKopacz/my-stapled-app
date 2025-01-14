import Link from "next/link";

const hLineTransforms = [545.79, 635.35, 723.689, 813.69, 902.448, 991.201];
const vLineTransforms = [
  { x: 586.769, id: 7 },
  { x: 675.878, id: 8 },
  { x: 764.079, id: 9 },
  { x: 143.554, id: 10 },
  { x: 852.7, id: 11 },
  { x: 232.175, id: 12 },
  { x: 941.885, id: 13 },
  { x: 321.361, id: 14 },
  { x: 1030.37, id: 15 },
  { x: 409.843, id: 16 },
  { x: 1120.75, id: 17 },
  { x: 500.226, id: 18 },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <nav className="container mx-auto px-4 py-6 flex justify-between items-center relative z-10">
        <div className="flex items-center space-x-2">
          <span className="text-xl font-bold">Stapler</span>
        </div>
        <Link
          href="https://github.com/tonik/stapler"
          className="hover:text-gray-300 transition-colors"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="#fff"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
          </svg>
          <span className="sr-only">GitHub</span>
        </Link>
      </nav>

      <main className="container mx-auto px-4">
        <section className="relative min-h-[70vh] flex flex-col justify-center items-center text-center mb-16">
          <div className="absolute inset-0 flex items-center justify-center opacity-15 ">
            <svg
              width="100%"
              height="100%"
              viewBox="0 0 1096 638"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              style={{
                fillRule: "evenodd",
                clipRule: "evenodd",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeMiterlimit: 1.5,
              }}
            >
              <g transform="matrix(1,0,0,1,-172.354,-535.261)">
                <g>
                  {hLineTransforms.map((yPos, index) => (
                    <g
                      key={`hline-${index}`}
                      transform={`matrix(0.763071,0,0,0.393502,172.517,${yPos})`}
                    >
                      <path
                        d="M0.442,198.747L1434.5,198.747"
                        style={{
                          fill: "none",
                          stroke: `url(#_Linear${index + 1})`,
                          strokeWidth: "1.65px",
                        }}
                      />
                    </g>
                  ))}
                  {vLineTransforms.map(({ x, id }, index) => (
                    <g
                      key={`vline-${index}`}
                      transform={`matrix(0.443961,0,0,0.475574,${x},535.761)`}
                    >
                      <path
                        d="M201.864,0L201.864,1338.02"
                        style={{
                          fill: "none",
                          stroke: `url(#_Linear${id})`,
                          strokeWidth: "1.65px",
                        }}
                      />
                    </g>
                  ))}
                </g>
              </g>
              <defs>
                {Array.from({ length: 6 }, (_, i) => (
                  <linearGradient
                    key={`grad-h-${i}`}
                    id={`_Linear${i + 1}`}
                    x1="0"
                    y1="0"
                    x2="1"
                    y2="0"
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="matrix(1441.18,0,0,2794.7,-0.600974,521.908)"
                  >
                    <stop
                      offset="0"
                      style={{ stopColor: "black", stopOpacity: 0 }}
                    />
                    <stop
                      offset="0.5"
                      style={{ stopColor: "rgb(211,211,211)", stopOpacity: 1 }}
                    />
                    <stop
                      offset="1"
                      style={{ stopColor: "black", stopOpacity: 0 }}
                    />
                  </linearGradient>
                ))}
                {Array.from({ length: 12 }, (_, i) => (
                  <linearGradient
                    key={`grad-v-${i}`}
                    id={`_Linear${i + 7}`}
                    x1="0"
                    y1="0"
                    x2="1"
                    y2="0"
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="matrix(7.94473e-14,1211.23,-1297.47,7.41661e-14,86.0422,47.59)"
                  >
                    <stop
                      offset="0"
                      style={{ stopColor: "black", stopOpacity: 0 }}
                    />
                    <stop
                      offset="0.23"
                      style={{
                        stopColor: "rgb(167,167,167)",
                        stopOpacity: 0.79,
                      }}
                    />
                    <stop
                      offset="0.51"
                      style={{ stopColor: "rgb(211,211,211)", stopOpacity: 1 }}
                    />
                    <stop
                      offset="0.74"
                      style={{
                        stopColor: "rgb(173,173,173)",
                        stopOpacity: 0.72,
                      }}
                    />
                    <stop
                      offset="1"
                      style={{ stopColor: "rgb(77,77,77)", stopOpacity: 0 }}
                    />
                  </linearGradient>
                ))}
              </defs>
            </svg>
          </div>
          <div className="absolute inset-0 overflow-hidden">
            <div
              className="absolute inset-0 bg-gradient-to-b from-slate-400 via-blue-500 to-black opacity-70"
              style={{
                maskImage:
                  "radial-gradient(ellipse at 50% 80%, black 0%, transparent 70%)" as string,
                WebkitMaskImage:
                  "radial-gradient(ellipse at 50% 80%, black 0%, transparent 70%)" as string,
              }}
            ></div>
          </div>
          <div className="relative z-10">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Welcome to your Stapled app! 📎
            </h1>
            <p className="max-w-4xl text-xl text-center text-gray-300 leading-relaxed">
              We hope you saved a lot of time and effort by using Stapler. At
              Tonik we are always looking for ways to make your life easier. If
              you have any feedback or suggestions, please let us know. We would
              love to hear from you! Edit this page in the{" "}
              <b>apps/web/app/page.tsx</b> file! 🚀
            </p>
          </div>
        </section>

        <section className="mb-20">
          <h2 className="text-2xl md:text-3xl font-bold mb-2 text-center">
            Stapler uses the following stack:
          </h2>
          <div className="flex flex-wrap justify-center items-center gap-2 md:gap-8">
            <div key={"vercel"} className="p-4 rounded-lg">
              <svg
                aria-label="Next.js logotype"
                width="120"
                role="img"
                viewBox="0 0 394 79"
              >
                <path
                  d="M261.919 0.0330722H330.547V12.7H303.323V79.339H289.71V12.7H261.919V0.0330722Z"
                  fill="#fff"
                ></path>
                <path
                  d="M149.052 0.0330722V12.7H94.0421V33.0772H138.281V45.7441H94.0421V66.6721H149.052V79.339H80.43V12.7H80.4243V0.0330722H149.052Z"
                  fill="#fff"
                ></path>
                <path
                  d="M183.32 0.0661486H165.506L229.312 79.3721H247.178L215.271 39.7464L247.127 0.126654L229.312 0.154184L206.352 28.6697L183.32 0.0661486Z"
                  fill="#fff"
                ></path>
                <path
                  d="M201.6 56.7148L192.679 45.6229L165.455 79.4326H183.32L201.6 56.7148Z"
                  fill="#fff"
                ></path>
                <path
                  clipRule="evenodd"
                  d="M80.907 79.339L17.0151 0H0V79.3059H13.6121V16.9516L63.8067 79.339H80.907Z"
                  fill="#fff"
                  fillRule="evenodd"
                ></path>
                <path
                  d="M333.607 78.8546C332.61 78.8546 331.762 78.5093 331.052 77.8186C330.342 77.1279 329.991 76.2917 330 75.3011C329.991 74.3377 330.342 73.5106 331.052 72.8199C331.762 72.1292 332.61 71.7838 333.607 71.7838C334.566 71.7838 335.405 72.1292 336.115 72.8199C336.835 73.5106 337.194 74.3377 337.204 75.3011C337.194 75.9554 337.028 76.5552 336.696 77.0914C336.355 77.6368 335.922 78.064 335.377 78.373C334.842 78.6911 334.252 78.8546 333.607 78.8546Z"
                  fill="#fff"
                ></path>
                <path
                  d="M356.84 45.4453H362.872V68.6846C362.863 70.8204 362.401 72.6472 361.498 74.1832C360.585 75.7191 359.321 76.8914 357.698 77.7185C356.084 78.5364 354.193 78.9546 352.044 78.9546C350.079 78.9546 348.318 78.6001 346.75 77.9094C345.182 77.2187 343.937 76.1826 343.024 74.8193C342.101 73.456 341.649 71.7565 341.649 69.7207H347.691C347.7 70.6114 347.903 71.3838 348.29 72.0291C348.677 72.6744 349.212 73.1651 349.895 73.5105C350.586 73.8559 351.38 74.0286 352.274 74.0286C353.243 74.0286 354.073 73.8286 354.746 73.4196C355.419 73.0197 355.936 72.4199 356.296 71.6201C356.646 70.8295 356.831 69.8479 356.84 68.6846V45.4453Z"
                  fill="#fff"
                ></path>
                <path
                  d="M387.691 54.5338C387.544 53.1251 386.898 52.0254 385.773 51.2438C384.638 50.4531 383.172 50.0623 381.373 50.0623C380.11 50.0623 379.022 50.2532 378.118 50.6258C377.214 51.0075 376.513 51.5164 376.033 52.1617C375.554 52.807 375.314 53.5432 375.295 54.3703C375.295 55.061 375.461 55.6608 375.784 56.1607C376.107 56.6696 376.54 57.0968 377.103 57.4422C377.656 57.7966 378.274 58.0874 378.948 58.3237C379.63 58.56 380.313 58.76 380.995 58.9236L384.14 59.6961C385.404 59.9869 386.631 60.3778 387.802 60.8776C388.973 61.3684 390.034 61.9955 390.965 62.7498C391.897 63.5042 392.635 64.413 393.179 65.4764C393.723 66.5397 394 67.7848 394 69.2208C394 71.1566 393.502 72.8562 392.496 74.3285C391.491 75.7917 390.043 76.9369 388.143 77.764C386.252 78.582 383.965 79 381.272 79C378.671 79 376.402 78.6002 374.493 77.8004C372.575 77.0097 371.08 75.8463 370.001 74.3194C368.922 72.7926 368.341 70.9294 368.258 68.7391H374.235C374.318 69.8842 374.687 70.8386 375.314 71.6111C375.95 72.3745 376.78 72.938 377.795 73.3197C378.819 73.6923 379.962 73.8832 381.226 73.8832C382.545 73.8832 383.707 73.6832 384.712 73.2924C385.708 72.9016 386.492 72.3564 387.055 71.6475C387.627 70.9476 387.913 70.1206 387.922 69.1754C387.913 68.312 387.654 67.5939 387.156 67.0304C386.649 66.467 385.948 65.9944 385.053 65.6127C384.15 65.231 383.098 64.8856 381.899 64.5857L378.081 63.6223C375.323 62.9225 373.137 61.8592 371.541 60.4323C369.937 59.0054 369.143 57.115 369.143 54.7429C369.143 52.798 369.678 51.0894 370.758 49.6261C371.827 48.1629 373.294 47.0268 375.148 46.2179C377.011 45.4 379.114 45 381.456 45C383.836 45 385.92 45.4 387.719 46.2179C389.517 47.0268 390.929 48.1538 391.952 49.5897C392.976 51.0257 393.511 52.6707 393.539 54.5338H387.691Z"
                  fill="#fff"
                ></path>
              </svg>
            </div>
            <div key={"vercel"} className="p-4 rounded-lg">
              <svg
                viewBox="0 0 512 140"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                width="120"
                preserveAspectRatio="xMidYMid"
                fill="#fff"
                stroke="#fff"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <g>
                    {" "}
                    <path
                      d="M255.420487,28.975665 C235.427278,28.975665 221.011885,42.0147142 221.011885,61.5732881 C221.011885,81.1318619 237.238257,94.1709111 257.231466,94.1709111 C269.310696,94.1709111 279.959253,89.3899264 286.551217,81.3310696 L272.697227,73.3265422 C269.039049,77.3288059 263.479344,79.6649689 257.231466,79.6649689 C248.556876,79.6649689 241.186191,75.1375212 238.451613,67.893605 L289.195246,67.893605 C289.593662,65.8653084 289.829089,63.7645727 289.829089,61.5551783 C289.829089,42.0147142 275.413696,28.975665 255.420487,28.975665 Z M238.288625,55.2348613 C240.552349,48.0090549 246.745897,43.4634975 255.402377,43.4634975 C264.076967,43.4634975 270.270515,48.0090549 272.516129,55.2348613 L238.288625,55.2348613 L238.288625,55.2348613 Z M450.426712,28.975665 C430.433503,28.975665 416.01811,42.0147142 416.01811,61.5732881 C416.01811,81.1318619 432.244482,94.1709111 452.237691,94.1709111 C464.316921,94.1709111 474.965478,89.3899264 481.557442,81.3310696 L467.703452,73.3265422 C464.045274,77.3288059 458.485569,79.6649689 452.237691,79.6649689 C443.563101,79.6649689 436.192417,75.1375212 433.457838,67.893605 L484.201471,67.893605 C484.599887,65.8653084 484.835314,63.7645727 484.835314,61.5551783 C484.835314,42.0147142 470.419921,28.975665 450.426712,28.975665 L450.426712,28.975665 Z M433.31296,55.2348613 C435.576684,48.0090549 441.770232,43.4634975 450.426712,43.4634975 C459.101302,43.4634975 465.29485,48.0090549 467.540464,55.2348613 L433.31296,55.2348613 Z M362.630447,61.5732881 C362.630447,72.4391624 369.729485,79.6830787 380.740238,79.6830787 C388.201471,79.6830787 393.797397,76.2965478 396.676853,70.7730617 L410.585173,78.7956989 C404.826259,88.3938879 394.032824,94.1709111 380.740238,94.1709111 C360.728919,94.1709111 346.331636,81.1318619 346.331636,61.5732881 C346.331636,42.0147142 360.747029,28.975665 380.740238,28.975665 C394.032824,28.975665 404.808149,34.7526882 410.585173,44.3508772 L396.676853,52.3735144 C393.797397,46.8500283 388.201471,43.4634975 380.740238,43.4634975 C369.747595,43.4634975 362.630447,50.7074137 362.630447,61.5732881 Z M512,9.0548953 L512,92.3599321 L495.701188,92.3599321 L495.701188,9.0548953 L512,9.0548953 Z M66.9156763,-1.42108547e-14 L133.831353,115.90266 L0,115.90266 L66.9156763,-1.42108547e-14 Z M234.213922,9.0548953 L184.031692,95.9818902 L133.849462,9.0548953 L152.665535,9.0548953 L184.031692,63.3842671 L215.397849,9.0548953 L234.213922,9.0548953 Z M340.898698,30.786644 L340.898698,48.3350311 C339.087719,47.8098472 337.168081,47.4476514 335.103565,47.4476514 C324.581777,47.4476514 316.993775,54.6915676 316.993775,65.557442 L316.993775,92.3599321 L300.694963,92.3599321 L300.694963,30.786644 L316.993775,30.786644 L316.993775,47.4476514 C316.993775,38.2478778 327.696661,30.786644 340.898698,30.786644 Z"
                      fill="#fff"
                      fillRule="nonzero"
                    >
                      {" "}
                    </path>{" "}
                  </g>{" "}
                </g>
              </svg>
            </div>
            <div key={"vercel"} className="p-4 rounded-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="120"
                height="25"
                viewBox="0 0 512 115"
              >
                <defs>
                  <linearGradient
                    id="logosTurborepo0"
                    x1="123.779%"
                    x2="123.779%"
                    y1="0%"
                    y2="698.962%"
                  >
                    <stop offset="0%" stopColor="#1e90ff" />
                    <stop offset="100%" stopColor="#ff1e56" />
                  </linearGradient>
                  <linearGradient
                    id="logosTurborepo1"
                    x1="11.486%"
                    x2="11.486%"
                    y1="-2.194%"
                    y2="512.398%"
                  >
                    <stop offset="0%" stopColor="#1e90ff" />
                    <stop offset="100%" stopColor="#ff1e56" />
                  </linearGradient>
                  <linearGradient
                    id="logosTurborepo2"
                    x1="-153.743%"
                    x2="-153.743%"
                    y1="-62.263%"
                    y2="278.479%"
                  >
                    <stop offset="0%" stopColor="#1e90ff" />
                    <stop offset="100%" stopColor="#ff1e56" />
                  </linearGradient>
                  <linearGradient
                    id="logosTurborepo3"
                    x1="-153.743%"
                    x2="-153.743%"
                    y1="-178.48%"
                    y2="162.264%"
                  >
                    <stop offset="0%" stopColor="#1e90ff" />
                    <stop offset="100%" stopColor="#ff1e56" />
                  </linearGradient>
                  <linearGradient
                    id="logosTurborepo4"
                    x1="11.486%"
                    x2="11.486%"
                    y1="-412.397%"
                    y2="102.194%"
                  >
                    <stop offset="0%" stopColor="#1e90ff" />
                    <stop offset="100%" stopColor="#ff1e56" />
                  </linearGradient>
                  <linearGradient
                    id="logosTurborepo5"
                    x1="123.779%"
                    x2="123.779%"
                    y1="-598.961%"
                    y2="100%"
                  >
                    <stop offset="0%" stopColor="#1e90ff" />
                    <stop offset="100%" stopColor="#ff1e56" />
                  </linearGradient>
                </defs>
                <path
                  fill="url(#logosTurborepo0)"
                  d="M37.276.034C24.093-.42 10.911 3.671 0 12.308l7.273 4.091c8.638-6.364 19.547-9.092 30.003-8.637z"
                  transform="translate(419.72)"
                />
                <path
                  fill="url(#logosTurborepo1)"
                  d="M75.916 17.308C66.824 7.762 55.004 1.852 42.276.488v7.729c10.911 1.818 20.457 6.818 28.185 14.546z"
                  transform="translate(419.72)"
                />
                <path
                  fill="url(#logosTurborepo2)"
                  d="M92.28 54.584c-.454-11.82-5-23.638-12.727-33.64L74.097 26.4c6.365 8.637 10.002 18.183 10.456 28.184z"
                  transform="translate(419.72)"
                />
                <path
                  fill="url(#logosTurborepo3)"
                  d="M79.553 93.678c7.728-10 12.273-21.82 12.728-33.639h-7.728C84.1 70.04 80.462 79.586 74.097 88.223z"
                  transform="translate(419.72)"
                />
                <path
                  fill="url(#logosTurborepo4)"
                  d="M42.277 114.135c12.273-1.364 24.547-7.274 33.639-16.82L70.46 91.86c-7.728 8.182-17.73 13.183-28.184 14.547z"
                  transform="translate(419.72)"
                />
                <path
                  fill="url(#logosTurborepo5)"
                  d="M0 102.315c10.91 8.638 24.093 12.729 37.276 12.274v-7.728c-10.456.455-20.91-2.273-30.003-8.637z"
                  transform="translate(419.72)"
                />
                <path
                  fill="#fff"
                  d="M28.588 40.692v47.086H12.893V40.692H0V27.399h41.48v13.293zm31.565-13.293v32.832q0 2.643.16 5.445q.24 2.723 1.201 4.965q1.041 2.242 3.203 3.684q2.163 1.36 6.086 1.361t6.006-1.361q2.163-1.442 3.203-3.684t1.202-4.965q.24-2.802.24-5.445V27.4h15.615v34.994q0 14.094-6.486 20.58q-6.406 6.486-19.78 6.487q-13.373 0-19.859-6.487q-6.486-6.486-6.486-20.58V27.4zm61.294 26.986h2.963q4.644 0 7.127-1.922t2.483-5.525t-2.483-5.525t-7.127-1.922h-2.963zm34.513 33.393h-19.538l-14.975-23.223v23.223h-15.695V27.399h24.424q5.045 0 8.808 1.522q3.765 1.44 6.166 4.003a16.3 16.3 0 0 1 3.684 5.926q1.281 3.363 1.281 7.207q0 6.886-3.363 11.211q-3.283 4.244-9.77 5.766zm18.257-12.172h3.443q5.927 0 8.488-1.521q2.564-1.522 2.563-4.885q.001-3.363-2.563-4.885q-2.56-1.521-8.488-1.521h-3.443zm0-24.504h2.883q7.367 0 7.367-5.846q0-5.845-7.367-5.845h-2.883zM158.52 27.4h23.383q8.329 0 12.653 4.004q4.324 4.005 4.324 11.531q0 4.565-1.682 7.608q-1.601 2.963-4.965 5.045q3.363.64 5.686 2.001q2.402 1.282 3.844 3.204a11.8 11.8 0 0 1 2.162 4.324q.641 2.402.64 5.125q0 4.244-1.521 7.527a14.7 14.7 0 0 1-4.164 5.526q-2.643 2.241-6.487 3.363q-3.843 1.12-8.648 1.12H158.52zm64.667 30.19q-.001 3.603 1.36 6.646t3.684 5.285a17.3 17.3 0 0 0 5.366 3.524q3.122 1.2 6.566 1.2q3.442 0 6.486-1.2q3.123-1.282 5.446-3.524a16.2 16.2 0 0 0 3.763-5.285q1.361-3.043 1.362-6.647q0-3.603-1.362-6.646a16.2 16.2 0 0 0-3.763-5.285q-2.324-2.242-5.446-3.444q-3.044-1.28-6.486-1.28a17.1 17.1 0 0 0-6.566 1.28q-3.044 1.201-5.366 3.444q-2.323 2.242-3.683 5.285q-1.362 3.043-1.361 6.646m-16.416 0q0-6.727 2.482-12.493q2.481-5.845 6.887-10.17q4.403-4.324 10.49-6.726q6.164-2.483 13.533-2.483q7.286 0 13.453 2.483q6.166 2.402 10.57 6.726q4.485 4.325 6.967 10.17q2.482 5.766 2.483 12.492q-.001 6.727-2.483 12.573a30.8 30.8 0 0 1-6.966 10.09q-4.405 4.323-10.57 6.806q-6.168 2.403-13.454 2.403q-7.368 0-13.533-2.403q-6.087-2.483-10.49-6.806q-4.406-4.325-6.887-10.09q-2.482-5.846-2.482-12.573m88.47-3.204h2.963q4.644 0 7.127-1.922t2.483-5.525t-2.483-5.525t-7.127-1.922h-2.963zm34.514 33.393h-19.539l-14.975-23.223v23.223h-15.695V27.399h24.424q5.043 0 8.809 1.522q3.763 1.44 6.166 4.003a16.3 16.3 0 0 1 3.683 5.926q1.28 3.363 1.281 7.207q0 6.886-3.363 11.211q-3.284 4.244-9.77 5.766zm36.915-47.086h-18.659v10.09h17.618v13.293h-17.618v10.41h18.659v13.293h-34.354V27.399h34.354zm23.007 14.414h5.205q8.648 0 8.648-7.527t-8.648-7.528h-5.205zm0 32.672h-15.696V27.399h24.985q10.169 0 15.535 5.285q5.445 5.285 5.445 14.895q0 9.608-5.445 14.894q-5.366 5.285-15.535 5.285h-9.29zm48.265-30.19q0 3.604 1.361 6.647a16.8 16.8 0 0 0 3.684 5.285a17.3 17.3 0 0 0 5.365 3.524q3.122 1.2 6.567 1.2q3.444 0 6.486-1.2q3.124-1.282 5.445-3.524a16.2 16.2 0 0 0 3.764-5.285q1.36-3.043 1.361-6.647t-1.361-6.646a16.2 16.2 0 0 0-3.764-5.285q-2.321-2.242-5.445-3.444q-3.042-1.28-6.486-1.28a17.1 17.1 0 0 0-6.567 1.28a16.2 16.2 0 0 0-5.365 3.444a16.8 16.8 0 0 0-3.684 5.285q-1.36 3.043-1.36 6.646m-16.416 0q0-6.726 2.483-12.492q2.482-5.845 6.886-10.17q4.405-4.324 10.49-6.726q6.166-2.483 13.534-2.483q7.288 0 13.453 2.483q6.165 2.402 10.57 6.726q4.484 4.325 6.967 10.17q2.482 5.766 2.482 12.492T485.91 70.16a30.8 30.8 0 0 1-6.967 10.09q-4.405 4.323-10.57 6.806q-6.166 2.403-13.453 2.403q-7.367 0-13.533-2.403q-6.086-2.483-10.49-6.806q-4.405-4.325-6.887-10.09q-2.483-5.846-2.483-12.573"
                />
              </svg>
            </div>
            <div key={"vercel"} className="p-4 rounded-lg">
              <svg
                width="130"
                height="28"
                viewBox="0 0 581 113"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M151.397 66.7608C151.996 72.3621 157.091 81.9642 171.877 81.9642C184.764 81.9642 190.959 73.7624 190.959 65.7607C190.959 58.559 186.063 52.6577 176.373 50.6571L169.379 49.1569C166.682 48.6568 164.884 47.1565 164.884 44.7559C164.884 41.9552 167.681 39.8549 171.178 39.8549C176.772 39.8549 178.87 43.5556 179.27 46.4564L190.359 43.9558C189.76 38.6546 185.064 29.7527 171.078 29.7527C160.488 29.7527 152.696 37.0543 152.696 45.8561C152.696 52.7576 156.991 58.4591 166.482 60.5594L172.976 62.0598C176.772 62.8599 178.271 64.6605 178.271 66.8609C178.271 69.4615 176.173 71.762 171.777 71.762C165.983 71.762 163.085 68.1611 162.786 64.2602L151.397 66.7608Z"
                  fill="white"
                />
                <path
                  d="M233.421 80.4639H246.109C245.909 78.7635 245.609 75.3628 245.609 71.5618V31.2529H232.321V59.8592C232.321 65.5606 228.925 69.5614 223.031 69.5614C216.837 69.5614 214.039 65.1604 214.039 59.6592V31.2529H200.752V62.3599C200.752 73.0622 207.545 81.7642 219.434 81.7642C224.628 81.7642 230.325 79.7638 233.022 75.1627C233.022 77.1631 233.221 79.4636 233.421 80.4639Z"
                  fill="white"
                />
                <path
                  d="M273.076 99.4682V75.663C275.473 78.9636 280.469 81.6644 287.263 81.6644C301.149 81.6644 310.439 70.6617 310.439 55.7584C310.439 41.1553 302.148 30.1528 287.762 30.1528C280.37 30.1528 274.875 33.4534 272.677 37.2544V31.253H259.79V99.4682H273.076ZM297.352 55.8585C297.352 64.6606 291.958 69.7616 285.164 69.7616C278.372 69.7616 272.877 64.5605 272.877 55.8585C272.877 47.1566 278.372 42.0554 285.164 42.0554C291.958 42.0554 297.352 47.1566 297.352 55.8585Z"
                  fill="white"
                />
                <path
                  d="M317.964 67.0609C317.964 74.7627 324.357 81.8643 334.848 81.8643C342.139 81.8643 346.835 78.4634 349.332 74.5625C349.332 76.463 349.532 79.1635 349.832 80.4639H362.02C361.72 78.7635 361.422 75.2627 361.422 72.6622V48.4567C361.422 38.5545 355.627 29.7527 340.043 29.7527C326.855 29.7527 319.761 38.2544 318.963 45.9562L330.751 48.4567C331.151 44.1558 334.348 40.455 340.141 40.455C345.737 40.455 348.434 43.3556 348.434 46.8564C348.434 48.5568 347.536 49.9572 344.738 50.3572L332.65 52.1576C324.458 53.3579 317.964 58.2589 317.964 67.0609ZM337.644 71.962C333.349 71.962 331.25 69.1614 331.25 66.2608C331.25 62.4599 333.947 60.5594 337.345 60.0594L348.434 58.359V60.5594C348.434 69.2615 343.239 71.962 337.644 71.962Z"
                  fill="white"
                />
                <path
                  d="M387.703 80.4641V74.4627C390.299 78.6637 395.494 81.6644 402.288 81.6644C416.276 81.6644 425.467 70.5618 425.467 55.6585C425.467 41.0552 417.174 29.9528 402.788 29.9528C395.494 29.9528 390.1 33.1535 387.902 36.6541V8.04785H374.815V80.4641H387.703ZM412.178 55.7584C412.178 64.7605 406.784 69.7616 399.99 69.7616C393.297 69.7616 387.703 64.6606 387.703 55.7584C387.703 46.7564 393.297 41.8554 399.99 41.8554C406.784 41.8554 412.178 46.7564 412.178 55.7584Z"
                  fill="white"
                />
                <path
                  d="M432.99 67.0609C432.99 74.7627 439.383 81.8643 449.873 81.8643C457.165 81.8643 461.862 78.4634 464.358 74.5625C464.358 76.463 464.559 79.1635 464.858 80.4639H477.046C476.748 78.7635 476.448 75.2627 476.448 72.6622V48.4567C476.448 38.5545 470.653 29.7527 455.068 29.7527C441.881 29.7527 434.788 38.2544 433.989 45.9562L445.776 48.4567C446.177 44.1558 449.374 40.455 455.167 40.455C460.763 40.455 463.46 43.3556 463.46 46.8564C463.46 48.5568 462.561 49.9572 459.763 50.3572L447.676 52.1576C439.484 53.3579 432.99 58.2589 432.99 67.0609ZM452.671 71.962C448.375 71.962 446.276 69.1614 446.276 66.2608C446.276 62.4599 448.973 60.5594 452.371 60.0594L463.46 58.359V60.5594C463.46 69.2615 458.265 71.962 452.671 71.962Z"
                  fill="white"
                />
                <path
                  d="M485.645 66.7608C486.243 72.3621 491.339 81.9642 506.124 81.9642C519.012 81.9642 525.205 73.7624 525.205 65.7607C525.205 58.559 520.311 52.6577 510.62 50.6571L503.626 49.1569C500.929 48.6568 499.132 47.1565 499.132 44.7559C499.132 41.9552 501.928 39.8549 505.425 39.8549C511.021 39.8549 513.118 43.5556 513.519 46.4564L524.607 43.9558C524.007 38.6546 519.312 29.7527 505.326 29.7527C494.735 29.7527 486.944 37.0543 486.944 45.8561C486.944 52.7576 491.238 58.4591 500.73 60.5594L507.224 62.0598C511.021 62.8599 512.519 64.6605 512.519 66.8609C512.519 69.4615 510.421 71.762 506.025 71.762C500.23 71.762 497.334 68.1611 497.034 64.2602L485.645 66.7608Z"
                  fill="white"
                />
                <path
                  d="M545.385 50.2571C545.685 45.7562 549.482 40.5549 556.375 40.5549C563.967 40.5549 567.165 45.3561 567.365 50.2571H545.385ZM568.664 63.0601C567.065 67.4609 563.668 70.5617 557.474 70.5617C550.88 70.5617 545.385 65.8606 545.087 59.3593H580.252C580.252 59.159 580.451 57.1587 580.451 55.2582C580.451 39.4547 571.361 29.7527 556.175 29.7527C543.588 29.7527 531.998 39.9548 531.998 55.6584C531.998 72.262 543.886 81.9642 557.374 81.9642C569.462 81.9642 577.255 74.8626 579.753 66.3607L568.664 63.0601Z"
                  fill="white"
                />
                <path
                  d="M63.7076 110.284C60.8481 113.885 55.0502 111.912 54.9813 107.314L53.9738 40.0627L99.1935 40.0627C107.384 40.0627 111.952 49.5228 106.859 55.9374L63.7076 110.284Z"
                  fill="url(#paint0_linear)"
                />
                <path
                  d="M63.7076 110.284C60.8481 113.885 55.0502 111.912 54.9813 107.314L53.9738 40.0627L99.1935 40.0627C107.384 40.0627 111.952 49.5228 106.859 55.9374L63.7076 110.284Z"
                  fill="url(#paint1_linear)"
                  fillOpacity="0.2"
                />
                <path
                  d="M45.317 2.07103C48.1765 -1.53037 53.9745 0.442937 54.0434 5.041L54.4849 72.2922H9.83113C1.64038 72.2922 -2.92775 62.8321 2.1655 56.4175L45.317 2.07103Z"
                  fill="#3ECF8E"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear"
                    x1="53.9738"
                    y1="54.974"
                    x2="94.1635"
                    y2="71.8295"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#249361" />
                    <stop offset="1" stopColor="#3ECF8E" />
                  </linearGradient>
                  <linearGradient
                    id="paint1_linear"
                    x1="36.1558"
                    y1="30.578"
                    x2="54.4844"
                    y2="65.0806"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop />
                    <stop offset="1" stopOpacity="0" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>
        </section>
      </main>
      <footer className="container mx-auto px-4 py-6 text-center text-gray-400">
        <p>&copy; {new Date().getFullYear()} Tonik. All rights reserved.</p>
      </footer>
    </div>
  );
}
