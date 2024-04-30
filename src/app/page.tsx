import NavBar from "@/components/NavBar";
import { Button } from "@nextui-org/button";
import Link from "next/link";
import { LivroItem } from "./LivroItem";
import { getLivros } from "./actions/livros/get";
import { Plus } from "lucide-react";

interface Livro {
        id: number,
        nome: string,
        genero: string,
        paginas: number,
        autor: string,
        editora: string,
        data: number,
        capa: string
}


export default async function Livros() {
  const livros: Livro[] = await getLivros()

  const user = {
    name: "Nome do Usuário",
    bio: "Bio do usuário"
  };

  return (
    <main className="flex min-h-screen flex-col items-center">
      <NavBar active="meu perfil"/>

      <div className="mt-16 flex items-center mx-10">
        <img
          src="https://i.pravatar.cc/300"
          alt="Avatar do Usuário"
          className="w-32 h-32 rounded-full border-4 border-orange-500"
        />

        <div className="ml-8 flex-grow">
          <div className="flex flex-col">
            <h3 className="text-xl font-semibold text-gray-800">{user.name}</h3>
            <p className="text-base text-gray-800">{user.bio}</p>
          </div>
        </div>

        <div className="ml-80">
        <Link href="/new">
            <Button startContent={<Plus size={18} />} color="primary" size="lg" className="custom-button-style">
              Adicionar livro
            </Button>
          </Link>
        </div>
      </div>

      {livros.map(livros => <LivroItem livro={livros} />)}

 {/*    <section className="flex flex-col gap-6 mt-6 p-6" style={{ backgroundColor: "#FAAA68", minWidth: "500px" }}>
        <div className="flex justify-between items-center">
          <div className="flex items-center"></div>
        </div>
      </section> */}
    </main>
  );
};