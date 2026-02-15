using System;
using System.Collections.Generic;
using System.Text;
using Newtonsoft.Json;

namespace APIVerve.API.URLEncoderDecoder
{
    /// <summary>
    /// Query options for the URL Encoder/Decoder API
    /// </summary>
    public class URLEncoderDecoderQueryOptions
    {
        /// <summary>
        /// The text to encode
        /// </summary>
        [JsonProperty("text")]
        public string Text { get; set; }

        /// <summary>
        /// The action to perform
        /// </summary>
        [JsonProperty("action")]
        public string Action { get; set; }
    }
}
