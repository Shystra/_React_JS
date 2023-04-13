import {render} from '@testing-library/react';
import {PostCard} from '.';

const mock = {
    title: 'title 1',
    body: 'body',
    id: 1,
    cover: 'img/img.png'
};

describe('<PostCard />', () => {
    it ('should render PostCard correctly', () => {
        const {debug} = render(<PostCard {...mock} />);
        
        debug();
    })
});