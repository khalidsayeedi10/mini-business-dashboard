export type Transaction = {
    id: number;
    customer: string;
    type: "Sale" | "Expense";
    amount: number;
};