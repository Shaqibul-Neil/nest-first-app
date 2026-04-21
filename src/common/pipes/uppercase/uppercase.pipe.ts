import { ArgumentMetadata, Injectable, PipeTransform } from '@nestjs/common';

@Injectable()
export class UppercasePipe implements PipeTransform {
  transform(value: unknown, metadata: ArgumentMetadata) {
    console.log(value);
    if (typeof value === 'string') {
      return value.toUpperCase();
    }
    return value;
  }
}
