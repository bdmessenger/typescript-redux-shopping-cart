import { Button } from '@material-ui/core'
import { CartItemType } from '../../types'
import { styled } from '@material-ui/core/styles'

type Props = {
    item: CartItemType;
    handleAddToCart: (clickedItem: CartItemType) => void;
    handleRemoveFromCart: (id: number) => void;
}

const Wrapper = styled('div')({
    display: 'flex',
    alignItems: 'center',
    borderBottom: '1px solid',
    "& img": {
        width: '100px',
        height: '100px',
        objectFit: 'contain'
    },
    "& .quantity": {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '1rem'
    },
    "& .cartItemDetails": {
        width: '200px'
    }
})

const StyledButton = styled(Button)({
    border: '1px solid rgba(0,0,0, 0.5)',
    fontSize: '1.2rem'
})

const CartItem = ({item, handleAddToCart, handleRemoveFromCart}: Props) => (
    <Wrapper>
        <div className="cartItemDetails">
            <h4>{item.title}</h4>
            <div className="quantity">
                <StyledButton onClick={() => handleRemoveFromCart(item.id)}>-</StyledButton>
                {item.amount}
                <StyledButton onClick={() => handleAddToCart(item)}>+</StyledButton>
            </div>
        </div>
        <img src={item.image} alt={item.title} />
    </Wrapper>
)

export default CartItem