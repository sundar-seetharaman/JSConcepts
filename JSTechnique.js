/*Array unique */
const array = [1, 3, 4, 1, 5, 3, 4, 1, 3, 1, 7, 6];
// const uniqueVal=array.filter((item,ind)=>{
//     return array.indexOf(item) === ind;
// });

const uniqueVal = [...new Set(array)];

console.log(uniqueVal);

/*[Nullish Coalescing - ?? Default Value], [Consle log customization] */
const calulatePrice = (price, taxes, desc) => {
  taxes = taxes ?? 0.05;
  desc = desc ?? "Default Item";
  const total = price * (1 + taxes);

  console.log(
    `%c${desc} with Tax:%c $${total}`,
    "color:red",
    "font-weight:bold;color:green"
  );
};

calulatePrice(110, 0.07, "firstItem");
calulatePrice(110, null, "firstItem");
calulatePrice(110, 0, null);

/*Optional Chaining - ?. */
class Person {
  constructor(name, address, hobbies) {
    this.name = name;
    this.address = address;
    this.hobbies = hobbies;
  }

  print() {
    console.log(this);
  }
}

printPersonStree = (person) => {
  console.log(person?.address?.street);
};

const sundar = new Person(
  "Sundar",
  { street: "some st name", city: "Madurai" },
  ["Coding", "Cricket"]
);

sundar.print();

printPersonStree(sundar);

console.log(sundar.hobbies?.[0]);

/*Object Shorthand - If both variables are same use only one to assign value */
const name = "Sundar";
const fav = "Cricket";

// const pandian = {
//   name: name,
//   fav: fav,
// };
// instead of above we can do below
const pandian = {
  name,
  fav,
};

console.log(pandian);
