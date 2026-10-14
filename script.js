window.onload = function () {
  var passed = localStorage.getItem('gatesPassed');

  if (passed === 'yes') {
    document.getElementById('gate1').classList.add('hidden');
    document.getElementById('site').classList.remove('hidden');
  }
};

function nextGate(num) {
  document.getElementById('gate' + num).classList.add('hidden');

  if (num < 3) {
    document.getElementById('gate' + (num + 1)).classList.remove('hidden');
  } else {
    localStorage.setItem('gatesPassed', 'yes');
    document.getElementById('site').classList.remove('hidden');
    document.getElementById('cards').scrollIntoView({ behavior: 'smooth' });
  }
}