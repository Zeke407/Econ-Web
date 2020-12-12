var button = document
  .getElementById('button')
  .addEventListener('click', buttonClick);

function buttonClick() {
  var x = 3;
  var select = document.getElementById('select').value;
  console.log(select);
  var Qi = parseFloat(document.getElementById('Qi').value);
  var Pi = parseFloat(document.getElementById('Pi').value);
  var Pn = parseFloat(document.getElementById('Pn').value);
  var E = parseFloat(document.getElementById('E').value);
  var x = parseFloat(document.getElementById('X').value);
  var output = document.getElementById('output');
  if (select === 'QDn' && Qi > 0 && Pi > 0 && Pn > 0 && E > 0) {
    var Qn = ((E * (Pi - Pn)) / Pi) * Qi + Qi;
    var Ri = Qi.toFixed(0) * Pi;
    var Rn = Qn.toFixed(0) * Pn;
    output.innerHTML = `<div class="outputBox">
  <div class="output">QDn New = ${Qn.toFixed(x)}<br/>
  Ri = $${Ri.toFixed(x)}<br/>
  Rn = $${Rn.toFixed(x)}<br/>
  Net Change = $${Rn.toFixed(x) - Ri.toFixed(x)}
  </div>
  </div>
  <div class="outputBox">
  <div class="output">Equation Used <br/>QDn = ((E * (Pi - Pn)) / Pi) * QDi + QDi</div>
  </div> `;
    var Qi = 0;
    var Pi = 0;
    var Pn = 0;
    var E = 0;
    var x = 0;
  } else if (select === 'QSn' && Qi > 0 && Pi > 0 && Pn > 0 && E > 0) {
    var Qn = -1 * (((E * (Pi - Pn)) / Pi) * Qi - Qi);
    var Ri = Qi.toFixed(0) * Pi;
    var Rn = Qn.toFixed(0) * Pn;
    output.innerHTML = `<div class="outputBox">
  <div class="output">QSn New = ${Qn.toFixed(x)}<br/>
  Ri = $${Ri.toFixed(x)}<br/>
  Rn = $${Rn.toFixed(x)}<br/>
  Net Change = $${Rn.toFixed(x) - Ri.toFixed(x)}
  </div>
  </div>
  <div class="outputBox">
  <div class="output">Equation Used <br/>QSn = -1 * (((E * (Pi - Pn)) / Pi) * QSi - QSi)</div>
  </div> `;
    var Qi = 0;
    var Pi = 0;
    var Pn = 0;
    var E = 0;
    var x = 0;
  } else {
    alert('Error, parameters not full.');
    var Qi = 0;
    var Pi = 0;
    var Pn = 0;
    var E = 0;
    var x = 0;
  }
  console.log(`${Qn}`);
}

function clearBox(elementID) {
  var div = (document.getElementById(elementID).innerHTML = '');
}
