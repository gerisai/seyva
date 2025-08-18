"use client";

import Button from "./Button";
import { predefinedDonationAmounts } from "@/util/constants";
import { useState } from "react";

export default function DonationForm({ fields }) {
  const [currentAmount,setCurrentAmount] = useState('$20');
  
  return (
    <div className="bg-white rounded-4xl shadow-lg w-3/4 bg-gray">
      <div className="bg-blue text-white text-center py-8 text-5xl rounded-t-4xl font-bold"/>
      <div className="px-8 pb-8 pt-4">
        <div className="flex flex-col justify-center my-6 gap-6">
          <h1 className="font-bold text-gray text-5xl text-center">¡Realiza tu donativo aquí!</h1>
          <p className="text-xl text-justify">
            Tu apoyo es fundamental para que podamos seguir cumpliendo nuestra misión.
            Cada donación, por pequeña que sea, nos ayuda a transformar vidas y a continuar con nuestros proyectos.
            Contamos con diferentes formas de donar, todas seguras y confiables, para que elijas la que mejor se adapte a ti.
            <br/>
            <br/>
            Explora las opciones disponibles y únete al cambio.
            <br/>
            Gracias por creer en nuestro trabajo.
          </p>
        </div>
        <div className="flex flex-col gap-6">
          <p className="font-bold text-gray text-xl">
            Elige la cantidad deseada a donar
          </p>
          <div className="flex">
            { predefinedDonationAmounts.map((amount,index) => (
              <Button key={index}
                additionalClasses={`
                  font-bold
                  !rounded-lg !py-3 mx-auto
                  ${amount === currentAmount ? 'bg-blue' : '!bg-gray-300 !text-black'}
                `
              }
                onClick={() => setCurrentAmount(amount)}
              >
                { amount !== 'Otra cantidad' || currentAmount !== 'Otra cantidad' ?
                  amount :
                  <>
                  <span>$</span>
                  <input
                    type='number'
                    autoFocus
                    className="text-xl focus:outline-none"
                  />
                  </>
                }
              </Button>
            ))}
          </div>
          <p className="font-bold text-gray text-xl">
            Proporciona los siguientes datos
          </p>
        </div>
        {/* Form */}
        <form className="space-y-5 my-6">
          { fields.map((field,index) => (
            <div key={index}>
              <label className={`block text-xl font-medium text-gray mb-1 ${field.required && 'required-label'}`}>
                {field.label}
              </label>
                <input
                  type={field.type}
                  className="w-full border border-gray-300 rounded-2xl px-3 py-2 text-2xl focus:outline-none focus:ring-2 focus:ring-brand-blue"
                  placeholder={field.placeholder}
                />
            </div>
          ))}
          <p className="text-lg font-semibold italic mt-6 mb-12">
            El Nombre, RFC y Código postal debe coincidir con la dirección fiscal del receptor
          </p>
          {/* Privacy Notice */}
          <div className="flex items-start">
            <input
              id="privacy"
              type="checkbox"
              className="h-4 w-4 mt-[8px] text-blue font-bold border-gray-300 rounded focus:ring-brand-blue"
            />
            <label htmlFor="privacy" className="ml-2 text-lg">
              Autorizo a la Fundación SEYVA el tratamiento de mis datos 
              personales financieros para fines de la presente donación.
            </label>
          </div>

          <div className="flex flex-col items-center">
            <Button 
              additionalClasses="
                primary-button mt-6
                border-3 transition-colors
                font-bold
                duration-900 ease-in-out !text-3xl
                !py-2 w-1/3
              "
              type="submit"
            >
              Continuar
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
