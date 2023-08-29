import { FormError } from '../../styles'
import { FormItemProps } from '../../index.page'
import { FormContainer, FormWrapper, Input, Item, Label, Title } from './styles'

export function ShippingInfo({ register, errors }: FormItemProps) {
  return (
    <FormContainer>
      <Title>Shipping Info</Title>
      <Item>
        <Label className={errors.address ? 'error' : ''}>Your Address</Label>
        <Input
          className={errors.address ? 'error' : ''}
          type="text"
          placeholder="1137 Williams Avenue"
          {...register('address')}
        />
        {errors.address && <FormError>{errors.address.message}</FormError>}
      </Item>
      <FormWrapper>
        <Item>
          <Label className={errors.zip ? 'error' : ''}>ZIP Code</Label>
          <Input
            className={errors.zip ? 'error' : ''}
            type="number"
            placeholder="10001"
            {...register('zip')}
          />
          {errors.zip && <FormError>{errors.zip.message}</FormError>}
        </Item>
        <Item>
          <Label className={errors.city ? 'error' : ''}>City</Label>
          <Input
            className={errors.city ? 'error' : ''}
            type="text"
            placeholder="New York"
            {...register('city')}
          />
          {errors.city && <FormError>{errors.city.message}</FormError>}
        </Item>
      </FormWrapper>
      <Item className="country">
        <Label className={errors.country ? 'error' : ''}>Country</Label>
        <Input
          className={errors.country ? 'error' : ''}
          type="text"
          placeholder="United States"
          {...register('country')}
        />
        {errors.country && <FormError>{errors.country.message}</FormError>}
      </Item>
    </FormContainer>
  )
}
