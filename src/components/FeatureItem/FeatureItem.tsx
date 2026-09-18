interface Props {
  img: string;
  title: string;
  text: string;
}
function FeatureItem({ img, title, text }: Props) {
  return (
    <div className="d-flex flex-column align-center justify-center gap-2">
      <div
        style={{
          borderRadius: "50%",
          border: "10px solid #00bc77",
          padding: 16,
        }}
      >
        <img
          src={img}
          alt={title}
          style={{
            maxWidth: 100,
          }}
        />
      </div>

      <h3>{title}</h3>
      <p className="text-center">{text}</p>
    </div>
  );
}

export default FeatureItem;
