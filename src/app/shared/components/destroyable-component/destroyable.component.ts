import { Subject } from 'rxjs';
import { Directive } from '@angular/core';

// родительский класс для отписок при уничтожении компоненты
@Directive()
export abstract class DestroyableComponent {
    protected destroy$: Subject<void> = new Subject<void>();

    public ngOnDestroy(): void {
        this.destroy$.next(undefined);
        this.destroy$.complete();
    }
}