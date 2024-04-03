const input= document.querySelector<HTMLInputElement>("#input")!;

const placeError = (input: HTMLInputElement, message?: string): void => {
  input.blur();
  if(!input.classList.contains("error"))
    input.classList.add("error");
  const inputLabel = input.closest(".input-container")?.querySelector<HTMLSpanElement>(".label-content")!;
  if(!inputLabel.classList.contains("error"))
    inputLabel.classList.add("error");
  if(message) inputLabel.innerText = message;
}

const form = document.querySelector(".form");
form?.addEventListener("submit", (e) => {
  e.preventDefault();
  placeError(input, input.value)
})