import { AfterViewInit, Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { ButtonComponent } from '../../../shared/button/button.component';
import { ControlComponent } from '../../../shared/control/control.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-ticket',
  standalone: true,
  imports: [ButtonComponent, ControlComponent, FormsModule],
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css',
})
export class NewTicketComponent implements AfterViewInit {
  @ViewChild('form') form?:ElementRef<HTMLFormElement>;
  @Output() add = new EventEmitter<{title:string;text:string}>()
  ngAfterViewInit() {
    console.log('AFTWE VEIW INIT');
    console.log(this.form?.nativeElement)
  }

  onSubmit(titleInput: string, requestInput: string) {
    this.add.emit({title:titleInput,text:requestInput})
    this.form?.nativeElement.reset();
  }

}
