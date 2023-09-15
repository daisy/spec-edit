
function remove_abstract() {

	var abstract_toc_link = document.querySelector('nav#toc > ol > li > a[href="#abstract"]');
	
	if (!abstract_toc_link) {
		console.log('Could not locate abstract link in the table of contents. Unable to remove');
		return;
	}
	
	abstract_toc_link.parentNode.remove();

	var abstract = document.querySelector('section#abstract');
	
	if (!abstract) {
		console.log('Could not locate abstract section. Unable to remove');
		return;
	}
	
	abstract.remove();
}
