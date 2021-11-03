import React, { useEffect, useState } from "react";
import axios from "axios";
import API from "../../services/api";
import DateTime from "../../services/dateTime";
import './blog.css'

const Blog = ({CortexControl}) => {
    const post = CortexControl.blogPost;
    const control = CortexControl.setBlogPost;

    const [currentPost, setCurrentPost] = useState(null)
    const [commentDock, setCommentDock] = useState(null)
    const [commenter, setCommenter] = useState("")
    const [commentContent, setCommentContent] = useState("")

    useEffect(() => {
        setCurrentPost(post)
    }, [post])

    const closeBlog = () => {
        setCommentDock(null)
        control(null)
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        if (commentDock === "OP") {
            const newComment = {
                id: currentPost.Comments.length + 1,
                UserName: commenter,
                Email: "agboola918@gmail.com",
                Content: commentContent,
                Date: DateTime.getDateFormatOne(),
                Replies: []
            }
            const updatedPost = {...currentPost, Comments: currentPost.Comments.concat(newComment)}
            axios.put(`http://${API.baseAPIUrl}/BlogPosts/${currentPost.id}`, updatedPost).then(re => {
                axios.get(`http://${API.baseAPIUrl}/BlogPosts/${currentPost.id}`).then(re => {
                    setCurrentPost(re.data)
                })
            })
        }
        else if (typeof(commentDock) === "number") {
            if (Object.keys(currentPost.Comments[commentDock]).includes("Replies")) {
                const newComment = {
                    id: currentPost.Comments[commentDock].Replies.length + 1,
                    UserName: commenter,
                    Email: "agboola918@gmail.com",
                    Content: `@${currentPost.Comments[commentDock].UserName} ${commentContent}`,
                    Date: DateTime.getDateFormatOne(),
                }
                const updatedPost = currentPost
                updatedPost.Comments[commentDock].Replies = updatedPost.Comments[commentDock].Replies.concat(newComment)

                axios.put(`http://${API.baseAPIUrl}/BlogPosts/${currentPost.id}`, updatedPost).then(re => {
                    axios.get(`http://${API.baseAPIUrl}/BlogPosts/${currentPost.id}`).then(re => {
                        setCurrentPost(re.data)
                    })
                })
            }
        }
        else {
            const newComment = {
                id: currentPost.Comments[commentDock[0]].Replies.length + 1,
                UserName: commenter,
                Email: "agboola918@gmail.com",
                Content: `@${currentPost.Comments[commentDock[0]].Replies[commentDock[1]].UserName} ${commentContent}`,
                Date: DateTime.getDateFormatOne(),
            }
            const updatedPost = currentPost
            updatedPost.Comments[commentDock[0]].Replies = updatedPost.Comments[commentDock[0]].Replies.concat(newComment)

            axios.put(`http://${API.baseAPIUrl}/BlogPosts/${currentPost.id}`, updatedPost).then(re => {
                axios.get(`http://${API.baseAPIUrl}/BlogPosts/${currentPost.id}`).then(re => {
                    setCurrentPost(re.data)
                })
            })
        }

        setCommentContent("")
        setCommentDock(null)
    }

    function replyAction(index) {
        setCommentDock(index)
    }

    return(
        <>
            <div className="dimmer" style={{display: post ? "block" : "none"}} onClick={() => closeBlog()}></div>
            <div className="blogContainer" style={{left: post ? "50%" : "-100vw"}}>
                <h3 className="blogContainerTitle"><span>News</span></h3>
                <h3 className="blogContainerCancel" onClick={() => closeBlog()}>&#x2573;</h3>
                {
                    currentPost ?
                        <div style={{width: "100%", overflow: "hidden", padding: "20px", boxSizing: "border-box"}}>
                            <h3 className="blogPostTitle">{currentPost.Title}</h3>
                            <h3 className="blogPostInfo">{currentPost.Date}<span>|</span>{currentPost.Category}</h3>
                            <hr />
                            <pre className="blogPostContent">{currentPost.Content}</pre>
                            <h3 className="blogCommentBoxTitle">Comments</h3>
                            {
                                currentPost.Comments.length > 0 ?
                                currentPost.Comments.map((comment, index) =>
                                    <div className="blogComment">
                                        <h3 className="blogCommentName">{comment.UserName}</h3>
                                        <h3 className="blogCommentDate">{comment.Date}
                                            <span onClick={() => replyAction(index)}>Reply</span>
                                        </h3>
                                        <h3 className="blogCommentContent">{comment.Content}</h3>
                                        {
                                            comment.Replies.map((reply, ind) =>
                                                <div className="blogCommentReply">
                                                    <h3 className="blogCommentName">{reply.UserName}</h3>
                                                    <h3 className="blogCommentDate">{reply.Date}
                                                        <span onClick={() => replyAction([index, ind])}>Reply</span>
                                                    </h3>
                                                    <h3 className="blogCommentContent">
                                                        {reply.Content.split(" ")[0].includes("@") ? 
                                                            <span>{reply.Content.split(" ")[0]}</span> 
                                                            : null
                                                        }
                                                        {reply.Content.split(" ").splice(1, reply.Content.split(" ").length).join(" ")}
                                                    </h3>
                                                </div>
                                            )
                                        }
                                    </div>
                                )
                                : <h3 className="blogNoComment">Be the first to comment!</h3>
                            }
                            <button className="blogAddComment" onClick={() => setCommentDock("OP")}>Add Comment</button>
                        </div>
                    : null
                }
            </div>
            <div className="blogCommentDock" style={{bottom: commentDock !== null ? "0px" : "-100vh"}}>
                <h3 className="blogCommentDockTitle">{commentDock === "OP" ? "Add Comment" : "Reply Comment"}
                    <span onClick={() => setCommentDock(null)}>&#x2573;</span>
                </h3>
                {
                    typeof(commentDock) === "number" ?
                    <div className="blogComment" style={{marginBottom: "25px"}}>
                        <h3 className="blogCommentName">{currentPost.Comments[commentDock].UserName}</h3>
                        <h3 className="blogCommentDate">{currentPost.Comments[commentDock].Date}</h3>
                        <h3 className="blogCommentContent">{currentPost.Comments[commentDock].Content}</h3>
                    </div>
                    : null
                }
                {
                    commentDock && commentDock !== "OP" && typeof(commentDock) !== "number" ?
                    <div className="blogComment" style={{marginBottom: "25px"}}>
                        <h3 className="blogCommentName">{currentPost.Comments[commentDock[0]].Replies[commentDock[1]].UserName}</h3>
                        <h3 className="blogCommentDate">{currentPost.Comments[commentDock[0]].Replies[commentDock[1]].Date}</h3>
                        <h3 className="blogCommentContent">{currentPost.Comments[commentDock[0]].Replies[commentDock[1]].Content}</h3>
                    </div>
                    : null
                }
                <form onSubmit={handleSubmit}>
                    <input className="blogCommentDockField" placeholder="Username" 
                        value={commenter} onChange={(e) => setCommenter(e.target.value)} />
                    <textarea className="blogCommentDockField" placeholder="Enter your comment." style={{height: "150px", paddingTop: "20px"}} value={commentContent} onChange={(e) => setCommentContent(e.target.value)} />
                    <input type="submit" value="Post" className="blogCommentDockSubmit" />
                </form>
            </div>
        </>
    )
}

export default Blog;