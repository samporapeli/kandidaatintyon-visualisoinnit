# Kandidaatintyön visualisoinnit
Tässä repositoriossa on listattu syksyllä 2020 tekemäni tutkielman visualisointeihin käyttämäni työkalut ja lähdekoodit.

## [p5.js](https://p5js.org/)
Kansion [p5](./p5/) lähdekoodit voi ajaa osoitteessa [editor.p5js.org](https://editor.p5js.org/). Kopioi ensin tiedoston [yleinen-verkko.p5.js](./p5/yleinen-verkko.p5.js) sisältö editoriin, minkä jälkeen täydennä sopivat kohdat (`createCanvas`, `const nodes` sekä `const edges`) piirrettävän visualisoinnin tiedostosta.

## [D3.js](https://d3js.org/)
Tiedosto [force-directed-data.json](./d3/force-directed-data.json) sisältää datan, jonka avulla voidaan piirtää voimien avulla piirretty visualisointi. Data tulee syöttää sivun [https://observablehq.com/@d3/force-directed-graph](https://observablehq.com/@d3/force-directed-graph) kohtaan `data = FileAttachment("miserables.json").json()`, esimerkiksi muodossa
```javascript
data = JSON.parse(`<data>`);
```
jossa `<data>` on force-directed-data.json -tiedoston sisältö.

## Muut visualisoinnit
Kuva [tiedostoselain.svg](tiedostoselain.svg) on piirretty [Figma](https://www.figma.com/)-työkalulla.
