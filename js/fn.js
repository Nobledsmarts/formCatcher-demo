let catcher = new FormCatcher(rules);
function form(){
	event.preventDefault();
	let form = event.currentTarget;
	let formData = new FormData(form);
	let validate = catcher.validate('signup', formData);
	if(validate.hasError()){
        let errors = validate.getErrors();
        show_errors(errors, 0);
	} else {
		formSuccess();
	}
}
function formSuccess(){
    error_cont.style.display = 'none';
    success_cont.style.display = 'block';
}
function show_errors(errors, isAll){
    success_cont.style.display = 'none';
    let str = '<ul class="error_list">';
    if(isAll){
        for(let value of (errors)){
            str+= "<li>" + value + "</li>"
        }
    } else {
        str+= "<li>" + errors[0] + "</li>"
    }
    str += "</ul>";
    error.innerHTML = str;
    error_cont.style.display = 'block';
}