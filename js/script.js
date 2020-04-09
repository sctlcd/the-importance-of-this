$(document).ready(function() {
    $("p").click(function() {
        $("p").slideToggle("slow")
    });

    $('button').mouseenter(function() {
	$(this).removeClass('makeRed').addClass('makeBlue');
    });

    $('button').mouseleave(function() {
        $(this).removeClass('makeBlue').addClass('makeRed');
    });

    $(".box").on("click", function() {
    	/**
    	 * When we click on an element that has
    	 * a 'box' class, this event will be fired.
    	 */
    	var classNames = $(this).attr("class").split(" ");
    	var boxClass = classNames[0];
    	var className = classNames[1];
    	if ($(this).css("background-color") == "rgb(255, 0, 0)") {
    		// If this object is already red, turn it black
    		$("." + className).css("background-color", "#000"); 
    	} else {
    		// Else turn all elements with a box class black
    		// and then change the color of all elements
    		// with the same class name as the clicked element
    		// to red.
    		$("." + boxClass).css("background-color", "#000");
    		$("." + className).css("background-color", "red");
    	}
    });
})

// when clicking on the <li> elements Module1, Module 2 or Module 3 and the background of the cards associated with 
//them will change to having a red background.
$(".module-nav").on("click", function() {
  let allModulesCardsSelector = ".card"
  let thisModuleCardsSelector = "." + this.id + "-card"
  
  $(allModulesCardsSelector).removeClass("card-highlight");
  $(thisModuleCardsSelector).addClass("card-highlight");
});