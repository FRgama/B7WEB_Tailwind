import Link from "next/link";


export default function pag04() {
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
                <h1>Exercício 08</h1>
                <p>Tabela</p>
            </div>

            <table className="w-full mx-2">
        <thead>
          <tr className="border-b text-left text-md border-gray-200">
            <th className="py-2">Nome</th>
            <th className="hidden md:table-cell">Titulo</th>
            <th className="hidden md:table-cell">Email</th>
            <th>Função</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          
          <tr className="border-b text-left text-md text-gray-400 border-gray-200">
                        <td><p className="text-white font-bold">Rodrigo Correa da Gama</p>
                            <p className="md:hidden">Desenvolvedor</p>
                            <p className="md:hidden">rodrigocgama04@gmail.com</p>
                        </td>
                        <td className="hidden md:table-cell"><p>Desenvolvedor</p></td>
                        <td className="hidden md:table-cell"><p>rodrigocgama04@gmail.com</p></td>
                        <td><p>Membro</p></td>
                        <td><a href=""><p>Editar</p></a></td>
            </tr>

            <tr className="border-b text-left text-md text-gray-400 border-gray-200">
                        <td><p className="text-white font-bold">Gabrielly Monteiro</p>
                            <p className="md:hidden">Psicóloga</p>
                            <p className="md:hidden">gabriellymonteiro02@gmail.com</p>
                        </td>
                        <td className="hidden md:table-cell"><p>Psicologa</p></td>
                        <td className="hidden md:table-cell"><p>gabriellymonteiro02@gmail.com</p></td>
                        <td><p>Membro</p></td>
                        <td><a href=""><p>Editar</p></a></td>
            </tr>
            <tr className="border-b text-left text-md text-gray-400 border-gray-200">
                        <td><p className="text-white font-bold">Rangel Ribeiro</p>
                            <p className="md:hidden">Desenvolvedor</p>
                            <p className="md:hidden">rangelrib04@hotmail.com</p>
                        </td>
                        <td className="hidden md:table-cell"><p>Desenvolvedor</p></td>
                        <td className="hidden md:table-cell"><p>rangelrib04@hotmail.com</p></td>
                        <td><p>Membro</p></td>
                        <td><a href=""><p>Editar</p></a></td>
            </tr>

            <tr className="border-b text-left text-md text-gray-400 border-gray-200">
            <td><p className="text-white font-bold">Maria da Silva</p>
              <p className="md:hidden">Cafezeira</p>
              <p className="md:hidden">mariadocafe@gmail.com</p>
            </td>
            <td className="hidden md:table-cell"><p>Cafezeira</p></td>
            <td className="hidden md:table-cell" ><p>mariadocafe@gmail.com</p></td>
            <td><p>membro</p></td>
            <td><a href=""><p>editar</p></a></td>
          </tr>
        </tbody>
      </table>
        </div>
    );
}