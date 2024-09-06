


export async function getCourts(){
    const response = await fetch(
        "https://api.example.com/courts",
      )
      return await response.json()
}