import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from 'framer-motion';
import PropTypes from 'prop-types';

const MotionDiv = ({
  threshold,
  children,
  inViewControl,
  outViewControl,
  initial,
  transition,
  className,
}) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: threshold });

  useEffect(() => {
    if (inView) {
      controls.start(inViewControl);
    } else {
      controls.start(outViewControl);
    }
  }, [controls, inView, inViewControl, outViewControl]);

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial={initial}
      transition={transition}
      className={className}>
      {children}
    </motion.div>
  );
};

export default MotionDiv;

MotionDiv.propTypes = {
  threshold: PropTypes.number,
  children: PropTypes.node.isRequired,
  inViewControl: PropTypes.object,
  outViewControl: PropTypes.object,
  initial: PropTypes.object,
  transition: PropTypes.object,
};
