function start() {
  console.log('start');
  console.log(calculateTotalApartments(10, 10, 10));
}

function calculateTotalApartments(towers, floors, apartmentsByFloor) {
  return towers * floors * apartmentsByFloor;
}

start();
