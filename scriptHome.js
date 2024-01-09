var FirstMessage;
var start = setTimeout("fFill()", 1)
var start = setTimeout("fImage()", 1)

var cnt = 0;
function fFill() {
   
    if (localStorage.getItem('names')) {
        document.getElementById('names').value = localStorage.getItem('names');
        document.getElementById('password1').value = localStorage.getItem('password1');
        document.getElementById('password2').value = localStorage.getItem('password2');
    }

}
function Details() {
    mymessage.style.display = "block";
    var x = document.getElementById("names").value;
    document.getElementById("names2").innerHTML += x;
}
function checkinput() {

        if (document.getElementById('names').value == "") {
            document.getElementById('names').placeholder="הכנס שם";
            cnt++;

        }
        //else
        //    document.getElementById('names').placeholder = "";

        if (document.getElementById('password1').value == "") {
            document.getElementById('password1').placeholder = "הקש סיסמא ";
            cnt++;
        }
        //else
        //    document.getElementById('password1').placeholder.innerHTML = "";

        if (document.getElementById('password2').value == "") {
            document.getElementById('password2').placeholder = "הקש אימות סיסמא ";
            cnt++;
        }
        //else
        //    document.getElementById('password2').placeholder = "";


        if (document.getElementById('password1').value != "" && document.getElementById('password2').value != "" && document.getElementById('password1').value != document.getElementById('password2').value) {
            document.getElementById('p1').innerHTML = "הסיסמא לא תואמת ";
            cnt++;
    }
    else
        document.getElementById('p1').innerHTML = "";


    if (cnt == 0) {
        localStorage.setItem('names', document.getElementById('names').value);
        localStorage.setItem('password1', document.getElementById('password1').value);
        localStorage.setItem('password2', document.getElementById('password2').value);
        Details();
    }
    else
        cnt = 0;
            //var player = getPlayer(document.getElementById('tz').value);
            //player.id = document.getElementById('tz').value;
            //player.name = document.getElementById('names').value;
            //player.points = player.points + 0;
            //player.runs = document.getElementById('count').value;
            //updatePlayer(player);
}

// When the user clicks on <span> (x), close the message

// When the user clicks anywhere outside of the message, close it
function message() {
    if (event.target == message) {
        FirstMessage.style.display = "none";
    }
}


