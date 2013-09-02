'use strict';

function myFunction()
{
  var tanayData = $('#tanay img').attr('src');
  var input = document.getElementById('name'),
        name = input.value;
		
var data = {};
		
$.each($('.match'), function(index, item) {
    var n = $(item).attr('id');
	var v = $('#' + n + ' img').attr('src');
	data[n]=v;
});

data['player']=name;
		
$.post('/photos',data, function(response) {

alert("Thanks for playing!");
window.location.replace("http://www.electric-cloud.com/blog/");
});

}