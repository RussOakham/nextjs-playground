import { useRouter } from 'next/router'
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form'
import { ErrorMessage } from '@hookform/error-message'
import { zodResolver } from '@hookform/resolvers/zod'
import { signIn } from 'next-auth/react'

import FormTextInput from '@/components/forms/inputs/FormTextInput'
import ErrorText from '@/components/forms/typography/ErrorText'

import MainButton from '@/components/UX/buttons/MainButton'

import { credentialsLoginSchema } from '@/library/schemas/authSchemas'


type CredentialsLoginFormProps = {
    csrfToken: string
}

export type CredentialsLoginFormInputs = {
    email: string
    password: string
}

const CredentialsLoginForm = ({ csrfToken }: CredentialsLoginFormProps) => {
    const { pathname } = useRouter()
    const methods = useForm<CredentialsLoginFormInputs>({
        resolver: zodResolver(credentialsLoginSchema),
    });

    const { errors } = methods.formState


    const onSubmit: SubmitHandler<CredentialsLoginFormInputs> = (data) => {
        signIn('credentials', {
            redirect: false,
            csrfToken,
            pathname,
            email: data.email,
            password: data.password,
        })
    }


    return (
        <FormProvider {...methods}>
            <form
                className="space-y-6"
                method="POST"
                onSubmit={methods.handleSubmit(onSubmit)}
                // action="/api/auth/signin/credentials"
                noValidate
            >
                <input name="csrfToken" type="hidden" defaultValue={csrfToken} />
                <input name="pathname" type="hidden" defaultValue={pathname} />
                <div>
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
                        render={({ message }) => (
                            <ErrorText>{message}</ErrorText>
                        )}
                    />
                </div>

                <div>
                    <MainButton type="submit" text="Login!" />
                </div>
            </form>

        </FormProvider>
    )
}

export default CredentialsLoginForm
