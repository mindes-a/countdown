 alert("Minedsのサービス、卒業までのカウントダウンをご利用いただきありがとうございます。\nほかの作品などもありますのでこちらからご覧ください。\nカウントダウンは、卒業式（３月２４日）までの日までの日にちを計算して求めています\n参考\n２日前になるとある演出が起きます！！\n裏使用も更新しました！！")
 const btnbtn = document.getElementById("RealtimeCountdownArea");
 let count = 0;


 btnbtn.addEventListener("click",function(){
   if(count == 0){
      count++;
      document.getElementById("audioo").innerHTML =' <audio autoplay  src="music.mp3"></audio>';
   }else if(count == 1)
 document.getElementById("audioo").innerHTML =' <audio autoplay  src="music2.mp3"></audio>'
 })
  function set2fig(num) {
   // 数値が1桁だったら2桁の文字列にして返す
   var ret;
   if( num < 10 ) { ret = "0" + num; }
   else { ret = num; }
   return ret;
}
function isNumOrZero(num) {
   // 数値でなかったら0にして返す
   if( isNaN(num) ) { return 0; }
   return num;
}
function showCountdown() {
   // 現在日時を数値(1970-01-01 00:00:00からのミリ秒)に変換
   var nowDate = new Date();
   var dnumNow = nowDate.getTime();
 
   // 指定日時を数値(1970-01-01 00:00:00からのミリ秒)に変換
   var inputYear  = 2022;
   var inputMonth = 3 - 1;
   var inputDate  = 24;
   var inputHour  = 9;
   var inputMin   = 00;
   var inputSec   = 00;
   var targetDate = new Date( isNumOrZero(inputYear), isNumOrZero(inputMonth), isNumOrZero(inputDate), isNumOrZero(inputHour), isNumOrZero(inputMin), isNumOrZero(inputSec) );
   var dnumTarget = targetDate.getTime();
 
   // 表示を準備
   var dlYear  = targetDate.getFullYear();
   var dlMonth = targetDate.getMonth() + 1;
   var dlDate  = targetDate.getDate();
   var dlHour  = targetDate.getHours();
   var dlMin   = targetDate.getMinutes();
   var dlSec   = targetDate.getSeconds();
   var msg1 = "期限の" + dlYear + "/" + dlMonth + "/" + dlDate + " " + set2fig(dlHour) + ":" + set2fig(dlMin) + ":" + set2fig(dlSec);
 
   // 引き算して日数(ミリ秒)の差を計算
   var diff2Dates = dnumTarget - dnumNow;
   if( dnumTarget < dnumNow ) {
      // 期限が過ぎた場合は -1 を掛けて正の値に変換
      diff2Dates *= -1;
   }
 
   // 差のミリ秒を、日数・時間・分・秒に分割
   var dDays  = diff2Dates / ( 1000 * 60 * 60 * 24 );   // 日数
   diff2Dates = diff2Dates % ( 1000 * 60 * 60 * 24 );
   var dHour  = diff2Dates / ( 1000 * 60 * 60 );   // 時間
   diff2Dates = diff2Dates % ( 1000 * 60 * 60 );
   var dMin   = diff2Dates / ( 1000 * 60 );   // 分
   diff2Dates = diff2Dates % ( 1000 * 60 );
   var dSec   = diff2Dates / 1000;   // 秒
   var msg2 = Math.floor(dDays) + "日"
            + Math.floor(dHour) + "時間"
            + Math.floor(dMin) + "分"
            + Math.floor(dSec) + "秒";
 
   // 表示文字列の作成
   var msg;
   if( dnumTarget > dnumNow ) {
      // まだ期限が来ていない場合
      msg ="卒業式まで"+"あと" + "<strong>" +msg2+ "</strong>";
      if (msg == "卒業式まであと<strong>2日20時間00分10秒</strong>") {
         window.open("sapuraizu.html")
      }
   }
   else {
      // 期限が過ぎた場合
      msg = msg1 + "は、既に" + msg2 + "前に過ぎました。卒業おめでとう！！";
   }
 
   // 作成した文字列を表示
   document.getElementById("RealtimeCountdownArea").innerHTML = msg;
}
// 1秒ごとに実行
setInterval('showCountdown()',1000);