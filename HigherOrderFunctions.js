const companies = [
  { name: "companyOne", category: "Finance", start: 1981, end: 2003 },
  { name: "companyTwo", category: "Retail", start: 1962, end: 2012 },
  { name: "companyThree", category: "Auto", start: 1971, end: 2000 },
  { name: "companyFour", category: "Technology", start: 1951, end: 1981 },
  { name: "companyFive", category: "Finance", start: 1941, end: 2004 },
  { name: "companySix", category: "Retail", start: 1941, end: 2004 },
  { name: "companySeven", category: "Auto", start: 1941, end: 2004 },
  { name: "companyEight", category: "Retail", start: 1941, end: 2004 },
];

const ages = [33, 45, 57, 85, 65, 23, 41, 25, 14, 35, 65];

//   for (let i = 0; i < companies.length; i++) {
//       console.log(companies[i]);
//   };

//   companies.forEach(i => {
//       console.log(i.name)
//   });

//  Get 35 and older
// const canDrink = ages.filter((i) => {
//   if (i >= 35) {
//     return true;
//   }
// });

// const canDrink = ages.filter((i) => i >= 35);
// console.log(canDrink);

// const retailCompanies = companies.filter(
//   (company) => company.category === "Retail"
// );
// console.log(retailCompanies);

const companyNames = companies.map(function (company) {
  return company.name;
});
console.log(companyNames);

//   const testMap = companies.map(
//     (company) =>
//       `${company.name} [starting year ${company.start} - ending year ${company.end}]`
//   );
//   console.log(testMap);

const sortedCompanies = companies.sort((a, b) => (a.start > b.start ? 1 : -1));
console.log(sortedCompanies);
