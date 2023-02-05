import { ClientSafeProvider, LiteralUnion } from 'next-auth/react'
import { FormProvider, useForm } from 'react-hook-form'
import { ErrorMessage } from '@hookform/error-message'
import { zodResolver } from '@hookform/resolvers/zod'

import FormTextInput from '@/components/forms/inputs/FormTextInput'
import ErrorText from '@/components/forms/typography/ErrorText'

import MainButton from '@/components/UX/buttons/MainButton'

import { loginSchema } from '@/library/schemas/authSchemas'
import { BuiltInProviderType } from 'next-auth/providers'
import { useRouter } from 'next/router'

export type SecureEmailLoginFormInputs = {
    email: string
    csrfToken: string
}

type SecureEmailLoginFormProps = {
    providers: Record<
        LiteralUnion<BuiltInProviderType, string>,
        ClientSafeProvider
    > | null
    csrfToken: string
}

const SecureEmailLoginForm = ({ csrfToken }: SecureEmailLoginFormProps) => {
    const { pathname } = useRouter()
    const methods = useForm<SecureEmailLoginFormInputs>({
        resolver: zodResolver(loginSchema),
    })

    const { errors } = methods.formState

    let buttonText: string = 'Sign in with Email';

    if (pathname === '/register') {
        buttonText = 'Register with Email'
    }

    return (
        <FormProvider {...methods}>
            <form
                className="space-y-6"
                method="POST"
                action="/api/auth/signin/email"
                noValidate
            >
                <div>
                    <input
                        name="csrfToken"
                        type="hidden"
                        defaultValue={csrfToken}
                    />
                    <FormTextInput
                        inputId="email"
                        inputLabel="Email Address"
                        type="email"
                        id="email"
                        label="Email"
                        placeholder="Enter your email address"
                        autoComplete="on"
                    />
                    <ErrorMessage
                        errors={errors}
                        name="email"
                        render={({ message }) => (
                            <ErrorText>{message}</ErrorText>
                        )}
                    />
                </div>

                <div>
                    <MainButton type="submit" text={buttonText} />
                </div>
            </form>
        </FormProvider>
    )
}

export default SecureEmailLoginForm
