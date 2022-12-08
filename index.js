function cipher(str, key) {
  var str = document.getElementById("inputText").value;
  var key = document.getElementById("key-num").value;
  let arr = [];
  var strFin = "please enter some text in the box above.";

  for (let i = 0; i < str.length; i++) {
    let code = str.charCodeAt(i);
    //key 1 start
    if (key == 1) {
      if ((code >= 65 && code < 90) || (code >= 97 && code < 122)) {
        code += 1;
        arr.push(code);
      } else if (code == 90 || code == 122) {
        code -= 25;
        arr.push(code);
      } else {
        arr.push(code);
      }
      strFin = String.fromCharCode(...arr);
    }
    //key 1 end

    //key 2 start
    if (key == 2) {
      if ((code >= 65 && code < 89) || (code >= 97 && code < 121)) {
        code += 2;
        arr.push(code);
      } else if ((code >= 89 && code <= 90) || (code >= 121 && code <= 122)) {
        code -= 24;
        arr.push(code);
      } else {
        arr.push(code);
      }
      strFin = String.fromCharCode(...arr);
    }
    //key 2 end

    //key 3 start
    if (key == 3) {
      if ((code >= 65 && code < 88) || (code >= 97 && code < 120)) {
        code += 3;
        arr.push(code);
      } else if ((code >= 88 && code <= 90) || (code >= 120 && code <= 122)) {
        code -= 23;
        arr.push(code);
      } else {
        arr.push(code);
      }
      strFin = String.fromCharCode(...arr);
    }
    //key 3 end

    //key 4 start
    if (key == 4) {
      if ((code >= 65 && code < 87) || (code >= 97 && code < 119)) {
        code += 4;
        arr.push(code);
      } else if ((code >= 87 && code <= 90) || (code >= 119 && code <= 122)) {
        code -= 22;
        arr.push(code);
      } else {
        arr.push(code);
      }
      strFin = String.fromCharCode(...arr);
    }
    //key 4 end

    //key 5 start
    if (key == 5) {
      if ((code >= 65 && code < 86) || (code >= 97 && code < 118)) {
        code += 5;
        arr.push(code);
      } else if ((code >= 86 && code <= 90) || (code >= 118 && code <= 122)) {
        code -= 21;
        arr.push(code);
      } else {
        arr.push(code);
      }
      strFin = String.fromCharCode(...arr);
    }
    //key 5 end

    //key 6 start
    if (key == 6) {
      if ((code >= 65 && code < 85) || (code >= 97 && code < 117)) {
        code += 6;
        arr.push(code);
      } else if ((code >= 85 && code <= 90) || (code >= 117 && code <= 122)) {
        code -= 20;
        arr.push(code);
      } else {
        arr.push(code);
      }
      strFin = String.fromCharCode(...arr);
    }
    //key 6 end

    //key 7 start
    if (key == 7) {
      if ((code >= 65 && code < 84) || (code >= 97 && code < 116)) {
        code += 7;
        arr.push(code);
      } else if ((code >= 84 && code <= 90) || (code >= 116 && code <= 122)) {
        code -= 19;
        arr.push(code);
      } else {
        arr.push(code);
      }
      strFin = String.fromCharCode(...arr);
    }
    //key 7 end

    //key 8 start
    if (key == 8) {
      if ((code >= 65 && code < 83) || (code >= 97 && code < 115)) {
        code += 8;
        arr.push(code);
      } else if ((code >= 83 && code <= 90) || (code >= 115 && code <= 122)) {
        code -= 18;
        arr.push(code);
      } else {
        arr.push(code);
      }
      strFin = String.fromCharCode(...arr);
    }
    //key 8 end

    //key 9 start
    if (key == 9) {
      if ((code >= 65 && code < 82) || (code >= 97 && code < 114)) {
        code += 9;
        arr.push(code);
      } else if ((code >= 82 && code <= 90) || (code >= 114 && code <= 122)) {
        code -= 17;
        arr.push(code);
      } else {
        arr.push(code);
      }
      strFin = String.fromCharCode(...arr);
    }
    //key 9 end

    //key 10 start
    if (key == 10) {
      if ((code >= 65 && code < 81) || (code >= 97 && code < 113)) {
        code += 10;
        arr.push(code);
      } else if ((code >= 81 && code <= 90) || (code >= 113 && code <= 122)) {
        code -= 16;
        arr.push(code);
      } else {
        arr.push(code);
      }
      strFin = String.fromCharCode(...arr);
    }
    //key 10 end

    //key 11 start
    if (key == 11) {
      if ((code >= 65 && code < 80) || (code >= 97 && code < 112)) {
        code += 11;
        arr.push(code);
      } else if ((code >= 80 && code <= 90) || (code >= 112 && code <= 122)) {
        code -= 15;
        arr.push(code);
      } else {
        arr.push(code);
      }
      strFin = String.fromCharCode(...arr);
    }
    //key 11 end

    //key 12 start
    if (key == 12) {
      if ((code >= 65 && code < 79) || (code >= 97 && code < 111)) {
        code += 12;
        arr.push(code);
      } else if ((code >= 79 && code <= 90) || (code >= 111 && code <= 122)) {
        code -= 14;
        arr.push(code);
      } else {
        arr.push(code);
      }
      strFin = String.fromCharCode(...arr);
    }
    //key 12 end

    //key 13 start
    if (key == 13) {
      if ((code >= 65 && code < 78) || (code >= 97 && code < 110)) {
        code += 13;
        arr.push(code);
      } else if ((code >= 78 && code <= 90) || (code >= 110 && code <= 122)) {
        code -= 13;
        arr.push(code);
      } else {
        arr.push(code);
      }
      strFin = String.fromCharCode(...arr);
    }
    //key 13 end

    //key 14 start
    if (key == 14) {
      if ((code >= 65 && code < 77) || (code >= 97 && code < 109)) {
        code += 14;
        arr.push(code);
      } else if ((code >= 77 && code <= 90) || (code >= 109 && code <= 122)) {
        code -= 12;
        arr.push(code);
      } else {
        arr.push(code);
      }
      strFin = String.fromCharCode(...arr);
    }
    //key 14 end

    //key 15 start
    if (key == 15) {
      if ((code >= 65 && code < 76) || (code >= 97 && code < 108)) {
        code += 15;
        arr.push(code);
      } else if ((code >= 76 && code <= 90) || (code >= 108 && code <= 122)) {
        code -= 11;
        arr.push(code);
      } else {
        arr.push(code);
      }
      strFin = String.fromCharCode(...arr);
    }
    //key 15 end

    //key 16 start
    if (key == 16) {
      if ((code >= 65 && code < 75) || (code >= 97 && code < 107)) {
        code += 16;
        arr.push(code);
      } else if ((code >= 75 && code <= 90) || (code >= 107 && code <= 122)) {
        code -= 10;
        arr.push(code);
      } else {
        arr.push(code);
      }
      strFin = String.fromCharCode(...arr);
    }
    //key 16 end

    //key 17 start
    if (key == 17) {
      if ((code >= 65 && code < 74) || (code >= 97 && code < 106)) {
        code += 17;
        arr.push(code);
      } else if ((code >= 74 && code <= 90) || (code >= 106 && code <= 122)) {
        code -= 9;
        arr.push(code);
      } else {
        arr.push(code);
      }
      strFin = String.fromCharCode(...arr);
    }
    //key 17 end

    //key 18 start
    if (key == 18) {
      if ((code >= 65 && code < 73) || (code >= 97 && code < 105)) {
        code += 18;
        arr.push(code);
      } else if ((code >= 73 && code <= 90) || (code >= 105 && code <= 122)) {
        code -= 8;
        arr.push(code);
      } else {
        arr.push(code);
      }
      strFin = String.fromCharCode(...arr);
    }
    //key 18 end

    //key 19 start
    if (key == 19) {
      if ((code >= 65 && code < 72) || (code >= 97 && code < 104)) {
        code += 19;
        arr.push(code);
      } else if ((code >= 72 && code <= 90) || (code >= 104 && code <= 122)) {
        code -= 7;
        arr.push(code);
      } else {
        arr.push(code);
      }
      strFin = String.fromCharCode(...arr);
    }
    //key 19 end

    //key 20 start
    if (key == 20) {
      if ((code >= 65 && code < 71) || (code >= 97 && code < 103)) {
        code += 20;
        arr.push(code);
      } else if ((code >= 71 && code <= 90) || (code >= 103 && code <= 122)) {
        code -= 6;
        arr.push(code);
      } else {
        arr.push(code);
      }
      strFin = String.fromCharCode(...arr);
    }
    //key 20 end

    //key 21 start
    if (key == 21) {
      if ((code >= 65 && code < 70) || (code >= 97 && code < 102)) {
        code += 21;
        arr.push(code);
      } else if ((code >= 70 && code <= 90) || (code >= 102 && code <= 122)) {
        code -= 5;
        arr.push(code);
      } else {
        arr.push(code);
      }
      strFin = String.fromCharCode(...arr);
    }
    //key 21 end

    //key 22 start
    if (key == 22) {
      if ((code >= 65 && code < 69) || (code >= 97 && code < 101)) {
        code += 22;
        arr.push(code);
      } else if ((code >= 69 && code <= 90) || (code >= 101 && code <= 122)) {
        code -= 4;
        arr.push(code);
      } else {
        arr.push(code);
      }
      strFin = String.fromCharCode(...arr);
    }
    //key 22 end

    //key 23 start
    if (key == 23) {
      if ((code >= 65 && code < 68) || (code >= 97 && code < 100)) {
        code += 23;
        arr.push(code);
      } else if ((code >= 68 && code <= 90) || (code >= 100 && code <= 122)) {
        code -= 3;
        arr.push(code);
      } else {
        arr.push(code);
      }
      strFin = String.fromCharCode(...arr);
    }
    //key 23 end

    //key 24 start
    if (key == 24) {
      if ((code >= 65 && code < 67) || (code >= 97 && code < 99)) {
        code += 24;
        arr.push(code);
      } else if ((code >= 67 && code <= 90) || (code >= 99 && code <= 122)) {
        code -= 2;
        arr.push(code);
      } else {
        arr.push(code);
      }
      strFin = String.fromCharCode(...arr);
    }
    //key 24 end

    //key 25 start
    if (key == 25) {
      if (code == 65 || code == 97) {
        code += 25;
        arr.push(code);
      } else if ((code >= 66 && code <= 90) || (code >= 98 && code <= 122)) {
        code -= 1;
        arr.push(code);
      } else {
        arr.push(code);
      }
      strFin = String.fromCharCode(...arr);
    }
    //key 25 end

    //invalid key start
    else if (key > 25 || key <= 0 || key == "") {
      strFin = "Please enter a valid key.";
    }
  }

  document.getElementById("outputText").value = strFin;
}

function toggleMobileMenu(menu) {
  menu.classList.toggle('open');
}
