const planRadios = document.querySelectorAll('input[name="units"]');
const planBlocks = document.querySelectorAll('.plan');
const totalSpan = document.getElementById('totalAmount');
const addButton = document.getElementById('addToCartBtn');

function updateTotal() {
  const selected = document.querySelector('input[name="units"]:checked');
  const amount = Number(selected.dataset.total || 0).toFixed(2);
  totalSpan.textContent = `$${amount} USD`;
}

function setActivePlan() {
  planBlocks.forEach(plan => plan.classList.remove('active'));
  const checked = document.querySelector('input[name="units"]:checked');
  if (checked) {
    const parent = checked.closest('.plan');
    parent.classList.add('active');
  }
  updateTotal();
}

planRadios.forEach(radio => {
  radio.addEventListener('change', setActivePlan);
});

addButton.addEventListener('click', () => {
  const selected = document.querySelector('input[name="units"]:checked');
  alert(`Added plan: ${selected.value} Unit(s) – ${totalSpan.textContent}`);
});

setActivePlan();
