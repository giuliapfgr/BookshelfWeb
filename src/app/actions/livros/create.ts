"use server"

import { redirect } from "next/navigation"

interface ValidationMessages {
    campo: string,
    mensagem: string
}

export async function create(prevState: any, formData: FormData) {
    console.log("Função create")
    console.log(formData)
    const data = {
        nome: formData.get("nome"),
        genero: formData.get("genero"),
        paginas: formData.get("paginas"),
        autor: formData.get("autor"),
        editora: formData.get("editora"),
        dataPublicacao: formData.get("dataPublicacao"),
        capa: formData.get("capa")
        }

    const options = {
        method: "post",
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json"
        },
    }
    
    const resp = await fetch("http://localhost:8080/livro", options)

    if (resp.ok){
        redirect("/")
    }

    if (!resp.ok) {
        const messages: Array<ValidationMessages> = await resp.json();
        if (Array.isArray(messages)) {
            const errorMessage = messages.find(m => m.campo === "nome");
            if (errorMessage) {
                return { message: errorMessage.mensagem };
            }
        }
        return { message: "Erro ao criar o livro." };
    }
    
}