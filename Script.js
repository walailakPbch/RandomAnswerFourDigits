//สุ่มคำตอบ
var characters = "ABCDEFGHIJKLMNOPQRSTUVWXTZ";//ABCDEFGHIJKLMNOPQRSTUVWXTZ
var answer = '';
for (var i = 0; i < 4; i++) {
    var rnum = Math.floor(Math.random() * characters.length);
    answer += characters.substring(rnum, rnum + 1);
}

//เอาคำตอบใส่ array เพื่อให้ไม่สุ่มใหม่
var lab = ["1"];
var val = [answer];
var dataMap = val.map((v, i) =>
    ({ "label": lab[i], "value": v })
)
answerRow = dataMap[0].value


var clicks = 0;

function myFunction() {
    var ran = document.getElementById("ran").value.toUpperCase();
    document.getElementById('ran').value = ''

    function addTable(){
        //ยัดใส่ตาราง
        var table = document.getElementById("myTable");
        var row = table.insertRow(-1);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        var cell4 = row.insertCell(3);
        var cell5 = row.insertCell(4);

        cell1.innerHTML = answerRow;
        cell1.setAttribute('id','hideRow'); 
        cell2.innerHTML = ran;
        cell3.innerHTML = count;
        cell4.innerHTML = countMatched;
        cell5.innerHTML = clicks;

        return cell1, cell2, cell3, cell4,cell5;
    }
    if (ran.length == 4) {
        //ถูกทั้งหมดกี่ตัว
        var count = 0;
        function match(answerRow, ran) {
            for (let i in ran)
                ran.includes(answerRow[i]) ? count++ : false;

        }
        match(answerRow, ran);

        //ถูกกี่ตำแหน่ง
        var length = Math.min(answerRow.length, ran.length);
        var countMatched = 0;

        for (var index = 0; index < length; index++) {
            if (answerRow[index] == ran[index])
                countMatched++;
        }

        //คลิ๊กครั้งที่เท่าไร
        clicks += 1;

        if (clicks == 1 && (count != 4 || countMatched != 4)) {
            addTable()

        } else if (clicks >= 2 && (count != 4 || countMatched != 4)) {
            addTable()

        } else {
            addTable()
            var name = prompt('กรอกชื่อ');
            document.getElementById("total").innerHTML = name + " " + clicks + " จำนวนครั้ง";

        }
    } else {
        alert("กรอก 4 ตัว");
    }













}

