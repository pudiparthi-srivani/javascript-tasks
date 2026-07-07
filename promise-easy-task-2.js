async function sleep(millis) {
    return new Promise(resolve => setTimeout(resolve, millis));
    
}
// let millis = 100;
// let t = Date.now();
// sleep(100).then(() => {
//   console.log(Date.now() - t); 
// });

let millis = 200;
let t = Date.now();
sleep(200).then(() => {
  console.log(Date.now() - t); 
});