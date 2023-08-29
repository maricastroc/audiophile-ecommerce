import { FormError } from '../../styles'
import { FormItemProps } from '../../index.page'
import { FormContainer, FormWrapper, Input, Item, Label, Title } from './styles'

export function BillingDetails({ register, errors }: FormItemProps) {
  return (
    <FormContainer>
      <Title>Billing details</Title>
      <FormWrapper>
        <Item>
          <Label className={errors.name ? 'error' : ''}>Name</Label>
          <Input type="text" placeholder="Alexei Ward" {...register('name')} />
          {errors.name && <FormError>{errors.name.message}</FormError>}
        </Item>
        <Item>
          <Label className={errors.email ? 'error' : ''}>Email Address</Label>
          <Input
            type="email"
            placeholder="alexei@mail.com"
            {...register('email')}
          />
          {errors.email && <FormError>{errors.email.message}</FormError>}
        </Item>
      </FormWrapper>
      <Item>
        <Label className={errors.phone ? 'error' : ''}>Phone Number</Label>
        <Input
          type="text"
          placeholder="+1 202-555-0136"
          {...register('phone')}
        />
        {errors.phone && <FormError>{errors.phone.message}</FormError>}
      </Item>
    </FormContainer>
  )
}
