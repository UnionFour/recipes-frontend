import { TestBed } from '@angular/core/testing';

import { RecipeParametersService } from './recipe-parameters.service';

describe('RecipeParametersService', () => {
    let service: RecipeParametersService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(RecipeParametersService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
