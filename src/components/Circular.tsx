function Circular() {
  return (
    <div
      className="d-flex flex-row align-center justify-center"
      style={{
        minHeight: "80vh",
      }}
    >
      <svg
        width="100"
        height="100"
        style={{
          position: "relative",
        }}
      >
        <circle
          cx="50"
          cy="50"
          r="40"
          stroke="black"
          strokeWidth="5"
          fill="transparent"
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            stroke: "var(--primary-700)",
            strokeDasharray: "252",
            strokeDashoffset: "0",
          }}
        />
        <circle
          cx="50"
          cy="50"
          r="40"
          stroke="black"
          strokeWidth="6"
          fill="transparent"
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            stroke: "var(--primary-400)",
            strokeDasharray: "170",
            strokeDashoffset: "170",
            animation: "dash 2s linear infinite",
            transformOrigin: "50% 50%",
          }}
        />
      </svg>
    </div>
  );
}

export default Circular;
