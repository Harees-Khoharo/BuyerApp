import React from 'react'
import { SafeAreaView, Text, View } from 'react-native'
import Checkout from './src/screens/Checkout'
import Header from './src/components/Header'
import PaymentMethods from './src/screens/PaymentMethods'
import ShippingAddresses from './src/screens/ShippingAddresses'
import AddShippingAddress from './src/screens/AddShippingAddress'
import Success from './src/screens/Success'

export default function App() {
  return (
    <SafeAreaView>
      {/* <Checkout/> */}
      {/* <PaymentMethods/> */}
      <ShippingAddresses/>
      {/* <AddShippingAddress/> */}
      {/* <Success/> */}
    </SafeAreaView>
  )
}
