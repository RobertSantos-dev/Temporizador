import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import renderWithRouter from "./utils/renderWithRouter";
import App from '../App';

describe('Testes de rederização dos Elementos', () => {
  beforeEach(() => renderWithRouter(<App />));

  it('01 - Teste se é rederizado na tela o titulo "Tempo" ', () => {
    const title = screen.getByRole('heading', { name: /tempo/i });
    expect(title).toBeInTheDocument();
  });

  it('02 - Teste se é rederizado na tela o botão de mudança de rota ', async () => {
    const button = screen.getByRole('button', { name: /stopwatch/i });
    expect(button).toBeInTheDocument();

    userEvent.click(button);

    const buttonTwo = await screen.findByRole('button', { name: /clock/i });
    expect(buttonTwo).toBeInTheDocument();
  });
});