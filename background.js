var google = "play.google.com/music";
var spotify = "open.spotify.com";

if(window.location.href.indexOf(google) !== -1) {
	chrome.storage.sync.set({ "goToGoogleMusic": null }, function() {
		setInterval(function() {
			chrome.storage.sync.get(['goToGoogleMusic'], function(result) {
				if(result.goToGoogleMusic != null) {
					chrome.storage.sync.set({ "goToGoogleMusic": null }, function() {
						window.location = result.goToGoogleMusic;		
					});
				}			
			});
		}, 1000);
	});
}

if(window.location.href.indexOf(spotify) !== -1) {
	chrome.storage.sync.set({ "goToGoogleMusic": 'https://play.google.com/music/listen?u=0#/sr/' + encodeURI(document.querySelector('.primary-title').innerText + (document.querySelector('.secondary-title') != null ? " " + document.querySelector('.secondary-title').innerText : "")) });
	window.close();
}





