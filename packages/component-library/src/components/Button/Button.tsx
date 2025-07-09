'use client';

import { Button as MuiButton } from '@/components/ui/button';
import { twMerge } from 'tailwind-merge';

interface ButtonProps {
    children?: React.ReactNode;
    className?: string;
    type?: 'button' | 'submit' | 'reset';
    onClick?: () => void;
    disabled?: boolean;
}

export default function Button({
    children,
    className,
    type,
    onClick,
    disabled,
}: ButtonProps) {
    //handle action when button is clicked
    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault(); //Prevent default action
        if (onClick) {
            onClick();
        }
        console.log('Button clicked');
    };

    return (
        <MuiButton
            className={twMerge(
                'bg-blue-800 font-medium text-2xl py-6 px-10 transition-colors duration-300 ease hover:bg-blue-950 border-2 border-blue-900',
                className
            )}
            type={type}
            disabled={disabled}
            onClick={(e) => handleClick(e)}
        >
            {children}
        </MuiButton>
    );
}
