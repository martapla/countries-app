/* eslint-disable testing-library/prefer-screen-queries */
import { render, fireEvent, screen } from '@testing-library/react';
import SearchBar from './SearchBar';

describe("<SearchBar />", () => {
    test("updates search query when typing", () => {
        const { getByPlaceholderText } = render(<SearchBar />);
        const inputElement = getByPlaceholderText("Search a country");

        fireEvent.change(inputElement, { target: { value: "Test Country" } });

        expect(inputElement.value).toBe("Test Country");
    });

    test("calls onSearch with the correct search query when the 'Search' button is clicked", () => {
        const mockOnSearch = jest.fn();

        render(<SearchBar onSearch={mockOnSearch} />);
        const inputElement = screen.getByPlaceholderText("Search a country");
        const searchButton = screen.getByText("Search");

        fireEvent.change(inputElement, { target: { value: "Test Country" } });
        fireEvent.click(searchButton);

        expect(mockOnSearch).toHaveBeenCalledWith("Test Country");
    });
});