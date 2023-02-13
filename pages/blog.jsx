
// import { useState, useEffect } from "react"
// import Markdown from "markdown-to-jsx"


// const Post = () => {
//     const [postContent, setPostcontent] = useState('')
//     const [isDark, setIsDark] = useState(true)

//     useEffect(() => {
//         import('../pages/posts/gettingstarted.md')
//             .then(res =>
//                 fetch(res.default)
//                     .then(response => response.text())
//                     .then(response => setPostcontent(response))
//                     .catch(err => console.log(err))
//             )
//     }, [])
//     return (
//         <div className="article-wrapper">
//             <article>
//                 <main>
//                     <Markdown>
//                         {postContent}
//                     </Markdown>
//                 </main>
//             </article>
//         </div>
//     )
// }

// export default Post

// import {ErrorMessage} from '../components/ErrorMessage'
// import Markdown from 'markdown-to-jsx';
// import React from 'react';
// import { render } from 'react-dom';

// function RenderBlog(file){
//     return render(<Markdown># Hello world!</Markdown>, document.body)
// }

// export default function Blog() {

//         const file = RenderBlog('gettingstarted');
//     return (
//         <>
//             <ErrorMessage>This Feature is being implemented</ErrorMessage>
//         </>
//     )
// }
