import Link from "next/link";

interface NavBarProps{
  active: "meu perfil" | "reviews" | "dashboard"
}

export default function NavBar({active}: NavBarProps){
  const classActive = "border-b-4 pb-4 border-y-orange-500"

    return(
        <nav className="flex bg-cyan-900 w-full justify-between items-center px-60 py-4">
        <div>
          <img src="/logobranco.png" alt="logo" width={200} height={50}/>
        </div>
        <ul className="flex gap-6">
          <li className={active == "dashboard"? classActive : ""}><Link href="/dashboard">dashboard</Link></li>
          <li className={active == "reviews"? classActive : ""}><Link href="/reviews">reviews</Link></li>
          <li className={active == "meu perfil"? classActive : ""}><Link href="/">meu perfil</Link></li>
        </ul>
        <div className="w-14 rounded-full overflow-hidden">
            <img src="https://i.pravatar.cc/300" alt="Avatar do Usuário" />
        </div>
      </nav>
    )
}