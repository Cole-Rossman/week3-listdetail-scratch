export function renderListItem(watch) {
    const div = document.createElement('div');
    div.classList.add('watch');
    
    const img = document.createElement('img');
    img.src = `/assets/${watch.image}.png`;
    
    const nameSpan = document.createElement('span');
    nameSpan.textContent = watch.name;
    nameSpan.classList.add('name');

    const manufacturerSpan = document.createElement('span');
    manufacturerSpan.textContent = watch.manufacturer;
    manufacturerSpan.classList.add('manufacturer');

    div.append(img, nameSpan, manufacturerSpan);

    const a = document.createElement('a');
    a.href = `./watches/?id=${watch.id}`;
    a.append(div);
    return a;

}

export function renderWatch(watch) {
    const div = document.createElement('div');
    div.classList.add('watch');
    
    const img = document.createElement('img');
    img.src = `/assets/${watch.image}.png`;
    
    const nameP = document.createElement('p');
    nameP.textContent = watch.name;
    nameP.classList.add('name');

    const manufacturerP = document.createElement('p');
    manufacturerP.textContent = watch.manufacturer;
    manufacturerP.classList.add('manufacturer');

    const materialP = document.createElement('p');
    materialP.textContent = watch.material;
    materialP.classList.add('material');

    const priceP = document.createElement('p');
    priceP.textContent = watch.price;
    priceP.classList.add('price');

    div.append(img, nameP, manufacturerP, materialP, priceP);
    return div;
}