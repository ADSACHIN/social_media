import "./topbar.css"
import { Search, Person, Chat, Notifications } from "@mui/icons-material"
import {Link} from "react-router-dom"
export default function Topbar() {
    return (
        <div className="topbar-c">
            {/* <h1>TOP BAR</h1> */}
            <div className="topbarleft">
                <Link to="/">
                <span className="logo">SOCIAL MEDIA</span>
               </Link>
            </div>

         <div className="comb">
            <div className="topbarright">
                <div className="topbarlinks">
                    <span className="topbarlink">HOME PAGE</span>
                    <span className="topbarlink">TIME LINE</span>
                    <span className="topbarlink">SEE</span>
                    <span className="topbarlink">well</span>


                </div>
                 </div>
                <div className="topbarcentre">
                    <div className="searchbar">
                        <Search className="icon" />
                        <input placeholder="serch friend" className="searchinput" />
                    </div>
                </div>
                <div className="topbaricons">
                    <div className="topbariconitem">
                        <Person />
                        <span className="topbariconbadge">1</span>
                    </div>
                    <div className="topbariconitem">
                        <Chat />
                        <span className="topbariconbadge">2</span>
                    </div>
                    <div className="topbariconitem">
                        <Notifications />
                        <span className="topbariconbadge">3</span>
                    </div>
                    <img src="./assets/images.png" alt="image" className="topbarimg" />
                </div>
                </div>
           

        </div>
    )
}