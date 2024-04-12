import NavBar from "@/components/NavBar";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <NavBar active="reviews"/>
      <h1>Reviews</h1>
    </main>
  );
}
