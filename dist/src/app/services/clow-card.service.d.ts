import { ClowCard } from '../clow-card';
export declare class ClowCardService {
    getClowCards(): Promise<ClowCard[]>;
    getClowCard(id: number): Promise<ClowCard>;
    private shuffle(array);
}
