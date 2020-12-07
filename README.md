# Kandidaatintyön visualisoinnit
Tässä repositoriossa on listattu syksyllä 2020 tekemäni tutkielman visualisointeihin käyttämäni työkalut ja lähdekoodit.

## [p5.js](https://p5js.org/)
Kansion [p5](./p5/) lähdekoodit voi ajaa osoitteessa [editor.p5js.org](https://editor.p5js.org/). Kopioi ensin tiedoston [yleinen-verkko.p5.js](./p5/yleinen-verkko.p5.js) sisältö editoriin, minkä jälkeen täydennä sopivat kohdat (`createCanvas`, `const nodes` sekä `const edges`) piirrettävän visualisoinnin tiedostosta.

## [D3.js](https://d3js.org/)
Tiedosto [force-directed-data.json](./d3/force-directed-data.json) sisältää datan, jonka avulla voidaan piirtää voimien avulla piirretty visualisointi. Data tulee syöttää sivun [https://observablehq.com/@d3/force-directed-graph](https://observablehq.com/@d3/force-directed-graph) kohtaan `data = FileAttachment("miserables.json").json()`, esimerkiksi muodossa
```javascript
data = JSON.parse(`<data>`);
```
jossa `<data>` on force-directed-data.json -tiedoston sisältö. Vaihtoehtoisesti alkuperäisen json-tiedoston voi myös korvata samasta kohdasta klikkaamalla paperiliittimen kuvaa ja lataamalla uuden json-tiedoston.

Tiedoston [color-example.json](./d3/color-example.json) piirtäminen tapahtuu samalla tavalla. Kandidaatintyössä nähtäviä versioita on muokattu [Figmalla](https://www.figma.com/). Käytetyt värit on saatu visualisointiin b VisiBlue-väripaletista (tuntematon tekijä) sekä visualisointeihin c ja d [Colorgorical](http://vrl.cs.brown.edu/color)-työkalulla (Gramazio, Laidlaw, ja Schloss 2016).

## Muut visualisoinnit
Kuva [tiedostoselain.svg](tiedostoselain.svg) on piirretty [Figma](https://www.figma.com/)-työkalulla.
