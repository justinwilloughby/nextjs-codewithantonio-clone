import { Button } from '@/components/ui/button';
import React from 'react';

interface CategoryButtonProps {
    text: string;
    active?: boolean;
}

export const CategoryButton: React.FC<CategoryButtonProps> = ({ text, active }) => {
    return (
        <Button variant={active ? 'category' : 'secondary'} size="sm">{text}</Button>
    );
};