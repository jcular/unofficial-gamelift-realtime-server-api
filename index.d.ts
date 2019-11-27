// Type definitions for GameLift Realtime server sdk
// Project: unofficial-gamelift-realtime-server-api
// Definitions by: Jure Cular <https://github.com/jcular>
//                 Mislav Zlatar <https://github.com/mislavzlatar>

declare namespace GameLiftRealtime {
    type GameLiftOpCode = number;
    type GameLiftPeerId = number;
    type GameLiftGroupId = number;
    type GameLiftPayload = string | Uint8Array;

    interface GameLiftLogger {
        info(info : string) : void;
        warn(warning : string) : void;
        error(error : string) : void;
    }

    interface GameLiftMessage {
        opCode : GameLiftOpCode;
        payload : GameLiftPayload;
        sender : GameLiftPeerId;
        reliable : boolean;
    }

    interface GameLiftPlayer {
        peerId : GameLiftPeerId;
        playerSessionId : string;
    }

    interface RealtimeSession {
        getPlayers() : GameLiftPlayer[];
        broadcastGroupMembershipUpdate(groupIdToBroadCast : GameLiftGroupId, targetGroupId : GameLiftGroupId) : void;
        getServerId() : string;
        getAllPlayersGroupId() : GameLiftGroupId;
        processEnding() : void;
        getGameSessionId() : string;
        getLogger() : GameLiftLogger;
        sendMessage(message : GameLiftMessage, targetPlayer : GameLiftPeerId) : void;
        sendGroupMessage(message : GameLiftMessage, targetGroup : GameLiftGroupId) : void;
        sendReliableMessage(message : GameLiftMessage, targetGroup : GameLiftGroupId) : void;
        sendReliableGroupMessage(message : GameLiftMessage, targetGroup : GameLiftGroupId) : void;
        newTextGameMessage(opCode : GameLiftOpCode, sender : GameLiftPeerId, payload : string) : GameLiftMessage;
        newBinaryGameMessage(opCode : GameLiftOpCode, sender : GameLiftPeerId, binaryPayload : Uint8Array) : GameLiftMessage;
    }
}