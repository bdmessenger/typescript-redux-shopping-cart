import { Grid } from '@material-ui/core'
import ProductItem from '../ProductItem'
import { addToCart } from '../../features/cart/cartSlice'
import { useDispatch } from 'react-redux'
import { CartItemType } from '../../types'
import styled from 'styled-components'

const StyledGrid = styled(Grid)`
    padding: 1rem;
`;

type Props = {
    products: CartItemType[] | undefined;
}

export default function Products({products}: Props) {
    const dispatch = useDispatch()

    const handleAddToCart = (product: CartItemType) => {
        dispatch(addToCart(product))
    }

    return (
        <StyledGrid container spacing={2}>
            {products?.map(product => (
                <ProductItem key={product.id} product={product} handleAddToCart={handleAddToCart} />
            ))}
        </StyledGrid>
    )
}