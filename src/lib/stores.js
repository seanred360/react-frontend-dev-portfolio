import { writable } from "svelte/store";

function createScrollLock(initState) {
  const { subscribe, update } = writable(initState);

  return {
    subscribe,
    toggle: () => {
      update((state) => !state);
      document.body.classList.toggle("scroll-lock");
      umami.track("toggle_scrollLock");
    },
  };
}

function createLanguage(initState) {
  const { subscribe, set } = writable(initState);

  return {
    subscribe,
    set: (newValue) => {
      set(newValue);
      umami.track(`change_language_${newValue}`);
    },
  };
}

export const currentLanguage = createLanguage("en");
export const scrollLock = createScrollLock(false);
export const modalProps = writable(null);
export const modalType = writable(null);
