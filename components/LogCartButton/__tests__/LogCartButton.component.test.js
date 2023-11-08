import { screen } from '@testing-library/react'
import { renderWithProviders } from '../../../utils/test/test.utils'

import LogCartButton from '../LogCartButton'

// const mockedProducts = [{
//     brand: "string",
//     category: "string",
//     description: "string",
//     image: "/test",
//     isNew: "boolean",
//     oldPrice: "number",
//     price: "number",
//     title: "string",
//     _id: "number",
//     quantity: "number",
// }]

describe('LogCartButton', () => {
    it('Should render "Login" if user null', () => {
        
        renderWithProviders(<LogCartButton />, {
            preloadedState: {
                user: null
            }
        })
        const userElement = screen.getByText(/Login/i);
        expect(userElement).toBeInTheDocument();
    })
})

