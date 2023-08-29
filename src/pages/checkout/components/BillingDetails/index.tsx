import {
  FormContainer,
  FormError,
  FormInput,
  FormItem,
  FormLabel,
  FormTitle,
} from '../../styles'
import { FormItemProps } from '../../index.page'

export function BillingDetails({ register, errors }: FormItemProps) {
  return (
    <FormContainer>
      <FormTitle>Billing details</FormTitle>
      <FormItem>
        <FormLabel className={errors.name ? 'error' : ''}>Name</FormLabel>
        <FormInput
          type="text"
          placeholder="Alexei Ward"
          {...register('name')}
        />
        {errors.name && <FormError>{errors.name.message}</FormError>}
      </FormItem>
      <FormItem>
        <FormLabel className={errors.email ? 'error' : ''}>
          Email Address
        </FormLabel>
        <FormInput
          type="email"
          placeholder="alexei@mail.com"
          {...register('email')}
        />
        {errors.email && <FormError>{errors.email.message}</FormError>}
      </FormItem>
      <FormItem>
        <FormLabel className={errors.phone ? 'error' : ''}>
          Phone Number
        </FormLabel>
        <FormInput
          type="text"
          placeholder="+1 202-555-0136"
          {...register('phone')}
        />
        {errors.phone && <FormError>{errors.phone.message}</FormError>}
      </FormItem>
    </FormContainer>
  )
}
