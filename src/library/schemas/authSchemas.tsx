import { z } from 'zod'
import validator from 'validator'

const emailValidation = z.string().email()
const passwordValidation = z.string().min(6)

export const registerSchema = z
    .object({
        email: emailValidation,
        password: passwordValidation.refine(
            (value) => {
                return validator.isStrongPassword(value, {
                    minLength: 6,
                    minLowercase: 1,
                    minUppercase: 1,
                    minNumbers: 1,
                    minSymbols: 1,
                })
            },
            {
                message:
                    'Password must contain at least 6 characters, 1 lowercase, 1 uppercase, 1 number and 1 symbol',
            }
        ),
        confirmPassword: passwordValidation,
    })
    .refine((data) => data.password === data.confirmPassword, {
        message: 'Passwords do not match',
        path: ['confirmPassword'],
    })

export const loginSchema = z.object({
    email: z.string().email(),
    password: z.string().min(6),
})
