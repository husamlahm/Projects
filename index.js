function main() {
  const createElement = elName => document.createElement(elName);
  const selectTagEvents = document.querySelector("#events-select");

  const events = Object.keys(window)
    .filter(a => a.startsWith("on"))
    .map(event => (event = event.replace("on", "")))
    .sort(); // All events in `winodw`

  events.forEach((eventName, i) => {
    const currentFirstLetter = eventName.charAt(0);
    const lastFirstLetter = events[i - 1] && events[i - 1].charAt(0);

    const option = createElement("option");
    option.setAttribute("value", eventName);

    const divider = createElement("option");

    if (
      (lastFirstLetter && currentFirstLetter !== lastFirstLetter) ||
      i === 0
    ) {
      divider.innerText = currentFirstLetter.toUpperCase();
      divider.setAttribute("disabled", true);
      divider.classList.add("events-list-letter-divider");
      selectTagEvents.appendChild(divider);
    }

    option.innerText = eventName;
    selectTagEvents.appendChild(option);
  });
  console.log(selectTagEvents.children.length);

  // const elements = ['div', 'section', 'p', 'h1', 'h2', 'h3', 'h4', 'h5', 'ol', 'ul', 'li', 'strong', 'em', 'input', 'label', 'textarea', 'img', 'video', 'svg', 'g', 'path', 'circle', 'rect'];

  // const res = elements.reduce((cur, acc) => {
  // 	acc.push({ [`create${cur}`]: () => createElement(cur) });
  // 	// acc[`cur`] = () => createElement(cur);
  // 	return acc;
  // }, []);

  // console.log(res)
}

main();
