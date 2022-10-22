const root = document.getElementById('root');

for(let i = 0; i < 10; i++){
    let element = document.createElement('p');
    element.innerHTML = 'Abstract #' + i.toString();
    root.appendChild(element);
}