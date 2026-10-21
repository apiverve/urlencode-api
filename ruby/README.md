# URL Encoder/Decoder API - Ruby Gem

URL Encoder/Decoder converts text into percent-encoded strings or decodes existing URL components back into plain text. Pass any string with an encode or decode action to receive the processed output and your original text.

## Installation

Add this line to your application's Gemfile:

```ruby
gem 'apiverve_urlencode'
```

And then execute:

```bash
$ bundle install
```

Or install it yourself as:

```bash
$ gem install apiverve_urlencode
```

## Getting Started

Get your API key at [APIVerve](https://apiverve.com)

### Basic Usage

```ruby
require 'apiverve_urlencode'

# Initialize the client
client = APIVerve::Urlencode::Client.new(api_key: "YOUR_API_KEY")

# Make a request
response = client.execute({
  text: "Hello World & Goodbye",
  action: "encode"
})

# Print the response
puts response
```


### Error Handling

```ruby
begin
  response = client.execute({ text: "Hello World & Goodbye", action: "encode" })
  puts response["data"]
rescue APIVerve::Urlencode::ValidationError => e
  puts "Validation error: #{e.errors.join(', ')}"
rescue APIVerve::Urlencode::APIError => e
  puts "API error: #{e.message}"
  puts "Status code: #{e.status_code}"
end
```

### Debug Mode

```ruby
# Enable debug logging
client = APIVerve::Urlencode::Client.new(
  api_key: "YOUR_API_KEY",
  debug: true
)
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

## Documentation

For more information, visit the [API Documentation](https://docs.apiverve.com/ref/urlencode?utm_source=rubygems&utm_medium=referral&utm_content=readme).

## Support

- Website: [https://apiverve.com/marketplace/urlencode?utm_source=ruby&utm_medium=referral&utm_content=readme](https://apiverve.com/marketplace/urlencode?utm_source=ruby&utm_medium=referral&utm_content=readme)
- Email: hello@apiverve.com

## License

This gem is available under the [MIT License](LICENSE).
