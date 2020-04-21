'use strict';

{
  /* 変数定義 */
  const startBtn = document.getElementById('startBtn');
  const stopBtn = document.getElementById('stopBtn');

  // スライドバー設定
  $(function () {
    // 初期
    for (let i = 1; i <= 8; i++) {
      $('#vol' + i).html($('#customRange' + i).val());

      $('#customRange' + i).on('input change', function () {
        // 変動
        $('#vol' + i).html($(this).val());
      });
    }
  });

  // スタートボタン押下時処理
  startBtn.addEventListener('click', () => {

    // ボタン切り替え
    $('#startBtn').addClass("opacity");
    $('#startBtn').addClass("btn-disabled");
    $('#stopBtn').removeClass("opacity");
    $('#stopBtn').removeClass("btn-disabled");

    let audio = {};

    // サウンド実行処理
    for (let i = 1; i <= 8; i++) {
      audio['audio' + i] = $('#sound' + i).get(0);
      // audio = $('#sound' + i).get(0);
      audio['audio' + i].volume = parseInt($('#vol' + i).text()) / 100;
      audio['audio' + i].play();

      $(function () {

        $('#customRange' + i).on('input change', function () {
          // 変動
          audio['audio' + i].volume = parseInt($('#vol' + i).text()) / 100;
        });
      });
    }

  });

  // ストップボタン押下時処理
  stopBtn.addEventListener('click', () => {

    // ボタン切り替え
    $('#startBtn').removeClass("opacity");
    $('#startBtn').removeClass("btn-disabled");
    $('#stopBtn').addClass("opacity");
    $('#stopBtn').addClass("btn-disabled");

    // サウンド停止処理
    for (let i = 1; i <= 8; i++) {
      // if (!($('#vol' + i).text() == '0')) {
        var audio = $('#sound' + i).get(0);
        // 停止 (止めて再生時間を戻す)
        audio.pause();
        audio.currentTime = 0;
      // }
    }
  });

}