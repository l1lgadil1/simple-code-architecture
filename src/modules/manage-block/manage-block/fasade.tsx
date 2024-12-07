import { Modal } from './ui/modal';

interface IProps {
    isOpen: boolean;
    onClose?: () => void;
}
export function Fasade({ isOpen, onClose }: IProps) {
    console.log(isOpen);
    if (!isOpen) return null;
    return <Modal title="Create block" onClose={onClose} footer={null} body={'body'} />;
}
