export const setTheme = (theme: string) => {
  const bodyDOM = document.body;
  bodyDOM.setAttribute('chowderTheme', theme);
  localStorage.setItem('chowderTheme', theme);
}
