import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import { getById } from "../actions/livros/get-by-id";
import NavBar from "@/components/NavBar";
import { EditForm } from "./EditForm";


export default async function EditLivros( { params }: Params) {

    const { id } = params
    const livro = await getById(id)

    return(
        <main className="flex min-h-screen flex-col items-center">
            <NavBar active="meu perfil" />
            <EditForm livro={livro} />
        </main>
    );
    
}