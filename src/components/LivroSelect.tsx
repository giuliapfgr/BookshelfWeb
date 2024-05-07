'use client'

import { Select, SelectItem } from "@nextui-org/react"

interface LivroSelectProps {
    livro: Array<Livro>,
}

export function LivroSelect({livro}: LivroSelectProps){
    return (
        <Select
            items={livro}
            label="Livro"
            variant="bordered"
            name="livro"
            placeholder="Selecione um livro"
            labelPlacement="outside"
        >
            {(livro) => 
                <SelectItem key={livro.id}>
                    {livro.nome}
                </SelectItem>
            }
        </Select>
    )
}