import { useRouter } from 'next/router'
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form'
import { ErrorMessage } from '@hookform/error-message'
import { zodResolver } from '@hookform/resolvers/zod'
import { signIn } from 'next-auth/react'

import FormTextInput from '@/components/forms/inputs/FormTextInput'
import ErrorText from '@/components/forms/typography/ErrorText'

import MainButton from '@/components/UX/buttons/MainButton'

import useToast from '@/library/hooks/useToast'

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
    const { addToast } = useToast()
    const methods = useForm<CredentialsLoginFormInputs>({
        resolver: zodResolver(credentialsLoginSchema),
    });

    const { errors } = methods.formState


    const onSubmit: SubmitHandler<CredentialsLoginFormInputs> = async (data) => {
        const response = await signIn('credentials', {
            redirect: false,
            csrfToken,
            pathname,
            email: data.email,
            password: data.password,
        })

        if (response?.status === 401) {
            if (response?.error === 'User not Found') {
                methods.setError('email', {
                    type: 'manual',
                    message: response.error,
                })
            }

            if (response?.error === 'Password is incorrect') {
                methods.setError('password', {
                    type: 'manual',
                    message: response.error,
                })

                addToast(
                    response.error,
                    'Please enter the correct password',
                    'Error',
                )
            }
        }

        if (response?.status !== 200 && response?.status !== 401 && response?.error) {
            console.log('response', response)

            addToast(
                'Server Error',
                'Please try again later',
                'Error',
            )
        }

    }


    return (
        <FormProvider {...methods}>
            <form
                className="space-y-6"
                method="POST"
                onSubmit={methods.handleSubmit(onSubmit)}
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
