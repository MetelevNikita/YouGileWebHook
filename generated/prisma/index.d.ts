
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model user
 * 
 */
export type user = $Result.DefaultSelection<Prisma.$userPayload>
/**
 * Model filmingPost
 * 
 */
export type filmingPost = $Result.DefaultSelection<Prisma.$filmingPostPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **user** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.userDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.filmingPost`: Exposes CRUD operations for the **filmingPost** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FilmingPosts
    * const filmingPosts = await prisma.filmingPost.findMany()
    * ```
    */
  get filmingPost(): Prisma.filmingPostDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.10.0
   * Query Engine version: aee10d5a411e4360c6d3445ce4810ca65adbf3e8
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    user: 'user',
    filmingPost: 'filmingPost'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "filmingPost"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      user: {
        payload: Prisma.$userPayload<ExtArgs>
        fields: Prisma.userFieldRefs
        operations: {
          findUnique: {
            args: Prisma.userFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.userFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          findFirst: {
            args: Prisma.userFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.userFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          findMany: {
            args: Prisma.userFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>[]
          }
          create: {
            args: Prisma.userCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          createMany: {
            args: Prisma.userCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.userCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>[]
          }
          delete: {
            args: Prisma.userDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          update: {
            args: Prisma.userUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          deleteMany: {
            args: Prisma.userDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.userUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.userUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>[]
          }
          upsert: {
            args: Prisma.userUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.userGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.userCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      filmingPost: {
        payload: Prisma.$filmingPostPayload<ExtArgs>
        fields: Prisma.filmingPostFieldRefs
        operations: {
          findUnique: {
            args: Prisma.filmingPostFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$filmingPostPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.filmingPostFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$filmingPostPayload>
          }
          findFirst: {
            args: Prisma.filmingPostFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$filmingPostPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.filmingPostFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$filmingPostPayload>
          }
          findMany: {
            args: Prisma.filmingPostFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$filmingPostPayload>[]
          }
          create: {
            args: Prisma.filmingPostCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$filmingPostPayload>
          }
          createMany: {
            args: Prisma.filmingPostCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.filmingPostCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$filmingPostPayload>[]
          }
          delete: {
            args: Prisma.filmingPostDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$filmingPostPayload>
          }
          update: {
            args: Prisma.filmingPostUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$filmingPostPayload>
          }
          deleteMany: {
            args: Prisma.filmingPostDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.filmingPostUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.filmingPostUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$filmingPostPayload>[]
          }
          upsert: {
            args: Prisma.filmingPostUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$filmingPostPayload>
          }
          aggregate: {
            args: Prisma.FilmingPostAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFilmingPost>
          }
          groupBy: {
            args: Prisma.filmingPostGroupByArgs<ExtArgs>
            result: $Utils.Optional<FilmingPostGroupByOutputType>[]
          }
          count: {
            args: Prisma.filmingPostCountArgs<ExtArgs>
            result: $Utils.Optional<FilmingPostCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: userOmit
    filmingPost?: filmingPostOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    filmingPost: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    filmingPost?: boolean | UserCountOutputTypeCountFilmingPostArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountFilmingPostArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: filmingPostWhereInput
  }


  /**
   * Models
   */

  /**
   * Model user
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    name: string | null
    lastName: string | null
    email: string | null
    telegramId: string | null
    password: string | null
    createAt: Date | null
    updateAr: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    name: string | null
    lastName: string | null
    email: string | null
    telegramId: string | null
    password: string | null
    createAt: Date | null
    updateAr: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    lastName: number
    email: number
    telegramId: number
    password: number
    createAt: number
    updateAr: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    lastName?: true
    email?: true
    telegramId?: true
    password?: true
    createAt?: true
    updateAr?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    lastName?: true
    email?: true
    telegramId?: true
    password?: true
    createAt?: true
    updateAr?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    lastName?: true
    email?: true
    telegramId?: true
    password?: true
    createAt?: true
    updateAr?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which user to aggregate.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type userGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: userWhereInput
    orderBy?: userOrderByWithAggregationInput | userOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: userScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    name: string
    lastName: string
    email: string
    telegramId: string
    password: string
    createAt: Date
    updateAr: Date
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends userGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type userSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    lastName?: boolean
    email?: boolean
    telegramId?: boolean
    password?: boolean
    createAt?: boolean
    updateAr?: boolean
    filmingPost?: boolean | user$filmingPostArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type userSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    lastName?: boolean
    email?: boolean
    telegramId?: boolean
    password?: boolean
    createAt?: boolean
    updateAr?: boolean
  }, ExtArgs["result"]["user"]>

  export type userSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    lastName?: boolean
    email?: boolean
    telegramId?: boolean
    password?: boolean
    createAt?: boolean
    updateAr?: boolean
  }, ExtArgs["result"]["user"]>

  export type userSelectScalar = {
    id?: boolean
    name?: boolean
    lastName?: boolean
    email?: boolean
    telegramId?: boolean
    password?: boolean
    createAt?: boolean
    updateAr?: boolean
  }

  export type userOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "lastName" | "email" | "telegramId" | "password" | "createAt" | "updateAr", ExtArgs["result"]["user"]>
  export type userInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    filmingPost?: boolean | user$filmingPostArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type userIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type userIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $userPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "user"
    objects: {
      filmingPost: Prisma.$filmingPostPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      lastName: string
      email: string
      telegramId: string
      password: string
      createAt: Date
      updateAr: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type userGetPayload<S extends boolean | null | undefined | userDefaultArgs> = $Result.GetResult<Prisma.$userPayload, S>

  type userCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<userFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface userDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['user'], meta: { name: 'user' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {userFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends userFindUniqueArgs>(args: SelectSubset<T, userFindUniqueArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {userFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends userFindUniqueOrThrowArgs>(args: SelectSubset<T, userFindUniqueOrThrowArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends userFindFirstArgs>(args?: SelectSubset<T, userFindFirstArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends userFindFirstOrThrowArgs>(args?: SelectSubset<T, userFindFirstOrThrowArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends userFindManyArgs>(args?: SelectSubset<T, userFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {userCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends userCreateArgs>(args: SelectSubset<T, userCreateArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {userCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends userCreateManyArgs>(args?: SelectSubset<T, userCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {userCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends userCreateManyAndReturnArgs>(args?: SelectSubset<T, userCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {userDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends userDeleteArgs>(args: SelectSubset<T, userDeleteArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {userUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends userUpdateArgs>(args: SelectSubset<T, userUpdateArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {userDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends userDeleteManyArgs>(args?: SelectSubset<T, userDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends userUpdateManyArgs>(args: SelectSubset<T, userUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {userUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends userUpdateManyAndReturnArgs>(args: SelectSubset<T, userUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {userUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends userUpsertArgs>(args: SelectSubset<T, userUpsertArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends userCountArgs>(
      args?: Subset<T, userCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends userGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: userGroupByArgs['orderBy'] }
        : { orderBy?: userGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, userGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the user model
   */
  readonly fields: userFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for user.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__userClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    filmingPost<T extends user$filmingPostArgs<ExtArgs> = {}>(args?: Subset<T, user$filmingPostArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$filmingPostPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the user model
   */
  interface userFieldRefs {
    readonly id: FieldRef<"user", 'Int'>
    readonly name: FieldRef<"user", 'String'>
    readonly lastName: FieldRef<"user", 'String'>
    readonly email: FieldRef<"user", 'String'>
    readonly telegramId: FieldRef<"user", 'String'>
    readonly password: FieldRef<"user", 'String'>
    readonly createAt: FieldRef<"user", 'DateTime'>
    readonly updateAr: FieldRef<"user", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * user findUnique
   */
  export type userFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where: userWhereUniqueInput
  }

  /**
   * user findUniqueOrThrow
   */
  export type userFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where: userWhereUniqueInput
  }

  /**
   * user findFirst
   */
  export type userFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * user findFirstOrThrow
   */
  export type userFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * user findMany
   */
  export type userFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing users.
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * user create
   */
  export type userCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * The data needed to create a user.
     */
    data: XOR<userCreateInput, userUncheckedCreateInput>
  }

  /**
   * user createMany
   */
  export type userCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users.
     */
    data: userCreateManyInput | userCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * user createManyAndReturn
   */
  export type userCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * The data used to create many users.
     */
    data: userCreateManyInput | userCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * user update
   */
  export type userUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * The data needed to update a user.
     */
    data: XOR<userUpdateInput, userUncheckedUpdateInput>
    /**
     * Choose, which user to update.
     */
    where: userWhereUniqueInput
  }

  /**
   * user updateMany
   */
  export type userUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users.
     */
    data: XOR<userUpdateManyMutationInput, userUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: userWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * user updateManyAndReturn
   */
  export type userUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * The data used to update users.
     */
    data: XOR<userUpdateManyMutationInput, userUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: userWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * user upsert
   */
  export type userUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * The filter to search for the user to update in case it exists.
     */
    where: userWhereUniqueInput
    /**
     * In case the user found by the `where` argument doesn't exist, create a new user with this data.
     */
    create: XOR<userCreateInput, userUncheckedCreateInput>
    /**
     * In case the user was found with the provided `where` argument, update it with this data.
     */
    update: XOR<userUpdateInput, userUncheckedUpdateInput>
  }

  /**
   * user delete
   */
  export type userDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter which user to delete.
     */
    where: userWhereUniqueInput
  }

  /**
   * user deleteMany
   */
  export type userDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to delete
     */
    where?: userWhereInput
    /**
     * Limit how many users to delete.
     */
    limit?: number
  }

  /**
   * user.filmingPost
   */
  export type user$filmingPostArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the filmingPost
     */
    select?: filmingPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the filmingPost
     */
    omit?: filmingPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: filmingPostInclude<ExtArgs> | null
    where?: filmingPostWhereInput
    orderBy?: filmingPostOrderByWithRelationInput | filmingPostOrderByWithRelationInput[]
    cursor?: filmingPostWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FilmingPostScalarFieldEnum | FilmingPostScalarFieldEnum[]
  }

  /**
   * user without action
   */
  export type userDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
  }


  /**
   * Model filmingPost
   */

  export type AggregateFilmingPost = {
    _count: FilmingPostCountAggregateOutputType | null
    _avg: FilmingPostAvgAggregateOutputType | null
    _sum: FilmingPostSumAggregateOutputType | null
    _min: FilmingPostMinAggregateOutputType | null
    _max: FilmingPostMaxAggregateOutputType | null
  }

  export type FilmingPostAvgAggregateOutputType = {
    id: number | null
    authorId: number | null
  }

  export type FilmingPostSumAggregateOutputType = {
    id: number | null
    authorId: number | null
  }

  export type FilmingPostMinAggregateOutputType = {
    id: number | null
    title: string | null
    executor: string | null
    date_start: Date | null
    date_end: Date | null
    time_start: Date | null
    time_end: Date | null
    place: string | null
    contacts: string | null
    conditions: string | null
    type: string | null
    cloth: string | null
    authorId: number | null
    technical_department: string | null
    sound_department: string | null
  }

  export type FilmingPostMaxAggregateOutputType = {
    id: number | null
    title: string | null
    executor: string | null
    date_start: Date | null
    date_end: Date | null
    time_start: Date | null
    time_end: Date | null
    place: string | null
    contacts: string | null
    conditions: string | null
    type: string | null
    cloth: string | null
    authorId: number | null
    technical_department: string | null
    sound_department: string | null
  }

  export type FilmingPostCountAggregateOutputType = {
    id: number
    title: number
    executor: number
    date_start: number
    date_end: number
    time_start: number
    time_end: number
    place: number
    contacts: number
    conditions: number
    type: number
    cloth: number
    authorId: number
    technical_department: number
    sound_department: number
    _all: number
  }


  export type FilmingPostAvgAggregateInputType = {
    id?: true
    authorId?: true
  }

  export type FilmingPostSumAggregateInputType = {
    id?: true
    authorId?: true
  }

  export type FilmingPostMinAggregateInputType = {
    id?: true
    title?: true
    executor?: true
    date_start?: true
    date_end?: true
    time_start?: true
    time_end?: true
    place?: true
    contacts?: true
    conditions?: true
    type?: true
    cloth?: true
    authorId?: true
    technical_department?: true
    sound_department?: true
  }

  export type FilmingPostMaxAggregateInputType = {
    id?: true
    title?: true
    executor?: true
    date_start?: true
    date_end?: true
    time_start?: true
    time_end?: true
    place?: true
    contacts?: true
    conditions?: true
    type?: true
    cloth?: true
    authorId?: true
    technical_department?: true
    sound_department?: true
  }

  export type FilmingPostCountAggregateInputType = {
    id?: true
    title?: true
    executor?: true
    date_start?: true
    date_end?: true
    time_start?: true
    time_end?: true
    place?: true
    contacts?: true
    conditions?: true
    type?: true
    cloth?: true
    authorId?: true
    technical_department?: true
    sound_department?: true
    _all?: true
  }

  export type FilmingPostAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which filmingPost to aggregate.
     */
    where?: filmingPostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of filmingPosts to fetch.
     */
    orderBy?: filmingPostOrderByWithRelationInput | filmingPostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: filmingPostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` filmingPosts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` filmingPosts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned filmingPosts
    **/
    _count?: true | FilmingPostCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FilmingPostAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FilmingPostSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FilmingPostMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FilmingPostMaxAggregateInputType
  }

  export type GetFilmingPostAggregateType<T extends FilmingPostAggregateArgs> = {
        [P in keyof T & keyof AggregateFilmingPost]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFilmingPost[P]>
      : GetScalarType<T[P], AggregateFilmingPost[P]>
  }




  export type filmingPostGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: filmingPostWhereInput
    orderBy?: filmingPostOrderByWithAggregationInput | filmingPostOrderByWithAggregationInput[]
    by: FilmingPostScalarFieldEnum[] | FilmingPostScalarFieldEnum
    having?: filmingPostScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FilmingPostCountAggregateInputType | true
    _avg?: FilmingPostAvgAggregateInputType
    _sum?: FilmingPostSumAggregateInputType
    _min?: FilmingPostMinAggregateInputType
    _max?: FilmingPostMaxAggregateInputType
  }

  export type FilmingPostGroupByOutputType = {
    id: number
    title: string
    executor: string
    date_start: Date
    date_end: Date | null
    time_start: Date
    time_end: Date
    place: string
    contacts: string
    conditions: string
    type: string
    cloth: string
    authorId: number
    technical_department: string
    sound_department: string
    _count: FilmingPostCountAggregateOutputType | null
    _avg: FilmingPostAvgAggregateOutputType | null
    _sum: FilmingPostSumAggregateOutputType | null
    _min: FilmingPostMinAggregateOutputType | null
    _max: FilmingPostMaxAggregateOutputType | null
  }

  type GetFilmingPostGroupByPayload<T extends filmingPostGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FilmingPostGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FilmingPostGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FilmingPostGroupByOutputType[P]>
            : GetScalarType<T[P], FilmingPostGroupByOutputType[P]>
        }
      >
    >


  export type filmingPostSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    executor?: boolean
    date_start?: boolean
    date_end?: boolean
    time_start?: boolean
    time_end?: boolean
    place?: boolean
    contacts?: boolean
    conditions?: boolean
    type?: boolean
    cloth?: boolean
    authorId?: boolean
    technical_department?: boolean
    sound_department?: boolean
    author?: boolean | userDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["filmingPost"]>

  export type filmingPostSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    executor?: boolean
    date_start?: boolean
    date_end?: boolean
    time_start?: boolean
    time_end?: boolean
    place?: boolean
    contacts?: boolean
    conditions?: boolean
    type?: boolean
    cloth?: boolean
    authorId?: boolean
    technical_department?: boolean
    sound_department?: boolean
    author?: boolean | userDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["filmingPost"]>

  export type filmingPostSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    executor?: boolean
    date_start?: boolean
    date_end?: boolean
    time_start?: boolean
    time_end?: boolean
    place?: boolean
    contacts?: boolean
    conditions?: boolean
    type?: boolean
    cloth?: boolean
    authorId?: boolean
    technical_department?: boolean
    sound_department?: boolean
    author?: boolean | userDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["filmingPost"]>

  export type filmingPostSelectScalar = {
    id?: boolean
    title?: boolean
    executor?: boolean
    date_start?: boolean
    date_end?: boolean
    time_start?: boolean
    time_end?: boolean
    place?: boolean
    contacts?: boolean
    conditions?: boolean
    type?: boolean
    cloth?: boolean
    authorId?: boolean
    technical_department?: boolean
    sound_department?: boolean
  }

  export type filmingPostOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "executor" | "date_start" | "date_end" | "time_start" | "time_end" | "place" | "contacts" | "conditions" | "type" | "cloth" | "authorId" | "technical_department" | "sound_department", ExtArgs["result"]["filmingPost"]>
  export type filmingPostInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    author?: boolean | userDefaultArgs<ExtArgs>
  }
  export type filmingPostIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    author?: boolean | userDefaultArgs<ExtArgs>
  }
  export type filmingPostIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    author?: boolean | userDefaultArgs<ExtArgs>
  }

  export type $filmingPostPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "filmingPost"
    objects: {
      author: Prisma.$userPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
      executor: string
      date_start: Date
      date_end: Date | null
      time_start: Date
      time_end: Date
      place: string
      contacts: string
      conditions: string
      type: string
      cloth: string
      authorId: number
      technical_department: string
      sound_department: string
    }, ExtArgs["result"]["filmingPost"]>
    composites: {}
  }

  type filmingPostGetPayload<S extends boolean | null | undefined | filmingPostDefaultArgs> = $Result.GetResult<Prisma.$filmingPostPayload, S>

  type filmingPostCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<filmingPostFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FilmingPostCountAggregateInputType | true
    }

  export interface filmingPostDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['filmingPost'], meta: { name: 'filmingPost' } }
    /**
     * Find zero or one FilmingPost that matches the filter.
     * @param {filmingPostFindUniqueArgs} args - Arguments to find a FilmingPost
     * @example
     * // Get one FilmingPost
     * const filmingPost = await prisma.filmingPost.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends filmingPostFindUniqueArgs>(args: SelectSubset<T, filmingPostFindUniqueArgs<ExtArgs>>): Prisma__filmingPostClient<$Result.GetResult<Prisma.$filmingPostPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one FilmingPost that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {filmingPostFindUniqueOrThrowArgs} args - Arguments to find a FilmingPost
     * @example
     * // Get one FilmingPost
     * const filmingPost = await prisma.filmingPost.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends filmingPostFindUniqueOrThrowArgs>(args: SelectSubset<T, filmingPostFindUniqueOrThrowArgs<ExtArgs>>): Prisma__filmingPostClient<$Result.GetResult<Prisma.$filmingPostPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FilmingPost that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {filmingPostFindFirstArgs} args - Arguments to find a FilmingPost
     * @example
     * // Get one FilmingPost
     * const filmingPost = await prisma.filmingPost.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends filmingPostFindFirstArgs>(args?: SelectSubset<T, filmingPostFindFirstArgs<ExtArgs>>): Prisma__filmingPostClient<$Result.GetResult<Prisma.$filmingPostPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FilmingPost that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {filmingPostFindFirstOrThrowArgs} args - Arguments to find a FilmingPost
     * @example
     * // Get one FilmingPost
     * const filmingPost = await prisma.filmingPost.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends filmingPostFindFirstOrThrowArgs>(args?: SelectSubset<T, filmingPostFindFirstOrThrowArgs<ExtArgs>>): Prisma__filmingPostClient<$Result.GetResult<Prisma.$filmingPostPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more FilmingPosts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {filmingPostFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FilmingPosts
     * const filmingPosts = await prisma.filmingPost.findMany()
     * 
     * // Get first 10 FilmingPosts
     * const filmingPosts = await prisma.filmingPost.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const filmingPostWithIdOnly = await prisma.filmingPost.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends filmingPostFindManyArgs>(args?: SelectSubset<T, filmingPostFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$filmingPostPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a FilmingPost.
     * @param {filmingPostCreateArgs} args - Arguments to create a FilmingPost.
     * @example
     * // Create one FilmingPost
     * const FilmingPost = await prisma.filmingPost.create({
     *   data: {
     *     // ... data to create a FilmingPost
     *   }
     * })
     * 
     */
    create<T extends filmingPostCreateArgs>(args: SelectSubset<T, filmingPostCreateArgs<ExtArgs>>): Prisma__filmingPostClient<$Result.GetResult<Prisma.$filmingPostPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many FilmingPosts.
     * @param {filmingPostCreateManyArgs} args - Arguments to create many FilmingPosts.
     * @example
     * // Create many FilmingPosts
     * const filmingPost = await prisma.filmingPost.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends filmingPostCreateManyArgs>(args?: SelectSubset<T, filmingPostCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many FilmingPosts and returns the data saved in the database.
     * @param {filmingPostCreateManyAndReturnArgs} args - Arguments to create many FilmingPosts.
     * @example
     * // Create many FilmingPosts
     * const filmingPost = await prisma.filmingPost.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many FilmingPosts and only return the `id`
     * const filmingPostWithIdOnly = await prisma.filmingPost.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends filmingPostCreateManyAndReturnArgs>(args?: SelectSubset<T, filmingPostCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$filmingPostPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a FilmingPost.
     * @param {filmingPostDeleteArgs} args - Arguments to delete one FilmingPost.
     * @example
     * // Delete one FilmingPost
     * const FilmingPost = await prisma.filmingPost.delete({
     *   where: {
     *     // ... filter to delete one FilmingPost
     *   }
     * })
     * 
     */
    delete<T extends filmingPostDeleteArgs>(args: SelectSubset<T, filmingPostDeleteArgs<ExtArgs>>): Prisma__filmingPostClient<$Result.GetResult<Prisma.$filmingPostPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one FilmingPost.
     * @param {filmingPostUpdateArgs} args - Arguments to update one FilmingPost.
     * @example
     * // Update one FilmingPost
     * const filmingPost = await prisma.filmingPost.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends filmingPostUpdateArgs>(args: SelectSubset<T, filmingPostUpdateArgs<ExtArgs>>): Prisma__filmingPostClient<$Result.GetResult<Prisma.$filmingPostPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more FilmingPosts.
     * @param {filmingPostDeleteManyArgs} args - Arguments to filter FilmingPosts to delete.
     * @example
     * // Delete a few FilmingPosts
     * const { count } = await prisma.filmingPost.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends filmingPostDeleteManyArgs>(args?: SelectSubset<T, filmingPostDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FilmingPosts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {filmingPostUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FilmingPosts
     * const filmingPost = await prisma.filmingPost.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends filmingPostUpdateManyArgs>(args: SelectSubset<T, filmingPostUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FilmingPosts and returns the data updated in the database.
     * @param {filmingPostUpdateManyAndReturnArgs} args - Arguments to update many FilmingPosts.
     * @example
     * // Update many FilmingPosts
     * const filmingPost = await prisma.filmingPost.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more FilmingPosts and only return the `id`
     * const filmingPostWithIdOnly = await prisma.filmingPost.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends filmingPostUpdateManyAndReturnArgs>(args: SelectSubset<T, filmingPostUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$filmingPostPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one FilmingPost.
     * @param {filmingPostUpsertArgs} args - Arguments to update or create a FilmingPost.
     * @example
     * // Update or create a FilmingPost
     * const filmingPost = await prisma.filmingPost.upsert({
     *   create: {
     *     // ... data to create a FilmingPost
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FilmingPost we want to update
     *   }
     * })
     */
    upsert<T extends filmingPostUpsertArgs>(args: SelectSubset<T, filmingPostUpsertArgs<ExtArgs>>): Prisma__filmingPostClient<$Result.GetResult<Prisma.$filmingPostPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of FilmingPosts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {filmingPostCountArgs} args - Arguments to filter FilmingPosts to count.
     * @example
     * // Count the number of FilmingPosts
     * const count = await prisma.filmingPost.count({
     *   where: {
     *     // ... the filter for the FilmingPosts we want to count
     *   }
     * })
    **/
    count<T extends filmingPostCountArgs>(
      args?: Subset<T, filmingPostCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FilmingPostCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FilmingPost.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FilmingPostAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FilmingPostAggregateArgs>(args: Subset<T, FilmingPostAggregateArgs>): Prisma.PrismaPromise<GetFilmingPostAggregateType<T>>

    /**
     * Group by FilmingPost.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {filmingPostGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends filmingPostGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: filmingPostGroupByArgs['orderBy'] }
        : { orderBy?: filmingPostGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, filmingPostGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFilmingPostGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the filmingPost model
   */
  readonly fields: filmingPostFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for filmingPost.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__filmingPostClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    author<T extends userDefaultArgs<ExtArgs> = {}>(args?: Subset<T, userDefaultArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the filmingPost model
   */
  interface filmingPostFieldRefs {
    readonly id: FieldRef<"filmingPost", 'Int'>
    readonly title: FieldRef<"filmingPost", 'String'>
    readonly executor: FieldRef<"filmingPost", 'String'>
    readonly date_start: FieldRef<"filmingPost", 'DateTime'>
    readonly date_end: FieldRef<"filmingPost", 'DateTime'>
    readonly time_start: FieldRef<"filmingPost", 'DateTime'>
    readonly time_end: FieldRef<"filmingPost", 'DateTime'>
    readonly place: FieldRef<"filmingPost", 'String'>
    readonly contacts: FieldRef<"filmingPost", 'String'>
    readonly conditions: FieldRef<"filmingPost", 'String'>
    readonly type: FieldRef<"filmingPost", 'String'>
    readonly cloth: FieldRef<"filmingPost", 'String'>
    readonly authorId: FieldRef<"filmingPost", 'Int'>
    readonly technical_department: FieldRef<"filmingPost", 'String'>
    readonly sound_department: FieldRef<"filmingPost", 'String'>
  }
    

  // Custom InputTypes
  /**
   * filmingPost findUnique
   */
  export type filmingPostFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the filmingPost
     */
    select?: filmingPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the filmingPost
     */
    omit?: filmingPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: filmingPostInclude<ExtArgs> | null
    /**
     * Filter, which filmingPost to fetch.
     */
    where: filmingPostWhereUniqueInput
  }

  /**
   * filmingPost findUniqueOrThrow
   */
  export type filmingPostFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the filmingPost
     */
    select?: filmingPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the filmingPost
     */
    omit?: filmingPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: filmingPostInclude<ExtArgs> | null
    /**
     * Filter, which filmingPost to fetch.
     */
    where: filmingPostWhereUniqueInput
  }

  /**
   * filmingPost findFirst
   */
  export type filmingPostFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the filmingPost
     */
    select?: filmingPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the filmingPost
     */
    omit?: filmingPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: filmingPostInclude<ExtArgs> | null
    /**
     * Filter, which filmingPost to fetch.
     */
    where?: filmingPostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of filmingPosts to fetch.
     */
    orderBy?: filmingPostOrderByWithRelationInput | filmingPostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for filmingPosts.
     */
    cursor?: filmingPostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` filmingPosts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` filmingPosts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of filmingPosts.
     */
    distinct?: FilmingPostScalarFieldEnum | FilmingPostScalarFieldEnum[]
  }

  /**
   * filmingPost findFirstOrThrow
   */
  export type filmingPostFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the filmingPost
     */
    select?: filmingPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the filmingPost
     */
    omit?: filmingPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: filmingPostInclude<ExtArgs> | null
    /**
     * Filter, which filmingPost to fetch.
     */
    where?: filmingPostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of filmingPosts to fetch.
     */
    orderBy?: filmingPostOrderByWithRelationInput | filmingPostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for filmingPosts.
     */
    cursor?: filmingPostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` filmingPosts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` filmingPosts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of filmingPosts.
     */
    distinct?: FilmingPostScalarFieldEnum | FilmingPostScalarFieldEnum[]
  }

  /**
   * filmingPost findMany
   */
  export type filmingPostFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the filmingPost
     */
    select?: filmingPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the filmingPost
     */
    omit?: filmingPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: filmingPostInclude<ExtArgs> | null
    /**
     * Filter, which filmingPosts to fetch.
     */
    where?: filmingPostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of filmingPosts to fetch.
     */
    orderBy?: filmingPostOrderByWithRelationInput | filmingPostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing filmingPosts.
     */
    cursor?: filmingPostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` filmingPosts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` filmingPosts.
     */
    skip?: number
    distinct?: FilmingPostScalarFieldEnum | FilmingPostScalarFieldEnum[]
  }

  /**
   * filmingPost create
   */
  export type filmingPostCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the filmingPost
     */
    select?: filmingPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the filmingPost
     */
    omit?: filmingPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: filmingPostInclude<ExtArgs> | null
    /**
     * The data needed to create a filmingPost.
     */
    data: XOR<filmingPostCreateInput, filmingPostUncheckedCreateInput>
  }

  /**
   * filmingPost createMany
   */
  export type filmingPostCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many filmingPosts.
     */
    data: filmingPostCreateManyInput | filmingPostCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * filmingPost createManyAndReturn
   */
  export type filmingPostCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the filmingPost
     */
    select?: filmingPostSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the filmingPost
     */
    omit?: filmingPostOmit<ExtArgs> | null
    /**
     * The data used to create many filmingPosts.
     */
    data: filmingPostCreateManyInput | filmingPostCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: filmingPostIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * filmingPost update
   */
  export type filmingPostUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the filmingPost
     */
    select?: filmingPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the filmingPost
     */
    omit?: filmingPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: filmingPostInclude<ExtArgs> | null
    /**
     * The data needed to update a filmingPost.
     */
    data: XOR<filmingPostUpdateInput, filmingPostUncheckedUpdateInput>
    /**
     * Choose, which filmingPost to update.
     */
    where: filmingPostWhereUniqueInput
  }

  /**
   * filmingPost updateMany
   */
  export type filmingPostUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update filmingPosts.
     */
    data: XOR<filmingPostUpdateManyMutationInput, filmingPostUncheckedUpdateManyInput>
    /**
     * Filter which filmingPosts to update
     */
    where?: filmingPostWhereInput
    /**
     * Limit how many filmingPosts to update.
     */
    limit?: number
  }

  /**
   * filmingPost updateManyAndReturn
   */
  export type filmingPostUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the filmingPost
     */
    select?: filmingPostSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the filmingPost
     */
    omit?: filmingPostOmit<ExtArgs> | null
    /**
     * The data used to update filmingPosts.
     */
    data: XOR<filmingPostUpdateManyMutationInput, filmingPostUncheckedUpdateManyInput>
    /**
     * Filter which filmingPosts to update
     */
    where?: filmingPostWhereInput
    /**
     * Limit how many filmingPosts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: filmingPostIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * filmingPost upsert
   */
  export type filmingPostUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the filmingPost
     */
    select?: filmingPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the filmingPost
     */
    omit?: filmingPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: filmingPostInclude<ExtArgs> | null
    /**
     * The filter to search for the filmingPost to update in case it exists.
     */
    where: filmingPostWhereUniqueInput
    /**
     * In case the filmingPost found by the `where` argument doesn't exist, create a new filmingPost with this data.
     */
    create: XOR<filmingPostCreateInput, filmingPostUncheckedCreateInput>
    /**
     * In case the filmingPost was found with the provided `where` argument, update it with this data.
     */
    update: XOR<filmingPostUpdateInput, filmingPostUncheckedUpdateInput>
  }

  /**
   * filmingPost delete
   */
  export type filmingPostDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the filmingPost
     */
    select?: filmingPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the filmingPost
     */
    omit?: filmingPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: filmingPostInclude<ExtArgs> | null
    /**
     * Filter which filmingPost to delete.
     */
    where: filmingPostWhereUniqueInput
  }

  /**
   * filmingPost deleteMany
   */
  export type filmingPostDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which filmingPosts to delete
     */
    where?: filmingPostWhereInput
    /**
     * Limit how many filmingPosts to delete.
     */
    limit?: number
  }

  /**
   * filmingPost without action
   */
  export type filmingPostDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the filmingPost
     */
    select?: filmingPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the filmingPost
     */
    omit?: filmingPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: filmingPostInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    lastName: 'lastName',
    email: 'email',
    telegramId: 'telegramId',
    password: 'password',
    createAt: 'createAt',
    updateAr: 'updateAr'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const FilmingPostScalarFieldEnum: {
    id: 'id',
    title: 'title',
    executor: 'executor',
    date_start: 'date_start',
    date_end: 'date_end',
    time_start: 'time_start',
    time_end: 'time_end',
    place: 'place',
    contacts: 'contacts',
    conditions: 'conditions',
    type: 'type',
    cloth: 'cloth',
    authorId: 'authorId',
    technical_department: 'technical_department',
    sound_department: 'sound_department'
  };

  export type FilmingPostScalarFieldEnum = (typeof FilmingPostScalarFieldEnum)[keyof typeof FilmingPostScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type userWhereInput = {
    AND?: userWhereInput | userWhereInput[]
    OR?: userWhereInput[]
    NOT?: userWhereInput | userWhereInput[]
    id?: IntFilter<"user"> | number
    name?: StringFilter<"user"> | string
    lastName?: StringFilter<"user"> | string
    email?: StringFilter<"user"> | string
    telegramId?: StringFilter<"user"> | string
    password?: StringFilter<"user"> | string
    createAt?: DateTimeFilter<"user"> | Date | string
    updateAr?: DateTimeFilter<"user"> | Date | string
    filmingPost?: FilmingPostListRelationFilter
  }

  export type userOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    telegramId?: SortOrder
    password?: SortOrder
    createAt?: SortOrder
    updateAr?: SortOrder
    filmingPost?: filmingPostOrderByRelationAggregateInput
  }

  export type userWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: userWhereInput | userWhereInput[]
    OR?: userWhereInput[]
    NOT?: userWhereInput | userWhereInput[]
    name?: StringFilter<"user"> | string
    lastName?: StringFilter<"user"> | string
    email?: StringFilter<"user"> | string
    telegramId?: StringFilter<"user"> | string
    password?: StringFilter<"user"> | string
    createAt?: DateTimeFilter<"user"> | Date | string
    updateAr?: DateTimeFilter<"user"> | Date | string
    filmingPost?: FilmingPostListRelationFilter
  }, "id">

  export type userOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    telegramId?: SortOrder
    password?: SortOrder
    createAt?: SortOrder
    updateAr?: SortOrder
    _count?: userCountOrderByAggregateInput
    _avg?: userAvgOrderByAggregateInput
    _max?: userMaxOrderByAggregateInput
    _min?: userMinOrderByAggregateInput
    _sum?: userSumOrderByAggregateInput
  }

  export type userScalarWhereWithAggregatesInput = {
    AND?: userScalarWhereWithAggregatesInput | userScalarWhereWithAggregatesInput[]
    OR?: userScalarWhereWithAggregatesInput[]
    NOT?: userScalarWhereWithAggregatesInput | userScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"user"> | number
    name?: StringWithAggregatesFilter<"user"> | string
    lastName?: StringWithAggregatesFilter<"user"> | string
    email?: StringWithAggregatesFilter<"user"> | string
    telegramId?: StringWithAggregatesFilter<"user"> | string
    password?: StringWithAggregatesFilter<"user"> | string
    createAt?: DateTimeWithAggregatesFilter<"user"> | Date | string
    updateAr?: DateTimeWithAggregatesFilter<"user"> | Date | string
  }

  export type filmingPostWhereInput = {
    AND?: filmingPostWhereInput | filmingPostWhereInput[]
    OR?: filmingPostWhereInput[]
    NOT?: filmingPostWhereInput | filmingPostWhereInput[]
    id?: IntFilter<"filmingPost"> | number
    title?: StringFilter<"filmingPost"> | string
    executor?: StringFilter<"filmingPost"> | string
    date_start?: DateTimeFilter<"filmingPost"> | Date | string
    date_end?: DateTimeNullableFilter<"filmingPost"> | Date | string | null
    time_start?: DateTimeFilter<"filmingPost"> | Date | string
    time_end?: DateTimeFilter<"filmingPost"> | Date | string
    place?: StringFilter<"filmingPost"> | string
    contacts?: StringFilter<"filmingPost"> | string
    conditions?: StringFilter<"filmingPost"> | string
    type?: StringFilter<"filmingPost"> | string
    cloth?: StringFilter<"filmingPost"> | string
    authorId?: IntFilter<"filmingPost"> | number
    technical_department?: StringFilter<"filmingPost"> | string
    sound_department?: StringFilter<"filmingPost"> | string
    author?: XOR<UserScalarRelationFilter, userWhereInput>
  }

  export type filmingPostOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    executor?: SortOrder
    date_start?: SortOrder
    date_end?: SortOrderInput | SortOrder
    time_start?: SortOrder
    time_end?: SortOrder
    place?: SortOrder
    contacts?: SortOrder
    conditions?: SortOrder
    type?: SortOrder
    cloth?: SortOrder
    authorId?: SortOrder
    technical_department?: SortOrder
    sound_department?: SortOrder
    author?: userOrderByWithRelationInput
  }

  export type filmingPostWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: filmingPostWhereInput | filmingPostWhereInput[]
    OR?: filmingPostWhereInput[]
    NOT?: filmingPostWhereInput | filmingPostWhereInput[]
    title?: StringFilter<"filmingPost"> | string
    executor?: StringFilter<"filmingPost"> | string
    date_start?: DateTimeFilter<"filmingPost"> | Date | string
    date_end?: DateTimeNullableFilter<"filmingPost"> | Date | string | null
    time_start?: DateTimeFilter<"filmingPost"> | Date | string
    time_end?: DateTimeFilter<"filmingPost"> | Date | string
    place?: StringFilter<"filmingPost"> | string
    contacts?: StringFilter<"filmingPost"> | string
    conditions?: StringFilter<"filmingPost"> | string
    type?: StringFilter<"filmingPost"> | string
    cloth?: StringFilter<"filmingPost"> | string
    authorId?: IntFilter<"filmingPost"> | number
    technical_department?: StringFilter<"filmingPost"> | string
    sound_department?: StringFilter<"filmingPost"> | string
    author?: XOR<UserScalarRelationFilter, userWhereInput>
  }, "id">

  export type filmingPostOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    executor?: SortOrder
    date_start?: SortOrder
    date_end?: SortOrderInput | SortOrder
    time_start?: SortOrder
    time_end?: SortOrder
    place?: SortOrder
    contacts?: SortOrder
    conditions?: SortOrder
    type?: SortOrder
    cloth?: SortOrder
    authorId?: SortOrder
    technical_department?: SortOrder
    sound_department?: SortOrder
    _count?: filmingPostCountOrderByAggregateInput
    _avg?: filmingPostAvgOrderByAggregateInput
    _max?: filmingPostMaxOrderByAggregateInput
    _min?: filmingPostMinOrderByAggregateInput
    _sum?: filmingPostSumOrderByAggregateInput
  }

  export type filmingPostScalarWhereWithAggregatesInput = {
    AND?: filmingPostScalarWhereWithAggregatesInput | filmingPostScalarWhereWithAggregatesInput[]
    OR?: filmingPostScalarWhereWithAggregatesInput[]
    NOT?: filmingPostScalarWhereWithAggregatesInput | filmingPostScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"filmingPost"> | number
    title?: StringWithAggregatesFilter<"filmingPost"> | string
    executor?: StringWithAggregatesFilter<"filmingPost"> | string
    date_start?: DateTimeWithAggregatesFilter<"filmingPost"> | Date | string
    date_end?: DateTimeNullableWithAggregatesFilter<"filmingPost"> | Date | string | null
    time_start?: DateTimeWithAggregatesFilter<"filmingPost"> | Date | string
    time_end?: DateTimeWithAggregatesFilter<"filmingPost"> | Date | string
    place?: StringWithAggregatesFilter<"filmingPost"> | string
    contacts?: StringWithAggregatesFilter<"filmingPost"> | string
    conditions?: StringWithAggregatesFilter<"filmingPost"> | string
    type?: StringWithAggregatesFilter<"filmingPost"> | string
    cloth?: StringWithAggregatesFilter<"filmingPost"> | string
    authorId?: IntWithAggregatesFilter<"filmingPost"> | number
    technical_department?: StringWithAggregatesFilter<"filmingPost"> | string
    sound_department?: StringWithAggregatesFilter<"filmingPost"> | string
  }

  export type userCreateInput = {
    name: string
    lastName: string
    email: string
    telegramId: string
    password: string
    createAt?: Date | string
    updateAr?: Date | string
    filmingPost?: filmingPostCreateNestedManyWithoutAuthorInput
  }

  export type userUncheckedCreateInput = {
    id?: number
    name: string
    lastName: string
    email: string
    telegramId: string
    password: string
    createAt?: Date | string
    updateAr?: Date | string
    filmingPost?: filmingPostUncheckedCreateNestedManyWithoutAuthorInput
  }

  export type userUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    telegramId?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAr?: DateTimeFieldUpdateOperationsInput | Date | string
    filmingPost?: filmingPostUpdateManyWithoutAuthorNestedInput
  }

  export type userUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    telegramId?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAr?: DateTimeFieldUpdateOperationsInput | Date | string
    filmingPost?: filmingPostUncheckedUpdateManyWithoutAuthorNestedInput
  }

  export type userCreateManyInput = {
    id?: number
    name: string
    lastName: string
    email: string
    telegramId: string
    password: string
    createAt?: Date | string
    updateAr?: Date | string
  }

  export type userUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    telegramId?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAr?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type userUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    telegramId?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAr?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type filmingPostCreateInput = {
    title: string
    executor: string
    date_start: Date | string
    date_end?: Date | string | null
    time_start: Date | string
    time_end: Date | string
    place: string
    contacts: string
    conditions: string
    type: string
    cloth: string
    technical_department: string
    sound_department: string
    author: userCreateNestedOneWithoutFilmingPostInput
  }

  export type filmingPostUncheckedCreateInput = {
    id?: number
    title: string
    executor: string
    date_start: Date | string
    date_end?: Date | string | null
    time_start: Date | string
    time_end: Date | string
    place: string
    contacts: string
    conditions: string
    type: string
    cloth: string
    authorId: number
    technical_department: string
    sound_department: string
  }

  export type filmingPostUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    executor?: StringFieldUpdateOperationsInput | string
    date_start?: DateTimeFieldUpdateOperationsInput | Date | string
    date_end?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    time_start?: DateTimeFieldUpdateOperationsInput | Date | string
    time_end?: DateTimeFieldUpdateOperationsInput | Date | string
    place?: StringFieldUpdateOperationsInput | string
    contacts?: StringFieldUpdateOperationsInput | string
    conditions?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    cloth?: StringFieldUpdateOperationsInput | string
    technical_department?: StringFieldUpdateOperationsInput | string
    sound_department?: StringFieldUpdateOperationsInput | string
    author?: userUpdateOneRequiredWithoutFilmingPostNestedInput
  }

  export type filmingPostUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    executor?: StringFieldUpdateOperationsInput | string
    date_start?: DateTimeFieldUpdateOperationsInput | Date | string
    date_end?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    time_start?: DateTimeFieldUpdateOperationsInput | Date | string
    time_end?: DateTimeFieldUpdateOperationsInput | Date | string
    place?: StringFieldUpdateOperationsInput | string
    contacts?: StringFieldUpdateOperationsInput | string
    conditions?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    cloth?: StringFieldUpdateOperationsInput | string
    authorId?: IntFieldUpdateOperationsInput | number
    technical_department?: StringFieldUpdateOperationsInput | string
    sound_department?: StringFieldUpdateOperationsInput | string
  }

  export type filmingPostCreateManyInput = {
    id?: number
    title: string
    executor: string
    date_start: Date | string
    date_end?: Date | string | null
    time_start: Date | string
    time_end: Date | string
    place: string
    contacts: string
    conditions: string
    type: string
    cloth: string
    authorId: number
    technical_department: string
    sound_department: string
  }

  export type filmingPostUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    executor?: StringFieldUpdateOperationsInput | string
    date_start?: DateTimeFieldUpdateOperationsInput | Date | string
    date_end?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    time_start?: DateTimeFieldUpdateOperationsInput | Date | string
    time_end?: DateTimeFieldUpdateOperationsInput | Date | string
    place?: StringFieldUpdateOperationsInput | string
    contacts?: StringFieldUpdateOperationsInput | string
    conditions?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    cloth?: StringFieldUpdateOperationsInput | string
    technical_department?: StringFieldUpdateOperationsInput | string
    sound_department?: StringFieldUpdateOperationsInput | string
  }

  export type filmingPostUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    executor?: StringFieldUpdateOperationsInput | string
    date_start?: DateTimeFieldUpdateOperationsInput | Date | string
    date_end?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    time_start?: DateTimeFieldUpdateOperationsInput | Date | string
    time_end?: DateTimeFieldUpdateOperationsInput | Date | string
    place?: StringFieldUpdateOperationsInput | string
    contacts?: StringFieldUpdateOperationsInput | string
    conditions?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    cloth?: StringFieldUpdateOperationsInput | string
    authorId?: IntFieldUpdateOperationsInput | number
    technical_department?: StringFieldUpdateOperationsInput | string
    sound_department?: StringFieldUpdateOperationsInput | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type FilmingPostListRelationFilter = {
    every?: filmingPostWhereInput
    some?: filmingPostWhereInput
    none?: filmingPostWhereInput
  }

  export type filmingPostOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type userCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    telegramId?: SortOrder
    password?: SortOrder
    createAt?: SortOrder
    updateAr?: SortOrder
  }

  export type userAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type userMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    telegramId?: SortOrder
    password?: SortOrder
    createAt?: SortOrder
    updateAr?: SortOrder
  }

  export type userMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    telegramId?: SortOrder
    password?: SortOrder
    createAt?: SortOrder
    updateAr?: SortOrder
  }

  export type userSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type UserScalarRelationFilter = {
    is?: userWhereInput
    isNot?: userWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type filmingPostCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    executor?: SortOrder
    date_start?: SortOrder
    date_end?: SortOrder
    time_start?: SortOrder
    time_end?: SortOrder
    place?: SortOrder
    contacts?: SortOrder
    conditions?: SortOrder
    type?: SortOrder
    cloth?: SortOrder
    authorId?: SortOrder
    technical_department?: SortOrder
    sound_department?: SortOrder
  }

  export type filmingPostAvgOrderByAggregateInput = {
    id?: SortOrder
    authorId?: SortOrder
  }

  export type filmingPostMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    executor?: SortOrder
    date_start?: SortOrder
    date_end?: SortOrder
    time_start?: SortOrder
    time_end?: SortOrder
    place?: SortOrder
    contacts?: SortOrder
    conditions?: SortOrder
    type?: SortOrder
    cloth?: SortOrder
    authorId?: SortOrder
    technical_department?: SortOrder
    sound_department?: SortOrder
  }

  export type filmingPostMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    executor?: SortOrder
    date_start?: SortOrder
    date_end?: SortOrder
    time_start?: SortOrder
    time_end?: SortOrder
    place?: SortOrder
    contacts?: SortOrder
    conditions?: SortOrder
    type?: SortOrder
    cloth?: SortOrder
    authorId?: SortOrder
    technical_department?: SortOrder
    sound_department?: SortOrder
  }

  export type filmingPostSumOrderByAggregateInput = {
    id?: SortOrder
    authorId?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type filmingPostCreateNestedManyWithoutAuthorInput = {
    create?: XOR<filmingPostCreateWithoutAuthorInput, filmingPostUncheckedCreateWithoutAuthorInput> | filmingPostCreateWithoutAuthorInput[] | filmingPostUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: filmingPostCreateOrConnectWithoutAuthorInput | filmingPostCreateOrConnectWithoutAuthorInput[]
    createMany?: filmingPostCreateManyAuthorInputEnvelope
    connect?: filmingPostWhereUniqueInput | filmingPostWhereUniqueInput[]
  }

  export type filmingPostUncheckedCreateNestedManyWithoutAuthorInput = {
    create?: XOR<filmingPostCreateWithoutAuthorInput, filmingPostUncheckedCreateWithoutAuthorInput> | filmingPostCreateWithoutAuthorInput[] | filmingPostUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: filmingPostCreateOrConnectWithoutAuthorInput | filmingPostCreateOrConnectWithoutAuthorInput[]
    createMany?: filmingPostCreateManyAuthorInputEnvelope
    connect?: filmingPostWhereUniqueInput | filmingPostWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type filmingPostUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<filmingPostCreateWithoutAuthorInput, filmingPostUncheckedCreateWithoutAuthorInput> | filmingPostCreateWithoutAuthorInput[] | filmingPostUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: filmingPostCreateOrConnectWithoutAuthorInput | filmingPostCreateOrConnectWithoutAuthorInput[]
    upsert?: filmingPostUpsertWithWhereUniqueWithoutAuthorInput | filmingPostUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: filmingPostCreateManyAuthorInputEnvelope
    set?: filmingPostWhereUniqueInput | filmingPostWhereUniqueInput[]
    disconnect?: filmingPostWhereUniqueInput | filmingPostWhereUniqueInput[]
    delete?: filmingPostWhereUniqueInput | filmingPostWhereUniqueInput[]
    connect?: filmingPostWhereUniqueInput | filmingPostWhereUniqueInput[]
    update?: filmingPostUpdateWithWhereUniqueWithoutAuthorInput | filmingPostUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: filmingPostUpdateManyWithWhereWithoutAuthorInput | filmingPostUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: filmingPostScalarWhereInput | filmingPostScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type filmingPostUncheckedUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<filmingPostCreateWithoutAuthorInput, filmingPostUncheckedCreateWithoutAuthorInput> | filmingPostCreateWithoutAuthorInput[] | filmingPostUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: filmingPostCreateOrConnectWithoutAuthorInput | filmingPostCreateOrConnectWithoutAuthorInput[]
    upsert?: filmingPostUpsertWithWhereUniqueWithoutAuthorInput | filmingPostUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: filmingPostCreateManyAuthorInputEnvelope
    set?: filmingPostWhereUniqueInput | filmingPostWhereUniqueInput[]
    disconnect?: filmingPostWhereUniqueInput | filmingPostWhereUniqueInput[]
    delete?: filmingPostWhereUniqueInput | filmingPostWhereUniqueInput[]
    connect?: filmingPostWhereUniqueInput | filmingPostWhereUniqueInput[]
    update?: filmingPostUpdateWithWhereUniqueWithoutAuthorInput | filmingPostUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: filmingPostUpdateManyWithWhereWithoutAuthorInput | filmingPostUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: filmingPostScalarWhereInput | filmingPostScalarWhereInput[]
  }

  export type userCreateNestedOneWithoutFilmingPostInput = {
    create?: XOR<userCreateWithoutFilmingPostInput, userUncheckedCreateWithoutFilmingPostInput>
    connectOrCreate?: userCreateOrConnectWithoutFilmingPostInput
    connect?: userWhereUniqueInput
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type userUpdateOneRequiredWithoutFilmingPostNestedInput = {
    create?: XOR<userCreateWithoutFilmingPostInput, userUncheckedCreateWithoutFilmingPostInput>
    connectOrCreate?: userCreateOrConnectWithoutFilmingPostInput
    upsert?: userUpsertWithoutFilmingPostInput
    connect?: userWhereUniqueInput
    update?: XOR<XOR<userUpdateToOneWithWhereWithoutFilmingPostInput, userUpdateWithoutFilmingPostInput>, userUncheckedUpdateWithoutFilmingPostInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type filmingPostCreateWithoutAuthorInput = {
    title: string
    executor: string
    date_start: Date | string
    date_end?: Date | string | null
    time_start: Date | string
    time_end: Date | string
    place: string
    contacts: string
    conditions: string
    type: string
    cloth: string
    technical_department: string
    sound_department: string
  }

  export type filmingPostUncheckedCreateWithoutAuthorInput = {
    id?: number
    title: string
    executor: string
    date_start: Date | string
    date_end?: Date | string | null
    time_start: Date | string
    time_end: Date | string
    place: string
    contacts: string
    conditions: string
    type: string
    cloth: string
    technical_department: string
    sound_department: string
  }

  export type filmingPostCreateOrConnectWithoutAuthorInput = {
    where: filmingPostWhereUniqueInput
    create: XOR<filmingPostCreateWithoutAuthorInput, filmingPostUncheckedCreateWithoutAuthorInput>
  }

  export type filmingPostCreateManyAuthorInputEnvelope = {
    data: filmingPostCreateManyAuthorInput | filmingPostCreateManyAuthorInput[]
    skipDuplicates?: boolean
  }

  export type filmingPostUpsertWithWhereUniqueWithoutAuthorInput = {
    where: filmingPostWhereUniqueInput
    update: XOR<filmingPostUpdateWithoutAuthorInput, filmingPostUncheckedUpdateWithoutAuthorInput>
    create: XOR<filmingPostCreateWithoutAuthorInput, filmingPostUncheckedCreateWithoutAuthorInput>
  }

  export type filmingPostUpdateWithWhereUniqueWithoutAuthorInput = {
    where: filmingPostWhereUniqueInput
    data: XOR<filmingPostUpdateWithoutAuthorInput, filmingPostUncheckedUpdateWithoutAuthorInput>
  }

  export type filmingPostUpdateManyWithWhereWithoutAuthorInput = {
    where: filmingPostScalarWhereInput
    data: XOR<filmingPostUpdateManyMutationInput, filmingPostUncheckedUpdateManyWithoutAuthorInput>
  }

  export type filmingPostScalarWhereInput = {
    AND?: filmingPostScalarWhereInput | filmingPostScalarWhereInput[]
    OR?: filmingPostScalarWhereInput[]
    NOT?: filmingPostScalarWhereInput | filmingPostScalarWhereInput[]
    id?: IntFilter<"filmingPost"> | number
    title?: StringFilter<"filmingPost"> | string
    executor?: StringFilter<"filmingPost"> | string
    date_start?: DateTimeFilter<"filmingPost"> | Date | string
    date_end?: DateTimeNullableFilter<"filmingPost"> | Date | string | null
    time_start?: DateTimeFilter<"filmingPost"> | Date | string
    time_end?: DateTimeFilter<"filmingPost"> | Date | string
    place?: StringFilter<"filmingPost"> | string
    contacts?: StringFilter<"filmingPost"> | string
    conditions?: StringFilter<"filmingPost"> | string
    type?: StringFilter<"filmingPost"> | string
    cloth?: StringFilter<"filmingPost"> | string
    authorId?: IntFilter<"filmingPost"> | number
    technical_department?: StringFilter<"filmingPost"> | string
    sound_department?: StringFilter<"filmingPost"> | string
  }

  export type userCreateWithoutFilmingPostInput = {
    name: string
    lastName: string
    email: string
    telegramId: string
    password: string
    createAt?: Date | string
    updateAr?: Date | string
  }

  export type userUncheckedCreateWithoutFilmingPostInput = {
    id?: number
    name: string
    lastName: string
    email: string
    telegramId: string
    password: string
    createAt?: Date | string
    updateAr?: Date | string
  }

  export type userCreateOrConnectWithoutFilmingPostInput = {
    where: userWhereUniqueInput
    create: XOR<userCreateWithoutFilmingPostInput, userUncheckedCreateWithoutFilmingPostInput>
  }

  export type userUpsertWithoutFilmingPostInput = {
    update: XOR<userUpdateWithoutFilmingPostInput, userUncheckedUpdateWithoutFilmingPostInput>
    create: XOR<userCreateWithoutFilmingPostInput, userUncheckedCreateWithoutFilmingPostInput>
    where?: userWhereInput
  }

  export type userUpdateToOneWithWhereWithoutFilmingPostInput = {
    where?: userWhereInput
    data: XOR<userUpdateWithoutFilmingPostInput, userUncheckedUpdateWithoutFilmingPostInput>
  }

  export type userUpdateWithoutFilmingPostInput = {
    name?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    telegramId?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAr?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type userUncheckedUpdateWithoutFilmingPostInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    telegramId?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAr?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type filmingPostCreateManyAuthorInput = {
    id?: number
    title: string
    executor: string
    date_start: Date | string
    date_end?: Date | string | null
    time_start: Date | string
    time_end: Date | string
    place: string
    contacts: string
    conditions: string
    type: string
    cloth: string
    technical_department: string
    sound_department: string
  }

  export type filmingPostUpdateWithoutAuthorInput = {
    title?: StringFieldUpdateOperationsInput | string
    executor?: StringFieldUpdateOperationsInput | string
    date_start?: DateTimeFieldUpdateOperationsInput | Date | string
    date_end?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    time_start?: DateTimeFieldUpdateOperationsInput | Date | string
    time_end?: DateTimeFieldUpdateOperationsInput | Date | string
    place?: StringFieldUpdateOperationsInput | string
    contacts?: StringFieldUpdateOperationsInput | string
    conditions?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    cloth?: StringFieldUpdateOperationsInput | string
    technical_department?: StringFieldUpdateOperationsInput | string
    sound_department?: StringFieldUpdateOperationsInput | string
  }

  export type filmingPostUncheckedUpdateWithoutAuthorInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    executor?: StringFieldUpdateOperationsInput | string
    date_start?: DateTimeFieldUpdateOperationsInput | Date | string
    date_end?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    time_start?: DateTimeFieldUpdateOperationsInput | Date | string
    time_end?: DateTimeFieldUpdateOperationsInput | Date | string
    place?: StringFieldUpdateOperationsInput | string
    contacts?: StringFieldUpdateOperationsInput | string
    conditions?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    cloth?: StringFieldUpdateOperationsInput | string
    technical_department?: StringFieldUpdateOperationsInput | string
    sound_department?: StringFieldUpdateOperationsInput | string
  }

  export type filmingPostUncheckedUpdateManyWithoutAuthorInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    executor?: StringFieldUpdateOperationsInput | string
    date_start?: DateTimeFieldUpdateOperationsInput | Date | string
    date_end?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    time_start?: DateTimeFieldUpdateOperationsInput | Date | string
    time_end?: DateTimeFieldUpdateOperationsInput | Date | string
    place?: StringFieldUpdateOperationsInput | string
    contacts?: StringFieldUpdateOperationsInput | string
    conditions?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    cloth?: StringFieldUpdateOperationsInput | string
    technical_department?: StringFieldUpdateOperationsInput | string
    sound_department?: StringFieldUpdateOperationsInput | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}