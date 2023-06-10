import addressApi from '../../config/address-api'

type Address = {
  cep: string
  logradouro: string
  complemento: string
  bairro: string
  localidade: string
  uf: string
}

type Format = 'json' | 'xml' | 'piped' | 'querty'

export const findAddressRequest = async (
  zipCode: string,
  format: Format = 'json',
): Promise<Address> => {
  const response = await addressApi.get<Address>(`${zipCode}/${format}`)
  return response.data
}
