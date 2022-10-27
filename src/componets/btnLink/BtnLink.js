import React from 'react'
import './btnLink.css'

function BtnLink() {
    const url = ["https://twitter.com/kokoblack_tweet", 
    "https://training.zuri.team/", 
    "http://books.zuri.team/", 
    "https://books.zuri.team/", 
    "https://background.zuri.team/", 
    "https://books.zuri.team/design-rules"]


    const linkMap = [
        {
            id: 1,
            anchor: <button id='tweet_link'><a href={url[0]}>Twitter Link</a></button>
        },

        {
            id: 2,
            anchor: <button id='btn_zuri'><a href={url[1]}>Zuri Team</a></button>
        },

        {
            id: 3,
            anchor: <button id='books'><a href={url[2]}>Zuri Books</a></button>
        },

        {
            id: 4,
            anchor: <button id='book_python'><a href={url[3]}>Python Books</a></button>
        },

        {
            id: 5,
            anchor: <button id='pitch'><a href={url[4]}>Background Check for Coders</a></button>
        },

        {
            id: 6,
            anchor: <button id='book_design'><a href={url[5]}>Design Book</a></button>
        }
    ]

    const link = linkMap.map(ele => <li key={ele.id}>{ele.anchor}</li>)



  return (
    <div>
        <ul>{link}</ul>
    </div>
  )
}

export default BtnLink