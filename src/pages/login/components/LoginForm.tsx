import Link from 'next/link'

import { FormProvider, SubmitHandler, useForm } from 'react-hook-form'
import { ErrorMessage } from '@hookform/error-message'
import { zodResolver } from '@hookform/resolvers/zod'

import FormTextInput from '@/components/forms/inputs/FormTextInput'
import CheckboxInput from '@/components/forms/inputs/CheckboxInput'
import ErrorText from '@/components/forms/typography/ErrorText'

import MainButton from '@/components/UX/buttons/MainButton'

import { loginSchema } from '@/library/schemas/authSchemas'

export type LoginFormInputs = {
    email: string
    password: string
    rememberMe: boolean
}

const LoginForm = () => {
    const methods = useForm<LoginFormInputs>({
        resolver: zodResolver(loginSchema),
    })

    const onSubmit: SubmitHandler<LoginFormInputs> = (data) => console.log(data)

    const { errors } = methods.formState

    return (
        <FormProvider {...methods}>
            <form
                className="space-y-6"
                onSubmit={methods.handleSubmit(onSubmit)}
                noValidate
            >
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

                <div>
                    <MainButton type="submit" text="Sign in" />
                </div>
            </form>
        </FormProvider>
    )
}

export default LoginForm
