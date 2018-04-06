# Politweets riktlinjer för kod

[TOC]



### Gemensamma regler för samtliga språk

* Indentering görs med tabbar, ej mellanslag.
* Teckenkodning på samtliga dokument skall vara UTF-8.
* Filnamn får enbart ha små bokstäver och flera ord separeras med understreck.
* Tomma rader får ej innehålla mellanslag.
* Det får inte finnas mellanslag i slutet av kodrader.
* Kommentarer i koden skall sträva mot att beskriva **syftet** med kodbiten.



### JavaScript

#### Allmänna regler

* En indentering är en tab.
* En tab-size är 2 spaces.
* Alla kodfiler med JavaScript skall ha filändelsen `.js`.
* Vid komparation använd **alltid** `===` - **aldrig** `==`.



##### Variabler

Använd alltid `const` eller `let` för att deklarera variabler. Använd `const` som standard såvida datan i variabeln inte behöver förändras - då används `let`.
`var` får ej användas.

#### Namn

##### Variabler

Variabler skrivs i camelcase. Börjar med liten bokstav och mer än ett ord separeras med stor bokstav.

```javascript
// Rätt
const variabel = "ja tack";
const variabelNamn = "ja tack";

// Fel
const variabelnamn = "nej tack";
```



##### Funktioner

Funktioner skrivs i camelcase. Börjar med liten bokstav och mer än ett ord separeras med stor bokstav.

```javascript
// Rätt
function funky() {
	...
}

function funkyFunction() {
	...
}

// Fel
function funkyfunction() {
	...
}
```



#### Formattering

##### Allmänt

* Strängar anges med `""` och inte `''`.



##### Variabler

Variabler deklareras med ett mellanslag före och efter `=`.

```javascript
// Rätt
const poli = "tweet";

// Fel
const poli="tweet";
```



##### Funktioner

Kod som körs i funktioner skall börja indenterat på raden under funktionsdeklarationen och avslutande curly-bracket skall vara på en egen rad.

```javascript
// Rätt
function funkyFunction() {
	...
}

// Fel
function funkyFunction() {...}
```



##### Operationer

Mellanrum skall finnas före och efter operanden.

```javascript
// Rätt
x = 5 * 1;
```



##### Arrays

När man anger värden till en array skall det göras med ett komma och mellanslag efter.

```javascript
// Rätt
politiker = ["Bildt", "Putin", "EBThor"];
```



##### Objekt

Objekts egenskaper skrivs indenterat och max en egenskap per rad.

```javascript
// Fel
const obj {
id: 1,name: "Stockholm", isGreat: false}

// Rätt
const obj {
	id: 2,
	name: "Göteborg",
	isGreat: true
}
```



##### Kommentarer

* Använd `/** … **/` för multi-line kommentarer. Kommentaren skall omfamnas av `/** … **/`.

```javascript
// Rätt
/**
Såhär
skriver man
kommentarer på flera
rader
**/

// Fel
/** Skriv ej såhär **/

// Fel
// Såhär
// skriver man absolut
// inte kommentarer
// på flera rader
```

* Använd `//…` för singel-line kommentarer

```javascript
// Rätt
// Do I love hummus?
const iLoveHummus = true;

// Fel
const iLoveHummus = true; // Do I love hummus?
```





### React
