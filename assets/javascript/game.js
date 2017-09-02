$(document).ready(function() {
	
	var wins = 0
	
	var losses = 0
		
	
	var crystals = ["http://icons.iconarchive.com/icons/aha-soft/jewelry/256/Ruby-icon.png", 
					"http://orig07.deviantart.net/07c1/f/2013/275/e/7/green_gem_by_mexicanbannananinja-d6ozb26.png", 
					"http://www.reijotelaranta.fi/data/kuvat/cache/timantti_1.png-150x150.png", 
					"http://stockpictures.io/wp-content/uploads/2016/06/8682-blue-gems-sapphire-stones-sparkling-shining-shiny-glittering-deep-blue-precious-crystals-bright-colorful-expensive.png"]
	
 
var randomTarget = Math.floor(Math.random() * 111) + 9
var userScore
 function setGame() {
		console.log(randomTarget)
		$("#crystals").empty()
		$("#randomTarget").text(randomTarget)
		userScore = 0
			$("#userScore").text(userScore)
		for (var i = 0; i < crystals.length; i++) {
			
			var randomValue = Math.floor(Math.random() * 11) + 1
			// the img tag is passing each link in crystals to the src and give it width 
			var imageCrystal = $("<img src='" + crystals[i] + "'width='75px'>")
			
// assigning the imageCrystal a class called crystal-image for CSS styling
			imageCrystal.addClass("crystal-image")
			// assigned the imageCrystal a attr named data-crystavalue and set it equall to randomValue 
			imageCrystal.attr("data-crystalvalue", randomValue)
			// use the jQuery selector to select the div with id=crystals and we append imageCrystal and throw it on the page
			$("#crystals").append(imageCrystal)
			
			
		}

 }

	setGame()

	// when I pass in #crystals, on page load this on click fuction is binded to the div with id=crystals, where as when I pass in .crystal-image, this on-click function has nothing to bind to when the page is loaded because the .crystal-image haven't been loaded yet

			// when I had .crystal-image, the javascript had nothing on the html to bind this onclick function to because the img simple did not exist yet.

			
			$("body").on("click", ".crystal-image", function() {
		
			// The crystal value is appending on all the crystals as a whole
			// not individually. 
				
				var crystalValue = ($(this).attr("data-crystalvalue"))
				console.log(crystalValue)
				console.log(userScore, crystalValue)
				
				userScore = parseInt(userScore) + parseInt(crystalValue)
				console.log(userScore)
				$("#userScore").text(userScore)
				

				
					
					if (userScore == randomTarget) {
						wins++
						randomTarget = Math.floor(Math.random() * 111) + 9
						document.querySelector("#wins").innerHTML = "Wins: " + wins
						setGame()
					}
					else if (userScore > randomTarget){
						losses++
						randomTarget = Math.floor(Math.random() * 111) + 9
						document.querySelector("#losses").innerHTML = "losses: " + losses
						setGame()
					}
					
			})

})


			
			
			
			
			
					
			
		
	
		
	