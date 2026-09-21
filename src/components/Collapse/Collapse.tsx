import { ChevronDown } from "lucide-react";
import { useState } from "react";

interface Props {
  title: string | React.ReactNode;
  children?: React.ReactNode;
}
function Collapse({ title, children }: Props) {
  const [open, setOpen] = useState<boolean>(false);

  const handleToggle = () => {
    setOpen(!open);
  };
  return (
    <div
      style={{
        backgroundColor: "var(--secondary)",
        // border: "2px solid var(--primary-300)",
      }}
    >
      <button
        role="button"
        onClick={handleToggle}
        className="d-flex align-center gap-2 pl-2"
        style={{
          border: "none",
          background: "transparent",
          width: "100%",
        }}
      >
        <ChevronDown
          style={{
            transition: "transform 0.3s ease",
            transform: open ? "rotate(-180deg)" : "rotate(0deg)",
          }}
        />
        <h3>{title}</h3>
      </button>
      {open && (
        <div
          className="p-2"
          style={{
            maxWidth: "100%",
          }}
        >
          {children}
        </div>
      )}
    </div>
  );
}

export default Collapse;
