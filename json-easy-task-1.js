var isEmpty = function(obj) {
  for (var key in obj) {
    if (obj.hasOwnProperty(key)) {
      return false;
    }
  } 
     return true;
};
 const obj = {"x": 5, "y": 42};
 const obj2 = {};
 console.log(isEmpty(obj)); 

 const obj3 = {};
 console.log(isEmpty(obj3));

 const obj4 = [null, false, 0];
 console.log(isEmpty(obj4));