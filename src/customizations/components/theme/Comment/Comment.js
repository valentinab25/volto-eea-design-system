import React from 'react'
import { Button, Comment, Form, Header } from 'semantic-ui-react'


function CommentEEA({title,comments,threaded,minimal,size}){
    return(
        <Comment.Group threaded={threaded} minimal={minimal} size={size}>
            <Header dividing>{title}</Header>

            {comments.map((comment) =>(
                <Comment>
                    <Comment.Avatar src={comment.avatar} />
                    <Comment.Content>
                        <Comment.Author as='a'>{comment.author}</Comment.Author>
                        <Comment.Metadata><div>{comment.time}</div></Comment.Metadata>
                        <Comment.Text>{comment.text}</Comment.Text>
                        <Comment.Actions>
                            <Comment.Action>Reply</Comment.Action>
                        </Comment.Actions>
                    </Comment.Content>
                    <Comment.Group>
                    {comment.replies.map((reply) =>(
                        <Comment>
                            <Comment.Avatar src={comment.avatar} />
                            <Comment.Content>
                                <Comment.Author as='a'>{reply.author}</Comment.Author>
                                <Comment.Metadata><div>{reply.time}</div></Comment.Metadata>
                                <Comment.Text>{reply.text}</Comment.Text>
                                <Comment.Actions>
                                    <Comment.Action>Reply</Comment.Action>
                                </Comment.Actions>
                            </Comment.Content>
                            
                        </Comment>
                    ))}
                    </Comment.Group>
                    
                </Comment>
            ))}
        </Comment.Group>
    );
}

export default CommentEEA;