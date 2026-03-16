import { Component } from "@angular/core";
import { SubmissionGridHeaderComponent } from "@formio/angular/grid";
import { NgFor, NgIf, NgClass } from "@angular/common";

@Component({
    templateUrl: './SubmissionGridHeader.component.html',
    imports: [NgFor, NgIf, NgClass]
})
export class CustomSubmissionGridHeaderComponent extends SubmissionGridHeaderComponent {}
