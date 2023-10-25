import { screen } from '@testing-library/react'
import { renderWithProviders } from '../../../utils/test/test.utils'

import Products from '../../products/Products'

const mockedProducts = [{
    brand: "string",
    category: "string",
    description: "string",
    image: "/test",
    isNew: "boolean",
    oldPrice: "number",
    price: "number",
    title: "string",
    _id: "number",
    quantity: "number",
}]

describe('Products test', () => {
    it('uses preloaded state to render', () => {
        const initialUser = {username: "test", email: "testMail"};
        renderWithProviders(<Products products={mockedProducts}/>, {
            preloadedState: {
                user: initialUser
            }
        })
        const { getByText } = screen;
        const userElement = screen.getByText(/Add To Cart/i);
        expect(userElement).toBeInTheDocument();
        expect(getByText('Choose your next Tech-Product here')).toBeInTheDocument();
    })
})

