

// setup
var width = window.innerWidth
var height = window.innerHeight
var main = document.getElementById('container')


Object.keys(users).forEach(key => {
    // console.info(key);
    // console.log(users[key]);
    // console.log(users[key]["name"]);
    // console.log(users[key]["handle"]);

    createIcon(users[key]["name"], users[key]["handle"])
});


function createIcon(name, handle) {
	var name = name
	var handle = handle
	var avi = `avis/${handle}.png`


  var link = document.createElement('a');
  link.setAttribute('href', `https://twitter.com/${handle}`);

  var ele = document.createElement('img');
	ele.setAttribute('src', avi);
	ele.setAttribute('class', 'avi-style');

  // add link
  main.appendChild(link)
  link.appendChild(ele);

}
