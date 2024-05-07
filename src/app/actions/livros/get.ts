"use server"

export async function getLivro() {

    const resp = await fetch("http://localhost:8080/livro", { next: { revalidate: 0 } })
    return await resp.json()
}