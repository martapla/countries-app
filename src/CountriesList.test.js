import { render, screen } from '@testing-library/react';
import CountriesList from './components/CountriesList';

describe("<CountriesList />", () => {
    test("renders the CountriesList component", () => {
        // Define mock data for the list of countries
        const mockCountries = [
            { name: { common: 'Country 1' } },
            { name: { common: 'Country 2' } },
            { name: { common: 'Country 3' } },
            
        ];

        render(<CountriesList countries={mockCountries} />); // Pass mockCountries as prop

        // Iterate over mockCountries and assert that each country name is rendered
        mockCountries.forEach((country) => {
            const nameElement = screen.getByText(country.name.common);
            expect(nameElement).toBeInTheDocument();
        });
    });
});
