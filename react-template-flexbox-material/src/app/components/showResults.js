import download from 'downloadjs';

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

export default (async function showResults(values) {
  await sleep(500); // simulate server latency
  console.log(values);
  /*var main_result = {JSON.stringify(values, null, 2)};
  var res = main_result.split(":");
  console.log(res);*/

  download(`Email = ${values.email}\n\n 
			Password = ${values.password}\n\n
			Gender = ${values.gender}\n\n
  			Birthday = ${values.date}/${values.month}/${values.year}`, "signup.txt", "text/plain");
});
