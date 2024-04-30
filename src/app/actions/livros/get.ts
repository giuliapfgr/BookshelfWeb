"use server"

export async function getLivros() {
    await new Promise(r => setTimeout(r, 6000))

    const resp = await fetch("http://localhost:3000/", { next: { revalidate: 0 } })
    return await resp.json()
}