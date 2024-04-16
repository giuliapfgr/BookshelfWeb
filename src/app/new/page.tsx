import NavBar from "@/components/NavBar";
import { Button, Input } from "@nextui-org/react";
import { ArrowLeft, Check } from "lucide-react";
import Link from "next/link";
import { redirect } from "next/navigation";

export default async function FormLivros() {

  async function create(formData: FormData){
    "use server"
    const data = {
      nome: formData.get("nome"),
      icone: "book"
    }

    const options = {
      method: "post",
      body: JSON.stringify(data),
      headers:{
        "Content-Type": "application/json"
      }
    }

    fetch("http:localhost:8080", options)

    redirect("/")
  }

  return (
    <main className="flex min-h-screen flex-col items-center">
      <NavBar active="meu perfil"/>

      <form action={create} className="flex flex-col p-6 m-6 min-w-[500px] rounded" style={{ backgroundColor: "#FAAA68", minWidth: "500px" }}>
        <h2 className="text-2xl font-bold">Adicionar livro</h2>
        <Input
              key="nome"
              label="Nome do livro:"
              name="nome"
              labelPlacement="outside"
        />
        <Input
              key="genero"
              label="Gênero:"
              name="genero"
              labelPlacement="outside"
        />
        <Input
              key="paginas"
              label="Total de páginas:"
              name="nome"
              labelPlacement="outside"
        />
        <Input
              key="autor"
              label="Autor:"
              name="nome"
              labelPlacement="outside"
        />
        <Input
              key="editora"
              label="Editora:"
              name="editora"
              labelPlacement="outside"
        />
        <Input
              key="data"
              label="Data de publicação:"
              name="data"
              labelPlacement="outside"
        />

        <div className="flex justify-around mt-4">
          <Link href="/">
            <Button variant="bordered" startContent={<ArrowLeft size={18} />}>cancelar</Button>
          </Link>

          <Button type="submit" color="primary" startContent={<Check size={18} />}>salvar</Button>
        </div>
      </form>
    </main>
  );
}