declare module '@apiverve/urlencode' {
  export interface urlencodeOptions {
    api_key: string;
    secure?: boolean;
  }

  export interface urlencodeResponse {
    status: string;
    error: string | null;
    data: URLEncoderDecoderData;
    code?: number;
  }


  interface URLEncoderDecoderData {
      action:   string;
      original: string;
      encoded:  string;
      length:   number;
  }

  export default class urlencodeWrapper {
    constructor(options: urlencodeOptions);

    execute(callback: (error: any, data: urlencodeResponse | null) => void): Promise<urlencodeResponse>;
    execute(query: Record<string, any>, callback: (error: any, data: urlencodeResponse | null) => void): Promise<urlencodeResponse>;
    execute(query?: Record<string, any>): Promise<urlencodeResponse>;
  }
}
