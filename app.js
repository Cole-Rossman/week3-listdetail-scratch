import { watches } from './data.js';
import { renderListItem } from './render-utils.js';

const ul = document.getElementById('watches-list');

for (let watch of watches) {
    const watchDiv = renderListItem(watch);
    ul.append(watchDiv);
}