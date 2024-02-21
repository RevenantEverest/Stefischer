import '@testing-library/jest-dom';
import './mocks/intersectionObserver';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { HomePage } from '@@pages/index';

/* Example Page Test */
test("Home Page", () => {
    render(<HomePage />, { wrapper: BrowserRouter })
    expect(true).toBe(true);
});