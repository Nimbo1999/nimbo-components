import styles from './Button.module.scss';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const Button: React.FC<ButtonProps> = ({ className, ...props }) => {
    return <button className={[className, styles.button].join(' ')} {...props} />;
}

export default Button;
