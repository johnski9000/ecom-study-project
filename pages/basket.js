import React, { useContext } from 'react'
import Layout from '../components/Layout'
import { Store } from '../utils/store'

function basket() {
    const {state, dispatch} = useContext(Store)
  return (
    <Layout>
        {state.cart.cartItems.map(item => {
            return (
                <div key={item.slug}>
                    <div>{item.name} - {item.quantity} in basket</div>
                </div>
            )
        })}
    </Layout>
  )
}

export default basket