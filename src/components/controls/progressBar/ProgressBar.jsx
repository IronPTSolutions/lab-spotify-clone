import "./ProgressBar.css";

export default function ProgressBar({ progress = 0 }) {
  return (
    <div className="ProgressBar">
      <div
        className="progressbar-progress"
        style={{ width: `${progress}%` }}
      ></div>
    </div>
  );
}
