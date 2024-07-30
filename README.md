# DEMO

---

create by someone in sometime

## Bundle Tip

This project has been created using **webpack-cli**, before you bundle the project, please make sure you have installed node.js and yarn.

Then, run the command below

```
yarn install
```

to init modules.

This project use `thread-loader` to reduce bundle time. Please create `cpu.config.js` in project directory,file template like

```javascript
//javascript worker config
exports.jsWorkerPool = {
  workers: 32, // node process number.we recommend use your computer thread number.
  poolTimeout: 2000 //time to kill node process
}
//css worker config
exports.cssWorkerPool = {
  workerParallelJobs: 16, // node process number.we recommend use your computer thread number.
  poolTimeout: 2000 //time to kill node process
}
```

Up to here, you could bundle this project.

---

## Front-end Stack

development stack

|name|description|version| 
|---|---|---|
|webpack|bundle tool|5.0.0|
|tailwindcss|utility-first CSS framework|2.2.16|
|vue.js|javascript framework|2.6.14|

tool stack

|name|description|version| 
|---|---|---|
|eslint|limit code style(standard template)|7.32.0|
|purgecss|shrink css size|4.0.3|
|thread-loader|accelerate multi-core computer bundle speed|3.0.4|
|material-design-icon|icon pack|3.0.2|
