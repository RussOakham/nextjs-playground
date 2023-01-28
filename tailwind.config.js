/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
    content: ['./src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            fontFamily: {
                sans: ['var(--font-inter)'],
            },
            width: {
                128: '32rem',
                144: '36rem',
                160: '40rem',
                176: '44rem',
                192: '48rem',
                208: '52rem',
                224: '56rem',
                240: '60rem',
                256: '64rem',
                272: '68rem',
                288: '72rem',
                304: '76rem',
                320: '80rem',
                336: '84rem',
                352: '88rem',
                368: '92rem',
                384: '96rem',
                400: '100rem',
                416: '104rem',
            },
        },
    },
    plugins: [require('@tailwindcss/forms')],
}
