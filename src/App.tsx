import { Envelope, Lock } from "phosphor-react";
import { Button } from "./components/Button";
import { Checkbox } from "./components/Checkbox";
import { Heading } from "./components/Heading";
import { Text } from "./components/Text";
import { TextInput } from "./components/TextInput";
import LogoReact from "./Logo";
import "./styles/global.css";

function App() {

  return (
    <div className="w-screen h-screen bg-gray-900 flex items-center justify-center text-gray-100 flex-col">

      <header className="flex flex-col items-center">
        <LogoReact />
        <Heading size="lg" className="mt-4" >Ignite Lab</Heading>
        <Text size="sm" className="text-gray-400 mt-1">Faça o login e comece a usar</Text>
      </header>

      <form className="flex flex-col items-stretch w-full max-w-[400px] mt-8 gap-4">
        <label htmlFor="email" className="flex flex-col gap-3">
          <Text className="font-semibold">Endereço de email</Text>
          <TextInput.Root>
            <TextInput.Icon>
              <Envelope />
            </TextInput.Icon>
            <TextInput.Input type="email" placeholder="Digite seu email"></TextInput.Input>
          </TextInput.Root>
        </label>

        <label htmlFor="password" className="flex flex-col gap-3">
          <Text className="font-semibold">Sua senha</Text>
          <TextInput.Root>
            <TextInput.Icon>
              <Lock />
            </TextInput.Icon>
            <TextInput.Input type="password" placeholder="Digite sua senha"></TextInput.Input>
          </TextInput.Root>
        </label>

        <label htmlFor="remember" className="flex flex-row gap-2 items-center">
          <Checkbox id="remember" />
          <Text size="sm" className="text-gray-200">Lembrar de mim por 30 dias.</Text>
        </label>

        <Button type="submit" className="mt-4">Entrar na plataforma</Button>
      </form>

      <footer className="flex flex-col items-center gap-4 mt-8 ">
        <Text size="sm" className="text-gray-400 underline hover:text-gray-200 transition-colors" asChild><a href="#">Esqueceu sua senha?</a></Text>
        <Text size="sm" className="text-gray-400 underline hover:text-gray-200 transition-colors" asChild><a href="#">Não possui conta? crie uma agora!</a></Text>
      </footer>
    </div>
  )
}

export default App
