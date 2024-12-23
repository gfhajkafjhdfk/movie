window.onload = function() {
    // 3秒後に次のページに遷移
    setTimeout(function() {
        document.getElementById('movieRoomLogo').style.display = 'none'; // ロゴを隠す
        document.getElementById('nextPage').style.display = 'block'; // 次のページを表示
    }, 3000); // 3000ミリ秒（3秒）後に実行
};
