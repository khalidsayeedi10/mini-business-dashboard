import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import SummaryCard from "./components/SummaryCard";

function App() {
    const summaryCardsData = [
        { title: "Total Revenue", value: "$12,500" },
        { title: "Total Expenses", value: "$4200" },
        { title: "Customers", value: "128" },
    ];
    return (
        <>
            <Header />

            <div className="layout">
                <Sidebar />

                <main className="main-content">
                    <h2>Dashboard</h2>
                    <p>Welcome to your business dashboard.</p>
                    <div className="summary-cards">
                        {summaryCardsData.map((card, index) => (
                            <SummaryCard
                                key={index}
                                title={card.title}
                                value={card.value}
                            />
                        ))}
                    </div>
                </main>
            </div>
        </>
    );
}

export default App;