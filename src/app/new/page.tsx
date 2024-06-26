"use client"

import NavBar from "@/components/NavBar";
import { SubmitButton } from "@/components/SubmitButton";
import { Button, Input } from "@nextui-org/react";
import { ArrowLeft, Check } from "lucide-react";
import Link from "next/link";
import { redirect } from "next/navigation";
import { useFormState } from "react-dom";
import { create } from "../actions/livros/create";

export default function FormLivros() {  
  const initialState = {
    message:""
  }

  const [state, formAction] = useFormState(create, initialState)
  return(
    <main className="flex min-h-screen flex-col items-center">
      <NavBar active="meu perfil"/>

    <form action={formAction} className="flex flex-col p-6 m-6 min-w-[500px] rounded" style={{ backgroundColor: "#FAAA68", minWidth: "500px" }}>
      <h2 className="text-2xl font-bold">Adicionar livro</h2>
      <Input
            key="nome"
            label="Nome do livro:"
            name="nome"
            labelPlacement="outside"
            className="custom-input"
            isInvalid={state?.message != ""}
            errorMessage={state?.message}
      />
      <Input
            key="genero"
            label="Gênero:"
            name="genero"
            labelPlacement="outside"
            className="custom-input"
            isInvalid={state?.message != ""}
            errorMessage={state?.message}
      />
      <Input
            key="paginas"
            label="Total de páginas:"
            name="paginas"
            labelPlacement="outside"
            className="custom-input"
            isInvalid={state?.message != ""}
            errorMessage={state?.message}
      />
      <Input
            key="autor"
            label="Autor:"
            name="autor"
            labelPlacement="outside"
            className="custom-input"
            isInvalid={state?.message != ""}
            errorMessage={state?.message}
      />
      <Input
            key="editora"
            label="Editora:"
            name="editora"
            labelPlacement="outside"
            className="custom-input"
            isInvalid={state?.message != ""}
            errorMessage={state?.message}
      />
      <Input
            key="dataPublicacao"
            label="Data de publicação:"
            name="dataPublicacao"
            labelPlacement="outside"
            className="custom-input"
            isInvalid={state?.message != ""}
            errorMessage={state?.message}
      />
      <Input
            key="capa"
            label="Capa do livro:"
            name="capa"
            labelPlacement="outside"
            className="custom-input"
            isInvalid={state?.message != ""}
            errorMessage={state?.message}
      />

      <div className="flex justify-around mt-4">
        <Link href="/">
          <Button variant="bordered" startContent={<ArrowLeft size={18} />}>cancelar</Button>
        </Link>

        <SubmitButton />
      </div>
    </form>
    </main>
  );
}
