const updateHashUrl = (hash: string) => {
  if (window.history.pushState) {
    window.history.pushState(null, "", `#${hash}`);
  } else {
    window.location.hash = `#${hash}`;
  }
};

export { updateHashUrl };
