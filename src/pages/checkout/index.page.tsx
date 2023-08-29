import { useContext } from 'react'
import { NavbarContext } from '@/contexts/NavbarContext'
import { FieldError, UseFormRegister, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

import Layout from '@/components/Layout'
import { Navbar } from '@/components/Navbar'
import { BackButton } from '@/components/BackButton'
import { BillingDetails } from './components/BillingDetails'
import { ShippingInfo } from './components/ShippingInfo'
import { PaymentDetails } from './components/PaymentDetails'
import { SummaryCard } from './components/SummaryCard'

import {
  CheckoutButton,
  CheckoutForm,
  Container,
  Heading,
  SummaryContainer,
  Wrapper,
} from './styles'

const formSchema = z
  .object({
    name: z.string().min(3, { message: 'Name is required' }),
    email: z.string().email({ message: 'Email is required' }),
    phone: z.string().min(10, { message: '10 digit number is required' }),
    address: z.string().min(3, { message: 'Address is required' }),
    zip: z.string().min(3, { message: 'Must be at least 5 digits' }),
    city: z.string().min(1, { message: 'City is required' }),
    country: z.string().min(1, { message: 'City is required' }),
    payment: z.string().min(1, { message: 'Payment is required' }),
    eMoneyNumber: z.string().optional(),
    eMoneyPIN: z.string().optional(),
  })
  .refine(
    (schema) =>
      schema.payment === 'e-money'
        ? schema.eMoneyNumber && schema.eMoneyNumber.length >= 9
        : true,
    {
      message: 'Must be at least 9 digits',
      path: ['eMoneyNumber'],
    },
  )
  .refine(
    (schema) =>
      schema.payment === 'e-money'
        ? schema.eMoneyPIN && schema.eMoneyPIN.length >= 4
        : true,
    {
      message: 'Must be at least 4 digits',
      path: ['eMoneyPIN'],
    },
  )

export type FormData = z.infer<typeof formSchema>

export interface FormItemProps {
  register: UseFormRegister<FormData>
  errors: Partial<Record<keyof FormData, FieldError | undefined>>
}

export default function Checkout() {
  const { isNavbarOpen } = useContext(NavbarContext)

  const {
    register,
    handleSubmit,
    setValue,
    formState: { isSubmitting, errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  })

  function handleCheckout(data: FormData) {
    console.log(data)
  }

  function handleSelectPaymentMethod(method: string) {
    setValue('payment', method)
  }

  return (
    <Layout showFooterCard={false}>
      {isNavbarOpen ? (
        <Navbar />
      ) : (
        <Wrapper>
          <BackButton />
          <Container onSubmit={handleSubmit(handleCheckout)}>
            <CheckoutForm>
              <Heading>Checkout</Heading>
              <BillingDetails register={register} errors={errors} />
              <ShippingInfo register={register} errors={errors} />
              <PaymentDetails
                register={register}
                errors={errors}
                onChange={handleSelectPaymentMethod}
              />
            </CheckoutForm>
            <SummaryContainer>
              <SummaryCard />
              <CheckoutButton type="submit" disabled={isSubmitting}>
                Continue & pay
              </CheckoutButton>
            </SummaryContainer>
          </Container>
        </Wrapper>
      )}
    </Layout>
  )
}
