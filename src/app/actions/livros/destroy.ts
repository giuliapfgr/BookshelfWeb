"use server"

import { redirect } from "next/navigation"

export async function destroy(id: number){
    
    const resp = await fetch("http://localhost:8080/livro/" + id , { method: "delete" })
    console.log(resp)
    if(resp.ok){
        redirect("/")
    }

    if(!resp.ok){
        throw new Error("Erro ao apagar livro")
    }
}