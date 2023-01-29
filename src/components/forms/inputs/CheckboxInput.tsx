import { useFormContext } from 'react-hook-form'

type CheckboxInputProps = {
    id: string
    label: string
}

const CheckboxInput = ({ id, label }: CheckboxInputProps) => {
    const { register } = useFormContext()

    return (
        <div className="flex items-center">
            <input
                id={id}
                type="checkbox"
                {...register(id)}
                className="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
            />
            <label htmlFor={id} className="block ml-2 text-sm text-gray-900">
                {label}
            </label>
        </div>
    )
}

export default CheckboxInput
