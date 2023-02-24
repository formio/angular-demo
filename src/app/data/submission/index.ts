import { SubmissionGridBodyComponent, SubmissionGridFooterComponent } from "@formio/angular/grid";
import { CustomSubmissionGridHeaderComponent } from "./SubmissionGridHeader.component";

export default {
    header: CustomSubmissionGridHeaderComponent,
    body: SubmissionGridBodyComponent,
    footer: SubmissionGridFooterComponent
};
