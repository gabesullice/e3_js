;!function ($, Drupal, e3, window, document, undefined) {

	/** This is an example of a function that's called once on page load. There are
	 *  no variables passed by default here. If we need separate functions to be
	 *  called at $(document).ready(), we can simply change the namespace here from
	 *  e3.load.example to e3.load.anotherFunc. The function names have no direct
	 *  relation to the module or theme you're working in.
	 */
	e3.load.example = function() {
		console.log('utils_example module js loaded');
	}

	/** The click handler listens to (and throttles) all click events on the page.
	 *  By default, it is passed the HTML of the element clicked, allowing you to
	 *  perform any standard jQuery operations on it. In the example below, clicking
	 *  the footer element will replace its contents to a text string.
	 */
	e3.click.example = function(el) {
		if($(el).parent().hasClass('region-footer')) {
			$(el).text('We replaced the contents of the footer!');
		}
	}

	/** This is an example of our window resize function. By default, it is passed
	 *  the window's width and height as parameters, though you don't need to include
	 *  either of them if you don't need them.
	 *  These functions will only be called a max of 4 times per second. If you need
	 *  to increase this, you can change the value in e3_utils.js.
	 */
	e3.resize.example = function(w) {

		if (w >= e3.bpmobile) {
			e3.isMobile == false;
		} else {
			e3.isMobile == true;
		}
		/* Note that isMobile is not a default variable in e3_utils, but since
		 * we're creating a new object within the Drupal object, we can create
		 * and reuse variables between scripts with relative ease.
		 */

	}

	/** This is the scroll handler. By default, it is passed the distance scrolled
	 *  from the top of the page. Similarly, this parameter is optional.
	 *  These functions will be called at most 5 times per second.
	 */
	e3.scroll.example = function(s) {

		if (s > $('header').offset().top + $('header').outerHeight()) {
			console.log('Do something once we\'ve scrolled past the header element');
		}

	}

	/** The delay handler is only run once per second, but it is easy to modify if
	 *  you need more granular control over timed events on the page. By default,
	 *  it is passed the time since the page loaded in seconds to 2 decimals.
	 */
	e3.delay.example = function(s) {
		if(s > 3 && s < 10) {
			console.log('Time to make things happen')
		}

		/**
		 * If necessary, you can turn off the timer easily by setting the variable.
		 * Do this with caution, as it will disable all e3.delay functions on the site.
		 */
		if (s > 20) {
			e3.timer == false;
		}
	}

	/**
	 * Here's an example of a function overriding the default timer interval.
	 * Just update the time variable with the current time, using the startTime
	 * var as your reference point.
	 *
	 * Uncomment to see how it works.
	 */
//	e3.load.timerOverride = function() {
//
//		function myTime() {
//			Drupal.E3.time = Math.round(((new Date).getTime() - Drupal.E3.startTime)/1000,2);
//			console.log('calling myTime');
//		}
//
//		setInterval(myTime,100);
//
//	}


}(jQuery, Drupal, Drupal.E3, this, this.document, '');
