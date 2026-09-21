export type User = {
  email: string;
  firstName: string;
  lastName: string;
  createdAt: string;
  updatedAt: string;
  id: string;
};

export type Transactions = {
  title: string;
  amount: string;
  description: string;
  category: string;
  lines: TransactionLine[];
};

export type TransactionLine = {
  date: string;
  description: string;
  amount: number;
  balance: number;
  transactionType: string;
  category: string;
  notes: string;
};
