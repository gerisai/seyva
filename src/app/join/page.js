"use client";

import Button from "@/components/Button"
import ContactForm from "@/components/ContactForm"
import { useRouter } from "next/navigation"
import { contactFormFields } from "@/util/constants"

export default function Home() {
  const router = useRouter()
  return (
    <main className="h-auto flex items-center justify-center flex-col bg-gray text-black">
      <div className="flex flex-col items-center gap-12 py-12 w-3/4 justify-center">
        <h1 className="text-5xl font-bold text-gray">¡Realiza tu donativo aquí!</h1>
        <p className="text-xl text-center">
          Si deseas apoyar nuestra labor con una donación directa, puedes hacerlo de forma rápida y segura. 
          <br/>
          Serás redirigido a una página externa protegida, donde podrás completar tu donación con total confianza.
          <br/>
          Tu contribución hace una gran diferencia y nos ayuda a seguir adelante con nuestros programas 
          y proyectos.
        </p>
        <Button 
          additionalClasses="primary-button px-20 !text-5xl font-bold"
          onClick={() => router.push('/donate')}
        >
          Donar
        </Button>
        <p className="text-xl text-center">¡Gracias por tu generosidad!</p>
        <h1 className="text-5xl font-bold text-gray">Súmate a la causa</h1>
        <p className="text-xl text-center">
          Gracias por tu interés en ser parte de nuestra causa. 
          Para poder brindarte información personalizada sobre nuestros programas o canalizar tu solicitud de apoyo, necesitamos que completes el siguiente formulario.
        </p>
        <ContactForm fields={contactFormFields}/>
      </div>
    </main>
  )
}
