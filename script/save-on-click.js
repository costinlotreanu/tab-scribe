import updateItems from './update-items.js';

const saveUrlBtn = document.querySelector('#saveUrlBtn');

export default function saveOnClick() {
  saveUrlBtn.addEventListener('click', getCurrentTab);

  async function getCurrentTab() {
    // `tab` will either be a `tabs.Tab` instance or `undefined`.

    let [tab] = await chrome.tabs.query({
      active: true,
      lastFocusedWindow: true,
    });

    const timestamp = Date.now();
    let currentTab = { id: timestamp, url: tab.url, note: '' };
    const items = JSON.parse(localStorage.getItem('tabs')) || [];
    items.push(currentTab);
    localStorage.setItem('tabs', JSON.stringify(items));

    updateItems();
    scrollDown();
    animateSaveButton();
  }
}

function animateSaveButton() {
  saveUrlBtn.classList.add('active');
  setTimeout(() => {
    saveUrlBtn.textContent = 'Saved';
  }, 100);
  setTimeout(() => {
    saveUrlBtn.classList.remove('active');
    saveUrlBtn.textContent = 'Bookmark';
  }, 500);
}

function scrollDown() {
  window.scrollBy({
    top: 10000,
    left: 0,
    behavior: 'smooth',
  });
}
