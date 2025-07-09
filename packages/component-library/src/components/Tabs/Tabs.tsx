'use client';

import {
    Tabs as TabsWrapper,
    TabsContent,
    TabsList,
    TabsTrigger,
} from '@/components/ui/tabs';

interface TabsProps {
    children?: React.ReactNode;
    className?: string;
    defaultValue?: string;
    onClick?: () => void;
}

export default function Tabs({ children, className, defaultValue }: TabsProps) {
    return (
        <TabsWrapper defaultValue={defaultValue} className={`w-[500px]  }`}>
            {children}
            <TabsList>
                <TabsTrigger value='account'>Account</TabsTrigger>
                <TabsTrigger value='password'>Password</TabsTrigger>
            </TabsList>
            <TabsContent value='account' className={className}>
                Make changes to your account here.
            </TabsContent>
            <TabsContent value='password' className={className}>
                Change your password here.
            </TabsContent>
        </TabsWrapper>
    );
}
