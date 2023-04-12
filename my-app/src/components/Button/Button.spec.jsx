import {render, screen} from '@testing-library/react'
import { Button } from ".";


describe('<Button />', () => {
    it('should render the button with the text "Load More"', () => {
        render(<Button text="Load More"/>);
    
    expect.assertions(1);

    const button = screen.getByRole('button', { name: /load more/i });

    expect(button).toBeInTheDocument();

    });
});