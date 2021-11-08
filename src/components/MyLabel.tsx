import "./MyLabel.css";

interface MyLabelProps {
  /**
   * This is the label to show
   */
  label?: string;
  /**
   * This is the size in which is shown
   */
  size?: "normal" | "h1" | "h2" | "h3";
  /**
   * All words in uppercase
   */
  allCaps?: boolean;
  /**
   * Basic colors
   */
  color?: "primary" | "secondary" | "tertiary";
  /**
   * Custom font color
   */
  fontColor?: string;
  /**
   * Set background color
   */
  backgroundColor?: string;
}

export default function MyLabel({
  label = "No label",
  size = "normal",
  allCaps = false,
  color = "primary",
  fontColor,
  backgroundColor = "transparent",
}: MyLabelProps) {
  return (
    <span
      className={`label ${size} text-${color}`}
      style={{ color: fontColor, backgroundColor }}
    >
      {allCaps ? label.toUpperCase() : label}
    </span>
  );
}
