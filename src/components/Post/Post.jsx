import React, { useState } from 'react';
import './post.scss';

const Post = (props) => {
    const [imageLoaded, setImageLoaded] = useState(false);
    const [postLoaded, setPostLoaded] = useState(false);

    if (props.src) {
        return (
            <div className='post-wrapper'>
                <p className='post-title'>{props.title}</p>

                <img
                    src={props.src}
                    alt='post-image'
                    className='post-image'
                    onLoad={() => setImageLoaded(true)}
                />

                <button>
                    <i className='fa-solid fa-thumbs-up' />
                </button>
                <button>
                    <i className='fa-solid fa-thumbs-down' />
                </button>
                <button>
                    <i className='fa-solid fa-comment' />
                </button>
                <button>
                    <i className='fa-solid fa-share' />
                </button>
            </div>
        );
    } else {
        return (
            <div className='post-wrapper'>
                <p className='post-title'>{props.title}</p>

                <button>
                    <i className='fa-solid fa-thumbs-up' />
                </button>
                <button>
                    <i className='fa-solid fa-thumbs-down' />
                </button>
                <button>
                    <i className='fa-solid fa-comment' />
                </button>
                <button>
                    <i className='fa-solid fa-share' />
                </button>
            </div>
        );
    }
};

export default Post;
