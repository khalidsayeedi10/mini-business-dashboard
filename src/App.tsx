import TransactionList from "./components/TransactionList";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import SummaryCard from "./components/SummaryCard";
import { useState } from "react";
import { type Transaction } from "./types/transactions";

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

    return (
        <>
            <Header />

            <div className="layout">
                <Sidebar />

                <main className="main-content">
                    <h2>Dashboard</h2>
                    <p>Welcome to your business dashboard.</p>
                    <button onClick={() => setShowExpenses(!showExpenses)}>
                        {showExpenses ? "Hide Expenses" : "Show Expenses"}
                    </button>
                    <div className="summary-cards">
                        {summaryCardsData.map((card, index) => (
                            <SummaryCard
                                key={index}
                                title={card.title}
                                value={card.value}
                            />
                        ))
                        }
                        
                        {showExpenses && (
                            <SummaryCard
                                title="Total Expenses"
                                value="$4200"
                            />
                        )}
                    </div>
                    <TransactionList transactions={transactions} />
                </main>
            </div>
        </>
    );
}

export default App;