import { Component, OnInit, ViewChild } from "@angular/core";
import { FormBuilder, FormControl, FormGroupDirective, Validators } from "@angular/forms";
import { ContactService } from "../../service/contact.service";
import { NotificationService } from "../../service/notification.service";

@Component({
  selector: "app-contact",
  templateUrl: "./contact.component.html",
  styleUrls: ["./contact.component.scss"],
})
export class ContactComponent implements OnInit {

  @ViewChild(FormGroupDirective) contactFormDirective!: FormGroupDirective;

  constructor(
    private formBuilder: FormBuilder,
    private contactService: ContactService,
    private notificationService: NotificationService,
  ) {
  }

  contactForm = this.formBuilder.group({
    email: ["", { validators: [Validators.required, Validators.email, Validators.maxLength(500)] }],
    name: ["", { validators: [Validators.required, Validators.maxLength(120)] }],
    message: ["", { validators: [Validators.required, Validators.maxLength(5000)] }],
    captchaToken: ["", { validators: [Validators.required] }],
  });

  get email() {
    return this.contactForm.get("email") as FormControl;
  }

  get name() {
    return this.contactForm.get("name") as FormControl;
  }

  get message() {
    return this.contactForm.get("message") as FormControl;
  }

  get captchaToken() {
    return this.contactForm.get("captchaToken") as FormControl;
  }

  onSubmit() {
    this.contactService.sendMessage({
      name: this.name.value,
      email: this.email.value,
      message: this.message.value,
      "g-recaptcha-response": this.captchaToken.value,
    }).subscribe({
      next: () => {
        this.notificationService.open("Your message has been sent!");
      },
      complete: () => {
        if (this.contactFormDirective) {
          this.contactFormDirective.resetForm();
          this.captchaToken.reset();
        }
      },
    });

  }

  ngOnInit(): void {
  }

}
