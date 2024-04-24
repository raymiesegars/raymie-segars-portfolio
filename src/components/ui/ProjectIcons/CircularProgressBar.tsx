import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

interface ProgressBarProps {
  completeness: number;
  text: number;
}

const ProgressBar = ({ completeness }: ProgressBarProps) => (
  <div style={{ width: 50, height: 50 }}>
    <CircularProgressbar value={completeness} text={`${completeness}%`} strokeWidth={10} styles={buildStyles({
      pathColor: `#eab50f`,
      trailColor: `#000000`,
      textColor: "#eab50f",
    })}  />
  </div>
);

export default ProgressBar;
