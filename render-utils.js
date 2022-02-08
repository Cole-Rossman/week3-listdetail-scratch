export function renderListItem(watch) {
    const div = document.createElement('div');
    div.classList.add('watch');
    
    const img = document.createElement('img');
    img.src = `/assets/${watch.type}.png`;
    
    const nameP = document.createElement('p');
    nameP.textContent = watch.name;
    nameP.classList.add('name');

    const manufacturerP = document.createElement('p');
    manufacturerP.textContent = watch.make;
    manufacturerP.classList.add('manufacturer');

    const materialP = document.createElement('p');
    materialP.textContent = watch.material;
    materialP.classList.add('material');

    const priceP = document.createElement('p');
    priceP.textContent = watch.price;
    priceP.classList.add('price');

    div.append(img, nameP, manufacturerP, materialP, priceP);

    const a = document.createElement('a');
    a.href = `./watches/?id=${watch.id}`;
    a.append(div);
    return a;


}