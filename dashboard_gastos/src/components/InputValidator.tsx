import type { DraftPaciente } from '@/types';
import type { FieldErrors, UseFormRegister } from 'react-hook-form';

interface InputProps {
    errors: FieldErrors<DraftPaciente>
    register: UseFormRegister<DraftPaciente>
    tipo: string
    idInput: keyof DraftPaciente;
    placeHolder: string
    label: string
    htmlFor: string
    submitted: boolean
}


export const InputValidator = ({ errors, register, tipo, idInput, placeHolder, label, htmlFor, submitted } : InputProps ) => {
    const baseLabelClasses = 'block mb-2 text-sm font-medium text-gray-900 dark:text-white';
    const errorLabelClasses = 'block mb-2 text-sm font-medium text-red-700 dark:text-red-500';
    const validLabelClasses = 'block mb-2 text-sm font-medium text-green-700 dark:text-green-500'; // Opcional

    const baseInputClasses = 'bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500';
    const errorInputClasses = 'bg-red-50 border border-red-500 text-red-900 placeholder-red-700 text-sm rounded-lg focus:ring-red-500 dark:bg-gray-700 focus:border-red-500 block w-full p-2.5 dark:text-red-500 dark:placeholder-red-500 dark:border-red-500';
    const validInputClasses = 'bg-green-50 border border-green-500 text-green-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500'; // Opcional

    const labelClassName = submitted && errors[idInput] ?  errorLabelClasses : (submitted && !errors[idInput] ? validLabelClasses : baseLabelClasses );
    const inputClassName = submitted && errors[idInput] ? errorInputClasses : (submitted && !errors[idInput] ? validInputClasses : baseInputClasses );

    const emailValidation = {
        pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: 'Email no valido'
        }
    }

  return (
    <>
        <label htmlFor={htmlFor} className={labelClassName}>
            {label}
        </label>

        {tipo === "textarea" ? 
            <textarea 
                id={idInput} placeholder={placeHolder} 
                className={inputClassName}
                required 
                    
                {...register(idInput, {  // tomar una copia de la funcion con un dato unico(name)
                    // validacion
                    required: `El campo ${label.toLowerCase()} es obligatorio` // mensaje de error
                })} 
                
            />
        :   
            <input 
                type={tipo} id={idInput} placeholder={placeHolder} 
                className={inputClassName}
                required 
                    
                {...register(idInput, {  // tomar una copia de la funcion con un dato unico(name)
                    // validacion
                    required: `El campo ${label.toLowerCase()} es obligatorio`, // mensaje de error
                    ...(tipo === "email" && emailValidation) // Agrega la validación si el tipo es "email"
                })} 
                
            />
        }

        {submitted && errors[idInput] && (
            <p className="mt-2 text-sm text-red-600 dark:text-red-500">
                {errors[idInput]?.message}
            </p>
        )}

        {/* Opcional: Mostrar feedback de "correcto" después del envío y si no hay errores
        {submitted && !errors[idInput] && (
            <p className="mt-2 text-sm text-green-600 dark:text-green-500">
                <span className="font-medium">Bien! </span>
                todo correcto
            </p>
        )}  
        */}
   </>
  )
}