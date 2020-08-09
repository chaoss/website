<!DOCTYPE html>
<html>
<body>
<link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Lato">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
<div id="mdiv">
<p>
<h2>Event Badge Submission</h2><br>
<label for="pname">Project Name:</label>
<input type="text" id="pname" name="pname"><br><br>
<label for="linkweb">Link to the Event Website:</label>
<input type="text" id="linkweb" name="linkweb"><br><br>
</p>
<h2>Speaker Demographics</h2>
<input type="checkbox" id="sdcb">This event commits to Speaker Diversity & Inclusion.
<p>  
Detail the Process for measuring Speaker Demographics.<br><input type="text" id="sddsc" name="sddsc"><br><br>
Provide the link for the page related to Speaker Demographics if available.<br><input type="text" id="sdlink" name="sdlink"><br><br>
</p>

<h2>Attendee Demographics</h2>
<input type="checkbox" id="adcb">This event commits to Attendee Diversity & Inclusion.
<p>  
Detail the process for measuring Attendee Demographics.<br><input type="text" id="addsc" name="addsc"><br><br>
Provide the link for the page related to Attendee Demographics if available.<br><input type="text" id="adlink" name="adlink"><br><br>
</p>

<h2>Code of Conduct at Event</h2>
<input type="checkbox" id="coccb">This event commits to the Code of Conduct at Event.
<p>  
Is the code of conduct posted at Event venue?<br><input type="text" id="coclink" name="coclink"><br><br>
Provide the link for the Event Code of Conduct.<br><input type="text" id="cocdsc" name="cocdsc"><br><br>
</p>

<h2>Diversity Access Tickets</h2>
<input type="checkbox" id="dtcb">This event commits to the Diversity Access Tickets.
<p>  
How many different types of diversity access tickets are available for the event?<br><input type="text" id="dt2" name="dt2"><br><br>
What are the criteria for qualifying for a diversity access ticket?<br><input type="text" id="dt3" name="dt3"><br><br>
Provide a link to the page containing information about Diversity Access Tickets.<br><input type="text" id="dt1" name="dt1"><br><br>
</p>

<h2>Family Friendliness</h2>
<input type="checkbox" id="ffcb">This event commits to Family Friendliness.
<p>  
Does the Event provide childcare facilities for its attendees and speakers?<br><input type="text" id="ff1" name="ff1"><br><br>
What are the other ways that a family-friendly environment is being created in the Event?<br><input type="text" id="ff2" name="ff2"><br><br>
Provide relevant links related to family friendliness at the Event.<br><input type="text" id="ff3" name="ff3"><br><br>
</p>
</div>
<div id="end">

</div>
<div id="template" style="display:none">
    # Event Submission

    ## Requirements
    
    - Project Name: {pname}
    - Link to the Event Website: {linkweb}
    
    ## Speaker Demographics
    
    - [{sdcb}] This event commits to Speaker Diversity and Inclusion.
      - `Q` Detail the process for measuring Speaker Demographics.
      - `A` {sddsc}
      - `Q` Provide the link for the page related to Speaker Demographics if available.
      - `A` {sdlink}
    
    ## Attendee Demographics
    
    - [{adcb}] This event commits to Attendee Diversity and Inclusion.
      - `Q` Detail the process for measuring Attendee Demographics.
      - `A` {addsc}
      - `Q` Provide the link for the page related to Attendee Demographics if available.
      - `A` {adlink}
    
    ## Code of Conduct at Event
    
    - [{coccb}] This event commits to the Code of Conduct at Event.
      - `Q` Is the code of conduct posted at Event venue?
      - `A` {coclink}
      - `Q` Provide a link for the Event Code of Conduct.
      - `A` {cocdsc}
    
    ## Diversity Access Tickets
    
    - [{dtcb}] This event commits to the Diversity Access Tickets.
      - `Q` How many different types of diversity access tickets are available for the event?
      - `A` {dt2}
      - `Q` What are the criteria for qualifying for a diversity access ticket?
      - `A` {dt3}
      - `Q` Provide a link to the page containing information about Diversity Access Tickets.
      - `A` {dt1}
    
    ## Family Friendliness
    
    - [{ffcb}] This event commits to Family Friendliness.
      - `Q` Does the Event provide childcare facilities for its attendees and speakers?
      - `A` {ff1}
      - `Q` What are the other ways that a family-friendly environment is being created in the Event?
      - `A` {ff2}
      - `Q` Provide relevant links related to family friendliness at the Event.
      - `A` {ff3}    
