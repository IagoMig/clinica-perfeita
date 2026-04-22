import React, { useRef, Children } from 'react';
import { motion, useInView, Variants } from 'framer-motion';
interface FadeInProps {
  children: React.ReactNode;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  fullWidth?: boolean;
  className?: string;
}
export function FadeIn({
  children,
  delay = 0,
  direction = 'up',
  fullWidth = false,
  className = ''
}: FadeInProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: '-10% 0px'
  });
  const directions = {
    up: {
      y: 40,
      x: 0
    },
    down: {
      y: -40,
      x: 0
    },
    left: {
      x: 40,
      y: 0
    },
    right: {
      x: -40,
      y: 0
    },
    none: {
      x: 0,
      y: 0
    }
  };
  const variants: Variants = {
    hidden: {
      opacity: 0,
      ...directions[direction]
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration: 1.2,
        ease: [0.25, 0.1, 0.25, 1],
        delay: delay
      }
    }
  };
  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      className={`${fullWidth ? 'w-full' : ''} ${className}`}>
      
      {children}
    </motion.div>);

}
export function StaggerContainer({
  children,
  className = ''



}: {children: React.ReactNode;className?: string;}) {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: '-10% 0px'
  });
  const containerVariants = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };
  return (
    <motion.div
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      className={className}>
      
      {children}
    </motion.div>);

}
export function StaggerItem({
  children,
  className = ''



}: {children: React.ReactNode;className?: string;}) {
  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 30
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: [0.25, 0.1, 0.25, 1]
      }
    }
  };
  return (
    <motion.div variants={itemVariants} className={className}>
      {children}
    </motion.div>);

}