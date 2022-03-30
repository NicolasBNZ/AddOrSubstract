import { fireEvent, render, screen } from '@testing-library/react';
import Counter from ".";

// Quand je vais chercher le bouton de la fonction, si j'utilise le bouton plus 
//on s'attend à passer de 0 à 1
describe('Counter', ()=> {
  it('should increment 1 in the counter', () => {
    render(<Counter/>);
    // const addButton = screen.queryByText('+');
    const addButton = screen.getByRole('button', {name: '+'})
    fireEvent.click(addButton);
    expect(screen.queryByTestId('value')).toEqual(1);
  });

  // This test seems useless if the first one works
  it('should render two buttons', async () => {
    render(<Counter />)
    const buttonItems = await screen.findAllByRole('button')
    expect(buttonItems).toHaveLength(2)
  })

});



