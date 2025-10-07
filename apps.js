// JavaScript version of your Python class
class House {
  constructor(a = 'daniel', b = 29, c = 'mechanical engineer', d = 300, e = 'COLENG') {
    this.a = a;
    this.b = Number.isNaN(Number(b)) ? b : Number(b);
    this.c = c;
    this.d = Number.isNaN(Number(d)) ? d : Number(d);
    this.e = e;
  }

  // Mirrors Python's f1() prints
  f1() {
    return [
      hello my name is: ${this.a},
      I am: ${this.b},
      I am a: ${this.c},
      I am in: ${this.d},
      I am in: ${this.e},
    ];
  }
}

// Helpers to update the UI
function setOutputs(p) {
  document.getElementById('out-a').textContent = p.a;
  document.getElementById('out-b').textContent = p.b;
  document.getElementById('out-c').textContent = p.c;
  document.getElementById('out-d').textContent = p.d;
  document.getElementById('out-e').textContent = p.e;

  const f1Lines = p.f1();
  document.getElementById('out-f1').textContent = f1Lines.join('\n');

  // "Console" area to mimic your Python prints
  const consoleEl = document.getElementById('console');
  const printed = [
    p.a,
    p.b,
    p.c,
    p.d,
    p.e,
    ...f1Lines,
  ].join('\n');
  consoleEl.textContent = printed;
}

function fillDefaults() {
  document.getElementById('a').value = 'daniel';
  document.getElementById('b').value = '29';
  document.getElementById('c').value = 'mechanical engineer';
  document.getElementById('d').value = '300';
  document.getElementById('e').value = 'COLENG';
}

document.addEventListener('DOMContentLoaded', () => {
  // Seed with defaults and render one object at load
  fillDefaults();
  const initial = new House();
  setOutputs(initial);

  // Form submit → create object and render
  const form = document.getElementById('house-form');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const a = document.getElementById('a').value || 'daniel';
    const b = document.getElementById('b').value || 29;
    const c = document.getElementById('c').value || 'mechanical engineer';
    const d = document.getElementById('d').value || 300;
    const eVal = document.getElementById('e').value || 'COLENG';

    const p = new House(a, b, c, d, eVal);
    setOutputs(p);
  });

  document.getElementById('use-defaults').addEventListener('click', () => {
    fillDefaults();
  });

  document.getElementById('clear-output').addEventListener('click', () => {
    ['out-a','out-b','out-c','out-d','out-e','out-f1','console'].forEach(id => {
      const el = document.getElementById(id);
      el.textContent = id === 'console' ? '' : '—';
    });
  });
});
