import Image from 'next/image'
import Link from 'next/link'

const FormBanner = () => {
    return (
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
            <Image
                className="w-auto mx-auto"
                src="/images/ninja-boi.png"
                alt="NextJS Playground Logo"
                width={60}
                height={36}
            />
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-center text-gray-900">
                Register for an account
            </h2>
            <p className="mt-2 text-sm text-center text-gray-600">
                Or{' '}
                <Link
                    href="/login"
                    className="font-medium text-indigo-600 hover:text-indigo-500"
                >
                    Login
                </Link>
            </p>
        </div>
    )
}

export default FormBanner
