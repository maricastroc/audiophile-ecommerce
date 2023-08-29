import { useState } from 'react'
import { FormItemProps } from '../../index.page'
import Image from 'next/image'

import {
  AddsContainer,
  CashContainer,
  EMoneyContainer,
  PaymentItem,
  PaymentTitle,
  PaymentsContainer,
  PaymentsWrapper,
  Wrapper,
} from './styles'

import {
  FormContainer,
  FormError,
  FormInput,
  FormItem,
  FormLabel,
  FormTitle,
} from '../../styles'

import CashIcon from '../../../../../public/assets/checkout/icon-cash-on-delivery.svg'

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

  const hasEMoneyNumberError = !!errors?.eMoneyNumber
  const hasEMoneyPINError = !!errors?.eMoneyPIN

  return (
    <FormContainer>
      <FormTitle>Payment details</FormTitle>
      <Wrapper>
        <PaymentsWrapper>
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
          </PaymentsContainer>
        </PaymentsWrapper>
        <AddsContainer>
          {isPaymentMethodSelected('e-money') && (
            <EMoneyContainer>
              <FormItem>
                <FormLabel>e-Money Number</FormLabel>
                <FormInput type="number" placeholder="238521993" />
                {hasEMoneyNumberError && (
                  <FormError>{errors?.eMoneyNumber?.message}</FormError>
                )}
              </FormItem>
              <FormItem>
                <FormLabel>e-Money PIN</FormLabel>
                <FormInput type="number" placeholder="6891" />
                {hasEMoneyPINError && (
                  <FormError>{errors?.eMoneyPIN?.message}</FormError>
                )}
              </FormItem>
            </EMoneyContainer>
          )}
          {isPaymentMethodSelected('cash') && (
            <CashContainer>
              <Image src={CashIcon} alt="" width={16} height={16} />
              <p>
                The ‘Cash on Delivery’ option enables you to pay in cash when
                delivery courier arrives at your residence. Just make sure your
                your address is correct so that your order will not be
                cancelled.
              </p>
            </CashContainer>
          )}
        </AddsContainer>
      </Wrapper>
    </FormContainer>
  )
}
