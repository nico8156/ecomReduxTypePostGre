import { render, screen } from '@testing-library/react'

import Home from '@/app/page'

describe('home', () => {
    it('should have the text word "shop"', () => {
        render(<Home />) 
    
        const myElem = screen.getByText(/shop/i) 
    
        expect(myElem).toBeInTheDocument() 
    })
    it('should have the text "Here" ', () => {
        render(<Home />) 
    
        const myElem = screen.getByText(/Here/i) 
    
        expect(myElem).toBeInTheDocument() 
    })
})

