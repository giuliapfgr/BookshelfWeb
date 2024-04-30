import NavBar from "@/components/NavBar";
import { Button } from "@nextui-org/button";
import { Skeleton } from "@nextui-org/react";
import { Link } from "lucide-react";

export default async function Loading(){

    const user = {
        name: "Nome do Usuário",
        bio: "Bio do usuário"
      };

    return(
        <main className="flex min-h-screen flex-col items-center">
            <NavBar active="meu perfil" />
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

      {[1,2,3].map(() => {
          return (
            <div className="max-w-[300px] w-full flex items-center gap-3">
              <div>
                <Skeleton className="flex rounded-full w-12 h-12" />
              </div>
              <div className="w-full flex flex-col gap-2">
                <Skeleton className="h-3 w-3/5 rounded-lg" />
              </div>
            </div>
          )
        })}

    </main>
    )
}