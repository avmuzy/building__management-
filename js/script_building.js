function calculateTotalApartments() {
  var tn1 = window.document.getElementById('input-towers');
  var tn2 = window.document.getElementById('input-floors');
  var tn3 = window.document.getElementById('input-apartments-by-floor');
  var res = window.document.getElementById('total-apartments');
  var n1 = Number(tn1.value);
  var n2 = Number(tn2.value);
  var n3 = Number(tn3.value);
  var c = n1 * n2 * n3;
  res.innerHTML = 'Total apartments ${c}';
}
