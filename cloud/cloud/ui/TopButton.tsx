import * as React from 'react';
import * as styles from '../style/TopButton';
import * as cx from 'classnames';
export const TopButton = ({
  children,
  onClick,
  variant,
  active,
  small,
  big,
  disabled,
  target,
  href
}: {
  children: React.ReactNode;
  onClick: () => void;
  variant: keyof typeof styles;
  active?: boolean;
  small?: boolean;
  big?: boolean;
  disabled?: string;
  href?: string;
  target?: React.AnchorHTMLAttributes<HTMLAnchorElement>['target'];
}) => (
  <a
    onClick={onClick}
    className={cx({
      [styles[variant]]: true,
      active,
      small,
      big,
      disabled: !!disabled
    })}
    href={href}
    target={target}
  >
    {children}
  </a>
);