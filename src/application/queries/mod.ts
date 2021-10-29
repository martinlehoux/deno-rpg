export abstract class QueryHandler<Args, Result> {
  abstract execute(args: Args): Result
}