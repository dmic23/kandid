Parse.initialize("xSiBgaOaMjITtQkGrxR2okOU79j3rO1LVTaD8JGF", "5FPajyGf1LJkkbBpuaQvH0rEEDv8eBombFtLZpFE");

var KandidColl = Parse.Collection.extend({ model: Kandid });
	//comparator: '', 
	//url: '/kandids'
var testKan = new Kandid();
console.log(testKan);

var kanLength = new KandidColl();
kanLength.fetch({
  success: function(collection) {
  	console.log(collection);
    kanLength.each(function(object) {
      console.log(object);
    });
  },
  error: function(collection, error) {
    alert("The collection could not be retrieved.");
  }

});