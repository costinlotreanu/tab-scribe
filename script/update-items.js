const container = document.querySelector('[data-container]');
const template = document.querySelector('template');
const header = document.querySelector('header');
const footer = document.querySelector('footer');

export default function updateItems() {
  // clear items in container
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }
  // load items from localeStorage
  const remainingItemsFromLocalStorage = JSON.parse(
    localStorage.getItem('tabs')
  );
  renderItems(remainingItemsFromLocalStorage);
  ifNoItemsCenterSaveBtn();

  function ifNoItemsCenterSaveBtn() {
    if (
      remainingItemsFromLocalStorage === null ||
      remainingItemsFromLocalStorage.length === 0
    ) {
      header.classList.add('no-elements-centered');
      footer.classList.add('no-elements');
    } else {
      header.classList.remove('no-elements-centered');
      footer.classList.remove('no-elements');
    }
  }
}

function renderItems(tabs) {
  if (tabs === null) return;
  tabs.forEach(render);
}

function render(item) {
  const clone = template.content.cloneNode(true);
  const cardId = clone.querySelector('[data-card-id]');
  const anchor = clone.querySelector('[data-card-anchor]');
  const noteBtn = clone.querySelector('[data-card-btn-note]');
  const deleteBtn = clone.querySelector('[data-card-btn-delete]');
  const textarea = clone.querySelector('[data-card-textarea]');
  cardId.dataset.itemId = item.id;
  anchor.href = item.url;

  const anchorName = renameItemURL(item.url);
  anchor.textContent = anchorName;
  textarea.textContent = item.note;

  setupNote();
  deleteItem(item);
  setTextareaHigh();

  function renameItemURL(string) {
    if (string.startsWith('https://')) {
      return string.slice(8);
    }

    if (string.startsWith('http://')) {
      return string.slice(7);
    }

    return string;
  }

  function deleteItem(item) {
    deleteBtn.addEventListener('click', e => {
      const items = JSON.parse(localStorage.getItem('tabs'));
      const result = items.filter(elem => item.id !== elem.id);
      const remainingItems = [...result];
      localStorage.setItem('tabs', JSON.stringify(remainingItems));

      updateItems();
    });
  }

  function setupNote() {
    showNoteButton();
    openNote();
    checkNoteContent();

    window.addEventListener('load', e => {
      if (item.note === '') {
        textarea.classList.add('display-none');
        noteBtn.classList.remove('display-none');
        cardId.style.padding = '1rem';
      }
    });

    textarea.addEventListener('focus', e => {
      noteBtn.classList.add('display-none');
      cardId.style.padding = '1rem 1rem 0.5rem';
      textarea.style.fontWeight = '500';

      if (item.note === '') {
        textarea.style.height = '56px';
      }

      checkLastElement();
    });

    function checkLastElement() {
      const dataItem = cardId.getAttribute('data-item-id');
      const items = JSON.parse(localStorage.getItem('tabs'));
      const lastItem = items[items.length - 1].id;

      if (dataItem == lastItem) {
        // scroll down the page
        window.scrollBy({
          top: 10000,
          left: 0,
          behavior: 'smooth',
        });
      }
    }

    textarea.addEventListener('blur', e => {
      if (textarea.value === '') {
        noteBtn.classList.remove('display-none');
        textarea.classList.add('display-none');
        cardId.style.padding = '1rem';
      }
      textarea.style.fontWeight = '400';
      deleteContentEmptySpaces();
      saveTextareaValueToLocaleStorage();
    });
  }

  function saveTextareaValueToLocaleStorage() {
    const updateItemsFromLocalStorage = JSON.parse(
      localStorage.getItem('tabs')
    );
    const itemIndex = updateItemsFromLocalStorage.findIndex(
      elem => elem.id === item.id
    );
    updateItemsFromLocalStorage[itemIndex].note = textarea.value;
    localStorage.setItem('tabs', JSON.stringify(updateItemsFromLocalStorage));
  }

  function checkNoteContent() {
    if (item.note === undefined || item.note === '') {
      noteBtn.classList.remove('display-none');
      textarea.classList.add('display-none');
      cardId.style.padding = '1rem';
    }
  }

  function deleteContentEmptySpaces() {
    const trimText = textarea.value.trim();
    textarea.value = trimText;
  }

  function showNoteButton() {
    if (item.note !== undefined) {
      noteBtn.classList.add('display-none');
    } else {
      cardId.style.padding = '1rem';
    }
  }

  function openNote() {
    noteBtn.addEventListener('click', e => {
      textarea.classList.remove('display-none');
      textarea.focus();
    });
  }

  function setTextareaHigh() {
    setInitialTextareaHeightByContent();
    textareaAutoHighResize();
  }

  function setInitialTextareaHeightByContent() {
    window.addEventListener('load', e => {
      textarea.style.height = `${textarea.scrollHeight}px`;
    });
  }

  function textareaAutoHighResize() {
    textarea.addEventListener('keyup', e => {
      textarea.style.height = '60px';
      let scHeight = e.target.scrollHeight;
      textarea.style.height = `${scHeight}px`;
    });
  }

  container.append(clone);
}
