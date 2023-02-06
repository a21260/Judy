// 點擊播放音檔
function playAudio(str) {
    // 產生音檔，給予路徑，播放音檔
    const audio=new Audio("./"+str+".mp3");
    audio.play();
    // 播放時更改文字樣式
    var cli=$( "p:contains('sân bay')" );
    alert("你好");

    
}



