import PropTypes from 'prop-types';
import classNames from 'classnames';
import { forwardRef } from 'react';
import images from '~/assets/images';
import { useState } from 'react';
import styles from './Image.module.scss';

const Image = forwardRef(
    (
        {
            src,
            className,
            alt,
            fallback: customerFallback = images.noImage,
            ...props
        },
        ref,
    ) => {
        const [fallback, setFallback] = useState('');
        const handleError = () => {
            setFallback(customerFallback);
        };
        return (
            <img
                className={classNames(styles.wrapper, className)}
                ref={ref}
                src={fallback || src}
                alt={alt}
                {...props}
                onError={handleError}
            />
        );
    },
);

Image.propTypes = {
    src: PropTypes.string,
    className: PropTypes.string,
    alt: PropTypes.string,
    fallback: PropTypes.string,
};

export default Image;
