import { useState } from 'react'
import { Button, IconButton, Drawer, Typography } from '@material-ui/core'
import { ShoppingCart } from '@material-ui/icons'
import { useSelector, useDispatch } from 'react-redux'
import { selectCart, addToCart, removeFromCart } from './cartSlice'
import styled from '@material-ui/core/styles/styled'
import CartItem from './CartItem'
import { CartItemType } from '../../types'

const Wrapper = styled('div')({
    position: 'fixed',
    top: '10px',
    right: '20px'
})

const CartButton = styled(IconButton)({
    position: 'relative',
    border: '1px solid rgba(63,81,181, 30%)',
    background: 'white'
})

const TotalItemsAmountText = styled(Typography)({
    position: 'absolute',
    textAlign: 'center',
    top: '-10px',
    right: '-10px',
    border: '1px solid red',
    color: 'white',
    borderRadius: '50%',
    background: 'red',

    width: '20px',
    height: '20px',
    padding: '5px',
    fontSize: '14px'
})

const Section = styled('section')({
    marginTop: '0.8rem',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    padding: '2rem',
    "& > .totalAmount": {
        marginTop: '1rem'
    }
})

const ExitButton = styled(Button)({
    position: 'absolute',
    top: 0,
    left: 0,
    border: '1px solid rgba(0,0,0,0.2)',
    fontSize: '1rem',
})

export default function Cart() {
    const dispatch = useDispatch()
    const items = useSelector(selectCart)

    const [drawerState, setDrawerState] = useState(false)

    const handleAddToCart = (product: CartItemType) => {
        dispatch(addToCart(product))
    }

    const handleRemoveFromCart = (id: number) => {
        dispatch(removeFromCart(id))
    }

    const getTotalCost = (items: CartItemType[]) => items.reduce((totalValue, item) => totalValue += item.price * item.amount, 0).toFixed(2)

    const getItemsCount = (items: CartItemType[]) => items.reduce((totalCount, item) => totalCount += item.amount, 0)


    return (
        <Wrapper>
            <CartButton className="button" color="primary" onClick={() => setDrawerState(true)}>
                {items.length !== 0 && <TotalItemsAmountText>{getItemsCount(items)}</TotalItemsAmountText>}
                <ShoppingCart/>
            </CartButton>
            <Drawer anchor="right" open={drawerState} onClose={() => setDrawerState(false)}>
                <ExitButton onClick={() => setDrawerState(false)}>X</ExitButton>
                <Section>
                    <div>
                        <Typography variant="h5">Your Shopping Cart:</Typography>
                        {items.length === 0 && <Typography variant="subtitle1">No items available. Please add item to cart.</Typography>}
                        {items.length > 0 && items.map(item => <CartItem key={item.id} item={item} handleAddToCart={handleAddToCart} handleRemoveFromCart={handleRemoveFromCart} />)}
                    </div>
                    <Typography className="totalAmount" variant="h5">Total: ${getTotalCost(items)}</Typography>
                </Section>
            </Drawer>
        </Wrapper>
    )
}