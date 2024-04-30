"use server"

export async function getById(id: number){
    const resp = await fetch("http://localhost8080" + id)

    if (resp.ok){
        return await resp.json()
    }

    if (!resp.ok){
        throw new Error("Livro não encontrado")
    }
}