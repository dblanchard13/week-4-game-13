$(document).ready(function() {
	
	var wins = 0
		// $("#wins").append(wins)
	var losses = 0
		// $("#losses").append(losses)
	// var targetNumber
	
	var crystals = ["https://cdn.pixabay.com/photo/2014/12/21/23/52/red-576239_1280.png", 
					"http://orig07.deviantart.net/07c1/f/2013/275/e/7/green_gem_by_mexicanbannananinja-d6ozb26.png", 
					"http://www.reijotelaranta.fi/data/kuvat/cache/timantti_1.png-150x150.png", 
					"http://stockpictures.io/wp-content/uploads/2016/06/8682-blue-gems-sapphire-stones-sparkling-shining-shiny-glittering-deep-blue-precious-crystals-bright-colorful-expensive.png"]
	
 // function setGame() {
		var randomTarget = Math.floor(Math.random() * 111) + 9
		console.log(randomTarget)
		$("#randomTarget").append(randomTarget)

		for (var i = 0; i < crystals.length; i++) {
			var userScore = 0
			// var numberOptions = Math.floor(Math.random() * 12 + 1)
			var randomValue = Math.floor(Math.random() * 11) + 1

			var imageCrystal = $("<img>", crystals[i])
			imageCrystal.addClass("crystal-image")
			imageCrystal.attr("data-crystalvalue", randomValue)
			$("#crystals").append("<img src='" + crystals[i] + "'width='75px'>" + randomValue)
			
			$("#crystals").on("click", function() {
		
				var crystalValue = ($(imageCrystal).attr("data-crystalvalue"))
				crystalValue = parseInt(crystalValue)
				userScore += crystalValue
				$("#userScore").append(userScore)
				// console.log(userScore)
					
					if (userScore === randomTarget) {
						wins++
						document.querySelector("#wins").innerHTML = "Wins: " + wins
						// setGame()
					}
					else if (userScore >= randomTarget){
						losses++
						document.querySelector("#losses").innerHTML = "losses: " + losses
						// setGame()
					}
					
			})
			
		}

//  }

	// setGame()
})


			
			
			
			
			
					
			
		
	
		
	