"use server"

import { redirect } from "next/navigation"

export async function destroy(id: number){
    await new Promise(r => setTimeout(r, 4000))

    const resp = await fetch("http://localhost:3000/" + id , { method: "delete" })

    if(resp.ok){
        redirect("http://localhost:3000/")
    }

    if(!resp.ok){
        throw new Error("Erro ao apagar categoria")
    }
}