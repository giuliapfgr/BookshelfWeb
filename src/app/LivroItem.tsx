"use client"

import DropdownAction from "@/components/DropDownAction";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { destroy } from "./actions/livros/destroy";

interface LivroItemProps {
    livro: {
        id: number,
        nome: string,
        genero: string[],
        paginas: number,
        autor: string,
        editora: string,
        dataPublicacao: Date,
        capa: string
    }
    
}


console.log()
export function LivroItem({livro}: LivroItemProps) {
    const router = useRouter()
    console.log()
    function handleDelete(){
        toast.promise(
            destroy(livro.id),
            {
                loading: 'apagando...',
                success: "apagado com sucesso!",
                error: "erro ao apagar"
            }
        );
    }
    return (
        <div className="flex justify-between">
            <div className="flex gap-2 items-center">
                <span>{livro.nome}</span>
                <span>{livro.genero}</span>
                <span>{livro.paginas}</span>
                <span>{livro.autor}</span>
                <span>{livro.editora}</span>
                <span>{livro.dataPublicacao?.toString()}</span>
                <span>{livro.capa}</span>
            </div>
            <DropdownAction 
                onEdit={() => { router.push("/" + livro.id) }} 
                onDelete={handleDelete}
            />
        </div>
    )
}