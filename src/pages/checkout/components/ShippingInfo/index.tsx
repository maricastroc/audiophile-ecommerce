import {
  FormContainer,
  FormError,
  FormInput,
  FormItem,
  FormLabel,
  FormTitle,
} from '../../styles'
import { FormItemProps } from '../../index.page'

export function ShippingInfo({ register, errors }: FormItemProps) {
  return (
    <FormContainer>
      <FormTitle>Shipping Info</FormTitle>
      <FormItem>
        <FormLabel className={errors.address ? 'error' : ''}>
          Your Address
        </FormLabel>
        <FormInput
          className={errors.address ? 'error' : ''}
          type="text"
          placeholder="1137 Williams Avenue"
          {...register('address')}
        />
        {errors.address && <FormError>{errors.address.message}</FormError>}
      </FormItem>
      <FormItem>
        <FormLabel className={errors.zip ? 'error' : ''}>ZIP Code</FormLabel>
        <FormInput
          className={errors.zip ? 'error' : ''}
          type="number"
          placeholder="10001"
          {...register('zip')}
        />
        {errors.zip && <FormError>{errors.zip.message}</FormError>}
      </FormItem>
      <FormItem>
        <FormLabel className={errors.city ? 'error' : ''}>City</FormLabel>
        <FormInput
          className={errors.city ? 'error' : ''}
          type="text"
          placeholder="New York"
          {...register('city')}
        />
        {errors.city && <FormError>{errors.city.message}</FormError>}
      </FormItem>
      <FormItem>
        <FormLabel className={errors.country ? 'error' : ''}>Country</FormLabel>
        <FormInput
          className={errors.country ? 'error' : ''}
          type="text"
          placeholder="United States"
          {...register('country')}
        />
        {errors.country && <FormError>{errors.country.message}</FormError>}
      </FormItem>
    </FormContainer>
  )
}
