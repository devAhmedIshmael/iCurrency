let output = document.querySelector(`.output`);
let input = document.querySelector(`.input`);
let inputBtns = document.querySelectorAll(`.input-btn`);

inputBtns.forEach((btn) => {
  btn.addEventListener(`click`, () => {
    switch (btn.textContent) {
      case `=`:
        output.textContent = eval(input.textContent);
        break;

      case `+`:
        if (
          input.textContent.endsWith(`+`) ||
          input.textContent.endsWith(`-`) ||
          input.textContent.endsWith(`*`) ||
          input.textContent.endsWith(`/`) ||
          input.textContent.endsWith(`%`)
        ) {
          input.textContent = input.textContent.substring(
            0,
            input.textContent.length - 1
          );
          input.textContent += btn.textContent;
        } else {
          input.textContent += btn.textContent;
        }
        break;
      case `-`:
        if (
          input.textContent.endsWith(`+`) ||
          input.textContent.endsWith(`-`) ||
          input.textContent.endsWith(`*`) ||
          input.textContent.endsWith(`/`) ||
          input.textContent.endsWith(`%`)
        ) {
          input.textContent = input.textContent.substring(
            0,
            input.textContent.length - 1
          );
          input.textContent += btn.textContent;
        } else {
          input.textContent += btn.textContent;
        }
        break;
      case `*`:
        if (
          input.textContent.endsWith(`+`) ||
          input.textContent.endsWith(`-`) ||
          input.textContent.endsWith(`*`) ||
          input.textContent.endsWith(`/`) ||
          input.textContent.endsWith(`%`)
        ) {
          input.textContent = input.textContent.substring(
            0,
            input.textContent.length - 1
          );
          input.textContent += btn.textContent;
        } else {
          input.textContent += btn.textContent;
        }
        break;
      case `/`:
        if (
          input.textContent.endsWith(`+`) ||
          input.textContent.endsWith(`-`) ||
          input.textContent.endsWith(`*`) ||
          input.textContent.endsWith(`/`) ||
          input.textContent.endsWith(`%`)
        ) {
          input.textContent = input.textContent.substring(
            0,
            input.textContent.length - 1
          );
          input.textContent += btn.textContent;
        } else {
          input.textContent += btn.textContent;
        }
        break;
      case `%`:
        if (
          input.textContent.endsWith(`+`) ||
          input.textContent.endsWith(`-`) ||
          input.textContent.endsWith(`*`) ||
          input.textContent.endsWith(`/`) ||
          input.textContent.endsWith(`%`)
        ) {
          input.textContent = input.textContent.substring(
            0,
            input.textContent.length - 1
          );
          input.textContent += btn.textContent;
        } else {
          input.textContent += btn.textContent;
        }
        break;

      case `C`:
        input.textContent = ``;
        output.textContent = 0;
        break;
      case `Del`:
        input.textContent = input.textContent.substring(
          0,
          input.textContent.length - 1
        );
        break;

      default:
        input.textContent += btn.textContent;
        break;
    }
  });
});

//================================================\\

// Dark mode

let logo = document.querySelector(`.logo`);
let mode = document.querySelector(`.mode`);
let calculator = document.querySelector(`.calculator`);

let changePic = (picClass, picLight, picDark) => {
  let logo = document.querySelector(picClass).src;
  if (logo.indexOf(picLight) != -1) {
    document.querySelector(picClass).src = picDark;
  } else {
    document.querySelector(picClass).src = picLight;
  }
};
let darkMode = () => {
  calculator.classList.toggle(`dark-mode`);
  changePic(`.logo`, `images/logo.png`, `images/logo-dark.png`);
  changePic(`.mode`, `images/light-mode.png`, `images/dark-mode.png`);
};

mode.addEventListener(`click`, darkMode);
