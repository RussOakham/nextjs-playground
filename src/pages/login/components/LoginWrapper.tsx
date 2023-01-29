import { useMemo } from 'react'

import { IconContext } from 'react-icons'
import { FaFacebookF } from 'react-icons/fa'
import { BsGithub, BsLinkedin } from 'react-icons/bs'

import Divider from '@/components/forms/Divider'
import SocialLinkButton from '@/components/UX/buttons/SocialLinkButton'

import FormBanner from './FormBanner'
import LoginForm from './LoginForm'

const LoginWrapper = () => {
    const iconStyles = useMemo(() => ({ className: 'h-5 w-5' }), [])

    return (
        <div className="flex flex-col justify-center min-h-full py-12 w-320 sm:px-6 lg:px-8">
            <FormBanner />

            <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                <div className="px-4 py-8 bg-white shadow sm:rounded-lg sm:px-10">
                    <LoginForm />

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

export default LoginWrapper
