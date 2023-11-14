import React from 'react';
import {render, screen, fireEvent} from "@testing-library/react"
import Counter from '../../src/components/Counter/Counter';
import '@testing-library/jest-dom';

describe('Pruebas en <Counter />', () => {

  // Arrange
  const value = 50;

  test('Debe conincidir con el snapshot', () => {
    // Act
    const { container } = render(<Counter value={value} />)
    
    // screen.debug()

    // Assert
    expect(container).toMatchSnapshot()
  })

  test('Se debe mostar el valor inicial de 50', () => {
    // Act
    render(<Counter value={value} />)

    // Assert 
    // Para que funcione el toBeInTheDocument se debe importarimport '@testing-library/jest-dom';
    expect(screen.getByText('50')).toBeInTheDocument()
    expect(screen.getByText('50')).toHaveTextContent('50')
    expect(screen.getByText(/50/)).toBeInTheDocument()
    expect(screen.getByText(/50/)).toBeTruthy()

  })

  test('Debe incrementar el valor en +1', () => {
    // Act
    render(<Counter value={value} />)
    const btnIncrement = screen.getByText('+1')

    fireEvent.click(btnIncrement)

    // screen.debug()

    // Assert
    expect(screen.getByText('51')).toBeInTheDocument()
  })

  test('Debe decrementar el valor en -1', () => {
    // Act
    render(<Counter value={value} />)
    const btnDecrement = screen.getByText('-1')

    fireEvent.click(btnDecrement)

    // screen.debug()

    // Assert
    expect(screen.getByText('49')).toBeInTheDocument()
  })

})