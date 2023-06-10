import { z } from 'zod'

export const checkoutOrderAddressSchema = z.object({
  zipCode: z
    .string()
    .min(8, {
      message: 'CEP deve conter 8 dígitos',
    })
    .nonempty({
      message: 'CEP é obrigatório',
    }),
  number: z.coerce
    .number({
      required_error: 'Número é obrigatório',
    })
    .min(1, {
      message: 'Número é obrigatório',
    }),
  complement: z.string().optional(),
  street: z
    .string({
      required_error: 'Rua é obrigatório',
    })
    .nonempty({
      message: 'Rua é obrigatório',
    }),
  neighborhood: z
    .string({
      required_error: 'Bairro é obrigatório',
    })
    .nonempty({
      message: 'Bairro é obrigatório',
    }),
  city: z
    .string({
      required_error: 'Cidade é obrigatório',
    })
    .nonempty({
      message: 'Cidade é obrigatório',
    }),
  state: z
    .string({
      required_error: 'UF é obrigatório',
    })
    .nonempty({
      message: 'UF é obrigatório',
    }),
})

export type CheckoutOrderFormData = z.infer<typeof checkoutOrderAddressSchema>
