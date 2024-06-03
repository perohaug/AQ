import { PM25, PM10, GasParticle, NoGasParticle } from './elements/constants';

interface BouncingSVGElementsProps {
  pm25: number;
  Bpm25?: number;
  pm10: number;
  Bpm10?: number;
  gas: number;
  Bgas?: number;
  nogas: number;
  Bnogas?: number;
  height: number;
  showLungs: Boolean;
  compare: boolean;
}

const BouncingSVGElements: React.FC<BouncingSVGElementsProps> = ({
  pm10,
  Bpm10,
  pm25,
  Bpm25,
  gas,
  nogas,
  Bgas,
  Bnogas,
  height,
  showLungs,
  compare,
}) => {
  {
    const generateRandomDelay = () => {
      return Math.floor(Math.random() * (20 - 5 + 1) + 5);
    };

    const generatePM25Elements = (val: number, lane: string) => {
      const pm25Elements = [];
      for (let i = 0; i < val; i++) {
        const delay = i;
        pm25Elements.push(<PM25 key={`pm25-${i}`} style={{}} lane={lane} dur={i} />);
      }
      return pm25Elements;
    };

    const generatePM10Elements = (val: number, lane: string) => {
      const pm10Elements = [];
      for (let i = 0; i < val; i++) {
        const delay = generateRandomDelay();
        pm10Elements.push(<PM10 key={`pm10-${i}`} style={{}} lane={lane} dur={i} />);
      }
      return pm10Elements;
    };

    const generateGasElements = (val: number, lane: string, comp: boolean) => {
      const gasElements = [];
      for (let i = 0; i < val; i++) {
        if (!comp) {
          const delay = generateRandomDelay();
          gasElements.push(<GasParticle key={`gas-${i}`} style={{}} dur={i + 0.5} lane={lane} comp={4} />);
        } else {
          const delay = generateRandomDelay();
          gasElements.push(<GasParticle key={`gas-${i}`} style={{}} lane={lane} dur={i + 0.5} comp={1} />);
        }
      }
      return gasElements;
    };

    const generateNOGasElements = (val: number, lane: string) => {
      const gasElements = [];
      for (let i = 0; i < val; i++) {
        const delay = generateRandomDelay();
        gasElements.push(<NoGasParticle key={`gas-${i}`} style={{}} lane={lane} dur={i + 0.5} />);
      }
      return gasElements;
    };
    console.log(Bgas, Bpm10, Bpm25);

    return (
      <div className="relative">
        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height={height} viewBox="0 0 626 914" fill="none">
          <path
            d="M459.473 160.31C459.473 250.168 365.545 319.403 258.47 319.403C151.395 319.403 170.132 292.67 165.778 132.318C161.424 -28.0338 224.743 1.78398 313.586 2.85565C402.428 3.92733 459.473 70.4517 459.473 160.31Z"
            fill="#C1AA9D"
          />
          <path
            d="M197.706 137.971C208.165 146.152 213.098 181.505 195.146 200.568C177.194 219.631 143.155 215.185 132.696 207.004C122.238 198.823 145.152 181.813 163.104 162.75C181.056 143.687 187.248 129.79 197.706 137.971Z"
            fill="#C1AA9D"
          />
          <rect x="244.481" y="272.277" width="142.048" height="143.458" fill="#C1AA9D" />
          <path
            d="M62.0008 474.893C151.785 435.034 172.478 348.821 377.566 424.065C379.441 424.753 380.805 426.528 380.907 428.522L405.432 908.746C405.578 911.604 403.3 914.001 400.438 914.001H11.6263C8.86489 914.001 6.62727 911.795 6.61676 909.034C5.96664 738.154 -27.3758 514.571 62.0008 474.893Z"
            fill="#C1AA9D"
          />
          <path
            d="M570.872 474.893C481.001 435.034 460.289 348.821 255.002 424.066C253.127 424.753 251.762 426.529 251.66 428.523L227.112 908.746C226.966 911.603 229.244 914.001 232.105 914.001H608.319C611.08 914.001 613.318 911.795 613.332 909.034C614.228 738.154 660.334 514.571 570.872 474.893Z"
            fill="#C1AA9D"
          />
          <g className="transform translate-x-[-10px] translate-y-[-10px] transition-transform duration-500">
            {showLungs && !compare && (
              <>
                <path
                  d="M323.244 462.517C323.244 403.238 318.342 370.003 318.342 310.723C318.342 232 318.342 232 246.381 232C209.582 232 195.059 228.529 165 232V249.629C195.059 246.158 158.466 249.629 195.264 249.629C292.724 249.629 292.724 249.629 292.724 312.111C292.724 371.396 288.58 404.636 288.58 463.921C296.785 471.564 308.273 488.532 288.58 497.933C264.969 539.511 239.85 549.906 228.17 549.906C209.08 551.339 123.3 567.198 102.326 590.796C81.352 614.394 32.1197 746.714 53.0937 775.185C74.0676 803.655 139.753 884.671 195.264 859.067C250.776 833.463 275.393 761.427 275.393 746.81C275.393 735.116 286.947 637.928 292.724 590.796C292.724 558.084 301.265 548.492 305.535 548.492C309.804 548.492 318.342 556.669 318.342 589.378C324.118 636.505 335.669 733.683 335.669 745.376C335.669 759.991 360.279 832.019 415.776 857.621C471.272 883.222 536.939 802.215 557.908 773.747C578.876 745.28 529.657 612.974 508.689 589.378C487.721 565.783 401.964 549.925 382.879 548.492C371.202 548.492 346.849 538.099 323.244 496.525C303.556 487.125 315.04 470.159 323.244 462.517Z"
                  fill="#F1D2C0"
                />
                <path
                  d="M76.8979 244.592C140.292 240.208 265.939 238.282 282.53 244.592C298.716 250.749 302.395 254.945 304.234 273.414C305.705 288.189 304.847 317.094 304.234 319.7"
                  stroke="none"
                  id="gas-lane"
                />
                <path
                  d="M76.8979 244.592C140.292 240.208 265.939 238.282 282.53 244.592C298.716 250.749 302.395 254.945 304.234 273.414C305.678 287.917 304.878 441.293 304.268 520.333C304.246 523.15 305.393 525.785 307.497 527.658C338.283 555.052 410.3 605.882 477.805 611.497C486.37 612.998 504.4 617.9 508 625.5C512.5 635 550 707 546.5 723.5C543 740 493 745.5 427 745.5C361 745.5 330 741.5 348 750C366 758.5 623 736 532.5 750C442 764 328.5 750.5 348 758.5C367.5 766.5 611 751.5 537.5 758.5C464 765.5 323.5 761 355.5 770.5C387.5 780 577.5 753.5 546.5 770.5C515.5 787.5 324.5 769 360.5 779C396.5 789 557 776 539.5 781.5C522 787 328.5 783 374.5 789.5C420.5 796 560.5 780.5 524.5 796C488.5 811.5 331.5 786.5 374.5 801.5C417.5 816.5 551.5 796 512 810C472.5 824 346.5 802 382 814.5C417.5 827 537.5 812 499.5 823.5C461.5 835 356.5 814 397 826.5C437.5 839 511 824 489 834C467 844 376 830 401.5 839.5C427 849 488 839 465.5 848.5C447.5 856.1 428.333 855.333 421 854"
                  id="right-lane-pm25"
                  stroke="none"
                />
                <path
                  d="M76.8979 244.592C140.292 240.208 265.939 238.282 282.53 244.592C298.716 250.749 302.395 254.945 304.234 273.414C305.678 287.916 304.878 441.277 304.268 520.321C304.246 523.144 305.397 525.794 307.535 527.638C338.056 553.955 405.949 591.152 473.415 596.74C505 596.74 500 598.6 478 607C450.5 617.5 293.5 567.479 340 596.74C386.5 626 565 609 490 624C415 639 298.5 583.5 354.5 616.5C410.5 649.5 565 616.5 497 638C429 659.5 293 602 354.5 634C414.864 665.409 542.184 635.16 517.081 649.635C516.113 650.193 514.91 650.589 513.804 650.75C386.442 669.251 323.597 622.126 345.5 650.5C367.5 679 580.5 643.5 505 672.5C429.5 701.5 314 639 350.5 672.5C387 706 574 669.5 515.5 701.5C468.7 727.1 382.667 698.167 345.5 680.5"
                  id="right-lane-pm10"
                  stroke="none"
                />
                <path
                  d="M76.8979 244.592C140.292 240.208 265.939 238.282 282.53 244.592C298.716 250.749 302.395 254.945 304.234 273.414C305.705 288.189 304.847 447.094 304.234 524.7C275.541 551.191 204.58 591.18 134.54 597C103.053 597 102.069 598.582 124 607C151.414 617.522 313.892 567.678 267.538 597C221.183 626.322 44.2344 607.968 119 623C193.766 638.032 317.88 585.235 262.055 618.305C206.23 651.375 43.2409 616.802 111.028 638.347C178.816 659.893 318.808 602.932 257.5 635C197.341 666.467 66.3854 635.518 91 649.995C91.9671 650.564 93.1787 650.964 94.289 651.126C221.245 669.662 283.889 622.44 262.055 650.874C240.124 679.434 27.7894 643.859 103.053 672.92C178.317 701.982 298.441 635.429 262.055 669C225.669 702.571 34.269 669.914 92.5862 701.982C139.24 727.636 225.004 698.641 262.055 680.937"
                  id="left-lane-pm10"
                  stroke="none"
                />
                <path
                  d="M76.8981 244.592C140.292 240.208 265.939 238.282 282.53 244.592C298.716 250.749 302.395 254.945 304.234 273.414C305.705 288.189 304.847 447.094 304.234 524.7C275.541 551.191 200.645 605.627 130.605 611.447C122.038 612.952 104.115 617.867 100.514 625.487C96.0123 635.012 58.4992 707.201 62.0004 723.744C65.5016 740.288 115.519 745.802 181.542 745.802C247.565 745.802 278.576 741.792 260.57 750.314C242.563 758.837 -14.5264 736.277 76.0053 750.314C166.537 764.351 280.077 750.815 260.57 758.836C241.063 766.858 -4.52335 751.818 69.0023 758.836C142.528 765.855 285.078 761.343 253.067 770.868C221.056 780.393 30.9895 753.823 62.0004 770.868C93.0112 787.913 284.078 769.364 248.065 779.39C212.053 789.417 51.4967 776.383 69.0028 781.897C86.5089 787.411 280.077 783.401 234.061 789.918C188.044 796.435 47.9955 780.894 84.0081 796.435C120.021 811.976 277.076 786.91 234.061 801.95C191.045 816.989 56.9986 796.435 96.5124 810.472C136.026 824.509 262.07 802.451 226.558 814.984C191.045 827.517 71.0035 812.477 109.017 824.007C147.03 835.538 252.067 814.482 211.553 827.015C171.039 839.548 97.5128 824.509 119.52 834.535C141.528 844.561 232.56 830.524 207.051 840.049C181.542 849.574 120.521 839.548 143.029 849.073C161.035 856.693 180.208 855.924 187.544 854.588"
                  id="left-lane-pm25"
                  stroke="none"
                />
                {generatePM25Elements(pm25, 'pm25')}
                {generatePM10Elements(pm10, 'pm10')}
                {generateGasElements(gas, '#gas-lane', false)}
                {generateNOGasElements(nogas, 'pm25')}
              </>
            )}
            {showLungs && compare && Bgas && Bnogas && Bpm10 && Bpm25 && (
              <>
                <path
                  d="M323.244 462.517C323.244 403.238 318.342 370.003 318.342 310.723C318.342 232 318.342 232 246.381 232C209.582 232 195.059 228.529 165 232V249.629C195.059 246.158 158.466 249.629 195.264 249.629C292.724 249.629 292.724 249.629 292.724 312.111C292.724 371.396 288.58 404.636 288.58 463.921C296.785 471.564 308.273 488.532 288.58 497.933C264.969 539.511 239.85 549.906 228.17 549.906C209.08 551.339 123.3 567.198 102.326 590.796C81.352 614.394 32.1197 746.714 53.0937 775.185C74.0676 803.655 139.753 884.671 195.264 859.067C250.776 833.463 275.393 761.427 275.393 746.81C275.393 735.116 286.947 637.928 292.724 590.796C292.724 558.084 301.265 548.492 305.535 548.492C309.804 548.492 318.342 556.669 318.342 589.378C324.118 636.505 335.669 733.683 335.669 745.376C335.669 759.991 360.279 832.019 415.776 857.621C471.272 883.222 536.939 802.215 557.908 773.747C578.876 745.28 529.657 612.974 508.689 589.378C487.721 565.783 401.964 549.925 382.879 548.492C371.202 548.492 346.849 538.099 323.244 496.525C303.556 487.125 315.04 470.159 323.244 462.517Z"
                  fill="#F1D2C0"
                />
                <path
                  d="M266.745 549C238.052 575.49 200.145 606.427 130.105 612.247C121.537 613.752 103.615 618.667 100.014 626.287C95.512 635.812 57.9989 708.001 61.5001 724.545C65.0013 741.088 115.019 746.602 181.042 746.602C247.065 746.602 278.076 742.592 260.07 751.114C242.063 759.637 -15.0266 737.077 75.505 751.114C166.037 765.151 279.576 751.616 260.07 759.637C240.563 767.658 -5.0236 752.618 68.5021 759.637C142.028 766.655 284.578 762.143 252.567 771.668C220.556 781.193 30.4893 754.623 61.5001 771.668C92.5109 788.713 283.578 770.164 247.565 780.19C211.553 790.217 50.9964 777.183 68.5026 782.697C86.0087 788.211 279.576 784.201 233.56 790.718C187.544 797.235 47.4952 781.694 83.5078 797.235C119.52 812.776 276.575 787.71 233.56 802.75C190.545 817.789 56.4984 797.235 96.0122 811.272C135.526 825.309 261.57 803.251 226.058 815.784C190.545 828.317 70.5033 813.277 108.517 824.807C146.53 836.338 251.567 815.282 211.052 827.815C170.538 840.348 97.0125 825.309 119.02 835.335C141.028 845.361 232.06 831.325 206.551 840.849C181.042 850.374 120.021 840.348 142.528 849.873C160.535 857.493 179.708 856.724 187.044 855.388"
                  id="left-compare-pm25"
                />
                <path
                  d="M266.692 549C237.999 575.49 203.846 589.698 133.806 595.518C102.32 595.518 101.335 597.101 123.266 605.518C150.68 616.04 313.159 566.196 266.804 595.518C220.449 624.84 43.5005 606.487 118.266 621.518C193.032 636.55 317.146 583.754 261.321 616.823C205.496 649.893 42.507 615.32 110.295 636.866C178.082 658.411 318.074 601.451 256.766 633.518C196.607 664.985 65.6515 634.036 90.2661 648.513C91.2332 649.082 92.4448 649.482 93.5551 649.644C220.511 668.18 283.155 620.959 261.321 649.392C239.39 677.952 27.0555 642.377 102.32 671.439C177.584 700.5 297.707 633.947 261.321 667.518C224.935 701.089 33.5351 668.432 91.8523 700.5C138.506 726.154 224.271 697.159 261.321 679.455"
                  id="left-compare-pm10"
                />
                <path
                  d="M341.112 549C369.739 575.549 403.814 589.787 473.693 595.621C505.107 595.621 506.089 597.206 484.209 605.643C456.857 616.188 294.752 566.234 341 595.621C387.249 625.007 563.791 606.613 489.197 621.678C414.603 636.743 290.774 583.83 346.47 616.973C402.167 650.115 564.782 615.466 497.15 637.059C429.518 658.652 289.848 601.566 351.015 633.704C411.036 665.24 541.691 634.223 517.133 648.732C516.168 649.302 514.959 649.703 513.851 649.865C387.187 668.442 324.687 621.117 346.47 649.613C368.351 678.236 580.198 642.583 505.107 671.708C430.016 700.833 310.168 634.134 346.47 667.779C382.773 701.424 573.734 668.695 515.55 700.833C469.004 726.544 383.436 697.485 346.47 679.742"
                  id="right-compare-pm10"
                />
                <path
                  d="M341 550C369.701 576.469 407.619 607.381 477.68 613.196C486.25 614.7 504.178 619.611 507.781 627.225C512.283 636.742 549.808 708.873 546.306 725.403C542.803 741.933 492.771 747.443 426.728 747.443C360.685 747.443 329.665 743.436 347.677 751.952C365.689 760.467 622.855 737.926 532.296 751.952C441.738 765.977 328.164 752.452 347.677 760.467C367.19 768.482 612.849 753.454 539.301 760.467C465.754 767.48 323.161 762.972 355.182 772.489C387.203 782.006 577.326 755.458 546.306 772.489C515.285 789.52 324.162 770.986 360.185 781.004C396.208 791.023 556.812 777.999 539.301 783.509C521.79 789.019 328.164 785.012 374.194 791.523C420.224 798.035 560.315 782.507 524.291 798.035C488.268 813.564 331.166 788.518 374.194 803.545C417.222 818.573 551.309 798.035 511.783 812.061C472.258 826.086 346.176 804.046 381.699 816.569C417.222 829.092 537.3 814.064 499.275 825.585C461.25 837.106 356.182 816.068 396.709 828.591C437.235 841.114 510.783 826.086 488.768 836.105C466.754 846.123 375.695 832.097 401.212 841.615C426.728 851.132 487.768 841.114 465.253 850.631C447.241 858.245 428.062 857.477 420.724 856.141"
                  id="right-compare-pm25"
                />
                {generatePM25Elements(pm25, '#right-compare-pm25')}
                {generatePM10Elements(pm10, '#right-compare-pm10')}
                {generateGasElements(gas, '#right-compare-pm10', true)}
                {generateNOGasElements(nogas, '#right-compare-pm25')}
                {generatePM25Elements(Bpm25, '#left-compare-pm25')}
                {generatePM10Elements(Bpm10, '#left-compare-pm10')}
                {generateGasElements(Bgas, '#left-compare-pm10', true)}
                {generateNOGasElements(Bnogas, '#left-compare-pm25')}
              </>
            )}
          </g>
        </svg>
      </div>
    );
  }
};

export default BouncingSVGElements;
