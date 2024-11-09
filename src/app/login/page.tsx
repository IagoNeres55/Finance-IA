import Image from "next/image";
import { Button } from "../_components/ui/button";
import { SignInButton } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

const LoginPage = async () => {
  const { userId } = await auth();
  if (userId) {
    redirect("/");
  }
  console.log(userId);
  return (
    <div className="grid h-full grid-cols-2">
      {/* lado Esquerda */}

      <div className="mx-auto flex max-w-[550px] flex-col justify-center p-8">
        <Image
          src="/logo.svg"
          width={173}
          height={39}
          alt="logo Finance AI"
          className="mb-8"
        />
        <h1 className="mb-3 text-4xl font-bold">Bem-Vindo</h1>
        <p className="mb-8 text-muted-foreground">
          A Finance AI é uma plataforma de gestão financeira que utiliza IA para
          monitorar suas movimentações, e oferecer insights personalizados,
          facilitando o controle do seu orçamento.
        </p>
        <SignInButton>
          <Button variant="outline">
            <Image
              src="/logo_google.png"
              width={18}
              height={6}
              alt="google logo"
              className="mr-1 object-contain"
            />
            Fazer login ou criar conta
          </Button>
        </SignInButton>
      </div>

      {/* Lado Direito */}
      <div className="relative h-full w-full">
        <Image src="/login.jpg" alt="login" fill className="object-cover" />
      </div>
    </div>
  );
};
export default LoginPage;
