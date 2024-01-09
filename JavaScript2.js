
var startGame = setTimeout("fToRise()", 1000)
var rand1;
var rand2;
var q;


var s1 = setTimeout("firstRow()", 1);
var s2 = setTimeout("lastRow()", 1);
var s3 = setTimeout("rightRow()", 1);
var s4 = setTimeout("leftRow()", 1);
var s = setTimeout("d()", 10);

var arrTable = new Array();

var monimRow = new Array(0, 0, 0, 0, 0, 0);
var monimColumn = new Array(0, 0, 0, 0, 0, 0, 0);

var monim = new Array(30);
var temp;
var cnt = 0;
var string = "Bingo!";

function d() {
    var j, i;
    for (i = 1; i <= 5; i++) {
        document.getElementById("bingo").innerHTML += "<tr id='tr" + i + "'>";
        for (j = 1; j <= 6; j++) {
            document.getElementById("tr" + i).innerHTML += "<td  id='td" + i + '_' + j + "'></td>";
            document.getElementById("td" + i + '_' + j).innerHTML += arrTable[cnt++];
        }
        document.getElementById("bingo").innerHTML += "</tr id = 'tr" + i + "' > ";

    }
}

function firstRow() {
    cnt = 0;
    for (i = 1; i <= 10; i++) {
        var t = document.createElement("div")
        t.style = "border:black 2px solid; width:7vw; height:12.2vh; border-radius:100px; display:inline-block; background-color:red; text-align:center; font-size:2vw; font-family:Cambria Math;";
        t.id = "r1-" + i;

        rand1 = Math.floor(Math.random() * 5) + 5;
        rand2 = Math.floor(Math.random() * 10);//מספרים עד 9
        arrTable[arrTable.length] = rand1 * rand2;
        q = rand1 + 'X' + rand2;
        t.innerHTML += "</br>" + q;

        document.getElementById("top").appendChild(t);

    }
}
function lastRow() {
    cnt = 0;
    for (i = 1; i <= 10; i++) {
        var t = document.createElement("div")
        t.style = "border:black 2px solid; width:7vw; height:12.2vh; border-radius:100px; display:inline-block; background-color:red; font-size:2vw; text-align:center; font-family:Cambria Math";
        t.id = "r2-" + i;

        rand1 = Math.floor(Math.random() * 5) + 5;
        rand2 = Math.floor(Math.random() * 10);//מספרים עד 9
        arrTable[arrTable.length] = rand1 * rand2;
        q = rand1 + 'X' + rand2;
        t.innerHTML += "</br>" + q;

        document.getElementById("bottem").appendChild(t);
    }
}
function rightRow() {
    cnt = 0;
    for (i = 2; i <= 6; i++) {
        var t = document.createElement("div");
        t.style = "float:left; border:black 2px solid; width:7vw; height:12.2vh; border-radius:100px; display:block; background-color:red; font-size:2vw; text-align:center; font-family:Cambria Math";
        t.id = "r3-" + i;

        rand1 = Math.floor(Math.random() * 5)+5;
        rand2 = Math.floor(Math.random() * 10);//מספרים עד 9
        arrTable[arrTable.length] = rand1 * rand2;
        q = rand1 + 'X' + rand2;
        t.innerHTML += "</br>" + q;

        document.getElementById("right").appendChild(t);
    }
}
function leftRow() {
    cnt = 0;
    for (i = 2; i <= 6; i++) {
        var t = document.createElement("div")
        t.style = "float:left; border:black 2px solid; width:7vw; height:12.2vh; border-radius:100px; display:block; background-color:red; font-size:2vw; text-align:center; font-family:Cambria Math";
        t.id = "r4-" + i;

        rand1 = Math.floor(Math.random() * 5) + 5;
        rand2 = Math.floor(Math.random() * 10);//מספרים עד 9
        arrTable[arrTable.length] = rand1 * rand2;
        q = rand1 + 'X' + rand2;
        t.innerHTML += "</br>" + q;

        document.getElementById("left").appendChild(t);
    }
}
function fToRise() {
    var arr = document.querySelectorAll('div>div');
    var y = Math.floor(Math.random() * arr.length);
    while (monim[y] == -1 )
        var y = Math.floor(Math.random() * arr.length);
    monim[y] = -1;
    arr[y].style.backgroundColor = "yellow";
    arr[y].draggable = "true";
    arr[y].ondragstart = function () {
        window.event.target.style.border = "red dotted 3px ";

        temp = event.target.cloneNode(true);
        temp.id = "new" + temp.id;
        event.dataTransfer.setData("xState", event.target.id);
    };
    tar = arr[y].innerHTML;
    targil = (tar.charAt(4) - 0) * (tar.charAt(6) - 0);
    var answer = document.querySelectorAll('td');
    for (i = 0; i < answer.length; i++)
        if (answer[i].innerHTML == targil) {
            answer[i].ondragover = function () {
                event.preventDefault();
            };
            answer[i].className = "droptarget";
        }

}
document.addEventListener("drop", function (event) {
    event.preventDefault();
    if (event.target.className == "droptarget") {

        temp.style.width = "6vw";
        temp.style.height = "3vh";
        temp.innerHTML = "";

        event.target.innerHTML = "";

        event.target.appendChild(temp);

        temp.draggable = "";
        var data1 = event.dataTransfer.getData("xState");
        document.getElementById(data1).draggable = "";
        document.getElementById(data1).style.backgroundColor = "white";
        var answer = document.querySelectorAll('td');
        for (i = 0; i < answer.length; i++) {
            answer[i].className = "";
            answer[i].ondragover = "default()";
        }

    }
    var flag = "1";
    var x = event.target.id.indexOf('_');
    monimRow[event.target.id.charAt(x - 1) - 0]++;
    if (monimRow[event.target.id.charAt(x - 1) - 0] == 6) {
        r = event.target.id.charAt(x - 1) - 0;
        for (i = 1; i <= 6; i++) {
            str = "td" + r + "_" + i;
            document.getElementById(str).style.backgroundColor = "black";
            document.getElementById(str).innerHTML = string.charAt(i - 1);
            document.getElementById(str).style.color = "yellow";
            // document.body.style.backgroundRepeat = "no-repeat";
            // document.body.style.backgroundImage = "url(image.gif)";

        }
        flag = 0;

    }
    monimColumn[event.target.id.charAt(x + 1) - 0]++;
    if (monimColumn[event.target.id.charAt(x + 1) - 0] == 5) {
        r = event.target.id.charAt(x + 1) - 0;
        for (i = 1; i <= 5; i++) {
            str = "td" + i + "_" + r;
            document.getElementById(str).style.backgroundColor = "black";
            document.getElementById(str).innerHTML = string.charAt(i - 1);
            document.getElementById(str).style.color = "yellow";
            // document.body.style.backgroundRepeat = "no-repeat";
            // document.body.style.backgroundImage = "url(image.gif)";
        }
        flag = 0;

    }
    if (flag == 0) {
        //document.body.style.backgroundRepeat = "no-repeat";
        //document.body.style.backgroundImage = "url(bingoImage.png)";
        //document.body.style.backgroundImage.opacity = "0.00001";
        document.getElementById("myImage").style.opacity = "1";
        Details()
        return;
    }
    fToRise();
});

