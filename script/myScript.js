
// I want to add a class for every figurecaptio based on content

/*function add_class_hightlight_to_all_figures_belonging_to_project(project_name) {
	var my_selector = "figurecaption:contains('" + project_name + "')";
	console.log(my_selector);
	var all_figurecaption_belonging_to_project = rootElement.find(my_selector);    
    var all_figures_belonging_to_project = all_figurecaption_belonging_to_project.parent();
    all_figures_belonging_to_project.addClass("hightlight");

}*/

var capt01 = document.getElementsByTagName("figcaption");
var text01 = "Pro_01"
var text02 = "Pro_02"
var text03 = "Pro_03"
var text04 = "Pro_04"
var text05 = "Pro_05"
//var att = document.createAttribute("class");

for (var i = 0; i < capt01.length; i++) {

	if (capt01[i].textContent == text01) {
		
		var att = document.createAttribute("class")
		att.value = "text01";
    	capt01[i].setAttributeNode(att);


	}
	else if (capt01[i].textContent == text02) {
		
		var att = document.createAttribute("class")
		att.value = "text02";
    	capt01[i].setAttributeNode(att);


	}
	else if (capt01[i].textContent == text03) {
		
		var att = document.createAttribute("class")
		att.value = "text03";
    	capt01[i].setAttributeNode(att);


	}
	else if (capt01[i].textContent == text04) {
		
		var att = document.createAttribute("class")
		att.value = "text04";
    	capt01[i].setAttributeNode(att);


	}
	else if (capt01[i].textContent == text05) {
		
		var att = document.createAttribute("class")
		att.value = "text05";
    	capt01[i].setAttributeNode(att);


	}
		;
}
