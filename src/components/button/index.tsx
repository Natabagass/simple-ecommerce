const Button = ({
    variant,
    onClick,
    disable,
    className,
    children,
    size,
    type,
    color,
    padding
}: {
    variant?: string,
    onClick?: (e?: React.MouseEvent<HTMLButtonElement>) => void,
    disable?: boolean,
    color?: string,
    type: 'submit' | 'button',
    className?: string,
    size?: string,
    padding?: string
    children?: React.ReactNode
}) => {
    return (
        <button
            type={type}
            disabled={disable}
            onClick={onClick}
            className={`${className} ${size} ${padding ? padding : 'px-4 py-4 md:py-6'} ${color ? color : 'bg-white'}  w-full text-sm sm:text-base disabled:bg-gray-300 font-medium disabled:cursor-not-allowed disabled:text-white disabled:border-none cursor-pointer rounded-lg`}>
            {children}
        </button>
    )
}

export default Button;