import InputLabel from '../typography/InputLabel'
import { TextInput } from './TextInput'

type FormTextInputProps = {
    inputId: string
    inputLabel: string
    type: 'text' | 'email' | 'password' | 'number'
    id: string
    label: string
    placeholder?: string
    autoComplete?: 'on' | 'off'
}

const FormTextInput = ({
    inputId,
    inputLabel,
    type = 'text',
    id,
    label,
    placeholder,

    autoComplete,
}: FormTextInputProps) => {
    return (
        <div aria-live="polite">
            <InputLabel inputId={inputId} inputLabel={inputLabel} />
            <TextInput
                type={type}
                id={id}
                label={label}
                placeholder={placeholder}
                autoComplete={autoComplete || 'off'}
            />
        </div>
    )
}

export default FormTextInput
