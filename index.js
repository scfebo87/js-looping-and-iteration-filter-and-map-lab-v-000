function driversWithRevenueOver(array, revenue) { 
  return array.filter(name => name.revenue > revenue); 
}
  
function driverNamesWithRevenueOver(array, revue) { 
  return array.map(name => name.revenue > revenue);
}