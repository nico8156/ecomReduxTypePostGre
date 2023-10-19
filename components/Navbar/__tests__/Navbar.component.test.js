import { screen, render } from '@testing-library/react'
import { renderWithProviders } from '../../../utils/test/test.utils'
import Navabar from '../../Navbar/Navbar'


it('should have the text word "shop"', () => {
    renderWithProviders(<Navabar />) 

    const myElem = screen.getByText(/LOGO/i) 

    expect(myElem).toBeInTheDocument() 
})