</div>
<input id="fsub" type="submit" value="Submit">
<input id="fback" type="submit" value="Go Back" style="display:none">
<script>
    document.getElementById("fsub").addEventListener("click", function(){
    let text = document.getElementById("template").innerHTML;
        text = text.replace("{linkweb}", document.getElementById("linkweb").value)
        text = text.replace("{sddsc}", document.getElementById("sddsc").value)
        text = text.replace("{sdlink}", document.getElementById("sdlink").value)
        if (document.getElementById("sdcb").checked == true){
            text = text.replace("{sdcb}", "x");
            console.log("checked!");
        } else {
            text = text.replace("{sdcb}", " ");
        }
        text = text.replace("{addsc}", document.getElementById("addsc").value)
        text = text.replace("{adlink}", document.getElementById("adlink").value)
        if (document.getElementById("adcb").checked == true){
            text = text.replace("{adcb}", "x");
            console.log("checked!");
        } else {
            text = text.replace("{adcb}", " ");
        }
        text = text.replace("{cocdsc}", document.getElementById("cocdsc").value)
        text = text.replace("{coclink}", document.getElementById("coclink").value)
        if (document.getElementById("coccb").checked == true){
            text = text.replace("{coccb}", "x");
            console.log("checked!");
        } else {
            text = text.replace("{coccb}", " ");
        }
        text = text.replace("{dt1}", document.getElementById("dt1").value)
        text = text.replace("{dt2}", document.getElementById("dt2").value)
        text = text.replace("{dt3}", document.getElementById("dt3").value)
        if (document.getElementById("dtcb").checked == true){
            text = text.replace("{dtcb}", "x");
            console.log("checked!");
        } else {
            text = text.replace("{dtcb}", " ");
        }

        text = text.replace("{ff1}", document.getElementById("ff1").value)
        text = text.replace("{ff2}", document.getElementById("ff2").value)
        text = text.replace("{ff3}", document.getElementById("ff3").value)
        if (document.getElementById("ffcb").checked == true){
            text = text.replace("{ffcb}", "x");
            console.log("checked!");
        } else {
            text = text.replace("{ffcb}", " ");
        }
        const pName = document.getElementById("pname").value
        text = text.replace("{pname}", pName);
            console.log(text);
        //text = text.replace( /[\r\n]+/gm, "%0A");
        //text = text
            console.log(text);
        document.getElementById("end").innerHTML = text;
        document.getElementById("mdiv").style.display = "none";
        document.getElementById("fsub").style.display = "none";
        document.getElementById("fback").style.display = "block";
        //const endtext = encodeURIComponent(text);
        console.log("******** THREE ********");
        const openIssueURL = `https://github.com/badging/event-diversity-and-inclusion/issues/new?title=${encodeURIComponent(`Event Badge Submission: ${pName}`)}&body=${encodeURIComponent(text)}`;
        let loginAndOpenIssueURL = `https://github.com/login?return_to=${encodeURIComponent(openIssueURL)}`;
        console.log({openIssueURL, loginAndOpenIssueURL, pName, text, });
        //console.log(loginAndOpenIssueURL);
        //loginAndOpenIssueURL = loginAndOpenIssueURL.replace("%25250A", "%250A");
        console.log(loginAndOpenIssueURL);
        window.location.href = loginAndOpenIssueURL;
        //console.log(endtext);
        //const endtwo = text.replace("newline", "%0A")
        //console.log(endtwo);
        //let URL = "https://github.com/login?return_to=https%3A%2F%2Fgithub.com%2Fbadging%2Fevent-diversity-and-inclusion%2Fissues%2Fnew%3Ftitle%3D{title}%26body%3D{body}"
        //let URLT = URL.replace("{title}", "Event Badge Submission: " + pName);
        //let URLB = URLT.replace("{body}", endtext.replace(/#/g, '%23'));
        //console.log(URLB);
        //location.assign(URLB);

    document.getElementById("fback").addEventListener("click", function(){
        document.getElementById("end").innerHTML = "";
        document.getElementById("mdiv").style.display = "block";
        document.getElementById("fback").style.display = "none";
        let inputs = document.getElementsByTagName('input');
        let index = 0;
        for (index = 0; index < inputs.length; ++index) {
        inputs[index].value = "";
        inputs[index].checked = false;
        }
        document.getElementById("fsub").style.display = "block";
        document.getElementById("fsub").value = "Submit";
        document.getElementById("fback").value = "Go Back";
      });
    });

</script>

</body>
</html>
