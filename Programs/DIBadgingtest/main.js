//import { createPullRequest } from "https://cdn.pika.dev/octokit-plugin-create-pull-request";

//console.log(octokit);
//const MyOctokit = Octokit.plugin(createPullRequest);

  //octokit.authenticate({
  //  type: 'basic',
  //  username: 'msnell@unomaha.edu',
  //  password: authkey
  //});
  //const myoctokit = octokit.plugin(createPullRequest);
  //console.log(myoctokit);

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
      window.open(loginAndOpenIssueURL, '_blank');
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