"use client"

import DropdownAction from "@/components/DropDownAction";
import { Apple, ChevronDown } from "lucide-react";
import { useRouter } from "next/router";
import toast from "react-hot-toast";
import { destroy } from "./actions/livros/destroy";

interface LivroItemProps {
    livro: {
        id: number,
        nome: string,
        genero: string,
        paginas: number,
        autor: string,
        editora: string,
        data: number,
        capa: string
    }
    
}


export function LivroItem({livro}: LivroItemProps) {
    const router = useRouter()

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
                <span>{livro.data}</span>
            </div>
            <DropdownAction 
                onEdit={() => { router.push("http://localhost:3000/" + livro.id) }} 
                onDelete={handleDelete}
            />
        </div>
    )
}