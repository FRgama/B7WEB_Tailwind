import Image from "next/image";

export default function Home() {
  return (
    <div className="container w-screen h-full mx-auto text-center bg-gray-900">
    <div className="text-blue-400 text-xl p-4 mb-4 hover:text-sky-200">
      <header><a href="https://alunos.b7web.com.br/curso/tailwindcss/o-que-e-tailwindcss" target="blank">Exercícios utilizando TailwindCss através do curso B7WEB</a></header>
    </div>

    <div>
      <h2 className="text-lg mb-4">Exercício 01</h2>
      <p className="text-lg mb-4">Dois Botões</p>
      <div className="flex flex-col w-1/4 mx-auto md:inline md:w-full">
        <button className="p-4 m-4 rounded-xl bg-sky-400 hover:cursor-pointer">Clique Aqui</button>
        <button className="p-4 m-4 rounded-xl border-2 border-sky-400 hover:cursor-pointer">Clique Aqui</button>
      </div>
    </div>

    <div>
      <h2 className="text-lg mb-4">Exercício 02</h2>
      <p className="text-lg mb-4">Alerta de Acesso</p>
      <div className="bg-yellow-100 w-3/4 mx-auto p-4 text-lg rounded-xl my-4">
        <p className="text-yellow-700">Você não tem mais acesso <a className="underline text-yellow-800" href="">Faça o upgrade agora!</a></p>
      </div>
    </div>

    <div>
      <h2 className="text-lg mb-4">Exercício 03</h2>
      <p className="text-lg mb-4">Invite Card</p>

      <div className="bg-white w-2/3 mx-auto p-2 rounded-xl my-4">
        <div className="flex items-center justify-center p-4">
          <div className=""><img className="rounded-full w-20 h-20 mr-2 inline-block" src="/Foto.jpg" alt="" /></div>
          <div className="p-4 m-2">
            <p className="text-xl font-bold text-black">Rodrigo Gama</p>
            <p className="text-xl text-gray-500">Desenvolvedor</p>
          </div>
        </div>
        <div className="flex justify-center gap-4 mt-4">
          <a className="p-4 m-2 bg-linkedin rounded-xl" href="https://www.linkedin.com/in/rodrigo-gama-b38705231/" target="_blank">Linkedin</a>
          <a className="p-4 m-2 bg-github rounded-xl" href="https://github.com/FRgama" target="_blank">Github</a>
        </div>
      </div>
    </div>

    <h2 className="text-lg mb-4">Exercício 04</h2>
    
    <div className="border-white w-2/3 mx-auto border-2 p-4 rounded-lg text-xl">
      <h1 className="mb-4 text-gray-300">Sistema de Login</h1>
      <p>Endereço de E-Mail</p>
      <input className="px-4 py-2 w-1/3 my-2 border bg-gray-800 rounded-lg" type="email" />
      <p>Senha</p>
      <input className="px-4 py-2 w-1/3 my-2 border bg-gray-800 rounded-lg mb-4" type="password" />
      <button className="bg-gray-800 block p-2 mx-auto rounded-xl w-1/3 cursor-pointer hover:bg-gray-500">Entrar</button>
    </div>

    <div>
      <a href="">Exercício 5</a>
      <a href="">Exercício 6</a>
      <a href="">Exercício 7</a>
      <a href="">Exercício 8</a>
    </div>
    
    </div>
  );
}
