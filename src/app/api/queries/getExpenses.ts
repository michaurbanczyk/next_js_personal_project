export async function getExpenses() {
  const response = await fetch("https://api.example.com/expenses");
  return await response.json();
}
