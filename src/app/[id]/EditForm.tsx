"use client"

import { useFormState } from "react-dom"
import { update } from "../actions/livros/update"
import { Button, Input } from "@nextui-org/react"
import { ArrowLeft } from "lucide-react"
import { SubmitButton } from "@/components/SubmitButton"
import Link from "next/link"

interface EditFormProps{
    livro: Livro
}

export function EditForm({livro}: EditFormProps){
    const initialState = {
        message: ""
    }

    const [state, formAction] = useFormState(update, initialState)
        return (
            <form action={formAction} className="flex flex-col gap-4 bg-slate-900 p-6 m-6 min-w-[500px] rounded" style={{ backgroundColor: "#FAAA68", minWidth: "500px" }}>
                <input type="hidden" name="id" value={livro.id} />
                
                <h2 className="text-2xl font-bold">Editar Livro {livro.nome}</h2>
                <Input
                key="nome"
                label="nome"
                name="nome"
                variant="bordered"
                labelPlacement="outside"
                className="custom-input"
                defaultValue={livro.nome}
                isInvalid={state?.message != ""}
                errorMessage={state?.message}
                />
                <Input
                key="genero"
                label="genero"
                name="genero"
                variant="bordered"
                labelPlacement="outside"
                className="custom-input"
                defaultValue={livro.genero}
                isInvalid={state?.message != ""}
                errorMessage={state?.message}
                />
                <Input
                key="paginas"
                label="paginas"
                name="paginas"
                variant="bordered"
                labelPlacement="outside"
                className="custom-input"
                defaultValue={livro.paginas.toString()}
                isInvalid={state?.message != ""}
                errorMessage={state?.message}
                />
                <Input
                key="autor"
                label="autor"
                name="autor"
                variant="bordered"
                labelPlacement="outside"
                className="custom-input"
                defaultValue={livro.autor}
                isInvalid={state?.message != ""}
                errorMessage={state?.message}
                />
                <Input
                key="editora"
                label="editora"
                name="editora"
                variant="bordered"
                labelPlacement="outside"
                className="custom-input"
                defaultValue={livro.editora}
                isInvalid={state?.message != ""}
                errorMessage={state?.message}
                />
                <Input
                key="dataPublicacao"
                label="data"
                name="dataPublicacao"
                variant="bordered"
                labelPlacement="outside"
                className="custom-input"
                defaultValue={livro.dataPublicacao.toString()}
                isInvalid={state?.message != ""}
                errorMessage={state?.message}
                />
                <Input
                key="capa"
                label="capa"
                name="capa"
                variant="bordered"
                labelPlacement="outside"
                className="custom-input"
                defaultValue={livro.capa}
                isInvalid={state?.message != ""}
                errorMessage={state?.message}
                />

            <div className="flex justify-around mt-4">
                <Link href="/">
                    <Button variant="bordered" startContent={<ArrowLeft size={18} />}> cancelar </Button>
                </Link>
                
            <SubmitButton />
            </div>
            
            </form>
        );
    
}