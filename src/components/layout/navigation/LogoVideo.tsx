import Link from 'next/link'
import Image from 'next/image'

const LogoVideo = () => {
    return (
        <Link className="flex items-center flex-shrink-0" href='/'>
            <Image
                src='/images/ninja-boi.png'
                alt='NextJS Playground Logo'
                height={60}
                width={36}
            />
        </Link>
    )
}

export default LogoVideo