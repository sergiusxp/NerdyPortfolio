import { Pipe, PipeTransform, SecurityContext } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Pipe({
  name: 'safeHTML'
})
export class SafeHtmlPipe implements PipeTransform {

  constructor(protected sanitizer: DomSanitizer) {}

  transform(value: string): any {
    return this.sanitizer.bypassSecurityTrustHtml(value);
  }

}
