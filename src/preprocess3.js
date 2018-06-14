const FILEIN = 'texts/weir.txt';
const FILEOUT = 'public/temptext3.txt';

var fs = require('fs');
var text = fs.readFileSync(FILEIN).toString();

var syllable = require('syllable');

var textarray = text.split('\n')
// log(textarray)

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
        datadict['data-z'] = 77;
        datadict['data-autoplay'] = 2;

        classes += 'tagtitle';
    } else if (i===1) {
        datadict['data-x'] = 5;
        datadict['data-y'] = 150;

        datadict['data-scale'] = 2.5;
        datadict['data-autoplay'] = 2;
        datadict['data-z'] = 44;

        classes += 'tagtitle';
    } else {
        datadict['data-x'] = Math.pow(-1, i) * 200;
        datadict['data-y'] = i * 230;

        // datadict['data-rotate-x'] = i * 5;
        datadict['data-rotate-y'] = Math.pow(-1, i+1) * 7;

        datadict['data-scale'] = 1;
        // datadict['data-z'] = -i*500;
        datadict['data-autoplay'] = sec;
        datadict['data-transition-duration'] = 1200;

        if (line.length > 80)
            classes += 'lotsoftext';
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
    const SECONDSPERSYLLABLE = .05;
    var out = Math.max(SECONDSPERSYLLABLE * syllable(content), 1);
    return Math.round(out * 100) / 100;
}

function log(x) {
    console.log(x)
}
