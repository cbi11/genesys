import React from 'react'
import { Link } from 'react-router-dom'

function JournalBackground() {
    return (
        <div className="journal-background">
            <div className="j-b-shell">
                <div className="j-b-img"></div>
                <div className="j-b-content">
                    <Link to="#">INSPIRATION</Link>
                    <h1>Learn Design Thinking like a Pro and Build Projects that People will care about</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit sapien arcu vitae orci at molestie. Pharetra quisque donec accumsan rhoncus risus. Urna magna turpis duis imperdiet elit, et, hendrerit viverra risus. Vulputate euismod commodo donec tincidunt et, aliquam. Eget scelerisque netus habitant dui porttitor cursus. Ipsum sem ut tortor ac ullamcorper. Lacus.</p>
                    <div className="author">
                        <div className="author-img"></div>
                        <p>David Mong, Apr 9, 2020</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default JournalBackground
