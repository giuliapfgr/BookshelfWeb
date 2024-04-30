"use client"

import { useFormState } from "react-dom"
import { update } from "../actions/livros/update"
import { Button, Input } from "@nextui-org/react"
import { ArrowLeft, Link } from "lucide-react"
import { SubmitButton } from "@/components/SubmitButton"

interface EditFormProps{
    livro: Livro
}

export function EditForm({livro}: EditFormProps){
    const initialState = {
        message: ""
    }

    const [state, formAction] = useFormState(update, initialState)
        return (
            <form action={formAction} className="flex flex-col gap-4 bg-slate-900 p-6 m-6 min-w-[500px] rounded">
                <input type="hidden" name="id" value={livro.nome} />
                
                <h2 className="text-2xl font-bold">Editar Livro {livro.nome}</h2>
                <Input
                key="nome"
                label="nome"
                name="nome"
                variant="bordered"
                labelPlacement="outside"
                defaultValue={livro.nome}
                isInvalid={state?.message != ""}
                errorMessage={state?.message}
                />

            <div className="flex justify-around mt-4">
                <Link href="/categorias">
                    <Button variant="bordered" startContent={<ArrowLeft size={18} />}> cancelar </Button>
                </Link>
            </div>

            <SubmitButton />
            </form>
        );
    
}