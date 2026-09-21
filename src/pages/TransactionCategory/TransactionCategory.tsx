import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getTransactions } from "../../services/transactions";
import { useSelector } from "react-redux";
import type { RootState } from "../../store/store";
import type { Transactions } from "../../config/types";
import Circular from "../../components/Circular";
import RootLayout from "../../components/RootLayout";
import Collapse from "../../components/Collapse/Collapse";
import { Check, Pencil, X } from "lucide-react";
import Input from "../../components/Input/Input";

const heads = ["Date", "Description", "Amount", "Balance"];
function TransactionCategory() {
  const { transactionCategorySlug } = useParams();
  const token = useSelector((state: RootState) => state.auth.token);
  const [transactions, setTransactions] = useState<Transactions | undefined>();
  const [edit, setEdit] = useState<{ [key: string]: boolean }>({});

  const handleEdit = (e: React.MouseEvent<HTMLButtonElement>) => {
    const { name } = e.currentTarget;

    setEdit({ [name]: true });
  };
  const handleCloseEdit = (e: React.MouseEvent<HTMLButtonElement>) => {
    const { name } = e.currentTarget;

    setEdit({ [name]: false });
  };

  useEffect(() => {
    if (!token || !transactionCategorySlug) return;
    getTransactions(token, transactionCategorySlug).then((data) => {
      setTransactions(data);
    });
  }, [transactionCategorySlug, token]);

  if (!transactions) {
    return <Circular />;
  }

  return (
    <RootLayout>
      <main
        className="bg-dark-blue d-flex align-center flex-column pb-4"
        style={{
          minHeight: "80vh",
        }}
      >
        <header
          className="d-flex align-center flex-column bg-secondary w-full py-4"
          style={{
            border: "1px solid var(--dark-800)",
          }}
        >
          <div>
            <h2
              style={{
                fontSize: "1rem",
                fontWeight: "normal",
              }}
              className="text-center"
            >
              {transactions.title}
            </h2>
            <p
              className="text-dark-800 text-center"
              style={{
                fontWeight: "bold",
                fontSize: "40px",
              }}
            >
              {transactions.amount}
            </p>
            <p
              className="text-center"
              style={{
                fontSize: "1rem",
                fontWeight: "normal",
              }}
            >
              {transactions.description}
            </p>
          </div>
        </header>
        <div
          className="mt-4"
          style={{
            maxWidth: 800,
            width: "100%",
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              paddingLeft: "40px",
            }}
          >
            {heads.map((head, i) => (
              <p className="text-secondary text-center py-1" key={i}>
                {head}
              </p>
            ))}
          </div>
          {transactions.lines.map((line, i) => (
            <Collapse
              key={i}
              title={
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(4, 1fr)",
                  }}
                >
                  <p className="text-center font-bold py-2">{line.date}</p>
                  <p className="text-center font-bold py-2">
                    {line.description}
                  </p>
                  <p className="text-center font-bold py-2">{line.amount}</p>
                  <p className="text-center font-bold py-2">{line.balance}</p>
                </div>
              }
            >
              <p className="font-medium mb-2">
                Transaction Type: {line.transactionType}
              </p>
              <p className="font-medium mb-2 d-flex gap-2 align-center">
                Category:{" "}
                {edit.category ? (
                  <div className="d-flex">
                    <Input defaultValue={line.category} />
                    <button
                      className="Button-Base variant-text icon-button"
                      style={{
                        width: "fit-content",
                      }}
                      name="category"
                      onClick={handleCloseEdit}
                    >
                      <Check
                        size={18}
                        style={{
                          color: "var(--primary-main)",
                        }}
                      />
                    </button>{" "}
                    <button
                      className="Button-Base variant-text icon-button"
                      style={{
                        width: "fit-content",
                      }}
                      name="category"
                      onClick={handleCloseEdit}
                    >
                      <X
                        size={18}
                        style={{
                          color: "var(--dark)",
                        }}
                      />
                    </button>
                  </div>
                ) : (
                  <>
                    {line.category}{" "}
                    <button
                      className="Button-Base variant-text icon-button"
                      style={{
                        width: "fit-content",
                      }}
                      name="category"
                      onClick={handleEdit}
                    >
                      <Pencil
                        size={18}
                        style={{
                          color: "var(--dark)",
                        }}
                      />
                    </button>
                  </>
                )}
              </p>
              <p className="font-medium mb-2 d-flex gap-2 align-center">
                Notes:{" "}
                {edit.notes ? (
                  <div className="d-flex">
                    <Input defaultValue={line.notes} />
                    <button
                      className="Button-Base variant-text icon-button"
                      style={{
                        width: "fit-content",
                      }}
                      name="notes"
                      onClick={handleCloseEdit}
                    >
                      <Check
                        size={18}
                        style={{
                          color: "var(--primary-main)",
                        }}
                      />
                    </button>{" "}
                    <button
                      className="Button-Base variant-text icon-button"
                      style={{
                        width: "fit-content",
                      }}
                      name="notes"
                      onClick={handleCloseEdit}
                    >
                      <X
                        size={18}
                        style={{
                          color: "var(--dark)",
                        }}
                      />
                    </button>
                  </div>
                ) : (
                  <>
                    {line.notes}{" "}
                    <button
                      className="Button-Base variant-text icon-button"
                      style={{
                        width: "fit-content",
                      }}
                      name="notes"
                      onClick={handleEdit}
                    >
                      <Pencil
                        size={18}
                        style={{
                          color: "var(--dark)",
                        }}
                      />
                    </button>
                  </>
                )}
              </p>
            </Collapse>
          ))}
        </div>
      </main>
    </RootLayout>
  );
}

export default TransactionCategory;
