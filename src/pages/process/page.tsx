import { Root } from './ui/root';
import { useProcessId } from './model/use-id';
import { useProcess } from './model/use-process';

export function Page() {
    const id = useProcessId();
    const { process, isLoading } = useProcess(id as string);

    return process && <Root process={process} isLoading={isLoading} />;
}
