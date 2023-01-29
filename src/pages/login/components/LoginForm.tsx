import { FormProvider, SubmitHandler, useForm } from 'react-hook-form'
import { ErrorMessage } from '@hookform/error-message'
import { zodResolver } from '@hookform/resolvers/zod'

import FormTextInput from '@/components/forms/inputs/FormTextInput'
import ErrorText from '@/components/forms/typography/ErrorText'

import MainButton from '@/components/UX/buttons/MainButton'

import { loginSchema } from '@/library/schemas/authSchemas'
import Link from 'next/link'

export type LoginFormInputs = {
    email: string
    password: string
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
                    <div className="flex items-center">
                        <input
                            id="remember-me"
                            name="remember-me"
                            type="checkbox"
                            className="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                        />
                        <label
                            htmlFor="remember-me"
                            className="block ml-2 text-sm text-gray-900"
                        >
                            Remember me
                        </label>
                    </div>

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
