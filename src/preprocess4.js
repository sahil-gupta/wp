const FILEIN = 'texts/obama.txt';
const FILEOUT = 'public/temptext4.txt';

var fs = require('fs');
var text = fs.readFileSync(FILEIN).toString();

var syllable = require('syllable');

var arr1 = text.split('\n');
var textarrayPre = [];
for (var i = 0; i < arr1.length; i++) {
    var arr2 = arr1[i].split(' — ');
    for (var j = 0; j < arr2.length; j++) {
        var arr3 = arr2[j].split('. ');
        textarrayPre = textarrayPre.concat(arr3);
    }
}

var textarray = [];
for (var i = 0; i < textarrayPre.length; i++) {
    var line = textarrayPre[i];
    if (line !== '' && line !== '—') {
        textarray.push(line);
    }
}

// log(textarray);

outputstring = '';

for (var i = 0; i < textarray.length; i++) {
    var line = textarray[i];
    var sec = calcContentSeconds(line);

    var classes = '';
    var datadict = {};

    if (i===0) {
        datadict['data-x'] = 0;
        datadict['data-y'] = 0;

        datadict['data-scale'] = 3;
        datadict['data-z'] = 55;
        datadict['data-autoplay'] = 1;

        classes += 'tagtitle';
    } else if (i===1) {
        datadict['data-x'] = 5;
        datadict['data-y'] = 100;

        datadict['data-scale'] = 2;
        datadict['data-autoplay'] = 1;
        datadict['data-z'] = 22;

        classes += 'tagtitle';
    } else {
        datadict['data-x'] = i*100;
        datadict['data-y'] = i * -130;
        datadict['data-z'] = i * 300;

        // datadict['data-rotate-x'] = i * .5;
        // datadict['data-rotate-y'] = Math.pow(-1, i+1) * 7;

        datadict['data-scale'] = 1;
        // datadict['data-z'] = -i*500;
        datadict['data-autoplay'] = sec;
        datadict['data-transition-duration'] = 500;

        if (line.length > 80)
            classes += 'fontA';
        else if (line.length > 120)
            classes += 'fontB';
    }

    var thing = createStep(line, classes, datadict)

    outputstring += thing;
}

outputstring += getLastStep();

fs.writeFile(FILEOUT, outputstring, (err) => {
  if (err) throw err;
  console.log('file saved.');
});









////////////////

function getLastStep() {
    return `
        <div id="overview" class="step stop" data-x="0" data-y="0" data-z="0" data-scale="3">
        </div>
    `;
}

function createStep(line, classes, datadict) {
    var datadictstring = ''
    Object.keys(datadict).forEach((key) => {
        datadictstring += key + '=\"' + datadict[key] + '\" ';
    });

    var markup = `
     <div class="step ${classes}" ${datadictstring}>
        <p>
            ${line}
        </p>
     </div>
    `;
    return markup
}

function calcContentSeconds(content) {
    const SECONDSPERSYLLABLE = .08;
    var out = Math.max(SECONDSPERSYLLABLE * syllable(content), .3);
    return Math.round(out * 100) / 100;
}

function log(x) {
    console.log(x)
}
