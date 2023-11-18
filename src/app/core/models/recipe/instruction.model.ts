import { IStep } from './step.model';

export interface IInstruction {
    name: string,
    steps: [IStep]
}
