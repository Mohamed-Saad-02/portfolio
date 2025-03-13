import clsx from "clsx";

const Button = ({
  as,
  children,
  icon,
  variant = "default",
  size = "md",
  fullWidth = false,
  className = "",
  ...props
}) => {
  const Render = as || "button";

  const baseStyles =
    "flex items-center gap-2 rounded justify-center cursor-pointer transition-colors border-primary";

  const variantStyles = {
    default: "hover:border-2 not-[:hover]:bg-primary",
    outline: "not-[:hover]:border-2",
  };

  const sizeStyles = {
    sm: "h-9 min-w-28 text-sm",
    md: "h-11 min-w-36",
    lg: "h-14 min-w-40 text-lg",
  };

  return (
    <Render
      className={clsx(
        baseStyles,
        variantStyles[variant],
        sizeStyles[size],
        fullWidth && "w-full",
        className
      )}
      {...props}
    >
      {children}
      {icon && <span className="text-white size-4">{icon}</span>}
    </Render>
  );
};

export default Button;
