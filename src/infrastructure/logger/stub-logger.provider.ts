import {
  Log,
  LoggerService,
  LogLevel,
  LogMeta,
} from "/application/logger.service.ts";

export class StubLoggerProvider extends LoggerService {
  public logs = new Array<Log>();

  log(level: LogLevel, msg: string, meta: LogMeta = {}): void {
    const timestamp = new Date();
    this.logs.push({ level, msg, meta, timestamp });
  }

  clear() {
    this.logs = [];
  }
}
