import { watches } from '../data.js';
import { renderWatch } from '../render-utils.js';
import { findById } from '../utils.js';

const infoDiv = document.getElementById('info');

console.log('watches are here');
console.log(window.location.search);

const params = new URLSearchParams(window.location.search);
const id = params.get('id');

const findWatch = findById(id, watches);

const watchInfo = renderWatch(findWatch);
infoDiv.append(watchInfo);