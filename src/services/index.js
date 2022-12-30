// Estilos de botões condicionais
export const buttonConditionsTrue = {
  backgroundColor: 'white',
  color: 'black',
};

export const buttonConditionsFalse = {
  backgroundColor: 'black',
  color: 'white',
  opacity: '0.7',
};

// Funções usadas nos componentes e botões
export const functionClock = (setClock) => {
  let data = new Date;

  setClock({
    h: data.getHours(),
    m: data.getMinutes(),
    s: data.getSeconds()
  });
};

export const functionTimer = (setTimer, setIsDisabled) => {
  setIsDisabled({ s: true, p: false, r: false });
  return setInterval(() =>
    setTimer(({ m, s }) => {
      if (m === 59) return { m: 0, s: s };
      if (s === 59) return { m: m + 1, s: 0 };
  
      return { m: m, s: s + 1 };
  }), 1000);
};

export const functionStopTimer = (setIsDisabled, setPower) => {
  setPower(false);
  setIsDisabled({ s: false, p: true, reset: false });
}

export const functionResetTimer = (setTimer, setPower, setIsDisabled) => {
  setPower(false);
  setTimer({ h: 0, m: 0, s: 0 });
  setIsDisabled({ s: false, p: true, r: true });
};

export const functionRoute = (push, path, setPath) => {
  if (path === '/') {
    push('/timer');
    setPath('/timer');
  } else {
    push('/');
    setPath('/');
  };
};