import { Grid, Button, Typography } from '@material-ui/core'
import { CartItemType } from '../../types'
import styled from 'styled-components'

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border: 1px solid;
    height: 100%;
    border-radius: 10px;
    overflow: hidden;

    div {
        padding: 0.6rem;
    }

    img {
        width: 100%;
        height: 250px;
        object-fit: contain;
        border-radius: 10px 10px 0 0;
    }

    .details {
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }

    button {
        border-radius: 0 0 10px 10px;
    }

    .price, .title {
        font-weight: 600;
    }
`;

type Props = {
    product: CartItemType;
    handleAddToCart: (clickedItem: CartItemType) => void;
}

const ProductItem = ({product, handleAddToCart}: Props) => {
    return (
        <Grid item xs={12} sm={6} md={4} lg={3}>
            <Wrapper>
                <div>
                    <img src={product.image} alt={product.title} />
                    <div className="details">
                        <Typography className="title" variant="h5">{product.title}</Typography>
                        <Typography variant="subtitle2" component="p">{product.description}</Typography>
                        <Typography className="price" variant="h5">${product.price.toFixed(2)}</Typography>
                    </div>
                </div>
                <Button size="large" onClick={() => handleAddToCart(product)}>Add To Cart</Button>
            </Wrapper>
        </Grid>
    )
}

export default ProductItem