//end game



//----------------------Menu Strip--------------------
function funcClose() {
    window.close();
}

function funcBack() {
    window.history.back();
}

function funcInfo(x) {
    document.getElementById("info").style.display = "unset";
    if (x == 1)
        document.querySelector("#info img").src = "../info2.png";
    else if (x == 2)
        document.querySelector("#info img").src = "../cross2.png";
}
function closeInfo() {
    document.getElementById("info").style.display = "none";
}
var setopen = false;
function branchclick() {
    if (setopen == false) {
        document.getElementById("asideright").style.display = "block";
        document.getElementById("asideright").style.animationName = "setting";
        setopen = true;
    }
    else {
        document.getElementById("asideright").style.animationName = "nosetting";
        var v = setTimeout(disnone, 1000);
        setopen = false;
    }
}
function disnone() {
    document.getElementById("asideright").style.display = "none";
}
function printResults() {
    this.window.print();
}
function closeResults() {
    window.location.aclose = "break";
}
function homePage() {
    window.location.ahome = "HomePage.html";
}

//----------------------Open window--------------------
function Details() {
    mymessage.style.display = "block";
    var x = localStorage.getItem('names');
    document.getElementById("names2").innerHTML += x;


}


// When the user clicks anywhere outside of the message, close it
function message() {
    if (event.target == message) {
        FirstMessage.style.display = "none";
    }
}