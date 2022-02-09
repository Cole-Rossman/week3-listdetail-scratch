import { renderListItem } from '../render-utils.js';

const test = QUnit.test;

test('renderList item should render a div with watch details', (expect) => {
    const expected = `<a href="./watches/?id=5"><div class="watch"><img src="/assets/gs36000.png"><span class="name">HI-BEAT 36000</span><span class="manufacturer">Grand Seiko</span></div></a>`;

    const grandSeiko = {
        id: '5',
        name: 'HI-BEAT 36000',
        manufacturer: 'Grand Seiko',
        material: 'Stainless Steel',
        price: '$6,400',
    };
    const actual = renderListItem(grandSeiko);

    expect.equal(actual.outerHTML, expected);
});
