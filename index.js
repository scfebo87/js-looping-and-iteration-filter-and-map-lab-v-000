function driversWithRevenueOver(array, revenue) { 
  return array.filter(name => name.revenue > revenue); 
}
  
function driverNamesWithRevenueOver(array, revenue) { 
  const newArray = driversWithRevenueOver(array, revenue);
  return newArray.map(name => name.name);
}

function exactMatch(array, object) { 
  return array.filter(name => name[key] === object[key]);
}