import React from "react";
import './announcementBar.css'

export default function AnnouncementBar({children})
{
    return <div className="announcementBarContainer">
        <p>{children}</p>
    </div>
}