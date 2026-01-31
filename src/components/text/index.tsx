const Text = ({
    className = '',
    children,
    Type = 'span',
    weight,
    style,
    size,
    color = '',
}: {
    Type?: keyof React.JSX.IntrinsicElements,
    className?: string,
    style?: React.CSSProperties,
    children: React.ReactNode,
    weight: 'font-base' | 'font-normal' | 'font-bold' | 'font-semibold' | 'font-medium',
    color?: string,
    size?: string
}) => {
    return (
        <Type style={style} className={`${className} ${size} ${weight ? weight : 'font-normal'} ${color ? color : 'text-primary-dark-blue'}`}>
            {children}
        </Type>
    )
}

export default Text;