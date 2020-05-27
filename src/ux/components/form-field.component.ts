import { Component, Input } from '@angular/core'

@Component({
    selector: 'form-field',
    template:`
        <div class="form-field">
            <label>
                {{ label | translate }}
                <span *ngIf="required" class="asterisque">*</span>
                <message-sticker *ngIf="help" 
                            [type]="'info'" 
                            [messages]="[help]">
                </message-sticker>
            </label>
            <form-errors *ngIf="control" [control]="control"></form-errors> 
            <ng-content></ng-content>
        </div>
    `,
    styles: [`
        div.form-field { display: flex; align-items: center; }
        div.form-field >>> > * { flex: 1; margin-left: 5px; }
        div.form-field > *:first-child { flex: 0 0 200px; margin-left: 0; }
        div.form-field message-sticker { font-size: 1.3em; }
        div.form-field .asterisque { color: crimson; } 
    `]
})
export class FormFieldComponent {
    @Input() label: string;
    @Input() help: string;
    @Input() required: boolean;
    @Input() control: string;
}