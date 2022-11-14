import { Controller, Get, Query } from '@nestjs/common';
import { AutocompleteService } from './autocomplete.service';

@Controller('autocomplete')
export class AutocompleteController {
  constructor(private readonly autocompleteService: AutocompleteService) {}

  @Get('users')
  getAutocompleteUsers(@Query('q') query: string) {
    return this.autocompleteService.getUserAutocompletes(query);
  }
}
