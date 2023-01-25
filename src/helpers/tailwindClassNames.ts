export default function tailwindClassNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}
