// ボタンと移動先の要素を取得
    const button = document.getElementById('scroll-trigger');
    const target = document.getElementById('target-destination');

    // ボタンがクリックされた時の処理
    button.addEventListener('click', () => {
      target.scrollIntoView({
        behavior: 'smooth', // 動きを滑らかにする
        block: 'start'      // 要素の「上端」が画面の上端に合うように配置
      });
    });