# 本專案為學習使用webpack v4.8.1的練習 
> [name=仲豪] 


## 1.安裝node,npm
本專案的版本

```javascript
$npm -v  
//5.6.0
$node -v
//v8.11.1
```


## 2.透過npm安裝webpack、webpack loader、webpack-dev-sever
```javascript
$npm init
```
按指示初始化 NPM 設定檔 package.json

```javascript
$npm install --save-dev babel-core babel-eslint babel-loader babel-preset-es2015 babel-preset-react html-webpack-plugin webpack-cli webpack webpack-dev-server
```
--save-dev 是可以讓你將安裝套件的名稱和版本資訊存放到 package.json，方便日後使用

### html-webpack-plugin
簡化HTML文件的創建，以便webpack提供服務，他能自動生成一個html文件並把打包好的js文件放到html
([參考網址](https://doc.webpack-china.org/plugins/html-webpack-plugin/#%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95))


## 3.在根目錄設定webpack.config.js
## 4.在根目錄設定.babelrc

## 5.安裝 react 和 react-dom
```javascript
$npm install --save-dev react react-dom
```

## 6.安裝 style 和 url圖片 的loader文件
```javascript
$npm install style-loader css-loader url-loader --save-dev
```
引入loader後，就可以在index.js進入點import引入css或其他靜態資源


## 7.安裝 sass loader文件
```javascript
$npm install sass-loader node-sass --save-dev
```
引入loader後，就可以在index.js進入點import引入scss



