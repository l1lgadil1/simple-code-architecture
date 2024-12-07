import { Block, FlowPosition } from './model/types';
import { Arrows } from './ui/arrows';
import { BlockView } from './ui/block';
import { Field } from './ui/filed';
import { Root } from './ui/root';

interface IProps {
    blocks: Block[];
    onFlowClick: (position: FlowPosition) => void;
}
export function Fasade({ blocks, onFlowClick }: IProps) {
    return (
        <Root
            blocks={blocks.map((block) => (
                <BlockView key={block.id} block={block} />
            ))}
            field={<Field onClick={onFlowClick} />}
            arrows={<Arrows />}
        />
    );
}
