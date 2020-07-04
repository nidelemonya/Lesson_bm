function alphabetPosition(text) {
    return text.split("").filter((e) => {
        // console.log(e);
         return e.match(/^[a-zA-Z]$/);
    }).map(m => m.toLowerCase().charCodeAt(0) - 96).join(" ");
}

console.log(alphabetPosition("The sunset sets at twelve o' clock."));