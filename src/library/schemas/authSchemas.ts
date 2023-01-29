import { z } from 'zod'
import validator from 'validator'

const usernameValidation = z
    .string()
    .min(3, {
        message: 'Username must be at least 3 characters long',
    })
    .max(20, {
        message: 'Username must be at most 20 characters long',
    })
const emailValidation = z.string().email({
    message: 'Please enter a valid email address',
})
const passwordValidation = z.string().min(6)

export const registerSchema = z
    .object({
        username: usernameValidation,
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
    rememberMe: z.boolean(),
})
