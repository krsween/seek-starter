import {Component, provide} from 'angular2/core';
import {AsyncTestCompleter, describe, expect, inject, it, TestComponentBuilder} from 'angular2/testing_internal';

import {SeekApp} from './seek.component';

describe('Component: SeekApp', () => {
    it('renders it\'s HTML template.', inject([TestComponentBuilder, AsyncTestCompleter], (tcb, async) => {
        tcb.createAsync(SeekApp)
            .then((fixture) => {
                fixture.detectChanges();
                let appHTML = fixture.debugElement.nativeElement.innerHTML;
                expect(appHTML).toContain('The Seek App Starter Has Loaded!');
                async.done();
            })
            .catch((e) => console.error(e));
    }));
});
