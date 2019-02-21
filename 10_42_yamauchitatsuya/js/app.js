var search = instantsearch({
    appId: '69E7GIEFM1',    //メモっていたApplication ID
    apiKey: '6f24a0f99bbea88f9983a052429b8932', // メモっていたsearch only API key  adminではないです。
    indexName: 'LawNameList',
    urlSync: true,    //ブラウザのURLが同期され、ユーザーは現在の検索状態に対応する貼り付けURLをコピーできます。
    searchParameters: {
        hitsPerPage: 10  //1ページあたりの表示するデータ数
    }
});

//検索範囲を縛ることができます
search.addWidget(
    instantsearch.widgets.searchBox({
        container: '#search-input'
    })
);

// 検索結果を表示する
search.addWidget(
    instantsearch.widgets.hits({
        container: '#hits',
        templates: {
            item: document.getElementById('hit-template').innerHTML,
            empty: "キーワード <em>\"{{query}}\"</em>は存在しません"
        }
    })
);

//ページネーション
search.addWidget(
    instantsearch.widgets.pagination({
        container: '#pagination'
    })
);
//検索をスタートさせる
search.start();

console.log('OK');