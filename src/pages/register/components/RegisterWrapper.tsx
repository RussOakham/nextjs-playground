import { useEffect, useMemo } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FormProvider, useForm, SubmitHandler } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { ErrorMessage } from '@hookform/error-message'
import { IconContext } from 'react-icons'
import { FaFacebookF } from 'react-icons/fa'
import { BsGithub, BsLinkedin } from 'react-icons/bs'

import FormTextInput from '@/components/forms/inputs/FormTextInput'
import ErrorText from '@/components/forms/typography/ErrorText'
import Divider from '@/components/forms/Divider'
import SocialLinkButton from '@/components/UX/buttons/SocialLinkButton'

import { registerSchema } from '@/library/schemas/authSchemas'
import MainButton from '@/components/UX/buttons/MainButton'

type RegistrationFormInputs = {
    email: string
    password: string
    confirmPassword: string
}

const RegisterWrapper = () => {
    const methods = useForm<RegistrationFormInputs>({
        resolver: zodResolver(registerSchema),
    })
    const iconStyles = useMemo(() => ({ className: 'h-5 w-5' }), [])

    const { errors } = methods.formState

    const onSubmit: SubmitHandler<RegistrationFormInputs> = (data) =>
        console.log(data)

    useEffect(() => {
        console.log(methods.formState.errors)
    }, [methods.formState.errors])

    return (
        <div className="flex flex-col justify-center min-h-full py-12 w-320 sm:px-6 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-md">
                <Image
                    className="w-auto h-12 mx-auto"
                    src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                    alt="Your Company"
                    width={72}
                    height={72}
                />
                <h2 className="mt-6 text-3xl font-bold tracking-tight text-center text-gray-900">
                    Register for an account
                </h2>
                <p className="mt-2 text-sm text-center text-gray-600">
                    Or{' '}
                    <Link
                        href="/Login"
                        className="font-medium text-indigo-600 hover:text-indigo-500"
                    >
                        Login
                    </Link>
                </p>
            </div>

            <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                <div className="px-4 py-8 bg-white shadow sm:rounded-lg sm:px-10">
                    <FormProvider {...methods}>
                        <form
                            className="space-y-6"
                            onSubmit={methods.handleSubmit(onSubmit)}
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

                    <div className="mt-6">
                        <Divider>Or continue with</Divider>

                        <div className="grid grid-cols-3 gap-3 mt-6">
                            <IconContext.Provider value={iconStyles}>
                                <SocialLinkButton
                                    href="https://www.facebook.com"
                                    label="Sign up with Facebook"
                                    icon={<FaFacebookF />}
                                />
                                <SocialLinkButton
                                    href="https://www.github.com"
                                    label="Sign up with GitHub"
                                    icon={<BsGithub />}
                                />
                                <SocialLinkButton
                                    href="https://www.linkedin.com"
                                    label="Sign up with LinkedIn"
                                    icon={<BsLinkedin />}
                                />
                            </IconContext.Provider>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RegisterWrapper
