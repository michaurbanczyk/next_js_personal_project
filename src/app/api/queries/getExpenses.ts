export async function getExpenses(): Promise<ExpensesResponse[]> {
  const response = await fetch("https://api.example.com/expenses");
  return await response.json();
}
