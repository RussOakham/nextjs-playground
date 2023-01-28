import { DetailedHTMLProps, InputHTMLAttributes } from 'react'
import { useFormContext } from 'react-hook-form'

export type InputType = 'text' | 'email' | 'password' | 'number'
export type Autocomplete = 'on' | 'off'

export type InputProps = {
    id: string
    label: string
    type?: InputType
    className?: string
    required?: boolean
    autoComplete?: Autocomplete
} & Omit<
    DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>,
    'ref'
>

export const TextInput = ({
    id,
    label,
    type = 'text',
    className = '',
    autoComplete,
    placeholder,
    ...props
}: InputProps): JSX.Element => {
    const { register } = useFormContext()

    return (
        <input
            id={id}
            type={type}
            aria-label={label}
            placeholder={placeholder}
            autoComplete={autoComplete || 'off'}
            {...register(id)}
            className={`${className} block w-full px-3 py-2 mt-1 placeholder-gray-400 border border-gray-300 rounded-md shadow-sm appearance-none focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm`}
            {...props}
        />
    )
}
