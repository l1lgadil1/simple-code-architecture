import { Root } from './ui/root';
import { useProcessId } from './model/use-id';
import { useProcess } from './model/use-process';
import { BlocksFlow } from '../../modules/manage-block/blocks-flow';
import { useBlockCreate } from './model/use-block-create';
import { CreateBlockModal } from '../../modules/manage-block/manage-block';

export function Page() {
    const id = useProcessId();
    const { process, isLoading } = useProcess(id as string);
    const { startCreateBlock, isCreating, stopCreateBlock } = useBlockCreate();
    return (
        process && (
            <Root
                process={process}
                isLoading={isLoading}
                flow={
                    process?.blocks && (
                        <BlocksFlow onFlowClick={startCreateBlock} blocks={process.blocks} />
                    )
                }
                modals={<CreateBlockModal isOpen={isCreating} onClose={stopCreateBlock} />}
            />
        )
    );
}
