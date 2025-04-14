import LoginForm from "../../../Components/Organisms/Forms/LoginForm";

export default function Login() {
  return (
    <main className="w-full min-h-screen bg-royalBlue flex justify-center items-center px-6">
    <section className="w-full min-w-[300px] max-w-[800px] h-auto bg-white py-8 px-6 rounded-lg">
        <h1 className="text-5xl mb-8 text-center">Iniciar sesión</h1>
        <LoginForm/>
    </section>
    </main>
  )
}
