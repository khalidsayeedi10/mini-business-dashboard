import { useState } from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import SummaryCard from "./components/SummaryCard";
import TransactionList from "./components/TransactionList";
import { type Transaction } from "./types/transactions";

type TransactionFilter = "All" | "Sale" | "Expense";

function App() {
    const summaryCardsData = [
        { title: "Total Revenue", value: "$12,500" },
        { title: "Customers", value: "128" },
    ];

    const transactions: Transaction[] = [
        { id: 1, customer: "Ahmad", type: "Sale", amount: 500 },
        { id: 2, customer: "Sara", type: "Sale", amount: 320 },
        { id: 3, customer: "Ali", type: "Expense", amount: 150 },
    ];

    const [showExpenses, setShowExpenses] = useState(true);

    const [selectedFilter, setSelectedFilter] =
        useState<TransactionFilter>("All");

    const filteredTransactions =
        selectedFilter === "All"
            ? transactions
            : transactions.filter(
                  (transaction) => transaction.type === selectedFilter
              );

    return (
        <>
            <Header />

            <div className="layout">
                <Sidebar />

                <main className="main-content">
                    <h2>Dashboard</h2>
                    <p>Welcome to your business dashboard.</p>

                    <button
                        onClick={() => setShowExpenses(!showExpenses)}
                    >
                        {showExpenses
                            ? "Hide Expenses"
                            : "Show Expenses"}
                    </button>

                    <div className="summary-cards">
                        {summaryCardsData.map((card, index) => (
                            <SummaryCard
                                key={index}
                                title={card.title}
                                value={card.value}
                            />
                        ))}

                        {showExpenses && (
                            <SummaryCard
                                title="Total Expenses"
                                value="$4200"
                            />
                        )}
                    </div>

                    <TransactionList
                        transactions={filteredTransactions}
                        selectedFilter={selectedFilter}
                        onFilterChange={setSelectedFilter}
                    />
                </main>
            </div>
        </>
    );
}

export default App;