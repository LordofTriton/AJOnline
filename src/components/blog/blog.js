import React, { useEffect, useState } from "react";
import axios from "axios";
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
                username: commenter,
                content: commentContent,
                date: DateTime.getDateFormatOne(),
                replies: [],
                stamp: Date.now()
            }
            // const updatedPost = {...currentPost, Comments: currentPost.comments.concat(newComment)}

            const payload = {
                newComment: newComment,
                id: currentPost._id
            }

            axios.post("http://tritonserver.herokuapp.com/portfolio/newPostComment", payload).then(re => {
                axios.post("http://tritonserver.herokuapp.com/portfolio/getBlogPostById", {id: currentPost._id}).then(re => {
                    setCurrentPost(re.data)
                })
            })

            // axios.put(`http://${API.baseAPIUrl}/BlogPosts/${currentPost.id}`, updatedPost).then(re => {
            //     axios.get(`http://${API.baseAPIUrl}/BlogPosts/${currentPost.id}`).then(re => {
            //         setCurrentPost(re.data)
            //     })
            // })
        }
        else if (typeof(commentDock) === "number") {
            if (Object.keys(currentPost.comments[commentDock]).includes("replies")) {
                const newComment = {
                    username: commenter,
                    content: `@${currentPost.comments[commentDock].username} ${commentContent}`,
                    date: DateTime.getDateFormatOne(),
                }
                // const updatedPost = currentPost
                // updatedPost.comments[commentDock].replies = updatedPost.comments[commentDock].replies.concat(newComment)

                const payload = {
                    id: currentPost._id,
                    stamp: currentPost.comments[commentDock].stamp,
                    newComment: newComment
                }

                axios.post("http://tritonserver.herokuapp.com/portfolio/newReplyComment", payload).then(re => {
                    axios.post("http://tritonserver.herokuapp.com/portfolio/getBlogPostById", {id: currentPost._id}).then(re => {
                        setCurrentPost(re.data)
                    })
                })
            }
        }
        else {
            const newComment = {
                username: commenter,
                content: `@${currentPost.comments[commentDock[0]].replies[commentDock[1]].username} ${commentContent}`,
                date: DateTime.getDateFormatOne(),
            }
            // const updatedPost = currentPost
            // updatedPost.comments[commentDock[0]].Replies = updatedPost.comments[commentDock[0]].replies.concat(newComment)

            const payload = {
                id: currentPost._id,
                stamp: currentPost.comments[commentDock[0]].stamp,
                newComment: newComment
            }

            axios.post("http://tritonserver.herokuapp.com/portfolio/newReplyComment", payload).then(re => {
                axios.post("http://tritonserver.herokuapp.com/portfolio/getBlogPostById", {id: currentPost._id}).then(re => {
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
                            <h3 className="blogPostTitle">{currentPost.title}</h3>
                            <h3 className="blogPostInfo">{currentPost.date}<span>|</span>{currentPost.category}</h3>
                            <hr />
                            <pre className="blogPostContent">{currentPost.content}</pre>
                            <h3 className="blogCommentBoxTitle">Comments</h3>
                            {
                                currentPost.comments.length > 0 ?
                                currentPost.comments.map((comment, index) =>
                                    <div className="blogComment">
                                        <h3 className="blogCommentName">{comment.username}</h3>
                                        <h3 className="blogCommentDate">{comment.date}
                                            <span onClick={() => replyAction(index)}>Reply</span>
                                        </h3>
                                        <h3 className="blogCommentContent">{comment.content}</h3>
                                        {
                                            comment.replies.map((reply, ind) =>
                                                <div className="blogCommentReply">
                                                    <h3 className="blogCommentName">{reply.username}</h3>
                                                    <h3 className="blogCommentDate">{reply.date}
                                                        <span onClick={() => replyAction([index, ind])}>Reply</span>
                                                    </h3>
                                                    <h3 className="blogCommentContent">
                                                        {reply.content.split(" ")[0].includes("@") ? 
                                                            <span>{reply.content.split(" ")[0]}</span> 
                                                            : null
                                                        }
                                                        {reply.content.split(" ").splice(1, reply.content.split(" ").length).join(" ")}
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
                        <h3 className="blogCommentName">{currentPost.comments[commentDock].username}</h3>
                        <h3 className="blogCommentDate">{currentPost.comments[commentDock].date}</h3>
                        <h3 className="blogCommentContent">{currentPost.comments[commentDock].content}</h3>
                    </div>
                    : null
                }
                {
                    commentDock && commentDock !== "OP" && typeof(commentDock) !== "number" ?
                    <div className="blogComment" style={{marginBottom: "25px"}}>
                        <h3 className="blogCommentName">{currentPost.comments[commentDock[0]].replies[commentDock[1]].useruame}</h3>
                        <h3 className="blogCommentDate">{currentPost.comments[commentDock[0]].replies[commentDock[1]].date}</h3>
                        <h3 className="blogCommentContent">{currentPost.comments[commentDock[0]].replies[commentDock[1]].content}</h3>
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