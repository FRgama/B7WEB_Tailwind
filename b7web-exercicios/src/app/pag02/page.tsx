import Link from "next/link";
import Image from "next/image";


export default function pag02() {
    return (
        <div className="container w-screen h-screen mx-auto text-center bg-gray-900">

            <div className="p-4 gap-2 my-4 w-1/2 flex mx-auto flex-col md:flex-row md:justify-center">
                <Link href="/" className="mx-4 p-4 rounded-xl bg-gray-400 hover:bg-gray-50 hover:text-black">
                    Página 1
                </Link>
                <Link href="/pag02" className="mx-4 p-4 rounded-xl bg-gray-400 hover:bg-gray-50  hover:text-black">
                    Página 2
                </Link>
                <Link href="/pag03" className="mx-4 p-4 rounded-xl bg-gray-400 hover:bg-gray-50 hover:text-black">
                    Página 3
                </Link>
                <Link href="/pag04" className="mx-4 p-4 rounded-xl bg-gray-400 hover:bg-gray-50 hover:text-black">
                    Página 4
                </Link>
            </div>

            <div>
                <h1>Exercício 06</h1>
                <h2>Animação de Loading</h2>
                <div className="w-40 h-40 my-8 mx-auto animate-spin rounded-full border-16 border-r-sky-600 border-gray-200">
                </div>
            </div>

            <div>
            <h1>Exercício 07</h1>
            <h2>Hero Card</h2>

            <div className="w-3/4 p-6 overflow-hidden mx-auto bg-slate-800 border border-black rounded-xl flex flex-col justify-center items-center md:flex-row">
      
             <Image width={500} height={500} className="rounded-full w-25 h-25 my-4 object-cover mx-auto md:m-2 " src="/J.-Cole.webp" alt="Imagem do raper J. Cole" />
            <div className="text-center text-lg">
            <h1 className="text-center text-white">&apos; No such thing in life is better than yours &apos;</h1>
              <h2 className="text-blue-400">Jermaine Lamar Cole</h2>
              <h3 className="text-gray-400">Rapper</h3>
            </div>
    </div>
            </div>


        </div>
    );
  }