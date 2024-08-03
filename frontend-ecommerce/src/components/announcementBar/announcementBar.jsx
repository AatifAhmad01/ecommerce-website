import React from "react";
import './announcementBar.css'

export default function AnnouncementBar({children})
{
    return <div className="announcementBarContainer">
        <p className="f-exo-600">{children}</p>
    </div>
}