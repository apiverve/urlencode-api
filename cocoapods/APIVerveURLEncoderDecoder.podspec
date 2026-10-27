Pod::Spec.new do |s|
  s.name             = 'APIVerveURLEncoderDecoder'
  s.version          = '1.2.3'
  s.summary          = 'URL Encoder/Decoder converts text into percent-encoded strings or decodes existing URL components back into plain text.'
  s.description      = <<-'DESC'
URL Encoder/Decoder converts text into percent-encoded strings or decodes existing URL components back into plain text. Pass any string with an encode or decode action to receive the processed output and your original text.

This iOS/macOS SDK provides a convenient way to access the URL Encoder/Decoder from APIVerve.
Supports both callback-based and async/await patterns.
                       DESC

  s.homepage         = 'https://apiverve.com/marketplace/urlencode?utm_source=cocoapods&utm_medium=referral&utm_content=homepage'
  s.license          = { :type => 'MIT', :file => 'LICENSE' }
  s.author           = { 'APIVerve' => 'hello@apiverve.com' }
  # The SDK repo holds every language; the pod lives under cocoapods/ with its own tag.
  s.source           = { :git => 'https://github.com/apiverve/urlencode-api.git', :tag => "cocoapods/v#{s.version}" }

  s.ios.deployment_target = '15.0'
  s.osx.deployment_target = '12.0'

  s.swift_version = '5.0'

  s.source_files = 'cocoapods/Sources/APIVerveURLEncoderDecoder/**/*.swift'

  s.frameworks = 'Foundation'

  # APIResponse, APIVerveError and the request plumbing, shared by every APIVerve pod.
  s.dependency 'APIVerveCore', '~> 1.2'
end
