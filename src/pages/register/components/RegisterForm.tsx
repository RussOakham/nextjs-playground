import { FormProvider, SubmitHandler, useForm } from 'react-hook-form'
import { ErrorMessage } from '@hookform/error-message'
import { zodResolver } from '@hookform/resolvers/zod'

import FormTextInput from '@/components/forms/inputs/FormTextInput'
import ErrorText from '@/components/forms/typography/ErrorText'

import MainButton from '@/components/UX/buttons/MainButton'

import { registerSchema } from '@/library/schemas/authSchemas'

export type RegistrationFormInputs = {
    username: string
    email: string
    password: string
    confirmPassword: string
}

const RegisterForm = () => {
    const methods = useForm<RegistrationFormInputs>({
        resolver: zodResolver(registerSchema),
    })

    const onSubmit: SubmitHandler<RegistrationFormInputs> = (data) =>
        console.log(data)

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
                        inputId="username"
                        inputLabel="Username"
                        type="text"
                        id="username"
                        label="Username"
                        placeholder="Enter a Username"
                        autoComplete="on"
                    />
                    <ErrorMessage
                        errors={errors}
                        name="username"
                        render={({ message }) => (
                            <ErrorText>{message}</ErrorText>
                        )}
                    />
                </div>

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
                    <FormTextInput
                        inputId="confirmPassword"
                        inputLabel="Confirm Password"
                        type="password"
                        id="confirmPassword"
                        label="confirmPassword"
                        placeholder="Re-enter your Password"
                        autoComplete="off"
                    />
                    <ErrorMessage
                        errors={errors}
                        name="confirmPassword"
                        render={({ message }) => (
                            <ErrorText>{message}</ErrorText>
                        )}
                    />
                </div>

                <div>
                    <MainButton type="submit" text="Register!" />
                </div>
            </form>
        </FormProvider>
    )
}

export default RegisterForm
