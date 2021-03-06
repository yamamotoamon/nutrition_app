const { $, buttonClickSelector } = require("@rails/ujs");

window.addEventListener("turbolinks:load", function(){
  const pullDown1 = document.getElementById("keisan1");
  const pullDown2 = document.getElementById("keisan2");
  const pullDown3 = document.getElementById("keisan3");
  const pullDown4 = document.getElementById("keisan4");
  const pullDown5 = document.getElementById("keisan5");
  const pullDown6 = document.getElementById("keisan6");
  const pullDown7 = document.getElementById("keisan7");
  const pullDown8 = document.getElementById("keisan8");
  const pullDown9 = document.getElementById("keisan9");
  const pullDown10 = document.getElementById("keisan10");
  const pullDown11 = document.getElementById("keisan11");
  const pullDown12 = document.getElementById("keisan12");
  const pullDown13 = document.getElementById("keisan13");
  const pullDown14 = document.getElementById("keisan14");
  const pullDown15 = document.getElementById("keisan15");


  const allPullDown = [
    pullDown1,
    pullDown2,
    pullDown3,
    pullDown4,
    pullDown5,
    pullDown6,
    pullDown7,
    pullDown8,
    pullDown9,
    pullDown10,
    pullDown11,
    pullDown12,
    pullDown13,
    pullDown14,
    pullDown15,
  ];


  const food = [
    {name:"エラー",kcal:0,tans:0,oil:0,tanp:0,tou:0,nat:0,kari:0,ca:0,mag:0,rin:0,fe:0,ae:0,vta:0,vtb:0,vtc:0,vtd:0,vte:0,vtk:0,sni:0,sio:0},
    {name:"キャベツ",kcal:0.23,tans:0.52,oil:0.002,tanp:0.013,tou:0.034,nat:0.05,kari:2,ca:0.43,mag:0.14,rin:0.27,fe:0.003,ae:0.002,vta:0.04,vtb:0.0004,vtc:0.41,vtd:0,vte:0.001,vtk:0.78,sni:0.018,sio:0},
    {name:"レタス",kcal:0.12,tans:0.029,oil:0.002,tanp:0.008,tou:0.018,nat:0.02,kari:2.6,ca:0.34,mag:0.1,rin:0.3,fe:0.003,ae:0.001,vta:0.59,vtb:0.0003,vtc:0.05,vtd:0,vte:0.003,vtk:0.58,sni:0.011,sio:0},
    {name:"にんじん",kcal:0.39,tans:0.093,oil:0.002,tanp:0.007,tou:0.065,nat:0.28,kari:3,ca:0.28,mag:0.1,rin:0.26,fe:0.002,ae:0.002,vta:7.2,vtb:0.0007,vtc:0.06,vtd:0,vte:0.004,vtk:0.17,sni:0.028,sio:0.001},
    {name:"大根",kcal:0.18,tans:0.041,oil:0.001,tanp:0.005,tou:0.027,nat:0.19,kari:2.3,ca:0.24,mag:0.1,rin:0.18,fe:0.002,ae:0.002,vta:0,vtb:0.0002,vtc:0.12,vtd:0,vte:0,vtk:0,sni:0.014,sio:0},
    {name:"カボチャ",kcal:0.26,tans:0.109,oil:0.001,tanp:0.016,tou:0.081,nat:0.01,kari:4,ca:0.2,mag:0.15,rin:0.42,fe:0.005,ae:0.003,vta:0.6,vtb:0.0007,vtc:0.16,vtd:0,vte:0.018,vtk:0.26,sni:0.028,sio:0},
    {name:"トマト",kcal:0.19,tans:0.047,oil:0.001,tanp:0.007,tou:0.037,nat:0.03,kari:2.1,ca:0.07,mag:0.09,rin:0.26,fe:0.002,ae:0.001,vta:0.45,vtb:0.0005,vtc:0.15,vtd:0,vte:0.009,vtk:0.04,sni:0.01,sio:0},
    {name:"レモン",kcal:0.54,tans:0.125,oil:0.007,tanp:0.009,tou:0.076,nat:0.04,kari:1.3,ca:0.67,mag:0.11,rin:0.15,fe:0.002,ae:0.001,vta:0.02,vtb:0.0007,vtc:1,vtd:0,vte:0.016,vtk:0,sni:0.049,sio:0},
    {name:"りんご",kcal:0.54,tans:0.162,oil:0.003,tanp:0.002,tou:0.143,nat:0,kari:1.2,ca:0.04,mag:0.05,rin:0.12,fe:0.001,ae:0.001,vta:0.02,vtb:0.0002,vtc:0.06,vtd:0,vte:0.004,vtk:0.02,sni:0.019,sio:0},
    {name:"しいたけ",kcal:0.18,tans:0.064,oil:0.003,tanp:0.031,tou:0.015,nat:0.01,kari:2.9,ca:0.01,mag:0.14,rin:0.87,fe:0.004,ae:0.009,vta:0,vtb:0.0013,vtc:0,vtd:0.003,vte:0,vtk:0,sni:0.049,sio:0},
    {name:"エリンギ",kcal:0.24,tans:0.074,oil:0.005,tanp:0.036,tou:0,nat:0.02,kari:4.6,ca:0.01,mag:0.15,rin:1.2,fe:0.003,ae:0.007,vta:0,vtb:0.0014,vtc:0,vtd:0.018,vte:0,vtk:0,sni:0.043,sio:0},
    {name:"枝豆",kcal:1.34,tans:0.088,oil:0.062,tanp:0.117,tou:0.043,nat:0.01,kari:5.9,ca:0.58,mag:0.62,rin:1.7,fe:0.025,ae:0.014,vta:2.9,vtb:0.0031,vtc:0.27,vtd:0,vte:0.12,vtk:0.3,sni:0.05,sio:0},
    {name:"インゲン豆",kcal:0.23,tans:0.564,oil:0.025,tanp:0.221,tou:0.368,nat:0,kari:14,ca:1.4,mag:1.5,rin:3.7,fe:0.059,ae:0.025,vta:0,vtb:0.0064,vtc:0,vtd:0,vte:0.001,vtk:0.08,sni:0.196,sio:0},
    {name:"ワカメ",kcal:0.16,tans:0.056,oil:0.002,tanp:0.019,tou:0.02,nat:6.1,kari:7.3,ca:1,mag:1.1,rin:0.36,fe:0.007,ae:0.003,vta:0.79,vtb:0.0018,vtc:0.15,vtd:0,vte:0.001,vtk:1.4,sni:0.036,sio:0.015},
    {name:"ひじき",kcal:1.42,tans:0.56,oil:0.032,tanp:0.092,tou:0.042,nat:18,kari:64,ca:10,mag:6.4,rin:0.93,fe:0.582,ae:0.01,vta:3.6,vtb:0.0009,vtc:0,vtd:0,vte:0.05,vtk:5.8,sni:0.518,sio:0.047},
    {name:"ごま油",kcal:9.2,tans:0,oil:1,tanp:0,tou:0,nat:0,kari:0,ca:0.01,mag:0,rin:0.01,fe:0.001,ae:0,vta:0,vtb:0,vtc:0,vtd:0,vte:0.004,vtk:0.05,sni:0,sio:0},
    {name:"オリーブオイル",kcal:4,tans:0,oil:1,tanp:0,tou:0,nat:0,kari:0,ca:0,mag:0,rin:0,fe:0,ae:0,vta:0.15,vtb:0,vtc:0,vtd:0,vte:0.074,vtk:0.42,sni:0,sio:0},
    {name:"じゃがいも",kcal:0.76,tans:0.173,oil:0.001,tanp:0.018,tou:0.084,nat:0.01,kari:4.1,ca:0.04,mag:0.19,rin:0.47,fe:0.004,ae:0.002,vta:0,vtb:0.0011,vtc:0.28,vtd:0,vte:0,vtk:0.01,sni:0.089,sio:0},
    {name:"サツマイモ",kcal:1.31,tans:0.319,oil:0.002,tanp:0.012,tou:0.297,nat:0.11,kari:4.8,ca:0.36,mag:0.24,rin:0.47,fe:0.006,ae:0.002,vta:0.02,vtb:0.0009,vtc:0.29,vtd:0,vte:0.015,vtk:0,sni:0.022,sio:0},
    {name:"パスタ",kcal:1.48,tans:0.322,oil:0.009,tanp:0.058,tou:0.454,nat:4.6,kari:0.14,ca:0.08,mag:0.2,rin:0.53,fe:0.007,ae:0.007,vta:0,vtb:0.0006,vtc:0,vtd:0,vte:0.002,vtk:0,sni:0.015,sio:0.012},
    {name:"中華麺",kcal:1.49,tans:0.557,oil:0.012,tanp:0.086,tou:0.536,nat:4.1,kari:3.5,ca:0.21,mag:0.13,rin:0.66,fe:0.005,ae:0.004,vta:0,vtb:0.0002,vtc:0,vtd:0,vte:0.002,vtk:0,sni:0.021,sio:0.01},
    {name:"牛肉",kcal:3.7,tans:0.002,oil:0.329,tanp:0.144,tou:0.0035,nat:0.52,kari:2.3,ca:0.04,mag:0.14,rin:1.3,fe:0.015,ae:0.03,vta:0.24,vtb:0.0005,vtc:0,vtd:0.004,vte:0.011,vtk:0.13,sni:0,sio:0.001},
    {name:"豚肉",kcal:3.8,tans:0.001,oil:0.346,tanp:0.142,tou:0,nat:0.47,kari:2.5,ca:0.03,mag:0.15,rin:1.4,fe:0.006,ae:0.018,vta:0.1,vtb:0.0054,vtc:0,vtd:0.004,vte:0.006,vtk:0.04,sni:0,sio:0.001},
    {name:"イワシ",kcal:1.69,tans:0.002,oil:0.092,tanp:0.192,tou:0.002,nat:0.81,kari:2.7,ca:0.74,mag:0.3,rin:2.3,fe:0.021,ae:0.016,vta:0.08,vtb:0.0003,vtc:0,vtd:0.32,vte:0.025,vtk:0.01,sni:0,sio:0.002},
    {name:"アジ",kcal:1.21,tans:0.001,oil:0.045,tanp:0.197,tou:0.001,nat:1.3,kari:3.6,ca:0.66,mag:0.34,rin:2.3,fe:0.006,ae:0.011,vta:0.07,vtb:0.0013,vtc:0,vtd:0.089,vte:0.006,vtk:0,sni:0,sio:0.003},
    {name:"米",kcal:3.56,tans:0.4,oil:0,tanp:0,tou:0.4,nat:0,kari:0,ca:0,mag:0,rin:0,fe:0,ae:0,vta:0,vtb:0,vtc:0,vtd:0,vte:0,vtk:0,sni:0,sio:0},
    {name:"食パン",kcal:2.69,tans:0.467,oil:0.044,tanp:0.093,tou:0.44,nat:5,kari:0.97,ca:0.29,mag:0.2,rin:0.83,fe:0.006,ae:0.008,vta:0,vtb:0.0007,vtc:0,vtd:0,vte:0.005,vtk:0,sni:0.023,sio:0.013},
    {name:"牛乳",kcal:0.67,tans:0.048,oil:0.038,tanp:0.033,tou:0.048,nat:0.41,kari:1.5,ca:1.1,mag:0.1,rin:0.93,fe:0,ae:0.004,vta:0.38,vtb:0.0004,vtc:0.01,vtd:0.003,vte:0.001,vtk:0.02,sni:0,sio:0.001},
    {name:"卵",kcal:1.52,tans:0.004,oil:0.107,tanp:0.124,tou:0.004,nat:1.6,kari:1.5,ca:0.51,mag:0.11,rin:1.7,fe:0.014,ae:0.012,vta:2.1,vtb:0.0007,vtc:0,vtd:0.052,vte:0.051,vtk:0.14,sni:0,sio:0.004},
    {name:"砂糖",kcal:3.87,tans:0.993,oil:0,tanp:0,tou:0.993,nat:0.01,kari:0.02,ca:0.01,mag:0,rin:0,fe:0,ae:0,vta:0,vtb:0,vtc:0,vtd:0,vte:0,vtk:0,sni:0,sio:0},
    {name:"醤油",kcal:0.71,tans:0.079,oil:0,tanp:0.077,tou:0.079,nat:57,kari:3.9,ca:0.29,mag:0.65,rin:1.6,fe:0.017,ae:0.009,vta:0,vtb:0.0005,vtc:0,vtd:0,vte:0,vtk:0,sni:0,sio:0.145},
  ];


  
  const foodInput1 = document.getElementById("kcal1");




  for(let x=0; x < allPullDown.length; x++){
    allPullDown[x].onchange = function(){
      document.getElementById("get").innerHTML = food[this.value].name;
        foodInput1.addEventListener("input", () => {
            var inputValue1 = foodInput1.value;
            var a = food[this.value].kcal * inputValue1;
            var b = food[this.value].tans * inputValue1;
            var c = food[this.value].oil * inputValue1;
            var d = food[this.value].tanp * inputValue1;
            var e = food[this.value].tou * inputValue1;
            var f = food[this.value].nat * inputValue1;
            var g = food[this.value].kari * inputValue1;
            var h = food[this.value].ca * inputValue1;
            var i = food[this.value].mag * inputValue1;
            var j = food[this.value].rin * inputValue1;
            var k = food[this.value].fe * inputValue1;
            var l = food[this.value].ae * inputValue1;
            var m = food[this.value].vta * inputValue1;
            var n = food[this.value].vtb * inputValue1;
            var o = food[this.value].vtc * inputValue1;
            var p = food[this.value].vtd * inputValue1;
            var q = food[this.value].vte * inputValue1;
            var r = food[this.value].vtk * inputValue1;
            var s = food[this.value].sni * inputValue1;
            var t = food[this.value].sio * inputValue1;

            document.getElementById("profit1").innerHTML = Math.trunc(a); //カロリー
            document.getElementById("profit2").innerHTML = (b).toFixed(1); //炭水化物
            document.getElementById("profit3").innerHTML = (c).toFixed(2); //脂質
            document.getElementById("profit4").innerHTML = (d).toFixed(2); //たんぱく質
            document.getElementById("profit5").innerHTML = (e).toFixed(2); //糖質
            document.getElementById("profit6").innerHTML = (f).toFixed(2); //ナトリウム
            document.getElementById("profit7").innerHTML = (g).toFixed(2); //カリウム
            document.getElementById("profit8").innerHTML = (h).toFixed(2); //カルシウム
            document.getElementById("profit9").innerHTML = (i).toFixed(2); //マグネシウム
            document.getElementById("profit10").innerHTML = (j).toFixed(2); //リン
            document.getElementById("profit11").innerHTML = (k).toFixed(2); //鉄
            document.getElementById("profit12").innerHTML = (l).toFixed(2); //亜鉛
            document.getElementById("profit13").innerHTML = (m).toFixed(2); //ビタミンA
            document.getElementById("profit14").innerHTML = (n).toFixed(2); //ビタミンB1
            document.getElementById("profit15").innerHTML = (o).toFixed(2); //ビタミンC
            document.getElementById("profit16").innerHTML = (p).toFixed(2); //ビタミンD
            document.getElementById("profit17").innerHTML = (q).toFixed(2); //ビタミンE
            document.getElementById("profit18").innerHTML = (r).toFixed(2); //ビタミンK
            document.getElementById("profit19").innerHTML = (s).toFixed(2); //食物繊維
            document.getElementById("profit20").innerHTML = (t).toFixed(2); //食塩

            //カロリー表示数値の色分岐
            if(a == 0){
              document.getElementById("profit1").style.color = 'black';
            }else if(a <= 2000){
              document.getElementById("profit1").style.color = 'orange';
            }else if(2400 <= a){
              document.getElementById("profit1").style.color = 'red';
            }else{
              document.getElementById("profit1").style.color = 'black';
            };

            //炭水化物表示数値の色分岐
            if(b == 0){
              document.getElementById("profit2").style.color = 'black';
            }else if(b <= a / 0.5){
              document.getElementById("profit2").style.color = 'orange';
            }else if(a / 0.65 <= b){
              document.getElementById("profit2").style.color = 'red';
            }else{
              document.getElementById("profit2").style.color = 'black';
            }

            //脂質表示数値の色分岐
            if(c == 0){
              document.getElementById("profit3").style.color = 'black';
            }else if(c <= 60){
              document.getElementById("profit3").style.color = 'orange';
            }else if(90 <= c){
              document.getElementById("profit3").style.color = 'red';
            }else{
              document.getElementById("profit3").style.color = 'black';
            };

            //たんぱく質表示数値の色分岐
            if(d == 0){
              document.getElementById("profit4").style.color = 'black';
            }else if(d <= 50){
              document.getElementById("profit4").style.color = 'orange';
            }else if(70 <= d){
              document.getElementById("profit4").style.color = 'red';
            }else{
              document.getElementById("profit4").style.color = 'black';
            };

            //糖質表示数値の色分岐
            if(e == 0){
              document.getElementById("profit5").style.color = 'black';
            }else if(e <= 280){
              document.getElementById("profit5").style.color = 'orange';
            }else if(380 <= e){
              document.getElementById("profit5").style.color = 'red';
            }else{
              document.getElementById("profit5").style.color = 'black';
            };

            //ナトリウム表示数値の色分岐
            if(f == 0){
              document.getElementById("profit6").style.color = 'black';
            }else if(f <= 600){
              document.getElementById("profit6").style.color = 'orange';
            }else if(600 <= f){
              document.getElementById("profit6").style.color = 'red';
            }else{
              document.getElementById("profit6").style.color = 'black';
            };

            //カリウム表示数値の色分岐
            if(g == 0){
              document.getElementById("profit7").style.color = 'black';
            }else if(g <= 2500){
              document.getElementById("profit7").style.color = 'orange';
            }else if(3000 <= g){
              document.getElementById("profit7").style.color = 'red';
            }else{
              document.getElementById("profit7").style.color = 'black';
            };

            //カルシウム表示数値の色分岐
            if(h == 0){
              document.getElementById("profit8").style.color = 'black';
            }else if(h <= 800){
              document.getElementById("profit8").style.color = 'orange';
            }else if(2500 <= h){
              document.getElementById("profit8").style.color = 'red';
            }else{
              document.getElementById("profit8").style.color = 'black';
            };

            //マグネシウム表示数値の色分岐
            if(i == 0){
              document.getElementById("profit9").style.color = 'black';
            }else if(i <= 340){
              document.getElementById("profit9").style.color = 'orange';
            }else{
              document.getElementById("profit9").style.color = 'black';
            };

            //リン表示数値の色分岐
            if(j == 0){
              document.getElementById("profit10").style.color = 'black';
            }else if(j <= 1000){
              document.getElementById("profit10").style.color = 'orange';
            }else if(3000 <= j){
              document.getElementById("profit10").style.color = 'red';
            }else{
              document.getElementById("profit10").style.color = 'black';
            };

            //鉄表示数値の色分岐
            if(k == 0){
              document.getElementById("profit11").style.color = 'black';
            }else if(k <= 7){
              document.getElementById("profit11").style.color = 'orange';
            }else if(50 <= k){
              document.getElementById("profit11").style.color = 'red';
            }else{
              document.getElementById("profit11").style.color = 'black';
            };

            //亜鉛表示数値の色分岐
            if(l == 0){
              document.getElementById("profit12").style.color = 'black';
            }else if(l <= 10){
              document.getElementById("profit12").style.color = 'orange';
            }else if(40 <= l){
              document.getElementById("profit12").style.color = 'red';
            }else{
              document.getElementById("profit12").style.color = 'black';
            };

            //ビタミンA表示数値の色分岐
            if(m == 0){
              document.getElementById("profit13").style.color = 'black';
            }else if(m <= 850){
              document.getElementById("profit13").style.color = 'orange';
            }else if(2700 <= m){
              document.getElementById("profit13").style.color = 'red';
            }else{
              document.getElementById("profit13").style.color = 'black';
            };

            //ビタミンB1表示数値の色分岐
            if(n == 0){
              document.getElementById("profit14").style.color = 'black';
            }else if(n <= 1.4){
              document.getElementById("profit14").style.color = 'orange';
            }else{
              document.getElementById("profit14").style.color = 'black';
            };

            //ビタミンC表示数値の色分岐
            if(o == 0){
              document.getElementById("profit15").style.color = 'black';
            }else if(o <= 100){
              document.getElementById("profit15").style.color = 'orange';
            }else{
              document.getElementById("profit15").style.color = 'black';
            };

            //ビタミンD表示数値の色分岐
            if(p == 0){
              document.getElementById("profit16").style.color = 'black';
            }else if(p <= 5.5){
              document.getElementById("profit16").style.color = 'orange';
            }else if(100 <= p){
              document.getElementById("profit16").style.color = 'red';
            }else{
              document.getElementById("profit16").style.color = 'black';
            };

            //ビタミンE表示数値の色分岐
            if(q == 0){
              document.getElementById("profit17").style.color = 'black';
            }else if(q <= 6.5){
              document.getElementById("profit17").style.color = 'orange';
            }else if(850 <= q){
              document.getElementById("profit17").style.color = 'red';
            }else{
              document.getElementById("profit17").style.color = 'black';
            };

            //ビタミンK表示数値の色分岐
            if(r == 0){
              document.getElementById("profit18").style.color = 'black';
            }else if(r <= 150){
              document.getElementById("profit18").style.color = 'orange';
            }else{
              document.getElementById("profit18").style.color = 'black';
            };

            //食物繊維表示数値の色分岐
            if(s == 0){
              document.getElementById("profit19").style.color = 'black';
            }else if(s <= 20){
              document.getElementById("profit19").style.color = 'orange';
            }else{
              document.getElementById("profit19").style.color = 'black';
            };

            //食塩表示数値の色分岐
            if(t == 0){
              document.getElementById("profit20").style.color = 'black';
            }else if(8 < t){
              document.getElementById("profit20").style.color = 'red';
            }else{
              document.getElementById("profit20").style.color = 'black';
            };

        });
    };
  }

});