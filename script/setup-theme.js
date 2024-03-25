const themeBtn = document.querySelector('#changeThemeBtn');

export default function setupTheme() {
  initializeTheme();
  changeThemeOnClick();
}

function initializeTheme() {
  const currentTheme = localStorage.getItem('theme');

  if (currentTheme === null) {
    localStorage.setItem('theme', 'light');
  }

  if (currentTheme === 'dark') {
    themeBtn.style.backgroundImage = `url('images/sun.svg')`;
    setTheme(DARK);
  }
  if (currentTheme === 'light') {
    themeBtn.style.backgroundImage = `url('images/moon.svg')`;
    setTheme(LIGHT);
  }
}

function changeThemeOnClick() {
  themeBtn.addEventListener('click', e => {
    e.preventDefault();

    const checkTheme = localStorage.getItem('theme');

    if (checkTheme === 'light') {
      localStorage.setItem('theme', 'dark');
      themeBtn.style.backgroundImage = `url('images/sun.svg')`;
      setTheme(DARK);
    } else {
      localStorage.setItem('theme', 'light');
      themeBtn.style.backgroundImage = `url('images/moon.svg')`;
      setTheme(LIGHT);
    }
  });
}

function setTheme(theme) {
  for (const prop in theme) {
    document.documentElement.style.setProperty(prop, theme[prop]);
  }
}

const DARK = {
  '--scrollbar-track': '#424769',
  '--scrollbar': '#424769',
  '--scrollbar-thumb': '#5d9fff',
  '--body-bg-clr': '#2d3250',
  '--footer-bg-clr': '#76abae',
  '--footer-p-bg-clr': '#504e94',
  '--footer-p-text-clr': 'd4d5d7',
  '--footer-p-a-text-clr': 'whitesmoke',
  '--footer-bg-img-clr1': '#3a3869',
  '--footer-bg-img-clr2': '#606cae',
  '--card-bg-clr': '#424769',
  '--card-hover-shadow': '0px 0px 30px -2px #262b33',
  '--card-a-clr': 'white',
  '--card-textarea-clr': '#f5e8c7',
  '--card-textarea-hover-text-clr': 'rgb(172, 227, 220)',
  '--card-textarea-note-border-clr': 'rgba(45, 50, 80, 0.7)',
  '--card-btn-shadow': 'rgba(0, 0, 0, 0.1) 1px 2px 4px',
  '--card-btn-save-bg-clr': '#4274ff',
  '--card-btn-save-text-clr': 'white',
  '--card-btn-save-hover-shadow': '0px 0px 54px -10px rgb(80, 82, 133)',
  '--card-btn-save-hover-text-clr': 'white',
  '--card-btn-save-active-bg-clr': '#0062ff',
  '--card-btn-save-active-shadow': '0px 0px 54px -10px rgb(80, 82, 133)',
  '--card-btn-save-focusvisible': '2px solid #f6b17a',
  '--card-btn-delete-border': '1px solid #fd6e69',
  '--card-btn-delete-text-clr': '#ff4742',
  '--card-btn-delete-focus-outline': '1px solid rgb(255, 71, 66)',
  '--card-btn-delete-hover-shadow': '0px 0px 24px -2px rgb(165, 145, 63)',
  '--card-btn-delete-hover-text-clr': '#424769',
  '--card-btn-delete-hover-bg-clr': '#f6b17a',
  '--card-btn-delete-active-shadow': '0px 0px 24px -2px rgba(255, 71, 66, 1)',
  '--card-btn-delete-active-bg-clr': '#fde181',
  '--card-btn-delete-active-text-clr': '#f6b17a',
};

const LIGHT = {
  '--scrollbar-track': '#edf1f4',
  '--scrollbar': '#f5f5f5',
  '--scrollbar-thumb': '#5d9fff',
  '--body-bg-clr': '#b8dcff',
  '--footer-bg-clr': '#6bbbff',
  '--footer-p-bg-clr': '#85faac',
  '--footer-p-text-clr': 'black',
  '--footer-p-a-text-clr': 'black',
  '--footer-bg-img-clr1': '#aaf0d1',
  '--footer-bg-img-clr2': '#aaf0d177',
  '--card-bg-clr': '#dfecfa',
  '--card-hover-shadow': '0px 0px 30px -2px rgba(124, 171, 242, 0.7)',
  '--card-a-clr': '#4671ea',
  '--card-textarea-clr': '#333',
  '--card-textarea-hover-text-clr': 'rgba(0, 0, 255, 0.708)',
  '--card-textarea-note-border-clr': '#b8dcff',
  '--card-btn-shadow': 'rgba(0, 0, 0, 0.1) 1px 2px 4px',
  '--card-btn-save-bg-clr': '#4274ff',
  '--card-btn-save-text-clr': 'white',
  '--card-btn-save-hover-shadow': '0px 0px 54px -10px rgb(80, 82, 133)',
  '--card-btn-save-hover-text-clr': 'white',
  '--card-btn-save-active-bg-clr': '#0062ff',
  '--card-btn-save-active-shadow': '0px 0px 54px -10px rgb(80, 82, 133)',
  '--card-btn-save-focusvisible': '2px solid #ff4742',
  '--card-btn-delete-border': '1px solid #ff4742',
  '--card-btn-delete-text-clr': '#ff4742',
  '--card-btn-delete-focus-outline': '1px solid rgb(255, 71, 66)',
  '--card-btn-delete-hover-shadow': '0px 0px 24px -2px rgba(255, 71, 66, 1)',
  '--card-btn-delete-hover-text-clr': 'white',
  '--card-btn-delete-hover-bg-clr': '#ff4742',
  '--card-btn-delete-active-shadow': '0px 0px 24px -2px rgba(255, 71, 66, 1)',
  '--card-btn-delete-active-bg-clr': '#fde181',
  '--card-btn-delete-active-text-clr': '#ff4742',
};
