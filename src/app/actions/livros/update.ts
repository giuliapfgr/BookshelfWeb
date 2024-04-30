"use server"

import { redirect } from "next/navigation"

interface ValidationMessages{
    campo: string,
    mensagem: string
}

export async function update(prevState: any, formData: FormData) {
    const id = formData.get("id")
    const data = {
        nome: formData.get("nome"),
        genero: formData.get("genero"),
        paginas: formData.get("paginas"),
        autor: formData.get("autor"),
        editora: formData.get("editora"),
        data: formData.get("data"),
    }

    const options ={
        method: "put",
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json"
        }
    }

    const resp = await fetch("http://localhost:3000/" + id, options)

    if(resp.ok){
        redirect("http://localhost:3000/")
    }

    if (!resp.ok){
        const messages: Array<ValidationMessages> = await resp.json()
        return{
            message:messages.find(m => m.campo == "nome")?.mensagem
        }
    }
}