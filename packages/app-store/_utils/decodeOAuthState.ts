import { NextApiRequest } from "next";

import { IntegrationOAuthCallbackState } from "../types";

export function decodeOAuthState(req: NextApiRequest) {
  if (typeof req.query.state !== "string") {
    return undefined;
  }
  const state: IntegrationOAuthCallbackState = JSON.parse(req.query.state);

  return state;
}
