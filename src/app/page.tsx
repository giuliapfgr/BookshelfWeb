import NavBar from "@/components/NavBar";
import { Button } from "@nextui-org/button";
import { LivroItem } from "./LivroItem";
import { getLivro } from "./actions/livros/get";
import Link from "next/link";

interface Livro {
        id: number,
        nome: string,
        genero: string[],
        paginas: number,
        autor: string,
        editora: string,
        dataPublicacao: Date,
        capa: string
}


export default async function Livro() {
  const livro: Livro[] = await getLivro()

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
            <Button color="primary" size="lg" className="custom-button-style">
              Adicionar livro
            </Button>
          </Link>
        </div>
      </div>

      <div>
      <div className="flex justify-center background-color">
        <div className="text-stone-900 flex items-center border-b border-stone-900 w-2/3 mt-8" style={{ backgroundColor: "#FAAA68", minWidth: "500px" }}>
          <div className="w-1/3 text-center">Título</div>
          <div className="w-1/3 text-center">Gênero</div>
          <div className="w-1/3 text-center">Páginas</div>
          <div className="w-1/3 text-center">Autor</div>
          <div className="w-1/3 text-center">Editora</div>
          <div className="w-1/3 text-center">Data de publicação</div>
          <div className="w-1/3 text-center">Imagem de capa</div>
        </div>
      </div>
        <div className="text-stone-900">
          {livro.map(livro => <LivroItem livro={livro} />)}
        </div>
      </div>

      

 {/*    <section className="flex flex-col gap-6 mt-6 p-6" style={{ backgroundColor: "#FAAA68", minWidth: "500px" }}>
        <div className="flex justify-between items-center">
          <div className="flex items-center"></div>
        </div>
      </section> */}
    </main>
  );
};