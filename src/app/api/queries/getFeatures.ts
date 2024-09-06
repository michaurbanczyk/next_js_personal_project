export async function getFeatures() {
  const response = await fetch("https://api.example.com/features");
  return await response.json();
}
