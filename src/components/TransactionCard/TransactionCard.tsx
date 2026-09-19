import { Link } from "react-router";

interface Props {
  title: string;
  amount: string;
  description: string;
  href: string;
}
function TransactionCard({ title, amount, description, href }: Props) {
  return (
    <article
      className="d-flex align-center justify-space-between"
      style={{
        border: "1px solid black",
        padding: "1.5rem",
        margin: "0 auto",
        backgroundColor: "#fff",
        width: "80%",
      }}
    >
      <div>
        <h2
          style={{
            fontSize: "1rem",
            fontWeight: "normal",
          }}
        >
          {title}
        </h2>
        <p
          className="text-dark-800"
          style={{
            fontWeight: "bold",
            fontSize: "40px",
          }}
        >
          {amount}
        </p>
        <p
          style={{
            fontSize: "1rem",
            fontWeight: "normal",
          }}
        >
          {description}
        </p>
      </div>
      <Link
        to={href}
        className="Button-Base"
        style={{
          width: "fit-content",
        }}
      >
        View transaction
      </Link>
    </article>
  );
}

export default TransactionCard;
