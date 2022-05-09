document.body.innerHTML = `<p class="title">RSS Виртуальная клавиатура</p>
  <textarea class="textarea" id="textarea" disabled></textarea>
  <div class="keyboard" id="keyboard"></div>
  <p class="text">Для переключения языка комбинация: левыe Alt + Shift</p>`

const keyboard_code = ['Backquote', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0', 'Minus', 'Equal', 'Backspace', 'Tab', 'KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'BracketLeft', 'BracketRight', 'Backslash', 'Delete', 'CapsLock', 'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon', 'Quote', 'Enter', 'ShiftLeft', 'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Comma', 'Period', 'Slash', 'ArrowUp', 'ShiftRight', 'ControlLeft', 'MetaLeft', 'AltLeft', 'Space', 'AltRight', 'ArrowLeft', 'ArrowDown', 'ArrowRight', 'ControlRight'];
const keyboard_eng = ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace', 'Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\', 'Del', 'CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', "'", 'Enter', 'Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', '▲', 'Shift', 'Ctrl', 'Win', 'Alt', ' ', 'Alt', '◄', '▼', '►', 'Ctrl'];
const keyboard_ru = ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace', 'Tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', '\\', 'Del', 'CapsLock', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'Enter', 'Shift', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '.', '▲', 'Shift', 'Ctrl', 'Win', 'Alt', ' ', 'Alt', '◄', '▼', '►', 'Ctrl'];

function init_eng() {
  let out = '';
  for (let i = 0; i < keyboard_eng.length; i++) {
    out += '<div class="key eng '+ keyboard_code[i] +'" data="'+ keyboard_code[i] +'">' + keyboard_eng[i] + '</div>';
  }
  document.querySelector('#keyboard').innerHTML = out;
}

function init_ru() {
  let out = '';
  for (let i = 0; i < keyboard_eng.length; i++) {
    out += '<div class="key ru '+ keyboard_code[i] +'" data="'+ keyboard_code[i] +'">' + keyboard_ru[i] + '</div>';
  }
  document.querySelector('#keyboard').innerHTML = out;
}


init_eng();

document.onkeyup = function (event) {
  document.querySelector(`#keyboard .key[data=${event.code}]`).classList.remove('active');
}

document.querySelectorAll('#keyboard .key').forEach(function(element) {
  element.onmouseover = function(event) {
    this.classList.add('hover');
  }
});

document.querySelectorAll('#keyboard .key').forEach(function(element) {
  element.onmouseout = function(event) {
    this.classList.remove('hover');
  }
});

document.querySelectorAll('#keyboard .key').forEach(function(element) {
  element.onmousedown = function(event) {
    this.classList.add('active');
  }
});

document.querySelectorAll('#keyboard .key').forEach(function(element) {
  element.onmouseup = function(event) {
    this.classList.remove('active');
  }
});


function displayKeyboard() {
  let display = [];
  document.onkeydown = function (event) {
    document.querySelector(`#keyboard .key[data=${event.code}]`).classList.add('active');
    if (event.key == 'Backspace') {
      display.pop();
    } else if (event.altKey == true && event.shiftKey == true && document.querySelector(`.key`).classList[1] == 'eng') {
      init_ru();
    } else if (event.altKey == true && event.shiftKey == true && document.querySelector(`.key`).classList[1] == 'ru') {
      init_eng();
    } else if (event.key == 'Tab') {
      display.push('    ');
    } else if (event.key == 'ArrowUp') {
      display.push('▲')
    } else if (event.key == 'ArrowDown') {
      display.push('▼')
    } else if (event.key == 'ArrowLeft') {
      display.push('◄')
    } else if (event.key == 'ArrowRight') {
      display.push('►')
    } else if (event.key == 'Enter') {
      display.push('\n');
    } else if (event.key == 'CapsLock' || event.key == 'Control' || event.key == 'Shift' || event.key == 'Alt' || event.key == 'Delete') {
      return;
    } else {
      display.push(event.key);
    }
    document.querySelector('#textarea').innerHTML = display.join('');
  }
}

displayKeyboard();