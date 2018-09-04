/*Nicky Devilee
Bol4 applicatieontwikkelaar*/
const welkom = 'Laten we gaan rekenen.';
document.write( welkom + '<br>');
var vraag = prompt('Voer een getal in');
var x = 3;
var een = 1;
var twee = 2;
var drie = 3;
var vier = 4;
var vijf = 5;
var zes = 6;
var zeven = 7;
var acht = 8;
var negen = 9;
var tien = 10;
var twaalf = 12;
var EEN = x * een;
var TWEE = x * twee;
var DRIE = x * drie;
var VIER = x * vier;
var VIJF = x * vijf;
var ZES = x * zes;
var ZEVEN = x * zeven;
var ACHT = x * acht;
var NEGEN = x * negen;
var TIEN = x * tien;

document.write('<br>' + '1 X ' + x + ' = ' + EEN + '<br>')
document.write('2 X ' + x + ' = ' + TWEE + '<br>')
document.write('3 X ' + x + ' = ' + DRIE + '<br>')
document.write('4 X ' + x + ' = ' + VIER + '<br>')
document.write('5 X ' + x + ' = ' + VIJF + '<br>')
document.write('6 X ' + x + ' = ' + ZES + '<br>')
document.write('7 X ' + x + ' = ' + ZEVEN + '<br>')
document.write('8 X ' + x + ' = ' + ACHT + '<br>')
document.write('9 X ' + x + ' = ' + NEGEN + '<br>')
document.write('10 X ' + x + ' = ' + TIEN + '<br>')

var Een = twaalf + zes;
var Twee = Een * tien;
var Drie = Twee / vijf;
var Vier = Drie - twaalf;

document.write('<br>' + '12 + 6 = ' + Een + '<br>');
document.write(Een + ' * 10 = ' + Twee + '<br>');
document.write(Twee + ' / 5 = ' + Drie + '<br>');
document.write(Drie + ' - 12 = ' + Vier + '<br>');

var EEn = Number(vraag) + zes;
var TWee = EEn * tien;
var DRie = TWee / vijf;
var VIer = DRie - twaalf;

document.write('<br>' + vraag + ' + 6 = ' + EEn + '<br>');
document.write(EEn + ' * 10 = ' + TWee + '<br>');
document.write(TWee + ' / 5 = ' + DRie + '<br>');
document.write(DRie + ' - 12 = ' + VIer + '<br>');