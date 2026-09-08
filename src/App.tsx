import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import SummaryCard from "./components/SummaryCard";
import { useState } from "react";

function App() {
    const summaryCardsData = [
        { title: "Total Revenue", value: "$12,500" },
        { title: "Customers", value: "128" },
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
                        ))}{showExpenses && (
                            <SummaryCard
                                title="Total Expenses"
                                value="$4200"
                            />
                        )}
                    </div>
                </main>
            </div>
        </>
    );
}

export default App;