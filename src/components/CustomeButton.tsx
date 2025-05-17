import "../index.css";

interface ButtonProps {
  height: string;
  width: string;
  textColor: string;
  color: string; // Background color
  text: string;
  onClick: () => void;
  borderRadius?: string;
  fontSize?: string;
  borderWidth?: string;
}

const CustomeButton = ({
  height,
  width,
  textColor,
  color,
  text,
  onClick,
  borderRadius = "6px",
  fontSize = "14px",
  borderWidth = "1px",
}: ButtonProps) => {
  return (
    <button
      className="custom-button"
      style={{
        height,
        width,
        color: textColor,
        backgroundColor: color,
        border: `${borderWidth} solid ${textColor}`,
        borderRadius,
        fontSize,
        fontWeight: "600",
        cursor: "pointer",
        textTransform: "uppercase",
        margin: '10px'
      }}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default CustomeButton;
