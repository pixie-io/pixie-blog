import React from 'react';
import { Link } from 'gatsby';
import Img from 'gatsby-image';

import PropTypes from 'prop-types';
import styles from './blog-post-item.module.scss';
import PostPlaceholder from '../../post-placeholder';

const BlogPostItem = ({ post }) => {
  const {
    frontmatter: {
      title,
      featured_image: featuredImage,
      author,
      date,
      //  category,
    },
    fields: { slug },
  } = post;

  return (
    <article className='col-4'>
      <div className={styles.articleContent}>
        <Link to={`/blog/${slug}`}>
          <div className={styles.featuredImage}>
            {featuredImage
              ? <Img fluid={featuredImage.childImageSharp.fluid} alt={title} />
              : <PostPlaceholder />}
          </div>
          <div className={styles.content}>
            <h5>{title}</h5>
            <p>{author}</p>
            <span>{date}</span>
          </div>
        </Link>
      </div>
    </article>
  );
};
BlogPostItem.propTypes = {
  post: PropTypes.shape({
    frontmatter: PropTypes.object,
    fields: PropTypes.object,
  }).isRequired,
};

export default BlogPostItem;
