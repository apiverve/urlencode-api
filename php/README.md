# URL Encoder/Decoder API - PHP Package

URL Encoder/Decoder converts text into percent-encoded strings or decodes existing URL components back into plain text. Pass any string with an encode or decode action to receive the processed output and your original text.

## Installation

Install via Composer:

```bash
composer require apiverve/urlencode
```

## Getting Started

Get your API key at [APIVerve](https://apiverve.com)

### Basic Usage

```php
<?php

require_once 'vendor/autoload.php';

use APIVerve\Urlencode\Client;

// Initialize the client
$client = new Client('YOUR_API_KEY');

// Make a request
$response = $client->execute([
    'text' => 'Hello World & Goodbye',
    'action' => 'encode'
]);

// Print the response
print_r($response);
```


### Error Handling

```php
use APIVerve\Urlencode\Client;
use APIVerve\Urlencode\Exceptions\APIException;
use APIVerve\Urlencode\Exceptions\ValidationException;

try {
    $response = $client->execute(['text' => 'Hello World & Goodbye', 'action' => 'encode']);
    print_r($response['data']);
} catch (ValidationException $e) {
    echo "Validation error: " . implode(', ', $e->getErrors());
} catch (APIException $e) {
    echo "API error: " . $e->getMessage();
    echo "Status code: " . $e->getStatusCode();
}
```

### Debug Mode

```php
// Enable debug logging
$client = new Client(
    apiKey: 'YOUR_API_KEY',
    debug: true
);
```

## Example Response

```json
{
  "status": "ok",
  "error": null,
  "data": {
    "action": "encode",
    "original": "Hello World & Goodbye",
    "encoded": "Hello%20World%20%26%20Goodbye",
    "length": 29
  }
}
```

## Requirements

- PHP 7.4 or higher
- Guzzle HTTP client

## Documentation

For more information, visit the [API Documentation](https://docs.apiverve.com/ref/urlencode?utm_source=packagist&utm_medium=referral&utm_content=readme).

## Support

- Website: [https://apiverve.com/marketplace/urlencode?utm_source=php&utm_medium=referral&utm_content=readme](https://apiverve.com/marketplace/urlencode?utm_source=php&utm_medium=referral&utm_content=readme)
- Email: hello@apiverve.com

## License

This package is available under the [MIT License](LICENSE).
