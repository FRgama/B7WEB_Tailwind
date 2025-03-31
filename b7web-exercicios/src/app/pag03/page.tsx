import Link from "next/link";
import Image from "next/image";

export default function pag03() {
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
                <h1>Exercício 07</h1>
                <h2>Anuncio de Casa</h2>
                <div className="p-3 rounded-md bg-gray-800">
                    <div className="grid grid-cols-2 gap-2 md:grid-cols-3">
                    <div className="w-full h-60 bg-cover col-span-2 bg-center bg-[url(https://admin.archshop.com.br/uploads/002_d8b12b0012.jpg)] md:col-span-2 md:row-span-2 md:h-full"></div>
                    <div className="w-full h-40 md:h-60 bg-cover bg-center bg-[url(https://admin.archshop.com.br/uploads/002_d8b12b0012.jpg)]" ></div>
                    <div className="w-full h-40 md:h-60 bg-cover bg-center bg-[url(https://admin.archshop.com.br/uploads/002_d8b12b0012.jpg)]"></div>
            </div>
                    <div className="font-bold text-2xl mt-3">Titulo da casa</div>
                    <div className="flex gap-2 mt-3 justify-center">
                    <div className="rounded-full px-3 py-1 bg-green-700 text-white">Campo</div>
                    <div className="rounded-full px-3 py-1 bg-green-700 text-white">Moderno</div>
                    <div className="rounded-full px-3 py-1 bg-green-700 text-white">Piscina</div>
                </div>
            <div className="mt-8 text-center text-white px-4 sm:px-8 md:px-32">
            <p className="text-lg mb-4">
              This stunning modern house is located in the heart of the woods,
              offering peace, tranquility, and nature right at your doorstep.
              Enjoy the perfect blend of luxury and nature with spacious
              interiors, a modern design, and breathtaking views.
            </p>
            <h3 className="text-2xl font-semibold mb-6">
              Wanna live your dream?
            </h3>

            <div className="flex justify-center items-center gap-4">
              <div className="text-xl font-bold text-white">
                Price: $850,000
              </div>
              <button className="bg-blue-600 text-white px-6 py-2 rounded-md text-lg">
                Buy Now
              </button>
            </div>
          </div>
      </div>
            </div>

        </div>
    );
  }