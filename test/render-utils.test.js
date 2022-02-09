import { renderListItem, renderWatch } from '../render-utils.js';

const test = QUnit.test;

test('renderListItem should render a div with watch details', (expect) => {
    const expected = `<a href="./watches/?id=5"><div class="watch"><img src="/assets/gs36000.png"><span class="name">HI-BEAT 36000</span><span class="manufacturer">Grand Seiko</span></div></a>`;

    const grandSeiko = {
        id: '5',
        name: 'HI-BEAT 36000',
        manufacturer: 'Grand Seiko',
        material: 'Stainless Steel',
        price: '$6,400',
        image: 'gs36000',
    };
    const actual = renderListItem(grandSeiko);

    expect.equal(actual.outerHTML, expected);
});

test('renderWatch should render a div with extended watch details', (expect) => {
    const expected = `<div class="watch"><img src="/assets/gs36000.png"><p class="name">HI-BEAT 36000</p><p class="manufacturer">Grand Seiko</p><p class="material">Stainless Steel</p><p class="price">$6,400</p></div>`;

    const grandSeiko = {
        id: '5',
        name: 'HI-BEAT 36000',
        manufacturer: 'Grand Seiko',
        material: 'Stainless Steel',
        price: '$6,400',
        image: 'gs36000',
    };
    const actual = renderWatch(grandSeiko);

    expect.equal(actual.outerHTML, expected);
});