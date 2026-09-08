import { type Transaction } from "../types/transactions";

type TransactionItemProps = {
    // your properties here
    transaction: Transaction;
};

function TransactionItem({ transaction: { customer, type, amount } }: TransactionItemProps) {
    return (
        <div className="transaction-item">
            <span>{customer}</span>
            <span className={type === "Sale" ? "sale" : "expense"}>{type}</span>
            <span>${amount.toFixed(2)}</span>
        </div>
    );
}

export default TransactionItem;