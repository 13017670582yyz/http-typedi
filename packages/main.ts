import 'reflect-metadata'
import { HTTPClient } from '../example/main'
import './style.css'

const {
  articleController: { GetTableDataList, GetArticleList }
} = HTTPClient

GetTableDataList({
  currentPage: 1,
  pageSize: 10
})
GetArticleList({
  currentPage: 1,
  pageSize: 10,
  channel: ['1', '2'],
  checkDemoList: [
    {
      age: 1,
      name: '11111'
    }
  ],
  content: '123123',
  param: {
    status: 1,
    text: '123121111111',
    title: '11231223'
  }
})

console.log(HTTPClient)

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
   <h1>http-typedi</h1>
  </div>
`
