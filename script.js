function go(name) {
    let last = 'a { body: blue; }';
    const sheet = new CSSStyleSheet();

    async function loop() {
        let next = await fetch(name, {cache: "no-store"});
        next = await next.text();
        if (next !== last) {
            console.log(next);
            await sheet.replace(next);
            last = next;
        }
        await new Promise(window.requestAnimationFrame);
    }

    async function run() {
        while (true) {
            await loop();
        }
    }

    run();

    return sheet;
}

document.adoptedStyleSheets = [
    go("./style.css"),
    go("./devbox.css"),
    go("./textbox.css"),
    go("./app_container.css"),
    go("./typography.css"),
];


for (let e of document.querySelectorAll('.growing-textbox')) {
    function f () {
        if (input.value == "") {
            span.innerText = " ";
            e.classList.remove("filled");
        } else {
            span.innerText = input.value;
            e.classList.add("filled");
        }
    }
    let input = e.querySelector('input');
    let span = e.querySelector('span');
    input.addEventListener('input', f);
    f ();
  console.log(e);
}
