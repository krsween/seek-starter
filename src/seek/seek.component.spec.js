// NG2
import {injectAsync, TestComponentBuilder, describe, it, expect} from 'angular2/testing';
// App
import {SeekApp} from './seek.component';

describe('Component: SeekApp', () => {
	it('renders it\'s HTML template.', injectAsync([TestComponentBuilder], (tcb: TestComponentBuilder) => {
		return tcb.createAsync(SeekApp)
			.then(fixture => {
				let componentInstance = fixture.componentInstance;
				let element = fixture.nativeElement;
				fixture.detectChanges();
				expect(element.innerHTML).toContain('The Seek App Starter Has Loaded!');
			});
	}));
});
