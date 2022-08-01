import React from 'react'

const Newitems = (props) =>  {

        let {title, description, imageurl, newsurl, date, author} = props;
        return (
            <div className="my-3">
                <div className="card" style={{width: "18rem"}}>
                    <img className="card-img-top" src={!imageurl?"https://c.ndtvimg.com/2021-10/ftvdt6rg_atlas-v-rocketlucy-spacecraftafp_625x300_16_October_21.jpg":imageurl} alt="Card image cap"/>
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}</p>
                        <p className="card-text"><small className="text-muted">By {!author?"unknown":author} last updated on {new Date(date).toGMTString()}</small></p>
                        <a href={newsurl} className ="btn btn-sm btn-dark">Read More</a>
                    </div>
                </div>
            </div>
        )
}

export default Newitems












// export class Newitems extends Component {

//     render() {
//         let {title, description, imageurl, newsurl, date, author} = props;
//         return (
//             <div className="my-3">
//                 <div className="card" style={{width: "18rem"}}>
//                     <img className="card-img-top" src={!imageurl?"https://c.ndtvimg.com/2021-10/ftvdt6rg_atlas-v-rocketlucy-spacecraftafp_625x300_16_October_21.jpg":imageurl} alt="Card image cap"/>
//                     <div className="card-body">
//                         <h5 className="card-title">{title}</h5>
//                         <p className="card-text">{description}</p>
//                         <p className="card-text"><small className="text-muted">By {!author?"unknown":author} last updated on {new Date(date).toGMTString()}</small></p>
//                         <a href={newsurl} className ="btn btn-sm btn-dark">Read More</a>
//                     </div>
//                 </div>
//             </div>
//         )
//     }
// }

// export default Newitems
