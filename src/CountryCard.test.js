/* eslint-disable no-restricted-globals */
/* eslint-disable no-undef */
 import {render, screen} from '@testing-library/react'
 import CountryCard from './components/CountryCard'

describe("<CountryCard />", () => {
    test("renders the CountryCard component", async () => {
        render(<CountryCard />);
        
        // Wait for the component to fetch data and render
        await screen.findByText(/Capital:/i);
        await screen.findByText(/Population:/i);

        // Now test for elements with the expected text
        const capitalElement = screen.getByText("Capital:");
        const populationElement = screen.getByText("Population:");

        expect(capitalElement).toBeInTheDocument();
        expect(populationElement).toBeInTheDocument();
    });
});