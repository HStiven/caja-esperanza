import { motion } from 'framer-motion';

interface AnimatedComponentProps {
  className?: string;
  children: React.ReactNode;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
  withExit?: boolean; // nueva prop
}

export const AnimatedScrollComponent = ({
  className,
  children,
  delay = 0,
  direction = 'up',
  withExit = false
}: AnimatedComponentProps) => {
  const directions = {
    up: { y: 50 },
    down: { y: -50 },
    left: { x: 50 },
    right: { x: -50 }
  };

  const initial = { opacity: 0, ...directions[direction] };
  const animate = { opacity: 1, x: 0, y: 0 };
  const exit = { opacity: 0, ...directions[direction] };

  return (
    <motion.div
      className={`w-100 ${className}`}
      initial={initial}
      animate={animate}
      exit={withExit ? exit : undefined}
      transition={{ duration: 0.5, delay }}
    >
      {children}
    </motion.div>
  );
};