import React from 'react'

export default function Ex4() {
    const list = ["HTML","Javascript","Python","C#"];
  return (
    <div>
        <h1>DANH SÁCH KHÓA HỌC</h1>
    <ul>
    {
      list.map((item, index) => 
      <li key={index}>{item}</li>
      )
    }
    </ul>
    </div>
  )
}
