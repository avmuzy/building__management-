function calculateTotalApartments() {
  var tn1 = window.document.getElementById('input-towers');
  var tn2 = window.document.getElementById('input-floors');
  var tn3 = window.document.getElementById('input-apartments-by-floor');
  var res = window.document.getElementById('total-apartments');
  var n1 = Number(tn1.value);
  var n2 = Number(tn2.value);
  var n3 = Number(tn3.value);
  var c = n1 * n2 * n3;
  res.innerHTML = `Total apartments ${c}`;
}

function calculateTax() {
  var revn1 = window.document.getElementById('monthRevenue');
  var revn2 = window.document.getElementById('taxes');
  var resrev = window.document.getElementById('revRes');
  var rev1 = Number(revn1.value);
  var rev2 = Number(revn2.value);
  var revtot = (rev1 + rev2) * 12;
  var revmonth = rev1 + rev2;
  monRev.innerHTML = `Monthly revnue : ${revmonth}`;
  revRes.innerHTML = ` Annual revenue: ${revtot}`;
}
