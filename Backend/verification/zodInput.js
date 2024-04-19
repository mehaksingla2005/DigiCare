const zod = require('zod');

const signUpInput = zod.object({
    email: zod.string().email(),
    password: zod.string().min(6).max(20),
    name: zod.string().min(3).max(20),
    age: zod.number().int().positive()
})

const signInInput = zod.object({
    email: zod.string().email(),
    password: zod.string().min(6).max(20)
})


module.exports = {
    signUpInput,
    signInInput
}