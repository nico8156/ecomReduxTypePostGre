import { render, screen } from '@testing-library/react'
import Footer from '../Footer'

describe('ButtonToCart', () => {
    it('should have the text "2023" ', () => {
        render(<Footer />) 
    
        const myElem = screen.getByText(/2023/i) 
    
        expect(myElem).toBeInTheDocument() 
    })
})