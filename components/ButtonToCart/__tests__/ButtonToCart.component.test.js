import { render, screen } from '@testing-library/react'
import ButtonToCart from '../ButtonToCart'

describe('ButtonToCart', () => {
    it('should have the text "Here" ', () => {
        render(<ButtonToCart />) 
    
        const myElem = screen.getByText(/Cart/i) 
    
        expect(myElem).toBeInTheDocument() 
    })
})