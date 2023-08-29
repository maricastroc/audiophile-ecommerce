import {
  EMoneyContainer,
  FormContainer,
  FormError,
  FormInput,
  FormItem,
  FormLabel,
  FormTitle,
  PaymentItem,
  PaymentTitle,
  PaymentsContainer,
} from '../../styles'
import { FormItemProps } from '../../index.page'
import { useState } from 'react'

type PaymentDetailsProps = FormItemProps & {
  onChange: (method: string) => void
}

export function PaymentDetails({
  register,
  errors,
  onChange,
}: PaymentDetailsProps) {
  const [paymentMethod, setPaymentMethod] = useState('')

  const handlePaymentMethodChange = (method: string) => {
    setPaymentMethod(method)
    onChange(method)
  }

  const isPaymentMethodSelected = (method: string) => paymentMethod === method

  return (
    <FormContainer>
      <FormTitle>Payment details</FormTitle>
      <PaymentTitle className={errors.payment ? 'error' : ''}>
        Payment Method
      </PaymentTitle>
      <PaymentsContainer>
        <PaymentItem
          onClick={() => handlePaymentMethodChange('e-money')}
          className={isPaymentMethodSelected('e-money') ? 'checked' : ''}
        >
          <input
            className={isPaymentMethodSelected('e-money') ? 'checked' : ''}
            type="radio"
            value="e-money"
            {...register('payment')}
          />
          <label htmlFor="payment">e-Money</label>
        </PaymentItem>
        <PaymentItem
          onClick={() => handlePaymentMethodChange('cash')}
          className={isPaymentMethodSelected('cash') ? 'checked' : ''}
        >
          <input
            className={isPaymentMethodSelected('cash') ? 'checked' : ''}
            type="radio"
            value="cash"
            {...register('payment')}
            checked={isPaymentMethodSelected('cash')}
          />
          <label htmlFor="payment">Cash on Delivery</label>
        </PaymentItem>
        {isPaymentMethodSelected('e-money') && (
          <EMoneyContainer>
            <FormItem>
              <FormLabel>e-Money Number</FormLabel>
              <FormInput type="number" placeholder="238521993" />
              {errors.eMoneyNumber && (
                <FormError>{errors.eMoneyNumber.message}</FormError>
              )}
            </FormItem>
            <FormItem>
              <FormLabel>e-Money PIN</FormLabel>
              <FormInput type="number" placeholder="6891" />
              {errors.eMoneyPIN && (
                <FormError>{errors.eMoneyPIN.message}</FormError>
              )}
            </FormItem>
          </EMoneyContainer>
        )}
      </PaymentsContainer>
    </FormContainer>
  )
}
