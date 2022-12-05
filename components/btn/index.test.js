import React from 'react';
import { render } from '@testing-library/react';
import Btn from './index';

describe('Componente Button', () => {
  function setup(props = {}) {
    const { container, getByText } = render(<Btn {...props} />);
    const button = container.firstChild;
    return { button, container, getByText };
  }

  it('disabled enviado en las prop', () => {
    const { button } = setup({ disabled: true });
    expect(button.hasAttribute('disabled')).toBe(true);
  });

  it('type enviado en las prop', () => {
    const { button } = setup({ type: 'submit' });
    expect(button.getAttribute('type')).toBe('submit');
  });

  it('clase enviado en las prop', () => {
    const { button } = setup({ className: 'btn--next' });
    expect(button.classList.contains('btn--next')).toBe(true);
  });

  it('clase enviado en las prop y clase por default', () => {
    const { button } = setup({ className: 'btn--next' });
    expect(button.getAttribute('class')).toBe('btn btn--next');
  });

  it('renderizar texto enviado en las prop', () => {
    const { getByText } = setup({ text: 'siguiente' });
    expect(getByText('siguiente')).toBeInTheDocument();
  });
});
