export async function getFeatureById(id: string) {
  const response = await fetch(`https://api.example.com/features/${id}`);
  return await response.json();
}
