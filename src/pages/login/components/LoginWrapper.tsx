import { useMemo, useState } from 'react'

import { ClientSafeProvider, LiteralUnion, signIn } from 'next-auth/react'
import { BuiltInProviderType } from 'next-auth/providers'

import { IconContext } from 'react-icons'
import { FaFacebookF } from 'react-icons/fa'
import { BsGithub, BsLinkedin } from 'react-icons/bs'
import { InboxIcon, UserIcon } from '@heroicons/react/20/solid'

import Divider from '@/components/forms/Divider'
import SocialLinkButton from '@/components/UX/buttons/SocialLinkButton'

import Tabs from '@/components/UX/tabs/Tabs'
import FormBanner from './FormBanner'
import SecureEmailLoginForm from './SecureEmailLoginForm'

type LoginWrapperProps = {
    providers: Record<
        LiteralUnion<BuiltInProviderType, string>,
        ClientSafeProvider
    > | null
    loginError: string
    csrfToken: string
}

const tabs = [
    {
        id: 1,
        name: 'Secure Email',
        href: '#secure-email',
        icon: UserIcon,
        active: true,
    },
    {
        id: 2,
        name: 'User Login',
        href: '#user-login',
        icon: InboxIcon,
        active: false,
    },
]

const LoginWrapper = ({
    providers,
    loginError,
    csrfToken,
}: LoginWrapperProps) => {
    const [activeTab, setActiveTab] = useState(tabs[0].id)

    const toggleTab = (id: number) => {
        if (activeTab !== id) {
            setActiveTab(id)
        }
    }

    const iconStyles = useMemo(() => ({ className: 'h-5 w-5' }), [])

    if (loginError) {
        console.log(loginError)
    }

    return (
        <div className="flex flex-col justify-center min-h-full py-12 w-320 sm:px-6 lg:px-8">
            <FormBanner />

            <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                <div className="px-4 py-8 bg-white shadow sm:rounded-lg sm:px-10">
                    <Tabs
                        tabs={tabs}
                        activeTab={activeTab}
                        toggleTab={toggleTab}
                    />

                    {activeTab === 1 && (
                        <SecureEmailLoginForm
                            providers={providers}
                            csrfToken={csrfToken}
                        />
                    )}

                    <div className="mt-6">
                        <Divider>Or continue with</Divider>

                        <div className="grid grid-cols-3 gap-3 mt-6">
                            <IconContext.Provider value={iconStyles}>
                                <SocialLinkButton
                                    onClick={() =>
                                        signIn(providers?.facebook?.id)
                                    }
                                    label="Sign up with Facebook"
                                    icon={<FaFacebookF />}
                                    disabled={!providers?.facebook}
                                />
                                <SocialLinkButton
                                    onClick={() =>
                                        signIn(providers?.github?.id)
                                    }
                                    label="Sign up with GitHub"
                                    icon={<BsGithub />}
                                    disabled={!providers?.github}
                                />
                                <SocialLinkButton
                                    onClick={() =>
                                        signIn(providers?.linkedin?.id)
                                    }
                                    label="Sign up with LinkedIn"
                                    icon={<BsLinkedin />}
                                    disabled={!providers?.linkedin}
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
