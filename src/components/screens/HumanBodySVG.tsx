interface HumanBodySVGProps {
  height: number;
  style?: {};
}

function HumanBody(props: HumanBodySVGProps) {
  const { height, style } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height={height}
      viewBox="0 0  626 914"
      fill="none"
      style={style}
    >
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
        d="M62.0008 474.893C151.785 435.034 172.478 348.821 377.566 424.065C379.441 424.753 380.805 426.528 380.907 428.522L405.432 908.746C405.578 911.604 403.3 914.001 400.439 914.001H11.6263C8.86489 914.001 6.62727 911.795 6.61676 909.034C5.96664 738.154 -27.3758 514.571 62.0008 474.893Z"
        fill="#C1AA9D"
      />
      <path
        d="M570.872 474.893C481.001 435.034 460.289 348.821 255.002 424.066C253.127 424.753 251.762 426.529 251.66 428.523L227.112 908.746C226.966 911.603 229.244 914.001 232.105 914.001H608.319C611.08 914.001 613.318 911.795 613.332 909.034C614.228 738.154 660.334 514.571 570.872 474.893Z"
        fill="#C1AA9D"
      />
    </svg>
  );
}

export default HumanBody;
