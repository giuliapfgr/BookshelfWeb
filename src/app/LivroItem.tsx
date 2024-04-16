import DropdownAction from "@/components/DropDownAction";
import { Apple, ChevronDown } from "lucide-react";

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
    return (
        <div className="flex justify-between">
            <div className="flex gap-2 items-center">
                <span>{livro.nome}</span>
                <span>{livro.genero}</span>
                <span>{livro.paginas}</span>
                <span>{livro.autor}</span>
                <span>{livro.genero}</span>
                <span>{livro.paginas}</span>
                <span>{livro.autor}</span>
                <span>{livro.editora}</span>
                <span>{livro.data}</span>
            </div>
            <DropdownAction />
        </div>
    )
}