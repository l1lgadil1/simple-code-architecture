import styles from './styles.module.scss';
import { BlockTypes, FormData } from '../../model/types';
import { useState } from 'react';
import { WebhookFields } from '../webhook-fields';
interface IProps {
    onSubmit: (data: FormData) => void;
}
export function Layout({ onSubmit }: IProps) {
    const [formData, setFormData] = useState<FormData>({
        name: 'Start',
        type: BlockTypes.Start,
        data: '',
    });
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        onSubmit(formData);
    };
    return (
        <form className={styles.root} onSubmit={handleSubmit}>
            <select
                className={styles.input}
                name="type"
                value={formData.type}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}>
                {Object.values(BlockTypes).map((i) => (
                    <option key={i} value={i}>
                        {i}
                    </option>
                ))}
            </select>
            <input
                type="text"
                className={styles.input}
                name="name"
                placeholder="Block name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
            {formData.type === BlockTypes.Webhook && (
                <WebhookFields
                    data={formData.data}
                    onChangeData={(data) => setFormData({ ...formData, data })}
                />
            )}
        </form>
    );
}
