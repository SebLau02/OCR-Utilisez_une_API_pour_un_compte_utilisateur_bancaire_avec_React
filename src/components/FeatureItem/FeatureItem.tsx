interface Props {
  img: string;
  title: string;
  text: string;
}
function FeatureItem({ img, title, text }: Props) {
  return (
    <div className="d-flex flex-column align-center justify-center gap-2">
      <img src={img} alt={title} />
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  );
}

export default FeatureItem;
