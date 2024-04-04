import Link from "next/link";

export default function NavBar(){
    return(
        <nav className="flex bg-cyan-900 w-full justify-between items-center px-60 py-4">
        <h1 className="text-4xl">Bookshelf</h1>
        <ul className="flex gap-6">
          <li><Link href="/dashboard">dashboard</Link></li>
          <li><Link href="/reviews">reviews</Link></li>
          <li><Link href="/">meu perfil</Link></li>
        </ul>
        <div className="w-14 rounded-full overflow-hidden">
            <img src="https://i.pravatar.cc/300" alt="Avatar do Usuário"/>
        </div>
      </nav>
    )
}