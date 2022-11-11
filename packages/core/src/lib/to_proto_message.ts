import { ProtoMessage } from "@waku/interfaces";

import { WakuMessage as WakuMessageProto } from "../proto/message";

const EmptyMessage: ProtoMessage = {
  payload: undefined,
  contentTopic: undefined,
  version: undefined,
  timestamp: undefined,
  rateLimitProof: undefined,
};

export function toProtoMessage(wire: WakuMessageProto): ProtoMessage {
  return { ...EmptyMessage, ...wire };
}