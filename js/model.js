// used to create new users
function User(name) {
  this.name = name;
  this.walkDist = 0.00;
  this.runDist = 0.00;
  this.bikeDist = 0.00;
  this.currentTrek = null;
  this.completedTreks = [];
};
// testing user creation
var user1 = new User('Dylan');

// used to create new treks
function Trek() {
  // placeholder until trek is ready to be created
};