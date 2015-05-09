(function(ext) {
    
    // Cleanup function when the extension is unloaded
    ext._shutdown = function() {};

    // Status reporting code
    // Use this to report missing hardware, plugin or unsupported browser
    ext._getStatus = function() {
        return {status: 2, msg: 'Ready'};
    };
    
    ext.grab = function(name, id, callback){
		$.getJSON('https://scratch.mit.edu/varserver/' + id, function(json){
			for (var i=0; i<json['variables'].length; i++){
				if (json['variables'][i]['name'] == "☁" + name){
					callback(json['variables'][i]["value"]);
				}
			}
		
		});
	};
    // Block and block menu descriptions
    var descriptor = {
        blocks: [
            ['R', 'variable %s from project ID %n', 'grab'],
        ],
        url: 'http://technoboy10.tk/'
    };


    // Register the extension
    ScratchExtensions.register('Cloud Data', descriptor, ext);
})({});
