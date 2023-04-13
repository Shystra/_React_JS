import {render, screen} from '@testing-library/react';
import {PostCard} from '.';
import { postCardPropsMock } from './mock';

const props = postCardPropsMock;

describe('<PostCard />', () => {
    it('should render PostCard correctly', () => {
        render(<PostCard {...props} />);
        
        expect(screen.getByRole('img', { name: /TITLE 1/i })).toBeInTheDocument();
    });
});