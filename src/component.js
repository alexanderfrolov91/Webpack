export default (text = "тра-та-та") => {
  const element = document.createElement("p");

  element.innerHTML = text;

  return element;
};