import TransactionItem from "./TransactionItem";
import { type Transaction } from "../types/transactions";

type TransactionListProps = {
    transactions: Transaction[];
};

function TransactionList({ transactions }: TransactionListProps) {
    return (
        <div className="transaction-list">
            <h2>Recent Transactions</h2>
            <div className="transaction-header">
                <span>Customer</span>
                <span>Type</span>
                <span>Amount</span>
            </div>
            {transactions.map((transaction) => (
                <TransactionItem
                    key={transaction.id}
                    transaction={transaction}
                />
            ))}
        </div>
    );
}

export default TransactionList;