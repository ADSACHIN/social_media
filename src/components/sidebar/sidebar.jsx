import "./sidebar.css"
import { RssFeed, Chat, Duo, Group, Bookmark, HelpOutline, WorkOutline, Event, School } from "@mui/icons-material"
import { Users } from "../../dummydata";
import Friend from "../friend/friend";
export default function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidewrapper">
                <ul className="sidelist">
                    <li className="sideitem">
                        <RssFeed className="sideicon" />
                        <span className="sidetext">
                        Feed
                        </span>
                    </li>
                    <li className="sideitem">
                        <Chat className="sideicon" />
                        <span className="sidetext">
                        Chat 
                        </span>
                    </li>
                    <li className="sideitem">
                        <Duo className="sideicon" />
                        <span className="sidetext">
video
                        </span>
                    </li>
                    <li className="sideitem">
                        <Group className="sideicon" />
                        <span className="sidetext">
GROUPS
                        </span>
                    </li>
                    <li className="sideitem">
                        <Bookmark className="sideicon" />
                        <span className="sidetext">
BOOKMARKS
                        </span>
                    </li>
                    <li className="sideitem">
                        <HelpOutline className="sideicon" />
                        <span className="sidetext">
QUESTIONS
                        </span>
                    </li>
                    <li className="sideitem">
                        <WorkOutline className="sideicon" />
                        <span className="sidetext">
JOBS
                        </span>
                    </li>
                    <li className="sideitem">
                        <Event className="sideicon" />
                        <span className="sidetext">
EVENTS
                        </span>
                    </li>
                    <li className="sideitem">
                        <School className="sideicon" />
                        <span className="sidetext">
COURSES
                        </span>
                    </li>

                </ul>
                 <button className="sidebutton" >show more</button>
                 <hr className="sidehr"/>
                 <ul className="sidefrndlist">
                   {Users.map((u)=>(
                    <Friend key={u.id} user={u}/>
                   ))}
                   
                 </ul>
            </div>
        </div>

    )
}