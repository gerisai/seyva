import Image from "next/image";
import Button from "./Button";

export default function ContactForm({ fields }) {
  return (
    <div className="bg-white rounded-4xl shadow-lg w-full max-w-md bg-gray">
      <div className="bg-blue text-white text-center py-2 text-2xl rounded-t-4xl font-semibold">
        Formulario
      </div>
      {/* Logo */}
      <div className="px-8 pb-8 pt-4">
        <div className="flex justify-center mb-6">
          <Image
            src="/imagotipo.svg"
            alt="Imagotipo"
            width={180}
            height={160}
            priority
          />
        </div>

        {/* Form */}
        <form className="space-y-5">

          { fields.map((field,index) => 
            ( field.type !== 'select' ?
            <div key={index}>
              <label className={`block text-sm font-medium text-gray mb-1 ${field.required && 'required-label'}`}>
                {field.label}
              </label>
              { field.type !== 'textarea' ? 
                <input
                  type={field.type}
                  className="w-full border border-gray-300 rounded-2xl px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue"
                  placeholder={field.placeholder}
                />
                :
                <textarea 
                  className="w-full border border-gray-300 rounded-2xl px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue"
                  placeholder={field.placeholder}
                  rows={5}
                />
              }
            </div>
            : 
            <div>
            <label className={`block text-sm font-medium text-gray mb-1 ${field.required && 'required-label'}`}>
              {field.label}
            </label>
            <select
              className="bg-gray w-full border border-gray-300 rounded-2xl px-3 py-2 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-brand-blue"
              defaultValue={field.default}
            >
              <option value="" disabled>
                {field.placeholder}
              </option>
              { field.options.map((option,index) => (
                <option key={index} value={option.value}>{option.label}</option>
              )) }
            </select>
          </div>
          )
          )}
          {/* Privacy Notice */}
          <div className="flex items-start">
            <input
              id="privacy"
              type="checkbox"
              className="h-4 w-4 mt-[2px] text-blue-600 border-gray-300 rounded focus:ring-brand-blue"
            />
            <label htmlFor="privacy" className="ml-2 text-sm">
              He leído y acepto el{" "}
              <a
                href="#" // TODO: change for actual privacy notice link
                className="text-blue underline required-label"
              >
                aviso de privacidad
              </a>
              .
            </label>
          </div>
          
          <p className="text-red-500 text-[0.5em] mb-2">*Esto es un campo obligatorio</p>

          <div className="flex flex-col items-center">
            <p className="text-[0.5em] mb-2">
              La información proporcionada será utilizada 
              exclusivamente para fines relacionados con el trabajo 
              de la fundación: seguimiento de solicitudes, contacto directo
              y planeación de apoyos. Nos comprometemos a proteger tu privacidad y 
              no compartiremos tus datos con terceros.
            </p>
            <p className="font-bold text-blue text-xs">Tu historia nos importa, y juntos podemos hacer la diferencia.</p>
            <Button 
              additionalClasses="
                primary-button mt-6
                border-3 transition-colors 
                duration-900 ease-in-out !text-xl
                !py-2 w-1/2
              "
              type="submit"
            >
              Enviar
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
