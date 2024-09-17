import axios from "axios";

export async function getCategories(): Promise<CategoriesResponse> {
  const { data } = await axios.get("https://api.example.com/categories");
  return data;
}
