import Link from "next/link";

export default function Error() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-2 rounded-md mb-4">
        <p className="font-bold text-xl">¡Error!</p>
        <p>No has iniciado sesión.</p>
      </div>
      <Link href="/">
        <p className="text-blue-500 hover:underline">
          Regresar a la página principal
        </p>
      </Link>
    </div>
  );
}
