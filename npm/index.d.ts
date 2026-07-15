declare module '@apiverve/urlencode' {
  export interface urlencodeOptions {
    api_key: string;
    secure?: boolean;
  }

  /**
   * Describes fields the current plan does not unlock. Locked fields arrive as null
   * in `data`; `locked_fields` names them, using dot paths for nested fields.
   * Absent when the plan unlocks everything.
   */
  export interface PremiumInfo {
    message: string;
    upgrade_url: string;
    locked_fields: string[];
  }

  export interface urlencodeResponse {
    status: string;
    error: string | null;
    data: URLEncoderDecoderData;
    code?: number;
    premium?: PremiumInfo;
  }


  interface URLEncoderDecoderData {
      action:   null | string;
      original: null | string;
      encoded:  null | string;
      length:   number | null;
  }

  export default class urlencodeWrapper {
    constructor(options: urlencodeOptions);

    execute(callback: (error: any, data: urlencodeResponse | null) => void): Promise<urlencodeResponse>;
    execute(query: Record<string, any>, callback: (error: any, data: urlencodeResponse | null) => void): Promise<urlencodeResponse>;
    execute(query?: Record<string, any>): Promise<urlencodeResponse>;
  }
}
