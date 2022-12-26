import { screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import renderWithRouter from "./utils/renderWithRouter";
import App from '../App';

describe('Testes de rota', () => {
  it('01 - Teste se a rota é "/" ', () => {
    const { history } = renderWithRouter(<App />);

    expect(history.location.pathname).toBe('/');
    });

  it('02 - Teste se ao click no botão, a nova rota seja "/timer"', async () => {
    const { history } = renderWithRouter(<App />);

    const button = screen.getByRole('button', { name: /stopwatch/i });
    expect(button).toBeInTheDocument();

    userEvent.click(button);

    await waitFor(() => {
      expect(history.location.pathname).toBe('/timer');
    });
  });
});