/*
ConceptisSudoku解锁
@787a68

下载地址：https://apps.apple.com/us/app/conceptis-sudoku/id537201666

[rewrite_local]
^https?+:\/\/mobile\.conceptispuzzles\.com\/catalog_ios\/SudokuV2 url script-response-body https://raw.githubusercontent.com/787a68/Script/main/Crack/ConceptisSudoku.js

mobile.conceptispuzzles.com
*/

var body = $response.body
  .replace(/(<key>Free<\/key>\r\n\t\t\t\t<true \/>\r\n\t\t\t\t)/g, "")
  .replace(/<key>Info<\/key>/g, "<key>Free</key>\r\n\t\t\t\t<true />\r\n\t\t\t\t<key>Info</key>");

$done({ body });
