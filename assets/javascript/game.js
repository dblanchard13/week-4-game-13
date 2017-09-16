// Nice job putting everything insude the document ready block
$(document).ready(function() {
	
	var wins = 0
	
	var losses = 0
		
	var crystals = [/*"http://icons.iconarchive.com/icons/aha-soft/jewelry/256/Ruby-icon.png"*/
					"assets/images/Ruby-icon.png", 
					/*"http://orig07.deviantart.net/07c1/f/2013/275/e/7/green_gem_by_mexicanbannananinja-d6ozb26.png"*/
					"assets/images/green_gem_by_mexicanbannananinja-d6ozb26.png", 
					/*"http://www.reijotelaranta.fi/data/kuvat/cache/timantti_1.png-150x150.png"*/
					"assets/images/timantti_1.png-150x150.png", 
					/*"http://stockpictures.io/wp-content/uploads/2016/06/8682-blue-gems-sapphire-stones-sparkling-shining-shiny-glittering-deep-blue-precious-crystals-bright-colorful-expensive.png"*/
					"assets/images/8682-blue-gems-sapphire-stones-sparkling-shining-shiny-glittering-deep-blue-precious-crystals-bright-colorful-expensive.png"]
	
 	
 	// Since the string of code for generating random numbers
 	// is rather unwieldy I'd suggest placing it in a utility function
	var randomTarget = getRandomNum(120, 9)
	var userScore

	function getRandomNum (max, min) {
	  return Math.floor(Math.random() * (max - min) + min)
	}

	// Totally stylistic comment: your indentation is sorta all over the place.
	// While it seems like a trivial thing to worry about; when it comes to 
	// code maintainability, consistent indentation is a huge helper.
 		function setGame() {
			// console.log(randomTarget)
			$("#crystals").empty()
			$("#randomTarget").text(randomTarget)
			userScore = 0
				$("#userScore").text(userScore)

			// Really nice job generating the crystal images dynamically!
			for (var i = 0; i < crystals.length; i++) {
				
				var randomValue = getRandomNum(12, 1)
				// the img tag is passing each link in crystals to the src and give it width 
				// You could also give it width by defining a css rule for .crystal-image
				// and setting `width: 75px`. Would look a bit nicer too.
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
		
				var crystalValue = ($(this).attr("data-crystalvalue"))

				// Generally speaking, you'll want to remove console.logs from your production apps
				// console.log(crystalValue)
				// console.log(userScore, crystalValue)
				
				// You don't need to use parseInt on userScore since it's already a number 🙃
				userScore += parseInt(crystalValue)
				// console.log(userScore)
				$("#userScore").text(userScore)
					
					// You'll want to get in the habit of using triple equals instead of double.
					// Because double equals does type coercion before checking values, you can
					// sometime have the check return true when you wouldn't expect it to
					// and that can cause some really confusing bugs 🐛
					if (userScore === randomTarget) {
						wins++
						randomTarget = getRandomNum(120, 9)
						// I'd recommend not mixing styles for DOM manipulation as much as you can help it.
						// So either roll with all vanilla JS or all jQuery.
						document.querySelector("#wins").innerHTML = "Wins: " + wins
						setGame()
					}
					else if (userScore > randomTarget){
						losses++
						randomTarget = getRandomNum(120, 9)
						document.querySelector("#losses").innerHTML = "losses: " + losses
						setGame()
					}
					
			})

})
			
				

	
			
				

				


			
			
			
			
			
					
			
		
	
		
	