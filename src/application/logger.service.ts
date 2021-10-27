export type LogLevel = "debug" | "info" | "warn" | "error";

export abstract class LoggerService {
  abstract log(
    level: LogLevel,
    msg: string,
    meta?: Record<string, string>,
  ): void;

  debug(msg: string, meta?: Record<string, string>) {
    this.log("debug", msg, meta);
  }

  info(msg: string, meta?: Record<string, string>) {
    this.log("info", msg, meta);
  }

  warn(msg: string, meta?: Record<string, string>) {
    this.log("warn", msg, meta);
  }

  error(msg: string, meta?: Record<string, string>) {
    this.log("error", msg, meta);
  }
}
