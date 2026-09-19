import RootLayout from "../../components/RootLayout";
import TransactionCard from "../../components/TransactionCard/TransactionCard";

const mockTransactions = [
  {
    title: "Argent Bank Checking (x8349)",
    amount: "$2,082.79",
    description: "Available Balance",
  },
  {
    title: "Argent Bank Checking (x8349)",
    amount: "$2,082.79",
    description: "Available Balance",
  },
  {
    title: "Argent Bank Checking (x8349)",
    amount: "$2,082.79",
    description: "Available Balance",
  },
];

function User() {
  return (
    <RootLayout>
      <main
        className="bg-dark-blue d-flex align-center flex-column py-4"
        style={{
          minHeight: "80vh",
        }}
      >
        <h1 className="text-secondary text-center">
          Welcome back, <br /> User
        </h1>

        <button
          className="Button-Base mx-auto mt-2 mb-4"
          style={{
            width: "fit-content",
          }}
        >
          Edit Name
        </button>
        <div className="d-flex flex-column gap-4 w-full">
          {mockTransactions.map((transaction, i) => (
            <TransactionCard
              key={i}
              title={transaction.title}
              amount={transaction.amount}
              description={transaction.description}
              href="/transaction"
            />
          ))}
        </div>
      </main>
    </RootLayout>
  );
}

export default User;
