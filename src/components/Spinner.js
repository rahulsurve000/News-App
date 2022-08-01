// Spinner Gif - ajaxload.info
import React, { Component } from 'react'
import loading from './loading-gif.gif' 


const Spinner = () => {
        return (
            <div className="text-center my-3">
                <img src={loading} alt="loading"/>
            </div>
        )
}

export default Spinner


// export default class Spinner extends Component {
//     render() {
//         return (
//             <div className="text-center my-3">
//                 <img src={loading} alt="loading"/>
//             </div>
//         )
//     }
// }
