import { Component } from "@angular/core";
import { SubmissionGridHeaderComponent } from "@formio/angular/grid";

@Component({
    templateUrl: './SubmissionGridHeader.component.html',
    standalone: false
})
export class CustomSubmissionGridHeaderComponent extends SubmissionGridHeaderComponent {}
