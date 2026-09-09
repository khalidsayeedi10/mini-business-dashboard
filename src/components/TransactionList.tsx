import TransactionItem from "./TransactionItem";
import { type Transaction } from "../types/transactions";

type TransactionFilter = "All" | "Sale" | "Expense";

type TransactionListProps = {
    transactions: Transaction[];
    selectedFilter: TransactionFilter;
    onFilterChange: (filter: TransactionFilter) => void;
};

function TransactionList({
    transactions,
    selectedFilter,
    onFilterChange,
}: TransactionListProps) {
    return (
        <div className="transaction-list">
            <h2>Recent Transactions</h2>

            <div className="transaction-filters">
                <button
                    onClick={() => onFilterChange("All")}
                    className={selectedFilter === "All" ? "active" : ""}
                >
                    All
                </button>

                <button
                    onClick={() => onFilterChange("Sale")}
                    className={selectedFilter === "Sale" ? "active" : ""}
                >
                    Sales
                </button>

                <button
                    onClick={() => onFilterChange("Expense")}
                    className={selectedFilter === "Expense" ? "active" : ""}
                >
                    Expenses
                </button>
            </div>

            <div className="transaction-header">
                <span>Customer</span>
                <span>Type</span>
                <span>Amount</span>
            </div>

            {transactions.length > 0 ? (
                transactions.map((transaction) => (
                    <TransactionItem
                        key={transaction.id}
                        transaction={transaction}
                    />
                ))
            ) : (
                <p>No transactions found.</p>
            )}
        </div>
    );
}

export default TransactionList;
