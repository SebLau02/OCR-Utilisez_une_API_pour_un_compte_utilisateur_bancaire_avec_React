import { useDispatch, useSelector } from "react-redux";
import RootLayout from "../../components/RootLayout";
import TransactionCard from "../../components/TransactionCard/TransactionCard";
import type { AppDispatch, RootState } from "../../store/store";
import Circular from "../../components/Circular";
import { useState } from "react";
import Input from "../../components/Input/Input";
import { updateProfile } from "../../services/user";
import { setUser } from "../../store/reducers";

const mockTransactions = [
  {
    title: "Argent Bank Checking (x8349)",
    amount: "$2,082.79",
    description: "Available Balance",
    category: "checking",
  },
  {
    title: "Argent Bank Savings (x6712)",
    amount: "$10,928.42",
    description: "Available Balance",
    category: "saving",
  },
  {
    title: "Argent Bank Credit Card (x8349)",
    amount: "$$184.30",
    description: "Available Balance",
    category: "credit-card",
  },
];

function User() {
  const user = useSelector((state: RootState) => state.auth.user);
  const token = useSelector((state: RootState) => state.auth.token);
  const dispatch = useDispatch<AppDispatch>();

  const [edit, setEdit] = useState<boolean>(false);

  const handleUpdateUser = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!token) return;

    const formData = new FormData(e.currentTarget);

    const obj = Object.fromEntries(formData.entries());
    try {
      const response = await updateProfile(token, obj);

      dispatch(setUser(response));
      setEdit(false);
    } catch (err) {
      console.log(err);
    }
  };

  if (!user) return <Circular />;

  return (
    <RootLayout>
      <main
        className="bg-dark-blue d-flex align-center flex-column py-4"
        style={{
          minHeight: "80vh",
        }}
      >
        <h1 className="text-secondary text-center">
          Welcome back, <br />
          {!edit && `${user?.firstName} ${user?.lastName}!`}
        </h1>

        {edit ? (
          <form onSubmit={handleUpdateUser} className="mt-2 mb-4">
            <div className="d-flex align-center justify-center gap-2">
              <Input
                type="text"
                name="firstName"
                defaultValue={user.firstName}
              />
              <Input type="text" name="lastName" defaultValue={user.lastName} />
            </div>
            <div className="d-flex align-center justify-center gap-2 mt-2">
              <button
                className="Button-Base"
                style={{
                  width: "fit-content",
                }}
                type="submit"
              >
                Save
              </button>
              <button
                type="button"
                className="Button-Base"
                style={{
                  width: "fit-content",
                }}
                onClick={() => setEdit(false)}
              >
                Cancel
              </button>
            </div>
          </form>
        ) : (
          <button
            className="Button-Base mx-auto mt-2 mb-4"
            style={{
              width: "fit-content",
            }}
            onClick={() => setEdit(true)}
          >
            Edit Name
          </button>
        )}
        <div className="d-flex flex-column gap-4 w-full">
          {mockTransactions.map((transaction, i) => (
            <TransactionCard
              key={i}
              title={transaction.title}
              amount={transaction.amount}
              description={transaction.description}
              href={transaction.category}
            />
          ))}
        </div>
      </main>
    </RootLayout>
  );
}

export default User;
