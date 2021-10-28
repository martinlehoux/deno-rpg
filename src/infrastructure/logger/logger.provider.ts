import { LoggerService, LogLevel } from "/application/logger.service.ts";

export class LoggerProvider extends LoggerService {
  log(level: LogLevel, msg: string, meta: Record<string, string> = {}): void {
    const time = new Date().toISOString();
    console[level](`[${time}] ${msg} |`, meta);
  }
}
