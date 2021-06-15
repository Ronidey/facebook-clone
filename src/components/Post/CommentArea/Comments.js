import React, { useContext } from 'react';
import { PostContext } from '../../../AppContext';
import Comment from './Comment';

const Comments = React.forwardRef((props, ref) => {
  const post = useContext(PostContext);

  return (
    <div style={{ maxHeight: '200px', overflow: 'auto' }} ref={ref}>
      {post.comments.map((c) => (
        <Comment key={c.id} comment={c} />
      ))}
    </div>
  );
});

export default Comments;
