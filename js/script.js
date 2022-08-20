function start() {
  var buttonCalculateTotalApartments = document.querySelector(
    '#button-calculate-total-apartments'
  );
  buttonCalculateTotalApartments.addEventListener('click', handleButtonClick);

  var inputTowers = document.querySelector('#input-towers');
  var inputFloors = document.querySelector('#input-floors');
  var inputApartmentsByFloor = document.querySelector(
    '#input-apartments-by-floor'
  );
  inputTowers.addEventListener('input', handleButtonClick);
  inputFloors.addEventListener('input', handleButtonClick);
  inputApartmentsByFloor.addEventListener('input', handleButtonClick);

  handleButtonClick();
}

function calculateTotalApartments(towers, floors, apartmentsByFloor) {
  return towers * floors * apartmentsByFloor;
}

function handleButtonClick() {
  var inputTowers = documnt.querySelector('#input-towers');
  var inputFloors = documnt.querySelector('#input-floors');
  var inputApartmentsByFloor = documnt.querySelector(
    '#input-apartments-by-floor'
  );
  var totalApartments = document.querySelector('#total-apartments');

  var towers = Number(inputTowers.value);
  var floors = Number(inputFloors.value);
  var apartmentsByFloor = Number(inputApartmentsByFloor.value);

  var totalApartments = calculateTotalApartments(
    towers,
    floors,
    apartmentsByFloor
  );
}

start();
