/* eslint-disable no-restricted-globals */
import { render, fireEvent } from '@testing-library/react';
import RegionButtons from './components/RegionButtons';

describe("<RegionButtons />", () => {
   test("renders the RegionButtons component", () => {
       // Define a mock function for onRegionChange
       const mockOnRegionChange = jest.fn();

       render(<RegionButtons onRegionChange={mockOnRegionChange} />);

       // Click each button and assert that onRegionChange is called with the correct region
       fireEvent.click(screen.getByText('Africa'));
       expect(mockOnRegionChange).toHaveBeenCalledWith('Africa');

       fireEvent.click(screen.getByText('Americas'));
       expect(mockOnRegionChange).toHaveBeenCalledWith('Americas');

       
   });
});