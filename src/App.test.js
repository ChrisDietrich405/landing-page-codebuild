import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

// Mocking images
jest.mock('./img/about-me.jpg', () => 'about-me.jpg');
jest.mock('./img/fabiana.jpeg', () => 'fabiana.jpeg');
jest.mock('./img/fabio.jpeg', () => 'fabio.jpeg');
jest.mock('./img/rodrigo.png', () => 'rodrigo.png');
jest.mock('./img/mirian.png', () => 'mirian.png');
jest.mock('./img/online.png', () => 'online.png');
jest.mock('./img/levels.png', () => 'levels.png');
jest.mock('./img/experience.png', () => 'experience.png');
jest.mock('./img/prod-pict-dollar.png', () => 'prod-pict-dollar.png');

describe('App', () => {
  test('renders App component', () => {
    const { getByText, getByAltText } = render(<App />);

    // Add your test assertions here
    
    expect(screen.getByText('Professor de Inglês')).toBeInTheDocument();
    expect(screen.getByAltText('about me')).toBeInTheDocument();
    // Add more assertions as needed
  });
});
