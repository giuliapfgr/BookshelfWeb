"use server"

import { redirect } from "next/navigation"

interface ValidationMessages {
    campo: string,
    mensagem: string
}

export async function create(prevState: any, formData: FormData) {
    await new Promise(r => setTimeout(r, 4000))

    const data = {
        nome: formData.get("nome"),
        genero: formData.get("genero"),
        paginas: formData.get("paginas"),
        autor: formData.get("autor"),
        editora: formData.get("editora"),
        data: formData.get("data"),
    }

    const options = {
        method: "post",
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json"
        },
    }

    const resp = await fetch("http://localhost:3000/", options)

    if (resp.ok){
        redirect("http://localhost:3000/")
    }

    if (!resp.ok){
        const messages: Array<ValidationMessages> = await resp.json()
        return{
            message: messages.find(m => m.campo == "nome")?.mensagem
        }
    }
    
}