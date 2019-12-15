function main() {
  const createElement = elName => document.createElement(elName);
  const selectTagEvents = document.querySelector("#events-select");

  const windowEvents = Object.keys(window)
    .reduce((acc, cur) => {
      if (cur.toString().startsWith("on")) {
        acc.push(cur.replace("on", ""));
      }

      return acc;
    }, [])
    .sort();

  windowEvents.forEach((eventName, i) => {
    const currentFirstLetter = eventName.charAt(0);
    const lastFirstLetter =
      windowEvents[i - 1] && windowEvents[i - 1].charAt(0);

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

  const elements = [
    "div",
    "section",
    "p",
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "ol",
    "ul",
    "li",
    "strong",
    "em",
    "br",
    "input",
    "label",
    "textarea",
    "img",
    "video",
    "svg",
    "g",
    "path",
    "circle",
    "rect"
  ];

  // const res = elements.reduce((cur, acc) => {
  // 	acc.push({ [`create${cur}`]: () => createElement(cur) });
  // 	// acc[`cur`] = () => createElement(cur);
  // 	return acc;
  // }, []);

  // console.log(res)
}

main();
