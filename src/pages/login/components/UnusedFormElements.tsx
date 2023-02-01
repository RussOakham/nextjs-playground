import Link from 'next/link'
import { useForm } from 'react-hook-form'
import { ErrorMessage } from '@hookform/error-message'

import CheckboxInput from '@/components/forms/inputs/CheckboxInput'
import FormTextInput from '@/components/forms/inputs/FormTextInput'
import ErrorText from '@/components/forms/typography/ErrorText'

const UnusedFormElements = () => {
    const methods = useForm()
    const { errors } = methods.formState

    return (
        <>
            <div>
                <FormTextInput
                    inputId="password"
                    inputLabel="Password"
                    type="password"
                    id="password"
                    label="Password"
                    placeholder="Enter your Password"
                    autoComplete="off"
                />
                <ErrorMessage
                    errors={errors}
                    name="password"
                    render={({ message }) => <ErrorText>{message}</ErrorText>}
                />
            </div>
            <div className="flex items-center justify-between">
                <CheckboxInput id="rememberMe" label="Remember me" />

                <div className="text-sm">
                    <Link
                        href="/forgot-password"
                        className="font-medium text-indigo-600 hover:text-indigo-500"
                    >
                        Forgot your password?
                    </Link>
                </div>
            </div>
        </>
    )
}

export default UnusedFormElements
