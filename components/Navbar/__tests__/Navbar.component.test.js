import { screen, render } from '@testing-library/react'
import { renderWithProviders } from '../../../utils/test/test.utils'
import Navabar from '../Navbar'

describe('Navabar test', () => {
    test('should have the text word "shop"', () => {
        renderWithProviders(<Navabar />) 
        const myElem = screen.getByText(/LOGO/i) 
        expect(myElem).toBeInTheDocument() 
    });
    test('Navbar affiche le logo', () => {
        const { getByText } = renderWithProviders(<Navabar />);
        const logoElement = getByText('LOGO');
        expect(logoElement).toBeInTheDocument();
      });

    test('should display the links correctly', () => {
        const { getByText } = renderWithProviders(<Navabar />);
        
        const links = [
          { title: "Phone", href: "/store/phone" },
          { title: "Phone Case", href: "/store/phoneCase" },
          { title: "Watch", href: "/store/watch" }
        ];
      
        links.forEach(link => {
          const linkElement = getByText(link.title);
          expect(linkElement).toBeInTheDocument();
          expect(linkElement).toHaveAttribute('href', link.href);
        });
      });
      
      
      
      // Vous pouvez ajouter d'autres tests en fonction des fonctionnalités spécifiques de votre Navbar, par exemple, le bouton de panier.
      
      
      
      
      
      
      
      
      
})
