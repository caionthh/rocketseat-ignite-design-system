import { Slot } from "@radix-ui/react-slot";
import { clsx } from "clsx";
import { ButtonHTMLAttributes, ReactNode } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    size?: "sm" | "md" | "lg";
    children: ReactNode;
    asChild?: boolean;
}

export const Button = ({ size = "md", children, asChild, className, ...rest }: ButtonProps) => {
    const Comp = asChild ? Slot : "button";

    return (
        <Comp {...rest} className={
            clsx(
                "py-3 px-4 bg-cyan-500 rounded font-semibold text-black text-sm w-full transition-colors hover:bg-cyan-300 focus:ring-2 ring-white",
                {

                },
                className
            )}>
            {children}
        </Comp>
    )
}