var tempcode = ""; //暂存code
var lastcode = ""; //上一条code
codeaera = document.getElementById("code");
function makecodef() {
  var cardid = document.getElementById("cardid").value.toUpperCase();
  if (cardid == "") {
    alert("卡牌ID为必填项");
    return;
  }
  if (cardid.indexOf("_") == -1) {
    //判断卡牌ID中是否包含下划线
    alert("请输入正确的卡牌ID");
    return;
  }
  var myoccupation = document.getElementById("myoccupation").value;
  var enemyoccupation = document.getElementById("enemyoccupation").value;
  var holdcard = document.getElementById("holdcard").value;
  var handcard = document.getElementById("handcard").value.toUpperCase();
  if (handcard != "") {
    //判断留牌ID，如果有值加上/,如果为空则设置为/
    if (handcard.indexOf("_") == -1) {
      alert("请输入正确的卡牌ID");
      return;
    }
    handcard = handcard + "/";
  } else {
    handcard = "/";
  }
  var defensive = document.getElementsByName("defensive");
  var item = null;
  for (var i = 0; i < defensive.length; i++) {
    //遍历Radio
    if (defensive[i].checked) {
      item = defensive[i].value;
    }
  }
  // 生成留牌代码
  var code =
    cardid +
    ";" +
    myoccupation +
    ";" +
    enemyoccupation +
    ";" +
    holdcard +
    ";" +
    handcard +
    item;

  lastcode = code + "\n";
  tempcode = code + "\n" + tempcode; //叠加代码并换行
  codeaera.innerText = tempcode;
}

function delcodef() {
  var reg = new RegExp(tempcode.split("\n")[0] + "\n");
  tempcode = tempcode.replace(reg, "");
  codeaera.innerText = tempcode;
}

var result = document.getElementById("result");
function CopyCode(event) {
  const range = document.createRange();
  range.selectNode(codeaera);
  const selection = window.getSelection();
  if (selection.rangeCount > 0) selection.removeAllRanges();
  selection.addRange(range);
  document.execCommand("copy");
  alert("已复制留牌策略！");
}
result.addEventListener("click", CopyCode, false);

window.onkeypress = function(e) {
  if (e.keyCode == 13) {
    this.makecodef();
  }
};
