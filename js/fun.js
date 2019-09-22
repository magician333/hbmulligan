var button = document.getElementById("make");
button.onclick = function() {
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
  document.getElementById("code").innerText = code;
};
