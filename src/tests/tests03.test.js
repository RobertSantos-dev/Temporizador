import { screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BUTTON_START, BUTTON_STOP, BUTTON_RESET } from "./utils/variables";
import renderWithRouter from "./utils/renderWithRouter";
import Timer from '../pages/Timer';

describe('Testes nos botões do cronometro', () => {
  beforeEach(() => {
    renderWithRouter(<Timer />);
  })

  it('01 - Teste se é rederizado os botões correto ', () => {
    const buttonStart = screen.getByRole('button', { name: BUTTON_START });
    const buttonStop = screen.getByRole('button', { name: BUTTON_STOP });
    const buttonReset = screen.getByRole('button', { name: BUTTON_RESET });

    expect(buttonStart).toBeInTheDocument();
    expect(buttonStop).toBeInTheDocument();
    expect(buttonReset).toBeInTheDocument();
  });

  it('02 - Teste se está habilitado ou desabilitado os botões corretos ', () => {
    const buttonStart = screen.getByRole('button', { name: BUTTON_START });
    const buttonStop = screen.getByRole('button', { name: BUTTON_STOP });
    const buttonReset = screen.getByRole('button', { name: BUTTON_RESET });

    expect(buttonStart).not.toBeDisabled();
    expect(buttonStop).toBeDisabled();
    expect(buttonReset).toBeDisabled();
  });

  it('03 - Teste se está habilitado ou desabilitado os botões corretos ao serem clicados ', async () => {
    const buttonStart = screen.getByRole('button', { name: BUTTON_START });
    const buttonStop = screen.getByRole('button', { name: BUTTON_STOP });
    const buttonReset = screen.getByRole('button', { name: BUTTON_RESET });

    userEvent.click(buttonStart);

    await waitFor(() => {
      expect(buttonStart).toBeDisabled();
      expect(buttonStop).not.toBeDisabled();
      expect(buttonReset).not.toBeDisabled();
    });

    userEvent.click(buttonStop);

    await waitFor(() => {
      expect(buttonStart).not.toBeDisabled();
      expect(buttonStop).toBeDisabled();
      expect(buttonReset).not.toBeDisabled();
    })

    userEvent.click(buttonReset);

    await waitFor(() => {
      expect(buttonStart).not.toBeDisabled();
      expect(buttonStop).toBeDisabled();
      expect(buttonReset).toBeDisabled();
    });
  });
});