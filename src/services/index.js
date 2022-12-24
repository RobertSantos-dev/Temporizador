export const functionClock = (setClock) => {
  let data = new Date;

  setClock({
    h: data.getHours(),
    m: data.getMinutes(),
    s: data.getSeconds()
  });
};

export const functionTimer = (setTimer) => {
  return setInterval(() =>
    setTimer(({ h, m, s }) => {
      if (h === 24) return { h: 0, m: 0, s: 0 };
      if (m === 60) return { h: h + 1, m: 0, s: s };
      if (s === 60) return { h: h, m: m + 1, s: 0 };
  
      return { h: h, m: m, s: s + 1 };
  }), 1000);
};

export const functionResetTimer = (setTimer, setPower) => {
  setPower(false);
  setTimer({ h: 0, m: 0, s: 0 });
};
