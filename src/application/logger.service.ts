export type LogLevel = "debug" | "info" | "warn" | "error";

export type LogMeta = Record<string, string>;

export type Log = {
  timestamp: Date;
  level: LogLevel;
  msg: string;
  meta: LogMeta;
};

export abstract class LoggerService {
  abstract log(
    level: LogLevel,
    msg: string,
    meta?: LogMeta,
  ): void;

  debug(msg: string, meta?: LogMeta) {
    this.log("debug", msg, meta);
  }

  info(msg: string, meta?: LogMeta) {
    this.log("info", msg, meta);
  }

  warn(msg: string, meta?: LogMeta) {
    this.log("warn", msg, meta);
  }

  error(msg: string, meta?: LogMeta) {
    this.log("error", msg, meta);
  }
}
