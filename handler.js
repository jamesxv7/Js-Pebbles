// function executed when the state of the request changes
function handler()
{
	// Continue if the process is completed
	if (ajax.readyState == 4)
	{
		// Continue only if HTTP status is "OK"
		if (ajax.status == 200)
		{
			try
			{
			// Retrieve the response
			response = ajax.responseText;
			// Or we can use "responseXml" when the server 
			// response is in the XML format.
			// Do something with the response
			}
			catch(e)
			{
			// Display error message
			alert("Error reading the response: " + e.toString());
			}
		}
	else
	{
	// Display status message
	alert("There was a problem retrieving the data:\n" + ajax.statusText);
	}
	}
}
