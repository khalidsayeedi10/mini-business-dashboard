import { useState, type FormEvent } from "react";
import { type Transaction } from "../types/transactions";

type AddTransactionFormProps = {
    onAddTransaction: (transaction: Transaction) => void;
};

function AddTransactionForm({
    onAddTransaction,
}: AddTransactionFormProps) {
    const [customer, setCustomer] = useState("");
    const [type, setType] = useState<Transaction["type"]>("Sale");
    const [amount, setAmount] = useState("");

    function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();

        if (!customer.trim() || !amount) {
            return;
        }

        const newTransaction: Transaction = {
            id: Date.now(),
            customer: customer.trim(),
            type,
            amount: Number(amount),
        };

        onAddTransaction(newTransaction);

        setCustomer("");
        setType("Sale");
        setAmount("");
    }

    return (
        <div className="add-transaction">
            <h2>Add Transaction</h2>

            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="customer">Customer</label>
                    <input
                        id="customer"
                        type="text"
                        value={customer}
                        onChange={(event) =>
                            setCustomer(event.target.value)
                        }
                        placeholder="Customer name"
                    />
                </div>

                <div>
                    <label htmlFor="type">Type</label>
                    <select
                        id="type"
                        value={type}
                        onChange={(event) =>
                            setType(
                                event.target.value as Transaction["type"]
                            )
                        }
                    >
                        <option value="Sale">Sale</option>
                        <option value="Expense">Expense</option>
                    </select>
                </div>

                <div>
                    <label htmlFor="amount">Amount</label>
                    <input
                        id="amount"
                        type="number"
                        min="0"
                        step="0.01"
                        value={amount}
                        onChange={(event) =>
                            setAmount(event.target.value)
                        }
                        placeholder="0.00"
                    />
                </div>

                <button type="submit">Add Transaction</button>
            </form>
        </div>
    );
}

export default AddTransactionForm;
