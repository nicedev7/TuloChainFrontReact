import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string,
    paragraph: PropTypes.string
  }).isRequired,
  children: PropTypes.node,
  tag: PropTypes.oneOf(['h1', 'h2', 'h3'])
}

const defaultProps = {
  children: null,
  tag: 'h2'
}

const SectionHeader = ({
  className,
  data,
  children,
  tag,
  ...props
}) => {

  const classes = classNames(
    'section-header',
    className
  );

  const Component = tag;
  const paragarphArr = data.paragraph.split('\n')
  return (
    <>
      {(data.title || data.paragraph) &&
        <div
          {...props}
          className={classes}
        >
          {children}
          {data.title &&
            <Component className={
              classNames(
                'mt-0',
                'section-title',
                'reveal-from-bottom animated fadeInUp',
                data.paragraph ? 'mb-16' : 'mb-0'
              )}>{data.title}</Component>
          }
          <div className="container-sm">
            {data.paragraph &&
              <>
                {
                  paragarphArr.map((para, _i)=>(
                    <h5 key={_i} className={`${_i?'mt-4':'m-0'}m-0 paragraph reveal-from-bottom animated fadeInUp`}>{para}</h5>
                  ))
                }
              </>
            }
          </div>
        </div>
      }
    </>
  );
}

SectionHeader.propTypes = propTypes;
SectionHeader.defaultProps = defaultProps;

export default SectionHeader;