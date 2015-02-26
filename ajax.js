function createAjaxObject()
{
	//Create the XMLHttpRequest object.
	try {
		var ajax = new XMLHttpRequest();
	}
	catch (e)
	{
		alert("Error creating the XMLHttpRequest object.");
	}

	// Return the ajax object or display an error message.
	if (!xmlHttp)
		alert("Error creating the XMLHttpRequest object.");
	else
		return ajax;
}
