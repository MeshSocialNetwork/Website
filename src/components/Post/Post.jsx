import React from 'react';
import './post.scss';
import { HashLoader } from 'react-spinners';

class Post extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            imageLoaded: false,
            postLoaded: true
        };
    }

    render() {
        if (this.state.postLoaded) {
            return (
                <div className='post-wrapper'>
                    <p className='post-title'>{this.props.title}</p>

                    <img
                        src={this.props.src}
                        alt='post-image'
                        className='post-image'
                        onLoad={() => this.setState({ imageLoaded: true })}
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
                <div className='post-wrapper notloaded'>
                    <HashLoader />
                </div>
            );
        }
    }
}

export default Post;
