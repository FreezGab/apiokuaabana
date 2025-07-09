
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
 * Model Association
 * 
 */
export type Association = $Result.DefaultSelection<Prisma.$AssociationPayload>
/**
 * Model Member
 * 
 */
export type Member = $Result.DefaultSelection<Prisma.$MemberPayload>
/**
 * Model Cotisation
 * 
 */
export type Cotisation = $Result.DefaultSelection<Prisma.$CotisationPayload>
/**
 * Model Activity
 * 
 */
export type Activity = $Result.DefaultSelection<Prisma.$ActivityPayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Invitation
 * 
 */
export type Invitation = $Result.DefaultSelection<Prisma.$InvitationPayload>
/**
 * Model Presence
 * 
 */
export type Presence = $Result.DefaultSelection<Prisma.$PresencePayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Associations
 * const associations = await prisma.association.findMany()
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
   * // Fetch zero or more Associations
   * const associations = await prisma.association.findMany()
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
   * `prisma.association`: Exposes CRUD operations for the **Association** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Associations
    * const associations = await prisma.association.findMany()
    * ```
    */
  get association(): Prisma.AssociationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.member`: Exposes CRUD operations for the **Member** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Members
    * const members = await prisma.member.findMany()
    * ```
    */
  get member(): Prisma.MemberDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.cotisation`: Exposes CRUD operations for the **Cotisation** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Cotisations
    * const cotisations = await prisma.cotisation.findMany()
    * ```
    */
  get cotisation(): Prisma.CotisationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.activity`: Exposes CRUD operations for the **Activity** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Activities
    * const activities = await prisma.activity.findMany()
    * ```
    */
  get activity(): Prisma.ActivityDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.invitation`: Exposes CRUD operations for the **Invitation** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Invitations
    * const invitations = await prisma.invitation.findMany()
    * ```
    */
  get invitation(): Prisma.InvitationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.presence`: Exposes CRUD operations for the **Presence** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Presences
    * const presences = await prisma.presence.findMany()
    * ```
    */
  get presence(): Prisma.PresenceDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.11.1
   * Query Engine version: f40f79ec31188888a2e33acda0ecc8fd10a853a9
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
    Association: 'Association',
    Member: 'Member',
    Cotisation: 'Cotisation',
    Activity: 'Activity',
    User: 'User',
    Invitation: 'Invitation',
    Presence: 'Presence'
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
      modelProps: "association" | "member" | "cotisation" | "activity" | "user" | "invitation" | "presence"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Association: {
        payload: Prisma.$AssociationPayload<ExtArgs>
        fields: Prisma.AssociationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AssociationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssociationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AssociationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssociationPayload>
          }
          findFirst: {
            args: Prisma.AssociationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssociationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AssociationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssociationPayload>
          }
          findMany: {
            args: Prisma.AssociationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssociationPayload>[]
          }
          create: {
            args: Prisma.AssociationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssociationPayload>
          }
          createMany: {
            args: Prisma.AssociationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AssociationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssociationPayload>[]
          }
          delete: {
            args: Prisma.AssociationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssociationPayload>
          }
          update: {
            args: Prisma.AssociationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssociationPayload>
          }
          deleteMany: {
            args: Prisma.AssociationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AssociationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AssociationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssociationPayload>[]
          }
          upsert: {
            args: Prisma.AssociationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssociationPayload>
          }
          aggregate: {
            args: Prisma.AssociationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAssociation>
          }
          groupBy: {
            args: Prisma.AssociationGroupByArgs<ExtArgs>
            result: $Utils.Optional<AssociationGroupByOutputType>[]
          }
          count: {
            args: Prisma.AssociationCountArgs<ExtArgs>
            result: $Utils.Optional<AssociationCountAggregateOutputType> | number
          }
        }
      }
      Member: {
        payload: Prisma.$MemberPayload<ExtArgs>
        fields: Prisma.MemberFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MemberFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemberPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MemberFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemberPayload>
          }
          findFirst: {
            args: Prisma.MemberFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemberPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MemberFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemberPayload>
          }
          findMany: {
            args: Prisma.MemberFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemberPayload>[]
          }
          create: {
            args: Prisma.MemberCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemberPayload>
          }
          createMany: {
            args: Prisma.MemberCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MemberCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemberPayload>[]
          }
          delete: {
            args: Prisma.MemberDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemberPayload>
          }
          update: {
            args: Prisma.MemberUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemberPayload>
          }
          deleteMany: {
            args: Prisma.MemberDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MemberUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MemberUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemberPayload>[]
          }
          upsert: {
            args: Prisma.MemberUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemberPayload>
          }
          aggregate: {
            args: Prisma.MemberAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMember>
          }
          groupBy: {
            args: Prisma.MemberGroupByArgs<ExtArgs>
            result: $Utils.Optional<MemberGroupByOutputType>[]
          }
          count: {
            args: Prisma.MemberCountArgs<ExtArgs>
            result: $Utils.Optional<MemberCountAggregateOutputType> | number
          }
        }
      }
      Cotisation: {
        payload: Prisma.$CotisationPayload<ExtArgs>
        fields: Prisma.CotisationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CotisationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CotisationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CotisationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CotisationPayload>
          }
          findFirst: {
            args: Prisma.CotisationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CotisationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CotisationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CotisationPayload>
          }
          findMany: {
            args: Prisma.CotisationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CotisationPayload>[]
          }
          create: {
            args: Prisma.CotisationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CotisationPayload>
          }
          createMany: {
            args: Prisma.CotisationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CotisationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CotisationPayload>[]
          }
          delete: {
            args: Prisma.CotisationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CotisationPayload>
          }
          update: {
            args: Prisma.CotisationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CotisationPayload>
          }
          deleteMany: {
            args: Prisma.CotisationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CotisationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CotisationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CotisationPayload>[]
          }
          upsert: {
            args: Prisma.CotisationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CotisationPayload>
          }
          aggregate: {
            args: Prisma.CotisationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCotisation>
          }
          groupBy: {
            args: Prisma.CotisationGroupByArgs<ExtArgs>
            result: $Utils.Optional<CotisationGroupByOutputType>[]
          }
          count: {
            args: Prisma.CotisationCountArgs<ExtArgs>
            result: $Utils.Optional<CotisationCountAggregateOutputType> | number
          }
        }
      }
      Activity: {
        payload: Prisma.$ActivityPayload<ExtArgs>
        fields: Prisma.ActivityFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ActivityFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ActivityFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityPayload>
          }
          findFirst: {
            args: Prisma.ActivityFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ActivityFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityPayload>
          }
          findMany: {
            args: Prisma.ActivityFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityPayload>[]
          }
          create: {
            args: Prisma.ActivityCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityPayload>
          }
          createMany: {
            args: Prisma.ActivityCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ActivityCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityPayload>[]
          }
          delete: {
            args: Prisma.ActivityDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityPayload>
          }
          update: {
            args: Prisma.ActivityUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityPayload>
          }
          deleteMany: {
            args: Prisma.ActivityDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ActivityUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ActivityUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityPayload>[]
          }
          upsert: {
            args: Prisma.ActivityUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityPayload>
          }
          aggregate: {
            args: Prisma.ActivityAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateActivity>
          }
          groupBy: {
            args: Prisma.ActivityGroupByArgs<ExtArgs>
            result: $Utils.Optional<ActivityGroupByOutputType>[]
          }
          count: {
            args: Prisma.ActivityCountArgs<ExtArgs>
            result: $Utils.Optional<ActivityCountAggregateOutputType> | number
          }
        }
      }
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Invitation: {
        payload: Prisma.$InvitationPayload<ExtArgs>
        fields: Prisma.InvitationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.InvitationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvitationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.InvitationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvitationPayload>
          }
          findFirst: {
            args: Prisma.InvitationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvitationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.InvitationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvitationPayload>
          }
          findMany: {
            args: Prisma.InvitationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvitationPayload>[]
          }
          create: {
            args: Prisma.InvitationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvitationPayload>
          }
          createMany: {
            args: Prisma.InvitationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.InvitationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvitationPayload>[]
          }
          delete: {
            args: Prisma.InvitationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvitationPayload>
          }
          update: {
            args: Prisma.InvitationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvitationPayload>
          }
          deleteMany: {
            args: Prisma.InvitationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.InvitationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.InvitationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvitationPayload>[]
          }
          upsert: {
            args: Prisma.InvitationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvitationPayload>
          }
          aggregate: {
            args: Prisma.InvitationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateInvitation>
          }
          groupBy: {
            args: Prisma.InvitationGroupByArgs<ExtArgs>
            result: $Utils.Optional<InvitationGroupByOutputType>[]
          }
          count: {
            args: Prisma.InvitationCountArgs<ExtArgs>
            result: $Utils.Optional<InvitationCountAggregateOutputType> | number
          }
        }
      }
      Presence: {
        payload: Prisma.$PresencePayload<ExtArgs>
        fields: Prisma.PresenceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PresenceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PresencePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PresenceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PresencePayload>
          }
          findFirst: {
            args: Prisma.PresenceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PresencePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PresenceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PresencePayload>
          }
          findMany: {
            args: Prisma.PresenceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PresencePayload>[]
          }
          create: {
            args: Prisma.PresenceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PresencePayload>
          }
          createMany: {
            args: Prisma.PresenceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PresenceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PresencePayload>[]
          }
          delete: {
            args: Prisma.PresenceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PresencePayload>
          }
          update: {
            args: Prisma.PresenceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PresencePayload>
          }
          deleteMany: {
            args: Prisma.PresenceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PresenceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PresenceUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PresencePayload>[]
          }
          upsert: {
            args: Prisma.PresenceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PresencePayload>
          }
          aggregate: {
            args: Prisma.PresenceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePresence>
          }
          groupBy: {
            args: Prisma.PresenceGroupByArgs<ExtArgs>
            result: $Utils.Optional<PresenceGroupByOutputType>[]
          }
          count: {
            args: Prisma.PresenceCountArgs<ExtArgs>
            result: $Utils.Optional<PresenceCountAggregateOutputType> | number
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
    association?: AssociationOmit
    member?: MemberOmit
    cotisation?: CotisationOmit
    activity?: ActivityOmit
    user?: UserOmit
    invitation?: InvitationOmit
    presence?: PresenceOmit
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
   * Count Type AssociationCountOutputType
   */

  export type AssociationCountOutputType = {
    members: number
    cotisations: number
    activities: number
    invitations: number
  }

  export type AssociationCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    members?: boolean | AssociationCountOutputTypeCountMembersArgs
    cotisations?: boolean | AssociationCountOutputTypeCountCotisationsArgs
    activities?: boolean | AssociationCountOutputTypeCountActivitiesArgs
    invitations?: boolean | AssociationCountOutputTypeCountInvitationsArgs
  }

  // Custom InputTypes
  /**
   * AssociationCountOutputType without action
   */
  export type AssociationCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssociationCountOutputType
     */
    select?: AssociationCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AssociationCountOutputType without action
   */
  export type AssociationCountOutputTypeCountMembersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MemberWhereInput
  }

  /**
   * AssociationCountOutputType without action
   */
  export type AssociationCountOutputTypeCountCotisationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CotisationWhereInput
  }

  /**
   * AssociationCountOutputType without action
   */
  export type AssociationCountOutputTypeCountActivitiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ActivityWhereInput
  }

  /**
   * AssociationCountOutputType without action
   */
  export type AssociationCountOutputTypeCountInvitationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InvitationWhereInput
  }


  /**
   * Count Type MemberCountOutputType
   */

  export type MemberCountOutputType = {
    user: number
    cotisations: number
    activities: number
    presences: number
  }

  export type MemberCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | MemberCountOutputTypeCountUserArgs
    cotisations?: boolean | MemberCountOutputTypeCountCotisationsArgs
    activities?: boolean | MemberCountOutputTypeCountActivitiesArgs
    presences?: boolean | MemberCountOutputTypeCountPresencesArgs
  }

  // Custom InputTypes
  /**
   * MemberCountOutputType without action
   */
  export type MemberCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MemberCountOutputType
     */
    select?: MemberCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MemberCountOutputType without action
   */
  export type MemberCountOutputTypeCountUserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }

  /**
   * MemberCountOutputType without action
   */
  export type MemberCountOutputTypeCountCotisationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CotisationWhereInput
  }

  /**
   * MemberCountOutputType without action
   */
  export type MemberCountOutputTypeCountActivitiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ActivityWhereInput
  }

  /**
   * MemberCountOutputType without action
   */
  export type MemberCountOutputTypeCountPresencesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PresenceWhereInput
  }


  /**
   * Count Type ActivityCountOutputType
   */

  export type ActivityCountOutputType = {
    presences: number
  }

  export type ActivityCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    presences?: boolean | ActivityCountOutputTypeCountPresencesArgs
  }

  // Custom InputTypes
  /**
   * ActivityCountOutputType without action
   */
  export type ActivityCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityCountOutputType
     */
    select?: ActivityCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ActivityCountOutputType without action
   */
  export type ActivityCountOutputTypeCountPresencesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PresenceWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Association
   */

  export type AggregateAssociation = {
    _count: AssociationCountAggregateOutputType | null
    _min: AssociationMinAggregateOutputType | null
    _max: AssociationMaxAggregateOutputType | null
  }

  export type AssociationMinAggregateOutputType = {
    id: string | null
    name: string | null
    createdAt: Date | null
  }

  export type AssociationMaxAggregateOutputType = {
    id: string | null
    name: string | null
    createdAt: Date | null
  }

  export type AssociationCountAggregateOutputType = {
    id: number
    name: number
    createdAt: number
    _all: number
  }


  export type AssociationMinAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
  }

  export type AssociationMaxAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
  }

  export type AssociationCountAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    _all?: true
  }

  export type AssociationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Association to aggregate.
     */
    where?: AssociationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Associations to fetch.
     */
    orderBy?: AssociationOrderByWithRelationInput | AssociationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AssociationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Associations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Associations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Associations
    **/
    _count?: true | AssociationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AssociationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AssociationMaxAggregateInputType
  }

  export type GetAssociationAggregateType<T extends AssociationAggregateArgs> = {
        [P in keyof T & keyof AggregateAssociation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAssociation[P]>
      : GetScalarType<T[P], AggregateAssociation[P]>
  }




  export type AssociationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AssociationWhereInput
    orderBy?: AssociationOrderByWithAggregationInput | AssociationOrderByWithAggregationInput[]
    by: AssociationScalarFieldEnum[] | AssociationScalarFieldEnum
    having?: AssociationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AssociationCountAggregateInputType | true
    _min?: AssociationMinAggregateInputType
    _max?: AssociationMaxAggregateInputType
  }

  export type AssociationGroupByOutputType = {
    id: string
    name: string
    createdAt: Date
    _count: AssociationCountAggregateOutputType | null
    _min: AssociationMinAggregateOutputType | null
    _max: AssociationMaxAggregateOutputType | null
  }

  type GetAssociationGroupByPayload<T extends AssociationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AssociationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AssociationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AssociationGroupByOutputType[P]>
            : GetScalarType<T[P], AssociationGroupByOutputType[P]>
        }
      >
    >


  export type AssociationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    members?: boolean | Association$membersArgs<ExtArgs>
    cotisations?: boolean | Association$cotisationsArgs<ExtArgs>
    activities?: boolean | Association$activitiesArgs<ExtArgs>
    invitations?: boolean | Association$invitationsArgs<ExtArgs>
    _count?: boolean | AssociationCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["association"]>

  export type AssociationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["association"]>

  export type AssociationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["association"]>

  export type AssociationSelectScalar = {
    id?: boolean
    name?: boolean
    createdAt?: boolean
  }

  export type AssociationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "createdAt", ExtArgs["result"]["association"]>
  export type AssociationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    members?: boolean | Association$membersArgs<ExtArgs>
    cotisations?: boolean | Association$cotisationsArgs<ExtArgs>
    activities?: boolean | Association$activitiesArgs<ExtArgs>
    invitations?: boolean | Association$invitationsArgs<ExtArgs>
    _count?: boolean | AssociationCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AssociationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type AssociationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $AssociationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Association"
    objects: {
      members: Prisma.$MemberPayload<ExtArgs>[]
      cotisations: Prisma.$CotisationPayload<ExtArgs>[]
      activities: Prisma.$ActivityPayload<ExtArgs>[]
      invitations: Prisma.$InvitationPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      createdAt: Date
    }, ExtArgs["result"]["association"]>
    composites: {}
  }

  type AssociationGetPayload<S extends boolean | null | undefined | AssociationDefaultArgs> = $Result.GetResult<Prisma.$AssociationPayload, S>

  type AssociationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AssociationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AssociationCountAggregateInputType | true
    }

  export interface AssociationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Association'], meta: { name: 'Association' } }
    /**
     * Find zero or one Association that matches the filter.
     * @param {AssociationFindUniqueArgs} args - Arguments to find a Association
     * @example
     * // Get one Association
     * const association = await prisma.association.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AssociationFindUniqueArgs>(args: SelectSubset<T, AssociationFindUniqueArgs<ExtArgs>>): Prisma__AssociationClient<$Result.GetResult<Prisma.$AssociationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Association that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AssociationFindUniqueOrThrowArgs} args - Arguments to find a Association
     * @example
     * // Get one Association
     * const association = await prisma.association.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AssociationFindUniqueOrThrowArgs>(args: SelectSubset<T, AssociationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AssociationClient<$Result.GetResult<Prisma.$AssociationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Association that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssociationFindFirstArgs} args - Arguments to find a Association
     * @example
     * // Get one Association
     * const association = await prisma.association.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AssociationFindFirstArgs>(args?: SelectSubset<T, AssociationFindFirstArgs<ExtArgs>>): Prisma__AssociationClient<$Result.GetResult<Prisma.$AssociationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Association that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssociationFindFirstOrThrowArgs} args - Arguments to find a Association
     * @example
     * // Get one Association
     * const association = await prisma.association.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AssociationFindFirstOrThrowArgs>(args?: SelectSubset<T, AssociationFindFirstOrThrowArgs<ExtArgs>>): Prisma__AssociationClient<$Result.GetResult<Prisma.$AssociationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Associations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssociationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Associations
     * const associations = await prisma.association.findMany()
     * 
     * // Get first 10 Associations
     * const associations = await prisma.association.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const associationWithIdOnly = await prisma.association.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AssociationFindManyArgs>(args?: SelectSubset<T, AssociationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AssociationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Association.
     * @param {AssociationCreateArgs} args - Arguments to create a Association.
     * @example
     * // Create one Association
     * const Association = await prisma.association.create({
     *   data: {
     *     // ... data to create a Association
     *   }
     * })
     * 
     */
    create<T extends AssociationCreateArgs>(args: SelectSubset<T, AssociationCreateArgs<ExtArgs>>): Prisma__AssociationClient<$Result.GetResult<Prisma.$AssociationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Associations.
     * @param {AssociationCreateManyArgs} args - Arguments to create many Associations.
     * @example
     * // Create many Associations
     * const association = await prisma.association.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AssociationCreateManyArgs>(args?: SelectSubset<T, AssociationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Associations and returns the data saved in the database.
     * @param {AssociationCreateManyAndReturnArgs} args - Arguments to create many Associations.
     * @example
     * // Create many Associations
     * const association = await prisma.association.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Associations and only return the `id`
     * const associationWithIdOnly = await prisma.association.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AssociationCreateManyAndReturnArgs>(args?: SelectSubset<T, AssociationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AssociationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Association.
     * @param {AssociationDeleteArgs} args - Arguments to delete one Association.
     * @example
     * // Delete one Association
     * const Association = await prisma.association.delete({
     *   where: {
     *     // ... filter to delete one Association
     *   }
     * })
     * 
     */
    delete<T extends AssociationDeleteArgs>(args: SelectSubset<T, AssociationDeleteArgs<ExtArgs>>): Prisma__AssociationClient<$Result.GetResult<Prisma.$AssociationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Association.
     * @param {AssociationUpdateArgs} args - Arguments to update one Association.
     * @example
     * // Update one Association
     * const association = await prisma.association.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AssociationUpdateArgs>(args: SelectSubset<T, AssociationUpdateArgs<ExtArgs>>): Prisma__AssociationClient<$Result.GetResult<Prisma.$AssociationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Associations.
     * @param {AssociationDeleteManyArgs} args - Arguments to filter Associations to delete.
     * @example
     * // Delete a few Associations
     * const { count } = await prisma.association.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AssociationDeleteManyArgs>(args?: SelectSubset<T, AssociationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Associations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssociationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Associations
     * const association = await prisma.association.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AssociationUpdateManyArgs>(args: SelectSubset<T, AssociationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Associations and returns the data updated in the database.
     * @param {AssociationUpdateManyAndReturnArgs} args - Arguments to update many Associations.
     * @example
     * // Update many Associations
     * const association = await prisma.association.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Associations and only return the `id`
     * const associationWithIdOnly = await prisma.association.updateManyAndReturn({
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
    updateManyAndReturn<T extends AssociationUpdateManyAndReturnArgs>(args: SelectSubset<T, AssociationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AssociationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Association.
     * @param {AssociationUpsertArgs} args - Arguments to update or create a Association.
     * @example
     * // Update or create a Association
     * const association = await prisma.association.upsert({
     *   create: {
     *     // ... data to create a Association
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Association we want to update
     *   }
     * })
     */
    upsert<T extends AssociationUpsertArgs>(args: SelectSubset<T, AssociationUpsertArgs<ExtArgs>>): Prisma__AssociationClient<$Result.GetResult<Prisma.$AssociationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Associations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssociationCountArgs} args - Arguments to filter Associations to count.
     * @example
     * // Count the number of Associations
     * const count = await prisma.association.count({
     *   where: {
     *     // ... the filter for the Associations we want to count
     *   }
     * })
    **/
    count<T extends AssociationCountArgs>(
      args?: Subset<T, AssociationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AssociationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Association.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssociationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AssociationAggregateArgs>(args: Subset<T, AssociationAggregateArgs>): Prisma.PrismaPromise<GetAssociationAggregateType<T>>

    /**
     * Group by Association.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssociationGroupByArgs} args - Group by arguments.
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
      T extends AssociationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AssociationGroupByArgs['orderBy'] }
        : { orderBy?: AssociationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AssociationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAssociationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Association model
   */
  readonly fields: AssociationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Association.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AssociationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    members<T extends Association$membersArgs<ExtArgs> = {}>(args?: Subset<T, Association$membersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MemberPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    cotisations<T extends Association$cotisationsArgs<ExtArgs> = {}>(args?: Subset<T, Association$cotisationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CotisationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    activities<T extends Association$activitiesArgs<ExtArgs> = {}>(args?: Subset<T, Association$activitiesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActivityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    invitations<T extends Association$invitationsArgs<ExtArgs> = {}>(args?: Subset<T, Association$invitationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InvitationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Association model
   */
  interface AssociationFieldRefs {
    readonly id: FieldRef<"Association", 'String'>
    readonly name: FieldRef<"Association", 'String'>
    readonly createdAt: FieldRef<"Association", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Association findUnique
   */
  export type AssociationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Association
     */
    select?: AssociationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Association
     */
    omit?: AssociationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssociationInclude<ExtArgs> | null
    /**
     * Filter, which Association to fetch.
     */
    where: AssociationWhereUniqueInput
  }

  /**
   * Association findUniqueOrThrow
   */
  export type AssociationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Association
     */
    select?: AssociationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Association
     */
    omit?: AssociationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssociationInclude<ExtArgs> | null
    /**
     * Filter, which Association to fetch.
     */
    where: AssociationWhereUniqueInput
  }

  /**
   * Association findFirst
   */
  export type AssociationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Association
     */
    select?: AssociationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Association
     */
    omit?: AssociationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssociationInclude<ExtArgs> | null
    /**
     * Filter, which Association to fetch.
     */
    where?: AssociationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Associations to fetch.
     */
    orderBy?: AssociationOrderByWithRelationInput | AssociationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Associations.
     */
    cursor?: AssociationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Associations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Associations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Associations.
     */
    distinct?: AssociationScalarFieldEnum | AssociationScalarFieldEnum[]
  }

  /**
   * Association findFirstOrThrow
   */
  export type AssociationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Association
     */
    select?: AssociationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Association
     */
    omit?: AssociationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssociationInclude<ExtArgs> | null
    /**
     * Filter, which Association to fetch.
     */
    where?: AssociationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Associations to fetch.
     */
    orderBy?: AssociationOrderByWithRelationInput | AssociationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Associations.
     */
    cursor?: AssociationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Associations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Associations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Associations.
     */
    distinct?: AssociationScalarFieldEnum | AssociationScalarFieldEnum[]
  }

  /**
   * Association findMany
   */
  export type AssociationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Association
     */
    select?: AssociationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Association
     */
    omit?: AssociationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssociationInclude<ExtArgs> | null
    /**
     * Filter, which Associations to fetch.
     */
    where?: AssociationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Associations to fetch.
     */
    orderBy?: AssociationOrderByWithRelationInput | AssociationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Associations.
     */
    cursor?: AssociationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Associations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Associations.
     */
    skip?: number
    distinct?: AssociationScalarFieldEnum | AssociationScalarFieldEnum[]
  }

  /**
   * Association create
   */
  export type AssociationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Association
     */
    select?: AssociationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Association
     */
    omit?: AssociationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssociationInclude<ExtArgs> | null
    /**
     * The data needed to create a Association.
     */
    data: XOR<AssociationCreateInput, AssociationUncheckedCreateInput>
  }

  /**
   * Association createMany
   */
  export type AssociationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Associations.
     */
    data: AssociationCreateManyInput | AssociationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Association createManyAndReturn
   */
  export type AssociationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Association
     */
    select?: AssociationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Association
     */
    omit?: AssociationOmit<ExtArgs> | null
    /**
     * The data used to create many Associations.
     */
    data: AssociationCreateManyInput | AssociationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Association update
   */
  export type AssociationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Association
     */
    select?: AssociationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Association
     */
    omit?: AssociationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssociationInclude<ExtArgs> | null
    /**
     * The data needed to update a Association.
     */
    data: XOR<AssociationUpdateInput, AssociationUncheckedUpdateInput>
    /**
     * Choose, which Association to update.
     */
    where: AssociationWhereUniqueInput
  }

  /**
   * Association updateMany
   */
  export type AssociationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Associations.
     */
    data: XOR<AssociationUpdateManyMutationInput, AssociationUncheckedUpdateManyInput>
    /**
     * Filter which Associations to update
     */
    where?: AssociationWhereInput
    /**
     * Limit how many Associations to update.
     */
    limit?: number
  }

  /**
   * Association updateManyAndReturn
   */
  export type AssociationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Association
     */
    select?: AssociationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Association
     */
    omit?: AssociationOmit<ExtArgs> | null
    /**
     * The data used to update Associations.
     */
    data: XOR<AssociationUpdateManyMutationInput, AssociationUncheckedUpdateManyInput>
    /**
     * Filter which Associations to update
     */
    where?: AssociationWhereInput
    /**
     * Limit how many Associations to update.
     */
    limit?: number
  }

  /**
   * Association upsert
   */
  export type AssociationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Association
     */
    select?: AssociationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Association
     */
    omit?: AssociationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssociationInclude<ExtArgs> | null
    /**
     * The filter to search for the Association to update in case it exists.
     */
    where: AssociationWhereUniqueInput
    /**
     * In case the Association found by the `where` argument doesn't exist, create a new Association with this data.
     */
    create: XOR<AssociationCreateInput, AssociationUncheckedCreateInput>
    /**
     * In case the Association was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AssociationUpdateInput, AssociationUncheckedUpdateInput>
  }

  /**
   * Association delete
   */
  export type AssociationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Association
     */
    select?: AssociationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Association
     */
    omit?: AssociationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssociationInclude<ExtArgs> | null
    /**
     * Filter which Association to delete.
     */
    where: AssociationWhereUniqueInput
  }

  /**
   * Association deleteMany
   */
  export type AssociationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Associations to delete
     */
    where?: AssociationWhereInput
    /**
     * Limit how many Associations to delete.
     */
    limit?: number
  }

  /**
   * Association.members
   */
  export type Association$membersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Member
     */
    select?: MemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Member
     */
    omit?: MemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberInclude<ExtArgs> | null
    where?: MemberWhereInput
    orderBy?: MemberOrderByWithRelationInput | MemberOrderByWithRelationInput[]
    cursor?: MemberWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MemberScalarFieldEnum | MemberScalarFieldEnum[]
  }

  /**
   * Association.cotisations
   */
  export type Association$cotisationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cotisation
     */
    select?: CotisationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cotisation
     */
    omit?: CotisationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CotisationInclude<ExtArgs> | null
    where?: CotisationWhereInput
    orderBy?: CotisationOrderByWithRelationInput | CotisationOrderByWithRelationInput[]
    cursor?: CotisationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CotisationScalarFieldEnum | CotisationScalarFieldEnum[]
  }

  /**
   * Association.activities
   */
  export type Association$activitiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activity
     */
    select?: ActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Activity
     */
    omit?: ActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityInclude<ExtArgs> | null
    where?: ActivityWhereInput
    orderBy?: ActivityOrderByWithRelationInput | ActivityOrderByWithRelationInput[]
    cursor?: ActivityWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ActivityScalarFieldEnum | ActivityScalarFieldEnum[]
  }

  /**
   * Association.invitations
   */
  export type Association$invitationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invitation
     */
    select?: InvitationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invitation
     */
    omit?: InvitationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvitationInclude<ExtArgs> | null
    where?: InvitationWhereInput
    orderBy?: InvitationOrderByWithRelationInput | InvitationOrderByWithRelationInput[]
    cursor?: InvitationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InvitationScalarFieldEnum | InvitationScalarFieldEnum[]
  }

  /**
   * Association without action
   */
  export type AssociationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Association
     */
    select?: AssociationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Association
     */
    omit?: AssociationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssociationInclude<ExtArgs> | null
  }


  /**
   * Model Member
   */

  export type AggregateMember = {
    _count: MemberCountAggregateOutputType | null
    _min: MemberMinAggregateOutputType | null
    _max: MemberMaxAggregateOutputType | null
  }

  export type MemberMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    role: string | null
    associationId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MemberMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    role: string | null
    associationId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MemberCountAggregateOutputType = {
    id: number
    name: number
    email: number
    role: number
    associationId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type MemberMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    role?: true
    associationId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MemberMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    role?: true
    associationId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MemberCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    role?: true
    associationId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type MemberAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Member to aggregate.
     */
    where?: MemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Members to fetch.
     */
    orderBy?: MemberOrderByWithRelationInput | MemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Members from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Members.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Members
    **/
    _count?: true | MemberCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MemberMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MemberMaxAggregateInputType
  }

  export type GetMemberAggregateType<T extends MemberAggregateArgs> = {
        [P in keyof T & keyof AggregateMember]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMember[P]>
      : GetScalarType<T[P], AggregateMember[P]>
  }




  export type MemberGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MemberWhereInput
    orderBy?: MemberOrderByWithAggregationInput | MemberOrderByWithAggregationInput[]
    by: MemberScalarFieldEnum[] | MemberScalarFieldEnum
    having?: MemberScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MemberCountAggregateInputType | true
    _min?: MemberMinAggregateInputType
    _max?: MemberMaxAggregateInputType
  }

  export type MemberGroupByOutputType = {
    id: string
    name: string
    email: string
    role: string
    associationId: string
    createdAt: Date
    updatedAt: Date
    _count: MemberCountAggregateOutputType | null
    _min: MemberMinAggregateOutputType | null
    _max: MemberMaxAggregateOutputType | null
  }

  type GetMemberGroupByPayload<T extends MemberGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MemberGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MemberGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MemberGroupByOutputType[P]>
            : GetScalarType<T[P], MemberGroupByOutputType[P]>
        }
      >
    >


  export type MemberSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    role?: boolean
    associationId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    association?: boolean | AssociationDefaultArgs<ExtArgs>
    user?: boolean | Member$userArgs<ExtArgs>
    cotisations?: boolean | Member$cotisationsArgs<ExtArgs>
    activities?: boolean | Member$activitiesArgs<ExtArgs>
    presences?: boolean | Member$presencesArgs<ExtArgs>
    _count?: boolean | MemberCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["member"]>

  export type MemberSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    role?: boolean
    associationId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    association?: boolean | AssociationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["member"]>

  export type MemberSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    role?: boolean
    associationId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    association?: boolean | AssociationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["member"]>

  export type MemberSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    role?: boolean
    associationId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type MemberOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "role" | "associationId" | "createdAt" | "updatedAt", ExtArgs["result"]["member"]>
  export type MemberInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    association?: boolean | AssociationDefaultArgs<ExtArgs>
    user?: boolean | Member$userArgs<ExtArgs>
    cotisations?: boolean | Member$cotisationsArgs<ExtArgs>
    activities?: boolean | Member$activitiesArgs<ExtArgs>
    presences?: boolean | Member$presencesArgs<ExtArgs>
    _count?: boolean | MemberCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type MemberIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    association?: boolean | AssociationDefaultArgs<ExtArgs>
  }
  export type MemberIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    association?: boolean | AssociationDefaultArgs<ExtArgs>
  }

  export type $MemberPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Member"
    objects: {
      association: Prisma.$AssociationPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>[]
      cotisations: Prisma.$CotisationPayload<ExtArgs>[]
      activities: Prisma.$ActivityPayload<ExtArgs>[]
      presences: Prisma.$PresencePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      email: string
      role: string
      associationId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["member"]>
    composites: {}
  }

  type MemberGetPayload<S extends boolean | null | undefined | MemberDefaultArgs> = $Result.GetResult<Prisma.$MemberPayload, S>

  type MemberCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MemberFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MemberCountAggregateInputType | true
    }

  export interface MemberDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Member'], meta: { name: 'Member' } }
    /**
     * Find zero or one Member that matches the filter.
     * @param {MemberFindUniqueArgs} args - Arguments to find a Member
     * @example
     * // Get one Member
     * const member = await prisma.member.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MemberFindUniqueArgs>(args: SelectSubset<T, MemberFindUniqueArgs<ExtArgs>>): Prisma__MemberClient<$Result.GetResult<Prisma.$MemberPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Member that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MemberFindUniqueOrThrowArgs} args - Arguments to find a Member
     * @example
     * // Get one Member
     * const member = await prisma.member.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MemberFindUniqueOrThrowArgs>(args: SelectSubset<T, MemberFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MemberClient<$Result.GetResult<Prisma.$MemberPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Member that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MemberFindFirstArgs} args - Arguments to find a Member
     * @example
     * // Get one Member
     * const member = await prisma.member.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MemberFindFirstArgs>(args?: SelectSubset<T, MemberFindFirstArgs<ExtArgs>>): Prisma__MemberClient<$Result.GetResult<Prisma.$MemberPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Member that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MemberFindFirstOrThrowArgs} args - Arguments to find a Member
     * @example
     * // Get one Member
     * const member = await prisma.member.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MemberFindFirstOrThrowArgs>(args?: SelectSubset<T, MemberFindFirstOrThrowArgs<ExtArgs>>): Prisma__MemberClient<$Result.GetResult<Prisma.$MemberPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Members that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MemberFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Members
     * const members = await prisma.member.findMany()
     * 
     * // Get first 10 Members
     * const members = await prisma.member.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const memberWithIdOnly = await prisma.member.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MemberFindManyArgs>(args?: SelectSubset<T, MemberFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MemberPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Member.
     * @param {MemberCreateArgs} args - Arguments to create a Member.
     * @example
     * // Create one Member
     * const Member = await prisma.member.create({
     *   data: {
     *     // ... data to create a Member
     *   }
     * })
     * 
     */
    create<T extends MemberCreateArgs>(args: SelectSubset<T, MemberCreateArgs<ExtArgs>>): Prisma__MemberClient<$Result.GetResult<Prisma.$MemberPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Members.
     * @param {MemberCreateManyArgs} args - Arguments to create many Members.
     * @example
     * // Create many Members
     * const member = await prisma.member.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MemberCreateManyArgs>(args?: SelectSubset<T, MemberCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Members and returns the data saved in the database.
     * @param {MemberCreateManyAndReturnArgs} args - Arguments to create many Members.
     * @example
     * // Create many Members
     * const member = await prisma.member.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Members and only return the `id`
     * const memberWithIdOnly = await prisma.member.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MemberCreateManyAndReturnArgs>(args?: SelectSubset<T, MemberCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MemberPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Member.
     * @param {MemberDeleteArgs} args - Arguments to delete one Member.
     * @example
     * // Delete one Member
     * const Member = await prisma.member.delete({
     *   where: {
     *     // ... filter to delete one Member
     *   }
     * })
     * 
     */
    delete<T extends MemberDeleteArgs>(args: SelectSubset<T, MemberDeleteArgs<ExtArgs>>): Prisma__MemberClient<$Result.GetResult<Prisma.$MemberPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Member.
     * @param {MemberUpdateArgs} args - Arguments to update one Member.
     * @example
     * // Update one Member
     * const member = await prisma.member.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MemberUpdateArgs>(args: SelectSubset<T, MemberUpdateArgs<ExtArgs>>): Prisma__MemberClient<$Result.GetResult<Prisma.$MemberPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Members.
     * @param {MemberDeleteManyArgs} args - Arguments to filter Members to delete.
     * @example
     * // Delete a few Members
     * const { count } = await prisma.member.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MemberDeleteManyArgs>(args?: SelectSubset<T, MemberDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Members.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MemberUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Members
     * const member = await prisma.member.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MemberUpdateManyArgs>(args: SelectSubset<T, MemberUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Members and returns the data updated in the database.
     * @param {MemberUpdateManyAndReturnArgs} args - Arguments to update many Members.
     * @example
     * // Update many Members
     * const member = await prisma.member.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Members and only return the `id`
     * const memberWithIdOnly = await prisma.member.updateManyAndReturn({
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
    updateManyAndReturn<T extends MemberUpdateManyAndReturnArgs>(args: SelectSubset<T, MemberUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MemberPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Member.
     * @param {MemberUpsertArgs} args - Arguments to update or create a Member.
     * @example
     * // Update or create a Member
     * const member = await prisma.member.upsert({
     *   create: {
     *     // ... data to create a Member
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Member we want to update
     *   }
     * })
     */
    upsert<T extends MemberUpsertArgs>(args: SelectSubset<T, MemberUpsertArgs<ExtArgs>>): Prisma__MemberClient<$Result.GetResult<Prisma.$MemberPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Members.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MemberCountArgs} args - Arguments to filter Members to count.
     * @example
     * // Count the number of Members
     * const count = await prisma.member.count({
     *   where: {
     *     // ... the filter for the Members we want to count
     *   }
     * })
    **/
    count<T extends MemberCountArgs>(
      args?: Subset<T, MemberCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MemberCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Member.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MemberAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MemberAggregateArgs>(args: Subset<T, MemberAggregateArgs>): Prisma.PrismaPromise<GetMemberAggregateType<T>>

    /**
     * Group by Member.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MemberGroupByArgs} args - Group by arguments.
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
      T extends MemberGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MemberGroupByArgs['orderBy'] }
        : { orderBy?: MemberGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MemberGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMemberGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Member model
   */
  readonly fields: MemberFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Member.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MemberClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    association<T extends AssociationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AssociationDefaultArgs<ExtArgs>>): Prisma__AssociationClient<$Result.GetResult<Prisma.$AssociationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends Member$userArgs<ExtArgs> = {}>(args?: Subset<T, Member$userArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    cotisations<T extends Member$cotisationsArgs<ExtArgs> = {}>(args?: Subset<T, Member$cotisationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CotisationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    activities<T extends Member$activitiesArgs<ExtArgs> = {}>(args?: Subset<T, Member$activitiesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActivityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    presences<T extends Member$presencesArgs<ExtArgs> = {}>(args?: Subset<T, Member$presencesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PresencePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Member model
   */
  interface MemberFieldRefs {
    readonly id: FieldRef<"Member", 'String'>
    readonly name: FieldRef<"Member", 'String'>
    readonly email: FieldRef<"Member", 'String'>
    readonly role: FieldRef<"Member", 'String'>
    readonly associationId: FieldRef<"Member", 'String'>
    readonly createdAt: FieldRef<"Member", 'DateTime'>
    readonly updatedAt: FieldRef<"Member", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Member findUnique
   */
  export type MemberFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Member
     */
    select?: MemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Member
     */
    omit?: MemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberInclude<ExtArgs> | null
    /**
     * Filter, which Member to fetch.
     */
    where: MemberWhereUniqueInput
  }

  /**
   * Member findUniqueOrThrow
   */
  export type MemberFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Member
     */
    select?: MemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Member
     */
    omit?: MemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberInclude<ExtArgs> | null
    /**
     * Filter, which Member to fetch.
     */
    where: MemberWhereUniqueInput
  }

  /**
   * Member findFirst
   */
  export type MemberFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Member
     */
    select?: MemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Member
     */
    omit?: MemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberInclude<ExtArgs> | null
    /**
     * Filter, which Member to fetch.
     */
    where?: MemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Members to fetch.
     */
    orderBy?: MemberOrderByWithRelationInput | MemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Members.
     */
    cursor?: MemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Members from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Members.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Members.
     */
    distinct?: MemberScalarFieldEnum | MemberScalarFieldEnum[]
  }

  /**
   * Member findFirstOrThrow
   */
  export type MemberFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Member
     */
    select?: MemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Member
     */
    omit?: MemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberInclude<ExtArgs> | null
    /**
     * Filter, which Member to fetch.
     */
    where?: MemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Members to fetch.
     */
    orderBy?: MemberOrderByWithRelationInput | MemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Members.
     */
    cursor?: MemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Members from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Members.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Members.
     */
    distinct?: MemberScalarFieldEnum | MemberScalarFieldEnum[]
  }

  /**
   * Member findMany
   */
  export type MemberFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Member
     */
    select?: MemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Member
     */
    omit?: MemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberInclude<ExtArgs> | null
    /**
     * Filter, which Members to fetch.
     */
    where?: MemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Members to fetch.
     */
    orderBy?: MemberOrderByWithRelationInput | MemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Members.
     */
    cursor?: MemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Members from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Members.
     */
    skip?: number
    distinct?: MemberScalarFieldEnum | MemberScalarFieldEnum[]
  }

  /**
   * Member create
   */
  export type MemberCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Member
     */
    select?: MemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Member
     */
    omit?: MemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberInclude<ExtArgs> | null
    /**
     * The data needed to create a Member.
     */
    data: XOR<MemberCreateInput, MemberUncheckedCreateInput>
  }

  /**
   * Member createMany
   */
  export type MemberCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Members.
     */
    data: MemberCreateManyInput | MemberCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Member createManyAndReturn
   */
  export type MemberCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Member
     */
    select?: MemberSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Member
     */
    omit?: MemberOmit<ExtArgs> | null
    /**
     * The data used to create many Members.
     */
    data: MemberCreateManyInput | MemberCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Member update
   */
  export type MemberUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Member
     */
    select?: MemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Member
     */
    omit?: MemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberInclude<ExtArgs> | null
    /**
     * The data needed to update a Member.
     */
    data: XOR<MemberUpdateInput, MemberUncheckedUpdateInput>
    /**
     * Choose, which Member to update.
     */
    where: MemberWhereUniqueInput
  }

  /**
   * Member updateMany
   */
  export type MemberUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Members.
     */
    data: XOR<MemberUpdateManyMutationInput, MemberUncheckedUpdateManyInput>
    /**
     * Filter which Members to update
     */
    where?: MemberWhereInput
    /**
     * Limit how many Members to update.
     */
    limit?: number
  }

  /**
   * Member updateManyAndReturn
   */
  export type MemberUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Member
     */
    select?: MemberSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Member
     */
    omit?: MemberOmit<ExtArgs> | null
    /**
     * The data used to update Members.
     */
    data: XOR<MemberUpdateManyMutationInput, MemberUncheckedUpdateManyInput>
    /**
     * Filter which Members to update
     */
    where?: MemberWhereInput
    /**
     * Limit how many Members to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Member upsert
   */
  export type MemberUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Member
     */
    select?: MemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Member
     */
    omit?: MemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberInclude<ExtArgs> | null
    /**
     * The filter to search for the Member to update in case it exists.
     */
    where: MemberWhereUniqueInput
    /**
     * In case the Member found by the `where` argument doesn't exist, create a new Member with this data.
     */
    create: XOR<MemberCreateInput, MemberUncheckedCreateInput>
    /**
     * In case the Member was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MemberUpdateInput, MemberUncheckedUpdateInput>
  }

  /**
   * Member delete
   */
  export type MemberDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Member
     */
    select?: MemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Member
     */
    omit?: MemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberInclude<ExtArgs> | null
    /**
     * Filter which Member to delete.
     */
    where: MemberWhereUniqueInput
  }

  /**
   * Member deleteMany
   */
  export type MemberDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Members to delete
     */
    where?: MemberWhereInput
    /**
     * Limit how many Members to delete.
     */
    limit?: number
  }

  /**
   * Member.user
   */
  export type Member$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * Member.cotisations
   */
  export type Member$cotisationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cotisation
     */
    select?: CotisationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cotisation
     */
    omit?: CotisationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CotisationInclude<ExtArgs> | null
    where?: CotisationWhereInput
    orderBy?: CotisationOrderByWithRelationInput | CotisationOrderByWithRelationInput[]
    cursor?: CotisationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CotisationScalarFieldEnum | CotisationScalarFieldEnum[]
  }

  /**
   * Member.activities
   */
  export type Member$activitiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activity
     */
    select?: ActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Activity
     */
    omit?: ActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityInclude<ExtArgs> | null
    where?: ActivityWhereInput
    orderBy?: ActivityOrderByWithRelationInput | ActivityOrderByWithRelationInput[]
    cursor?: ActivityWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ActivityScalarFieldEnum | ActivityScalarFieldEnum[]
  }

  /**
   * Member.presences
   */
  export type Member$presencesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Presence
     */
    select?: PresenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Presence
     */
    omit?: PresenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PresenceInclude<ExtArgs> | null
    where?: PresenceWhereInput
    orderBy?: PresenceOrderByWithRelationInput | PresenceOrderByWithRelationInput[]
    cursor?: PresenceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PresenceScalarFieldEnum | PresenceScalarFieldEnum[]
  }

  /**
   * Member without action
   */
  export type MemberDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Member
     */
    select?: MemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Member
     */
    omit?: MemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberInclude<ExtArgs> | null
  }


  /**
   * Model Cotisation
   */

  export type AggregateCotisation = {
    _count: CotisationCountAggregateOutputType | null
    _avg: CotisationAvgAggregateOutputType | null
    _sum: CotisationSumAggregateOutputType | null
    _min: CotisationMinAggregateOutputType | null
    _max: CotisationMaxAggregateOutputType | null
  }

  export type CotisationAvgAggregateOutputType = {
    amount: number | null
  }

  export type CotisationSumAggregateOutputType = {
    amount: number | null
  }

  export type CotisationMinAggregateOutputType = {
    id: string | null
    amount: number | null
    paidAt: Date | null
    memberId: string | null
    associationId: string | null
  }

  export type CotisationMaxAggregateOutputType = {
    id: string | null
    amount: number | null
    paidAt: Date | null
    memberId: string | null
    associationId: string | null
  }

  export type CotisationCountAggregateOutputType = {
    id: number
    amount: number
    paidAt: number
    memberId: number
    associationId: number
    _all: number
  }


  export type CotisationAvgAggregateInputType = {
    amount?: true
  }

  export type CotisationSumAggregateInputType = {
    amount?: true
  }

  export type CotisationMinAggregateInputType = {
    id?: true
    amount?: true
    paidAt?: true
    memberId?: true
    associationId?: true
  }

  export type CotisationMaxAggregateInputType = {
    id?: true
    amount?: true
    paidAt?: true
    memberId?: true
    associationId?: true
  }

  export type CotisationCountAggregateInputType = {
    id?: true
    amount?: true
    paidAt?: true
    memberId?: true
    associationId?: true
    _all?: true
  }

  export type CotisationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Cotisation to aggregate.
     */
    where?: CotisationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cotisations to fetch.
     */
    orderBy?: CotisationOrderByWithRelationInput | CotisationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CotisationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cotisations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cotisations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Cotisations
    **/
    _count?: true | CotisationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CotisationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CotisationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CotisationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CotisationMaxAggregateInputType
  }

  export type GetCotisationAggregateType<T extends CotisationAggregateArgs> = {
        [P in keyof T & keyof AggregateCotisation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCotisation[P]>
      : GetScalarType<T[P], AggregateCotisation[P]>
  }




  export type CotisationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CotisationWhereInput
    orderBy?: CotisationOrderByWithAggregationInput | CotisationOrderByWithAggregationInput[]
    by: CotisationScalarFieldEnum[] | CotisationScalarFieldEnum
    having?: CotisationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CotisationCountAggregateInputType | true
    _avg?: CotisationAvgAggregateInputType
    _sum?: CotisationSumAggregateInputType
    _min?: CotisationMinAggregateInputType
    _max?: CotisationMaxAggregateInputType
  }

  export type CotisationGroupByOutputType = {
    id: string
    amount: number
    paidAt: Date
    memberId: string
    associationId: string
    _count: CotisationCountAggregateOutputType | null
    _avg: CotisationAvgAggregateOutputType | null
    _sum: CotisationSumAggregateOutputType | null
    _min: CotisationMinAggregateOutputType | null
    _max: CotisationMaxAggregateOutputType | null
  }

  type GetCotisationGroupByPayload<T extends CotisationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CotisationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CotisationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CotisationGroupByOutputType[P]>
            : GetScalarType<T[P], CotisationGroupByOutputType[P]>
        }
      >
    >


  export type CotisationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    amount?: boolean
    paidAt?: boolean
    memberId?: boolean
    associationId?: boolean
    member?: boolean | MemberDefaultArgs<ExtArgs>
    association?: boolean | AssociationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cotisation"]>

  export type CotisationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    amount?: boolean
    paidAt?: boolean
    memberId?: boolean
    associationId?: boolean
    member?: boolean | MemberDefaultArgs<ExtArgs>
    association?: boolean | AssociationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cotisation"]>

  export type CotisationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    amount?: boolean
    paidAt?: boolean
    memberId?: boolean
    associationId?: boolean
    member?: boolean | MemberDefaultArgs<ExtArgs>
    association?: boolean | AssociationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cotisation"]>

  export type CotisationSelectScalar = {
    id?: boolean
    amount?: boolean
    paidAt?: boolean
    memberId?: boolean
    associationId?: boolean
  }

  export type CotisationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "amount" | "paidAt" | "memberId" | "associationId", ExtArgs["result"]["cotisation"]>
  export type CotisationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    member?: boolean | MemberDefaultArgs<ExtArgs>
    association?: boolean | AssociationDefaultArgs<ExtArgs>
  }
  export type CotisationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    member?: boolean | MemberDefaultArgs<ExtArgs>
    association?: boolean | AssociationDefaultArgs<ExtArgs>
  }
  export type CotisationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    member?: boolean | MemberDefaultArgs<ExtArgs>
    association?: boolean | AssociationDefaultArgs<ExtArgs>
  }

  export type $CotisationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Cotisation"
    objects: {
      member: Prisma.$MemberPayload<ExtArgs>
      association: Prisma.$AssociationPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      amount: number
      paidAt: Date
      memberId: string
      associationId: string
    }, ExtArgs["result"]["cotisation"]>
    composites: {}
  }

  type CotisationGetPayload<S extends boolean | null | undefined | CotisationDefaultArgs> = $Result.GetResult<Prisma.$CotisationPayload, S>

  type CotisationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CotisationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CotisationCountAggregateInputType | true
    }

  export interface CotisationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Cotisation'], meta: { name: 'Cotisation' } }
    /**
     * Find zero or one Cotisation that matches the filter.
     * @param {CotisationFindUniqueArgs} args - Arguments to find a Cotisation
     * @example
     * // Get one Cotisation
     * const cotisation = await prisma.cotisation.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CotisationFindUniqueArgs>(args: SelectSubset<T, CotisationFindUniqueArgs<ExtArgs>>): Prisma__CotisationClient<$Result.GetResult<Prisma.$CotisationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Cotisation that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CotisationFindUniqueOrThrowArgs} args - Arguments to find a Cotisation
     * @example
     * // Get one Cotisation
     * const cotisation = await prisma.cotisation.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CotisationFindUniqueOrThrowArgs>(args: SelectSubset<T, CotisationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CotisationClient<$Result.GetResult<Prisma.$CotisationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cotisation that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CotisationFindFirstArgs} args - Arguments to find a Cotisation
     * @example
     * // Get one Cotisation
     * const cotisation = await prisma.cotisation.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CotisationFindFirstArgs>(args?: SelectSubset<T, CotisationFindFirstArgs<ExtArgs>>): Prisma__CotisationClient<$Result.GetResult<Prisma.$CotisationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cotisation that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CotisationFindFirstOrThrowArgs} args - Arguments to find a Cotisation
     * @example
     * // Get one Cotisation
     * const cotisation = await prisma.cotisation.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CotisationFindFirstOrThrowArgs>(args?: SelectSubset<T, CotisationFindFirstOrThrowArgs<ExtArgs>>): Prisma__CotisationClient<$Result.GetResult<Prisma.$CotisationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Cotisations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CotisationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Cotisations
     * const cotisations = await prisma.cotisation.findMany()
     * 
     * // Get first 10 Cotisations
     * const cotisations = await prisma.cotisation.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const cotisationWithIdOnly = await prisma.cotisation.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CotisationFindManyArgs>(args?: SelectSubset<T, CotisationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CotisationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Cotisation.
     * @param {CotisationCreateArgs} args - Arguments to create a Cotisation.
     * @example
     * // Create one Cotisation
     * const Cotisation = await prisma.cotisation.create({
     *   data: {
     *     // ... data to create a Cotisation
     *   }
     * })
     * 
     */
    create<T extends CotisationCreateArgs>(args: SelectSubset<T, CotisationCreateArgs<ExtArgs>>): Prisma__CotisationClient<$Result.GetResult<Prisma.$CotisationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Cotisations.
     * @param {CotisationCreateManyArgs} args - Arguments to create many Cotisations.
     * @example
     * // Create many Cotisations
     * const cotisation = await prisma.cotisation.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CotisationCreateManyArgs>(args?: SelectSubset<T, CotisationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Cotisations and returns the data saved in the database.
     * @param {CotisationCreateManyAndReturnArgs} args - Arguments to create many Cotisations.
     * @example
     * // Create many Cotisations
     * const cotisation = await prisma.cotisation.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Cotisations and only return the `id`
     * const cotisationWithIdOnly = await prisma.cotisation.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CotisationCreateManyAndReturnArgs>(args?: SelectSubset<T, CotisationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CotisationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Cotisation.
     * @param {CotisationDeleteArgs} args - Arguments to delete one Cotisation.
     * @example
     * // Delete one Cotisation
     * const Cotisation = await prisma.cotisation.delete({
     *   where: {
     *     // ... filter to delete one Cotisation
     *   }
     * })
     * 
     */
    delete<T extends CotisationDeleteArgs>(args: SelectSubset<T, CotisationDeleteArgs<ExtArgs>>): Prisma__CotisationClient<$Result.GetResult<Prisma.$CotisationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Cotisation.
     * @param {CotisationUpdateArgs} args - Arguments to update one Cotisation.
     * @example
     * // Update one Cotisation
     * const cotisation = await prisma.cotisation.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CotisationUpdateArgs>(args: SelectSubset<T, CotisationUpdateArgs<ExtArgs>>): Prisma__CotisationClient<$Result.GetResult<Prisma.$CotisationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Cotisations.
     * @param {CotisationDeleteManyArgs} args - Arguments to filter Cotisations to delete.
     * @example
     * // Delete a few Cotisations
     * const { count } = await prisma.cotisation.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CotisationDeleteManyArgs>(args?: SelectSubset<T, CotisationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Cotisations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CotisationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Cotisations
     * const cotisation = await prisma.cotisation.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CotisationUpdateManyArgs>(args: SelectSubset<T, CotisationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Cotisations and returns the data updated in the database.
     * @param {CotisationUpdateManyAndReturnArgs} args - Arguments to update many Cotisations.
     * @example
     * // Update many Cotisations
     * const cotisation = await prisma.cotisation.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Cotisations and only return the `id`
     * const cotisationWithIdOnly = await prisma.cotisation.updateManyAndReturn({
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
    updateManyAndReturn<T extends CotisationUpdateManyAndReturnArgs>(args: SelectSubset<T, CotisationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CotisationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Cotisation.
     * @param {CotisationUpsertArgs} args - Arguments to update or create a Cotisation.
     * @example
     * // Update or create a Cotisation
     * const cotisation = await prisma.cotisation.upsert({
     *   create: {
     *     // ... data to create a Cotisation
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Cotisation we want to update
     *   }
     * })
     */
    upsert<T extends CotisationUpsertArgs>(args: SelectSubset<T, CotisationUpsertArgs<ExtArgs>>): Prisma__CotisationClient<$Result.GetResult<Prisma.$CotisationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Cotisations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CotisationCountArgs} args - Arguments to filter Cotisations to count.
     * @example
     * // Count the number of Cotisations
     * const count = await prisma.cotisation.count({
     *   where: {
     *     // ... the filter for the Cotisations we want to count
     *   }
     * })
    **/
    count<T extends CotisationCountArgs>(
      args?: Subset<T, CotisationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CotisationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Cotisation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CotisationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CotisationAggregateArgs>(args: Subset<T, CotisationAggregateArgs>): Prisma.PrismaPromise<GetCotisationAggregateType<T>>

    /**
     * Group by Cotisation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CotisationGroupByArgs} args - Group by arguments.
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
      T extends CotisationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CotisationGroupByArgs['orderBy'] }
        : { orderBy?: CotisationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CotisationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCotisationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Cotisation model
   */
  readonly fields: CotisationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Cotisation.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CotisationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    member<T extends MemberDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MemberDefaultArgs<ExtArgs>>): Prisma__MemberClient<$Result.GetResult<Prisma.$MemberPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    association<T extends AssociationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AssociationDefaultArgs<ExtArgs>>): Prisma__AssociationClient<$Result.GetResult<Prisma.$AssociationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Cotisation model
   */
  interface CotisationFieldRefs {
    readonly id: FieldRef<"Cotisation", 'String'>
    readonly amount: FieldRef<"Cotisation", 'Float'>
    readonly paidAt: FieldRef<"Cotisation", 'DateTime'>
    readonly memberId: FieldRef<"Cotisation", 'String'>
    readonly associationId: FieldRef<"Cotisation", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Cotisation findUnique
   */
  export type CotisationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cotisation
     */
    select?: CotisationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cotisation
     */
    omit?: CotisationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CotisationInclude<ExtArgs> | null
    /**
     * Filter, which Cotisation to fetch.
     */
    where: CotisationWhereUniqueInput
  }

  /**
   * Cotisation findUniqueOrThrow
   */
  export type CotisationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cotisation
     */
    select?: CotisationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cotisation
     */
    omit?: CotisationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CotisationInclude<ExtArgs> | null
    /**
     * Filter, which Cotisation to fetch.
     */
    where: CotisationWhereUniqueInput
  }

  /**
   * Cotisation findFirst
   */
  export type CotisationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cotisation
     */
    select?: CotisationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cotisation
     */
    omit?: CotisationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CotisationInclude<ExtArgs> | null
    /**
     * Filter, which Cotisation to fetch.
     */
    where?: CotisationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cotisations to fetch.
     */
    orderBy?: CotisationOrderByWithRelationInput | CotisationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Cotisations.
     */
    cursor?: CotisationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cotisations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cotisations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Cotisations.
     */
    distinct?: CotisationScalarFieldEnum | CotisationScalarFieldEnum[]
  }

  /**
   * Cotisation findFirstOrThrow
   */
  export type CotisationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cotisation
     */
    select?: CotisationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cotisation
     */
    omit?: CotisationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CotisationInclude<ExtArgs> | null
    /**
     * Filter, which Cotisation to fetch.
     */
    where?: CotisationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cotisations to fetch.
     */
    orderBy?: CotisationOrderByWithRelationInput | CotisationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Cotisations.
     */
    cursor?: CotisationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cotisations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cotisations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Cotisations.
     */
    distinct?: CotisationScalarFieldEnum | CotisationScalarFieldEnum[]
  }

  /**
   * Cotisation findMany
   */
  export type CotisationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cotisation
     */
    select?: CotisationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cotisation
     */
    omit?: CotisationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CotisationInclude<ExtArgs> | null
    /**
     * Filter, which Cotisations to fetch.
     */
    where?: CotisationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cotisations to fetch.
     */
    orderBy?: CotisationOrderByWithRelationInput | CotisationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Cotisations.
     */
    cursor?: CotisationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cotisations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cotisations.
     */
    skip?: number
    distinct?: CotisationScalarFieldEnum | CotisationScalarFieldEnum[]
  }

  /**
   * Cotisation create
   */
  export type CotisationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cotisation
     */
    select?: CotisationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cotisation
     */
    omit?: CotisationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CotisationInclude<ExtArgs> | null
    /**
     * The data needed to create a Cotisation.
     */
    data: XOR<CotisationCreateInput, CotisationUncheckedCreateInput>
  }

  /**
   * Cotisation createMany
   */
  export type CotisationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Cotisations.
     */
    data: CotisationCreateManyInput | CotisationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Cotisation createManyAndReturn
   */
  export type CotisationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cotisation
     */
    select?: CotisationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Cotisation
     */
    omit?: CotisationOmit<ExtArgs> | null
    /**
     * The data used to create many Cotisations.
     */
    data: CotisationCreateManyInput | CotisationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CotisationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Cotisation update
   */
  export type CotisationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cotisation
     */
    select?: CotisationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cotisation
     */
    omit?: CotisationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CotisationInclude<ExtArgs> | null
    /**
     * The data needed to update a Cotisation.
     */
    data: XOR<CotisationUpdateInput, CotisationUncheckedUpdateInput>
    /**
     * Choose, which Cotisation to update.
     */
    where: CotisationWhereUniqueInput
  }

  /**
   * Cotisation updateMany
   */
  export type CotisationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Cotisations.
     */
    data: XOR<CotisationUpdateManyMutationInput, CotisationUncheckedUpdateManyInput>
    /**
     * Filter which Cotisations to update
     */
    where?: CotisationWhereInput
    /**
     * Limit how many Cotisations to update.
     */
    limit?: number
  }

  /**
   * Cotisation updateManyAndReturn
   */
  export type CotisationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cotisation
     */
    select?: CotisationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Cotisation
     */
    omit?: CotisationOmit<ExtArgs> | null
    /**
     * The data used to update Cotisations.
     */
    data: XOR<CotisationUpdateManyMutationInput, CotisationUncheckedUpdateManyInput>
    /**
     * Filter which Cotisations to update
     */
    where?: CotisationWhereInput
    /**
     * Limit how many Cotisations to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CotisationIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Cotisation upsert
   */
  export type CotisationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cotisation
     */
    select?: CotisationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cotisation
     */
    omit?: CotisationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CotisationInclude<ExtArgs> | null
    /**
     * The filter to search for the Cotisation to update in case it exists.
     */
    where: CotisationWhereUniqueInput
    /**
     * In case the Cotisation found by the `where` argument doesn't exist, create a new Cotisation with this data.
     */
    create: XOR<CotisationCreateInput, CotisationUncheckedCreateInput>
    /**
     * In case the Cotisation was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CotisationUpdateInput, CotisationUncheckedUpdateInput>
  }

  /**
   * Cotisation delete
   */
  export type CotisationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cotisation
     */
    select?: CotisationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cotisation
     */
    omit?: CotisationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CotisationInclude<ExtArgs> | null
    /**
     * Filter which Cotisation to delete.
     */
    where: CotisationWhereUniqueInput
  }

  /**
   * Cotisation deleteMany
   */
  export type CotisationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Cotisations to delete
     */
    where?: CotisationWhereInput
    /**
     * Limit how many Cotisations to delete.
     */
    limit?: number
  }

  /**
   * Cotisation without action
   */
  export type CotisationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cotisation
     */
    select?: CotisationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cotisation
     */
    omit?: CotisationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CotisationInclude<ExtArgs> | null
  }


  /**
   * Model Activity
   */

  export type AggregateActivity = {
    _count: ActivityCountAggregateOutputType | null
    _min: ActivityMinAggregateOutputType | null
    _max: ActivityMaxAggregateOutputType | null
  }

  export type ActivityMinAggregateOutputType = {
    id: string | null
    title: string | null
    date: Date | null
    description: string | null
    associationId: string | null
    memberId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ActivityMaxAggregateOutputType = {
    id: string | null
    title: string | null
    date: Date | null
    description: string | null
    associationId: string | null
    memberId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ActivityCountAggregateOutputType = {
    id: number
    title: number
    date: number
    description: number
    associationId: number
    memberId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ActivityMinAggregateInputType = {
    id?: true
    title?: true
    date?: true
    description?: true
    associationId?: true
    memberId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ActivityMaxAggregateInputType = {
    id?: true
    title?: true
    date?: true
    description?: true
    associationId?: true
    memberId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ActivityCountAggregateInputType = {
    id?: true
    title?: true
    date?: true
    description?: true
    associationId?: true
    memberId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ActivityAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Activity to aggregate.
     */
    where?: ActivityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Activities to fetch.
     */
    orderBy?: ActivityOrderByWithRelationInput | ActivityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ActivityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Activities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Activities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Activities
    **/
    _count?: true | ActivityCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ActivityMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ActivityMaxAggregateInputType
  }

  export type GetActivityAggregateType<T extends ActivityAggregateArgs> = {
        [P in keyof T & keyof AggregateActivity]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateActivity[P]>
      : GetScalarType<T[P], AggregateActivity[P]>
  }




  export type ActivityGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ActivityWhereInput
    orderBy?: ActivityOrderByWithAggregationInput | ActivityOrderByWithAggregationInput[]
    by: ActivityScalarFieldEnum[] | ActivityScalarFieldEnum
    having?: ActivityScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ActivityCountAggregateInputType | true
    _min?: ActivityMinAggregateInputType
    _max?: ActivityMaxAggregateInputType
  }

  export type ActivityGroupByOutputType = {
    id: string
    title: string
    date: Date
    description: string | null
    associationId: string
    memberId: string | null
    createdAt: Date
    updatedAt: Date
    _count: ActivityCountAggregateOutputType | null
    _min: ActivityMinAggregateOutputType | null
    _max: ActivityMaxAggregateOutputType | null
  }

  type GetActivityGroupByPayload<T extends ActivityGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ActivityGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ActivityGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ActivityGroupByOutputType[P]>
            : GetScalarType<T[P], ActivityGroupByOutputType[P]>
        }
      >
    >


  export type ActivitySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    date?: boolean
    description?: boolean
    associationId?: boolean
    memberId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    association?: boolean | AssociationDefaultArgs<ExtArgs>
    member?: boolean | Activity$memberArgs<ExtArgs>
    presences?: boolean | Activity$presencesArgs<ExtArgs>
    _count?: boolean | ActivityCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["activity"]>

  export type ActivitySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    date?: boolean
    description?: boolean
    associationId?: boolean
    memberId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    association?: boolean | AssociationDefaultArgs<ExtArgs>
    member?: boolean | Activity$memberArgs<ExtArgs>
  }, ExtArgs["result"]["activity"]>

  export type ActivitySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    date?: boolean
    description?: boolean
    associationId?: boolean
    memberId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    association?: boolean | AssociationDefaultArgs<ExtArgs>
    member?: boolean | Activity$memberArgs<ExtArgs>
  }, ExtArgs["result"]["activity"]>

  export type ActivitySelectScalar = {
    id?: boolean
    title?: boolean
    date?: boolean
    description?: boolean
    associationId?: boolean
    memberId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ActivityOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "date" | "description" | "associationId" | "memberId" | "createdAt" | "updatedAt", ExtArgs["result"]["activity"]>
  export type ActivityInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    association?: boolean | AssociationDefaultArgs<ExtArgs>
    member?: boolean | Activity$memberArgs<ExtArgs>
    presences?: boolean | Activity$presencesArgs<ExtArgs>
    _count?: boolean | ActivityCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ActivityIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    association?: boolean | AssociationDefaultArgs<ExtArgs>
    member?: boolean | Activity$memberArgs<ExtArgs>
  }
  export type ActivityIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    association?: boolean | AssociationDefaultArgs<ExtArgs>
    member?: boolean | Activity$memberArgs<ExtArgs>
  }

  export type $ActivityPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Activity"
    objects: {
      association: Prisma.$AssociationPayload<ExtArgs>
      member: Prisma.$MemberPayload<ExtArgs> | null
      presences: Prisma.$PresencePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      date: Date
      description: string | null
      associationId: string
      memberId: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["activity"]>
    composites: {}
  }

  type ActivityGetPayload<S extends boolean | null | undefined | ActivityDefaultArgs> = $Result.GetResult<Prisma.$ActivityPayload, S>

  type ActivityCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ActivityFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ActivityCountAggregateInputType | true
    }

  export interface ActivityDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Activity'], meta: { name: 'Activity' } }
    /**
     * Find zero or one Activity that matches the filter.
     * @param {ActivityFindUniqueArgs} args - Arguments to find a Activity
     * @example
     * // Get one Activity
     * const activity = await prisma.activity.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ActivityFindUniqueArgs>(args: SelectSubset<T, ActivityFindUniqueArgs<ExtArgs>>): Prisma__ActivityClient<$Result.GetResult<Prisma.$ActivityPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Activity that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ActivityFindUniqueOrThrowArgs} args - Arguments to find a Activity
     * @example
     * // Get one Activity
     * const activity = await prisma.activity.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ActivityFindUniqueOrThrowArgs>(args: SelectSubset<T, ActivityFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ActivityClient<$Result.GetResult<Prisma.$ActivityPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Activity that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityFindFirstArgs} args - Arguments to find a Activity
     * @example
     * // Get one Activity
     * const activity = await prisma.activity.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ActivityFindFirstArgs>(args?: SelectSubset<T, ActivityFindFirstArgs<ExtArgs>>): Prisma__ActivityClient<$Result.GetResult<Prisma.$ActivityPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Activity that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityFindFirstOrThrowArgs} args - Arguments to find a Activity
     * @example
     * // Get one Activity
     * const activity = await prisma.activity.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ActivityFindFirstOrThrowArgs>(args?: SelectSubset<T, ActivityFindFirstOrThrowArgs<ExtArgs>>): Prisma__ActivityClient<$Result.GetResult<Prisma.$ActivityPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Activities that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Activities
     * const activities = await prisma.activity.findMany()
     * 
     * // Get first 10 Activities
     * const activities = await prisma.activity.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const activityWithIdOnly = await prisma.activity.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ActivityFindManyArgs>(args?: SelectSubset<T, ActivityFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActivityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Activity.
     * @param {ActivityCreateArgs} args - Arguments to create a Activity.
     * @example
     * // Create one Activity
     * const Activity = await prisma.activity.create({
     *   data: {
     *     // ... data to create a Activity
     *   }
     * })
     * 
     */
    create<T extends ActivityCreateArgs>(args: SelectSubset<T, ActivityCreateArgs<ExtArgs>>): Prisma__ActivityClient<$Result.GetResult<Prisma.$ActivityPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Activities.
     * @param {ActivityCreateManyArgs} args - Arguments to create many Activities.
     * @example
     * // Create many Activities
     * const activity = await prisma.activity.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ActivityCreateManyArgs>(args?: SelectSubset<T, ActivityCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Activities and returns the data saved in the database.
     * @param {ActivityCreateManyAndReturnArgs} args - Arguments to create many Activities.
     * @example
     * // Create many Activities
     * const activity = await prisma.activity.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Activities and only return the `id`
     * const activityWithIdOnly = await prisma.activity.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ActivityCreateManyAndReturnArgs>(args?: SelectSubset<T, ActivityCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActivityPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Activity.
     * @param {ActivityDeleteArgs} args - Arguments to delete one Activity.
     * @example
     * // Delete one Activity
     * const Activity = await prisma.activity.delete({
     *   where: {
     *     // ... filter to delete one Activity
     *   }
     * })
     * 
     */
    delete<T extends ActivityDeleteArgs>(args: SelectSubset<T, ActivityDeleteArgs<ExtArgs>>): Prisma__ActivityClient<$Result.GetResult<Prisma.$ActivityPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Activity.
     * @param {ActivityUpdateArgs} args - Arguments to update one Activity.
     * @example
     * // Update one Activity
     * const activity = await prisma.activity.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ActivityUpdateArgs>(args: SelectSubset<T, ActivityUpdateArgs<ExtArgs>>): Prisma__ActivityClient<$Result.GetResult<Prisma.$ActivityPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Activities.
     * @param {ActivityDeleteManyArgs} args - Arguments to filter Activities to delete.
     * @example
     * // Delete a few Activities
     * const { count } = await prisma.activity.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ActivityDeleteManyArgs>(args?: SelectSubset<T, ActivityDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Activities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Activities
     * const activity = await prisma.activity.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ActivityUpdateManyArgs>(args: SelectSubset<T, ActivityUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Activities and returns the data updated in the database.
     * @param {ActivityUpdateManyAndReturnArgs} args - Arguments to update many Activities.
     * @example
     * // Update many Activities
     * const activity = await prisma.activity.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Activities and only return the `id`
     * const activityWithIdOnly = await prisma.activity.updateManyAndReturn({
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
    updateManyAndReturn<T extends ActivityUpdateManyAndReturnArgs>(args: SelectSubset<T, ActivityUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActivityPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Activity.
     * @param {ActivityUpsertArgs} args - Arguments to update or create a Activity.
     * @example
     * // Update or create a Activity
     * const activity = await prisma.activity.upsert({
     *   create: {
     *     // ... data to create a Activity
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Activity we want to update
     *   }
     * })
     */
    upsert<T extends ActivityUpsertArgs>(args: SelectSubset<T, ActivityUpsertArgs<ExtArgs>>): Prisma__ActivityClient<$Result.GetResult<Prisma.$ActivityPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Activities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityCountArgs} args - Arguments to filter Activities to count.
     * @example
     * // Count the number of Activities
     * const count = await prisma.activity.count({
     *   where: {
     *     // ... the filter for the Activities we want to count
     *   }
     * })
    **/
    count<T extends ActivityCountArgs>(
      args?: Subset<T, ActivityCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ActivityCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Activity.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ActivityAggregateArgs>(args: Subset<T, ActivityAggregateArgs>): Prisma.PrismaPromise<GetActivityAggregateType<T>>

    /**
     * Group by Activity.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityGroupByArgs} args - Group by arguments.
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
      T extends ActivityGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ActivityGroupByArgs['orderBy'] }
        : { orderBy?: ActivityGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ActivityGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetActivityGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Activity model
   */
  readonly fields: ActivityFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Activity.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ActivityClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    association<T extends AssociationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AssociationDefaultArgs<ExtArgs>>): Prisma__AssociationClient<$Result.GetResult<Prisma.$AssociationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    member<T extends Activity$memberArgs<ExtArgs> = {}>(args?: Subset<T, Activity$memberArgs<ExtArgs>>): Prisma__MemberClient<$Result.GetResult<Prisma.$MemberPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    presences<T extends Activity$presencesArgs<ExtArgs> = {}>(args?: Subset<T, Activity$presencesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PresencePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Activity model
   */
  interface ActivityFieldRefs {
    readonly id: FieldRef<"Activity", 'String'>
    readonly title: FieldRef<"Activity", 'String'>
    readonly date: FieldRef<"Activity", 'DateTime'>
    readonly description: FieldRef<"Activity", 'String'>
    readonly associationId: FieldRef<"Activity", 'String'>
    readonly memberId: FieldRef<"Activity", 'String'>
    readonly createdAt: FieldRef<"Activity", 'DateTime'>
    readonly updatedAt: FieldRef<"Activity", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Activity findUnique
   */
  export type ActivityFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activity
     */
    select?: ActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Activity
     */
    omit?: ActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityInclude<ExtArgs> | null
    /**
     * Filter, which Activity to fetch.
     */
    where: ActivityWhereUniqueInput
  }

  /**
   * Activity findUniqueOrThrow
   */
  export type ActivityFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activity
     */
    select?: ActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Activity
     */
    omit?: ActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityInclude<ExtArgs> | null
    /**
     * Filter, which Activity to fetch.
     */
    where: ActivityWhereUniqueInput
  }

  /**
   * Activity findFirst
   */
  export type ActivityFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activity
     */
    select?: ActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Activity
     */
    omit?: ActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityInclude<ExtArgs> | null
    /**
     * Filter, which Activity to fetch.
     */
    where?: ActivityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Activities to fetch.
     */
    orderBy?: ActivityOrderByWithRelationInput | ActivityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Activities.
     */
    cursor?: ActivityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Activities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Activities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Activities.
     */
    distinct?: ActivityScalarFieldEnum | ActivityScalarFieldEnum[]
  }

  /**
   * Activity findFirstOrThrow
   */
  export type ActivityFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activity
     */
    select?: ActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Activity
     */
    omit?: ActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityInclude<ExtArgs> | null
    /**
     * Filter, which Activity to fetch.
     */
    where?: ActivityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Activities to fetch.
     */
    orderBy?: ActivityOrderByWithRelationInput | ActivityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Activities.
     */
    cursor?: ActivityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Activities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Activities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Activities.
     */
    distinct?: ActivityScalarFieldEnum | ActivityScalarFieldEnum[]
  }

  /**
   * Activity findMany
   */
  export type ActivityFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activity
     */
    select?: ActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Activity
     */
    omit?: ActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityInclude<ExtArgs> | null
    /**
     * Filter, which Activities to fetch.
     */
    where?: ActivityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Activities to fetch.
     */
    orderBy?: ActivityOrderByWithRelationInput | ActivityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Activities.
     */
    cursor?: ActivityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Activities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Activities.
     */
    skip?: number
    distinct?: ActivityScalarFieldEnum | ActivityScalarFieldEnum[]
  }

  /**
   * Activity create
   */
  export type ActivityCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activity
     */
    select?: ActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Activity
     */
    omit?: ActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityInclude<ExtArgs> | null
    /**
     * The data needed to create a Activity.
     */
    data: XOR<ActivityCreateInput, ActivityUncheckedCreateInput>
  }

  /**
   * Activity createMany
   */
  export type ActivityCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Activities.
     */
    data: ActivityCreateManyInput | ActivityCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Activity createManyAndReturn
   */
  export type ActivityCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activity
     */
    select?: ActivitySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Activity
     */
    omit?: ActivityOmit<ExtArgs> | null
    /**
     * The data used to create many Activities.
     */
    data: ActivityCreateManyInput | ActivityCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Activity update
   */
  export type ActivityUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activity
     */
    select?: ActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Activity
     */
    omit?: ActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityInclude<ExtArgs> | null
    /**
     * The data needed to update a Activity.
     */
    data: XOR<ActivityUpdateInput, ActivityUncheckedUpdateInput>
    /**
     * Choose, which Activity to update.
     */
    where: ActivityWhereUniqueInput
  }

  /**
   * Activity updateMany
   */
  export type ActivityUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Activities.
     */
    data: XOR<ActivityUpdateManyMutationInput, ActivityUncheckedUpdateManyInput>
    /**
     * Filter which Activities to update
     */
    where?: ActivityWhereInput
    /**
     * Limit how many Activities to update.
     */
    limit?: number
  }

  /**
   * Activity updateManyAndReturn
   */
  export type ActivityUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activity
     */
    select?: ActivitySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Activity
     */
    omit?: ActivityOmit<ExtArgs> | null
    /**
     * The data used to update Activities.
     */
    data: XOR<ActivityUpdateManyMutationInput, ActivityUncheckedUpdateManyInput>
    /**
     * Filter which Activities to update
     */
    where?: ActivityWhereInput
    /**
     * Limit how many Activities to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Activity upsert
   */
  export type ActivityUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activity
     */
    select?: ActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Activity
     */
    omit?: ActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityInclude<ExtArgs> | null
    /**
     * The filter to search for the Activity to update in case it exists.
     */
    where: ActivityWhereUniqueInput
    /**
     * In case the Activity found by the `where` argument doesn't exist, create a new Activity with this data.
     */
    create: XOR<ActivityCreateInput, ActivityUncheckedCreateInput>
    /**
     * In case the Activity was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ActivityUpdateInput, ActivityUncheckedUpdateInput>
  }

  /**
   * Activity delete
   */
  export type ActivityDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activity
     */
    select?: ActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Activity
     */
    omit?: ActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityInclude<ExtArgs> | null
    /**
     * Filter which Activity to delete.
     */
    where: ActivityWhereUniqueInput
  }

  /**
   * Activity deleteMany
   */
  export type ActivityDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Activities to delete
     */
    where?: ActivityWhereInput
    /**
     * Limit how many Activities to delete.
     */
    limit?: number
  }

  /**
   * Activity.member
   */
  export type Activity$memberArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Member
     */
    select?: MemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Member
     */
    omit?: MemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberInclude<ExtArgs> | null
    where?: MemberWhereInput
  }

  /**
   * Activity.presences
   */
  export type Activity$presencesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Presence
     */
    select?: PresenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Presence
     */
    omit?: PresenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PresenceInclude<ExtArgs> | null
    where?: PresenceWhereInput
    orderBy?: PresenceOrderByWithRelationInput | PresenceOrderByWithRelationInput[]
    cursor?: PresenceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PresenceScalarFieldEnum | PresenceScalarFieldEnum[]
  }

  /**
   * Activity without action
   */
  export type ActivityDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activity
     */
    select?: ActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Activity
     */
    omit?: ActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityInclude<ExtArgs> | null
  }


  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    password: string | null
    emailVerified: Date | null
    createdAt: Date | null
    updatedAt: Date | null
    memberId: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    password: string | null
    emailVerified: Date | null
    createdAt: Date | null
    updatedAt: Date | null
    memberId: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    password: number
    emailVerified: number
    createdAt: number
    updatedAt: number
    memberId: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    emailVerified?: true
    createdAt?: true
    updatedAt?: true
    memberId?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    emailVerified?: true
    createdAt?: true
    updatedAt?: true
    memberId?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    emailVerified?: true
    createdAt?: true
    updatedAt?: true
    memberId?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
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




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    name: string | null
    email: string
    password: string
    emailVerified: Date | null
    createdAt: Date
    updatedAt: Date
    memberId: string | null
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
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


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    emailVerified?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    memberId?: boolean
    member?: boolean | User$memberArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    emailVerified?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    memberId?: boolean
    member?: boolean | User$memberArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    emailVerified?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    memberId?: boolean
    member?: boolean | User$memberArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    emailVerified?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    memberId?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "password" | "emailVerified" | "createdAt" | "updatedAt" | "memberId", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    member?: boolean | User$memberArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    member?: boolean | User$memberArgs<ExtArgs>
  }
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    member?: boolean | User$memberArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      member: Prisma.$MemberPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string | null
      email: string
      password: string
      emailVerified: Date | null
      createdAt: Date
      updatedAt: Date
      memberId: string | null
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
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
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
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
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
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
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
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
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
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
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
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
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
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
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    member<T extends User$memberArgs<ExtArgs> = {}>(args?: Subset<T, User$memberArgs<ExtArgs>>): Prisma__MemberClient<$Result.GetResult<Prisma.$MemberPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly emailVerified: FieldRef<"User", 'DateTime'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
    readonly memberId: FieldRef<"User", 'String'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.member
   */
  export type User$memberArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Member
     */
    select?: MemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Member
     */
    omit?: MemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberInclude<ExtArgs> | null
    where?: MemberWhereInput
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Invitation
   */

  export type AggregateInvitation = {
    _count: InvitationCountAggregateOutputType | null
    _min: InvitationMinAggregateOutputType | null
    _max: InvitationMaxAggregateOutputType | null
  }

  export type InvitationMinAggregateOutputType = {
    id: string | null
    email: string | null
    role: string | null
    token: string | null
    expiresAt: Date | null
    used: boolean | null
    associationId: string | null
    createdAt: Date | null
  }

  export type InvitationMaxAggregateOutputType = {
    id: string | null
    email: string | null
    role: string | null
    token: string | null
    expiresAt: Date | null
    used: boolean | null
    associationId: string | null
    createdAt: Date | null
  }

  export type InvitationCountAggregateOutputType = {
    id: number
    email: number
    role: number
    token: number
    expiresAt: number
    used: number
    associationId: number
    createdAt: number
    _all: number
  }


  export type InvitationMinAggregateInputType = {
    id?: true
    email?: true
    role?: true
    token?: true
    expiresAt?: true
    used?: true
    associationId?: true
    createdAt?: true
  }

  export type InvitationMaxAggregateInputType = {
    id?: true
    email?: true
    role?: true
    token?: true
    expiresAt?: true
    used?: true
    associationId?: true
    createdAt?: true
  }

  export type InvitationCountAggregateInputType = {
    id?: true
    email?: true
    role?: true
    token?: true
    expiresAt?: true
    used?: true
    associationId?: true
    createdAt?: true
    _all?: true
  }

  export type InvitationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Invitation to aggregate.
     */
    where?: InvitationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Invitations to fetch.
     */
    orderBy?: InvitationOrderByWithRelationInput | InvitationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: InvitationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Invitations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Invitations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Invitations
    **/
    _count?: true | InvitationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InvitationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InvitationMaxAggregateInputType
  }

  export type GetInvitationAggregateType<T extends InvitationAggregateArgs> = {
        [P in keyof T & keyof AggregateInvitation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInvitation[P]>
      : GetScalarType<T[P], AggregateInvitation[P]>
  }




  export type InvitationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InvitationWhereInput
    orderBy?: InvitationOrderByWithAggregationInput | InvitationOrderByWithAggregationInput[]
    by: InvitationScalarFieldEnum[] | InvitationScalarFieldEnum
    having?: InvitationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InvitationCountAggregateInputType | true
    _min?: InvitationMinAggregateInputType
    _max?: InvitationMaxAggregateInputType
  }

  export type InvitationGroupByOutputType = {
    id: string
    email: string
    role: string
    token: string
    expiresAt: Date
    used: boolean
    associationId: string
    createdAt: Date
    _count: InvitationCountAggregateOutputType | null
    _min: InvitationMinAggregateOutputType | null
    _max: InvitationMaxAggregateOutputType | null
  }

  type GetInvitationGroupByPayload<T extends InvitationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InvitationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InvitationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InvitationGroupByOutputType[P]>
            : GetScalarType<T[P], InvitationGroupByOutputType[P]>
        }
      >
    >


  export type InvitationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    role?: boolean
    token?: boolean
    expiresAt?: boolean
    used?: boolean
    associationId?: boolean
    createdAt?: boolean
    association?: boolean | AssociationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["invitation"]>

  export type InvitationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    role?: boolean
    token?: boolean
    expiresAt?: boolean
    used?: boolean
    associationId?: boolean
    createdAt?: boolean
    association?: boolean | AssociationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["invitation"]>

  export type InvitationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    role?: boolean
    token?: boolean
    expiresAt?: boolean
    used?: boolean
    associationId?: boolean
    createdAt?: boolean
    association?: boolean | AssociationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["invitation"]>

  export type InvitationSelectScalar = {
    id?: boolean
    email?: boolean
    role?: boolean
    token?: boolean
    expiresAt?: boolean
    used?: boolean
    associationId?: boolean
    createdAt?: boolean
  }

  export type InvitationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "role" | "token" | "expiresAt" | "used" | "associationId" | "createdAt", ExtArgs["result"]["invitation"]>
  export type InvitationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    association?: boolean | AssociationDefaultArgs<ExtArgs>
  }
  export type InvitationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    association?: boolean | AssociationDefaultArgs<ExtArgs>
  }
  export type InvitationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    association?: boolean | AssociationDefaultArgs<ExtArgs>
  }

  export type $InvitationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Invitation"
    objects: {
      association: Prisma.$AssociationPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      role: string
      token: string
      expiresAt: Date
      used: boolean
      associationId: string
      createdAt: Date
    }, ExtArgs["result"]["invitation"]>
    composites: {}
  }

  type InvitationGetPayload<S extends boolean | null | undefined | InvitationDefaultArgs> = $Result.GetResult<Prisma.$InvitationPayload, S>

  type InvitationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<InvitationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: InvitationCountAggregateInputType | true
    }

  export interface InvitationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Invitation'], meta: { name: 'Invitation' } }
    /**
     * Find zero or one Invitation that matches the filter.
     * @param {InvitationFindUniqueArgs} args - Arguments to find a Invitation
     * @example
     * // Get one Invitation
     * const invitation = await prisma.invitation.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends InvitationFindUniqueArgs>(args: SelectSubset<T, InvitationFindUniqueArgs<ExtArgs>>): Prisma__InvitationClient<$Result.GetResult<Prisma.$InvitationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Invitation that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {InvitationFindUniqueOrThrowArgs} args - Arguments to find a Invitation
     * @example
     * // Get one Invitation
     * const invitation = await prisma.invitation.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends InvitationFindUniqueOrThrowArgs>(args: SelectSubset<T, InvitationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__InvitationClient<$Result.GetResult<Prisma.$InvitationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Invitation that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvitationFindFirstArgs} args - Arguments to find a Invitation
     * @example
     * // Get one Invitation
     * const invitation = await prisma.invitation.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends InvitationFindFirstArgs>(args?: SelectSubset<T, InvitationFindFirstArgs<ExtArgs>>): Prisma__InvitationClient<$Result.GetResult<Prisma.$InvitationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Invitation that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvitationFindFirstOrThrowArgs} args - Arguments to find a Invitation
     * @example
     * // Get one Invitation
     * const invitation = await prisma.invitation.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends InvitationFindFirstOrThrowArgs>(args?: SelectSubset<T, InvitationFindFirstOrThrowArgs<ExtArgs>>): Prisma__InvitationClient<$Result.GetResult<Prisma.$InvitationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Invitations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvitationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Invitations
     * const invitations = await prisma.invitation.findMany()
     * 
     * // Get first 10 Invitations
     * const invitations = await prisma.invitation.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const invitationWithIdOnly = await prisma.invitation.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends InvitationFindManyArgs>(args?: SelectSubset<T, InvitationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InvitationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Invitation.
     * @param {InvitationCreateArgs} args - Arguments to create a Invitation.
     * @example
     * // Create one Invitation
     * const Invitation = await prisma.invitation.create({
     *   data: {
     *     // ... data to create a Invitation
     *   }
     * })
     * 
     */
    create<T extends InvitationCreateArgs>(args: SelectSubset<T, InvitationCreateArgs<ExtArgs>>): Prisma__InvitationClient<$Result.GetResult<Prisma.$InvitationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Invitations.
     * @param {InvitationCreateManyArgs} args - Arguments to create many Invitations.
     * @example
     * // Create many Invitations
     * const invitation = await prisma.invitation.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends InvitationCreateManyArgs>(args?: SelectSubset<T, InvitationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Invitations and returns the data saved in the database.
     * @param {InvitationCreateManyAndReturnArgs} args - Arguments to create many Invitations.
     * @example
     * // Create many Invitations
     * const invitation = await prisma.invitation.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Invitations and only return the `id`
     * const invitationWithIdOnly = await prisma.invitation.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends InvitationCreateManyAndReturnArgs>(args?: SelectSubset<T, InvitationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InvitationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Invitation.
     * @param {InvitationDeleteArgs} args - Arguments to delete one Invitation.
     * @example
     * // Delete one Invitation
     * const Invitation = await prisma.invitation.delete({
     *   where: {
     *     // ... filter to delete one Invitation
     *   }
     * })
     * 
     */
    delete<T extends InvitationDeleteArgs>(args: SelectSubset<T, InvitationDeleteArgs<ExtArgs>>): Prisma__InvitationClient<$Result.GetResult<Prisma.$InvitationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Invitation.
     * @param {InvitationUpdateArgs} args - Arguments to update one Invitation.
     * @example
     * // Update one Invitation
     * const invitation = await prisma.invitation.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends InvitationUpdateArgs>(args: SelectSubset<T, InvitationUpdateArgs<ExtArgs>>): Prisma__InvitationClient<$Result.GetResult<Prisma.$InvitationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Invitations.
     * @param {InvitationDeleteManyArgs} args - Arguments to filter Invitations to delete.
     * @example
     * // Delete a few Invitations
     * const { count } = await prisma.invitation.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends InvitationDeleteManyArgs>(args?: SelectSubset<T, InvitationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Invitations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvitationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Invitations
     * const invitation = await prisma.invitation.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends InvitationUpdateManyArgs>(args: SelectSubset<T, InvitationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Invitations and returns the data updated in the database.
     * @param {InvitationUpdateManyAndReturnArgs} args - Arguments to update many Invitations.
     * @example
     * // Update many Invitations
     * const invitation = await prisma.invitation.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Invitations and only return the `id`
     * const invitationWithIdOnly = await prisma.invitation.updateManyAndReturn({
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
    updateManyAndReturn<T extends InvitationUpdateManyAndReturnArgs>(args: SelectSubset<T, InvitationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InvitationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Invitation.
     * @param {InvitationUpsertArgs} args - Arguments to update or create a Invitation.
     * @example
     * // Update or create a Invitation
     * const invitation = await prisma.invitation.upsert({
     *   create: {
     *     // ... data to create a Invitation
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Invitation we want to update
     *   }
     * })
     */
    upsert<T extends InvitationUpsertArgs>(args: SelectSubset<T, InvitationUpsertArgs<ExtArgs>>): Prisma__InvitationClient<$Result.GetResult<Prisma.$InvitationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Invitations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvitationCountArgs} args - Arguments to filter Invitations to count.
     * @example
     * // Count the number of Invitations
     * const count = await prisma.invitation.count({
     *   where: {
     *     // ... the filter for the Invitations we want to count
     *   }
     * })
    **/
    count<T extends InvitationCountArgs>(
      args?: Subset<T, InvitationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InvitationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Invitation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvitationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends InvitationAggregateArgs>(args: Subset<T, InvitationAggregateArgs>): Prisma.PrismaPromise<GetInvitationAggregateType<T>>

    /**
     * Group by Invitation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvitationGroupByArgs} args - Group by arguments.
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
      T extends InvitationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: InvitationGroupByArgs['orderBy'] }
        : { orderBy?: InvitationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, InvitationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInvitationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Invitation model
   */
  readonly fields: InvitationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Invitation.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__InvitationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    association<T extends AssociationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AssociationDefaultArgs<ExtArgs>>): Prisma__AssociationClient<$Result.GetResult<Prisma.$AssociationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Invitation model
   */
  interface InvitationFieldRefs {
    readonly id: FieldRef<"Invitation", 'String'>
    readonly email: FieldRef<"Invitation", 'String'>
    readonly role: FieldRef<"Invitation", 'String'>
    readonly token: FieldRef<"Invitation", 'String'>
    readonly expiresAt: FieldRef<"Invitation", 'DateTime'>
    readonly used: FieldRef<"Invitation", 'Boolean'>
    readonly associationId: FieldRef<"Invitation", 'String'>
    readonly createdAt: FieldRef<"Invitation", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Invitation findUnique
   */
  export type InvitationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invitation
     */
    select?: InvitationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invitation
     */
    omit?: InvitationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvitationInclude<ExtArgs> | null
    /**
     * Filter, which Invitation to fetch.
     */
    where: InvitationWhereUniqueInput
  }

  /**
   * Invitation findUniqueOrThrow
   */
  export type InvitationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invitation
     */
    select?: InvitationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invitation
     */
    omit?: InvitationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvitationInclude<ExtArgs> | null
    /**
     * Filter, which Invitation to fetch.
     */
    where: InvitationWhereUniqueInput
  }

  /**
   * Invitation findFirst
   */
  export type InvitationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invitation
     */
    select?: InvitationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invitation
     */
    omit?: InvitationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvitationInclude<ExtArgs> | null
    /**
     * Filter, which Invitation to fetch.
     */
    where?: InvitationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Invitations to fetch.
     */
    orderBy?: InvitationOrderByWithRelationInput | InvitationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Invitations.
     */
    cursor?: InvitationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Invitations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Invitations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Invitations.
     */
    distinct?: InvitationScalarFieldEnum | InvitationScalarFieldEnum[]
  }

  /**
   * Invitation findFirstOrThrow
   */
  export type InvitationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invitation
     */
    select?: InvitationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invitation
     */
    omit?: InvitationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvitationInclude<ExtArgs> | null
    /**
     * Filter, which Invitation to fetch.
     */
    where?: InvitationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Invitations to fetch.
     */
    orderBy?: InvitationOrderByWithRelationInput | InvitationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Invitations.
     */
    cursor?: InvitationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Invitations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Invitations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Invitations.
     */
    distinct?: InvitationScalarFieldEnum | InvitationScalarFieldEnum[]
  }

  /**
   * Invitation findMany
   */
  export type InvitationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invitation
     */
    select?: InvitationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invitation
     */
    omit?: InvitationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvitationInclude<ExtArgs> | null
    /**
     * Filter, which Invitations to fetch.
     */
    where?: InvitationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Invitations to fetch.
     */
    orderBy?: InvitationOrderByWithRelationInput | InvitationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Invitations.
     */
    cursor?: InvitationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Invitations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Invitations.
     */
    skip?: number
    distinct?: InvitationScalarFieldEnum | InvitationScalarFieldEnum[]
  }

  /**
   * Invitation create
   */
  export type InvitationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invitation
     */
    select?: InvitationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invitation
     */
    omit?: InvitationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvitationInclude<ExtArgs> | null
    /**
     * The data needed to create a Invitation.
     */
    data: XOR<InvitationCreateInput, InvitationUncheckedCreateInput>
  }

  /**
   * Invitation createMany
   */
  export type InvitationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Invitations.
     */
    data: InvitationCreateManyInput | InvitationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Invitation createManyAndReturn
   */
  export type InvitationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invitation
     */
    select?: InvitationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Invitation
     */
    omit?: InvitationOmit<ExtArgs> | null
    /**
     * The data used to create many Invitations.
     */
    data: InvitationCreateManyInput | InvitationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvitationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Invitation update
   */
  export type InvitationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invitation
     */
    select?: InvitationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invitation
     */
    omit?: InvitationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvitationInclude<ExtArgs> | null
    /**
     * The data needed to update a Invitation.
     */
    data: XOR<InvitationUpdateInput, InvitationUncheckedUpdateInput>
    /**
     * Choose, which Invitation to update.
     */
    where: InvitationWhereUniqueInput
  }

  /**
   * Invitation updateMany
   */
  export type InvitationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Invitations.
     */
    data: XOR<InvitationUpdateManyMutationInput, InvitationUncheckedUpdateManyInput>
    /**
     * Filter which Invitations to update
     */
    where?: InvitationWhereInput
    /**
     * Limit how many Invitations to update.
     */
    limit?: number
  }

  /**
   * Invitation updateManyAndReturn
   */
  export type InvitationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invitation
     */
    select?: InvitationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Invitation
     */
    omit?: InvitationOmit<ExtArgs> | null
    /**
     * The data used to update Invitations.
     */
    data: XOR<InvitationUpdateManyMutationInput, InvitationUncheckedUpdateManyInput>
    /**
     * Filter which Invitations to update
     */
    where?: InvitationWhereInput
    /**
     * Limit how many Invitations to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvitationIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Invitation upsert
   */
  export type InvitationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invitation
     */
    select?: InvitationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invitation
     */
    omit?: InvitationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvitationInclude<ExtArgs> | null
    /**
     * The filter to search for the Invitation to update in case it exists.
     */
    where: InvitationWhereUniqueInput
    /**
     * In case the Invitation found by the `where` argument doesn't exist, create a new Invitation with this data.
     */
    create: XOR<InvitationCreateInput, InvitationUncheckedCreateInput>
    /**
     * In case the Invitation was found with the provided `where` argument, update it with this data.
     */
    update: XOR<InvitationUpdateInput, InvitationUncheckedUpdateInput>
  }

  /**
   * Invitation delete
   */
  export type InvitationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invitation
     */
    select?: InvitationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invitation
     */
    omit?: InvitationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvitationInclude<ExtArgs> | null
    /**
     * Filter which Invitation to delete.
     */
    where: InvitationWhereUniqueInput
  }

  /**
   * Invitation deleteMany
   */
  export type InvitationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Invitations to delete
     */
    where?: InvitationWhereInput
    /**
     * Limit how many Invitations to delete.
     */
    limit?: number
  }

  /**
   * Invitation without action
   */
  export type InvitationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invitation
     */
    select?: InvitationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invitation
     */
    omit?: InvitationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvitationInclude<ExtArgs> | null
  }


  /**
   * Model Presence
   */

  export type AggregatePresence = {
    _count: PresenceCountAggregateOutputType | null
    _min: PresenceMinAggregateOutputType | null
    _max: PresenceMaxAggregateOutputType | null
  }

  export type PresenceMinAggregateOutputType = {
    id: string | null
    activityId: string | null
    memberId: string | null
    present: boolean | null
    createdAt: Date | null
  }

  export type PresenceMaxAggregateOutputType = {
    id: string | null
    activityId: string | null
    memberId: string | null
    present: boolean | null
    createdAt: Date | null
  }

  export type PresenceCountAggregateOutputType = {
    id: number
    activityId: number
    memberId: number
    present: number
    createdAt: number
    _all: number
  }


  export type PresenceMinAggregateInputType = {
    id?: true
    activityId?: true
    memberId?: true
    present?: true
    createdAt?: true
  }

  export type PresenceMaxAggregateInputType = {
    id?: true
    activityId?: true
    memberId?: true
    present?: true
    createdAt?: true
  }

  export type PresenceCountAggregateInputType = {
    id?: true
    activityId?: true
    memberId?: true
    present?: true
    createdAt?: true
    _all?: true
  }

  export type PresenceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Presence to aggregate.
     */
    where?: PresenceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Presences to fetch.
     */
    orderBy?: PresenceOrderByWithRelationInput | PresenceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PresenceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Presences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Presences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Presences
    **/
    _count?: true | PresenceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PresenceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PresenceMaxAggregateInputType
  }

  export type GetPresenceAggregateType<T extends PresenceAggregateArgs> = {
        [P in keyof T & keyof AggregatePresence]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePresence[P]>
      : GetScalarType<T[P], AggregatePresence[P]>
  }




  export type PresenceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PresenceWhereInput
    orderBy?: PresenceOrderByWithAggregationInput | PresenceOrderByWithAggregationInput[]
    by: PresenceScalarFieldEnum[] | PresenceScalarFieldEnum
    having?: PresenceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PresenceCountAggregateInputType | true
    _min?: PresenceMinAggregateInputType
    _max?: PresenceMaxAggregateInputType
  }

  export type PresenceGroupByOutputType = {
    id: string
    activityId: string
    memberId: string
    present: boolean
    createdAt: Date
    _count: PresenceCountAggregateOutputType | null
    _min: PresenceMinAggregateOutputType | null
    _max: PresenceMaxAggregateOutputType | null
  }

  type GetPresenceGroupByPayload<T extends PresenceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PresenceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PresenceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PresenceGroupByOutputType[P]>
            : GetScalarType<T[P], PresenceGroupByOutputType[P]>
        }
      >
    >


  export type PresenceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    activityId?: boolean
    memberId?: boolean
    present?: boolean
    createdAt?: boolean
    activity?: boolean | ActivityDefaultArgs<ExtArgs>
    member?: boolean | MemberDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["presence"]>

  export type PresenceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    activityId?: boolean
    memberId?: boolean
    present?: boolean
    createdAt?: boolean
    activity?: boolean | ActivityDefaultArgs<ExtArgs>
    member?: boolean | MemberDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["presence"]>

  export type PresenceSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    activityId?: boolean
    memberId?: boolean
    present?: boolean
    createdAt?: boolean
    activity?: boolean | ActivityDefaultArgs<ExtArgs>
    member?: boolean | MemberDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["presence"]>

  export type PresenceSelectScalar = {
    id?: boolean
    activityId?: boolean
    memberId?: boolean
    present?: boolean
    createdAt?: boolean
  }

  export type PresenceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "activityId" | "memberId" | "present" | "createdAt", ExtArgs["result"]["presence"]>
  export type PresenceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    activity?: boolean | ActivityDefaultArgs<ExtArgs>
    member?: boolean | MemberDefaultArgs<ExtArgs>
  }
  export type PresenceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    activity?: boolean | ActivityDefaultArgs<ExtArgs>
    member?: boolean | MemberDefaultArgs<ExtArgs>
  }
  export type PresenceIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    activity?: boolean | ActivityDefaultArgs<ExtArgs>
    member?: boolean | MemberDefaultArgs<ExtArgs>
  }

  export type $PresencePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Presence"
    objects: {
      activity: Prisma.$ActivityPayload<ExtArgs>
      member: Prisma.$MemberPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      activityId: string
      memberId: string
      present: boolean
      createdAt: Date
    }, ExtArgs["result"]["presence"]>
    composites: {}
  }

  type PresenceGetPayload<S extends boolean | null | undefined | PresenceDefaultArgs> = $Result.GetResult<Prisma.$PresencePayload, S>

  type PresenceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PresenceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PresenceCountAggregateInputType | true
    }

  export interface PresenceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Presence'], meta: { name: 'Presence' } }
    /**
     * Find zero or one Presence that matches the filter.
     * @param {PresenceFindUniqueArgs} args - Arguments to find a Presence
     * @example
     * // Get one Presence
     * const presence = await prisma.presence.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PresenceFindUniqueArgs>(args: SelectSubset<T, PresenceFindUniqueArgs<ExtArgs>>): Prisma__PresenceClient<$Result.GetResult<Prisma.$PresencePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Presence that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PresenceFindUniqueOrThrowArgs} args - Arguments to find a Presence
     * @example
     * // Get one Presence
     * const presence = await prisma.presence.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PresenceFindUniqueOrThrowArgs>(args: SelectSubset<T, PresenceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PresenceClient<$Result.GetResult<Prisma.$PresencePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Presence that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PresenceFindFirstArgs} args - Arguments to find a Presence
     * @example
     * // Get one Presence
     * const presence = await prisma.presence.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PresenceFindFirstArgs>(args?: SelectSubset<T, PresenceFindFirstArgs<ExtArgs>>): Prisma__PresenceClient<$Result.GetResult<Prisma.$PresencePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Presence that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PresenceFindFirstOrThrowArgs} args - Arguments to find a Presence
     * @example
     * // Get one Presence
     * const presence = await prisma.presence.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PresenceFindFirstOrThrowArgs>(args?: SelectSubset<T, PresenceFindFirstOrThrowArgs<ExtArgs>>): Prisma__PresenceClient<$Result.GetResult<Prisma.$PresencePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Presences that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PresenceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Presences
     * const presences = await prisma.presence.findMany()
     * 
     * // Get first 10 Presences
     * const presences = await prisma.presence.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const presenceWithIdOnly = await prisma.presence.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PresenceFindManyArgs>(args?: SelectSubset<T, PresenceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PresencePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Presence.
     * @param {PresenceCreateArgs} args - Arguments to create a Presence.
     * @example
     * // Create one Presence
     * const Presence = await prisma.presence.create({
     *   data: {
     *     // ... data to create a Presence
     *   }
     * })
     * 
     */
    create<T extends PresenceCreateArgs>(args: SelectSubset<T, PresenceCreateArgs<ExtArgs>>): Prisma__PresenceClient<$Result.GetResult<Prisma.$PresencePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Presences.
     * @param {PresenceCreateManyArgs} args - Arguments to create many Presences.
     * @example
     * // Create many Presences
     * const presence = await prisma.presence.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PresenceCreateManyArgs>(args?: SelectSubset<T, PresenceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Presences and returns the data saved in the database.
     * @param {PresenceCreateManyAndReturnArgs} args - Arguments to create many Presences.
     * @example
     * // Create many Presences
     * const presence = await prisma.presence.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Presences and only return the `id`
     * const presenceWithIdOnly = await prisma.presence.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PresenceCreateManyAndReturnArgs>(args?: SelectSubset<T, PresenceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PresencePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Presence.
     * @param {PresenceDeleteArgs} args - Arguments to delete one Presence.
     * @example
     * // Delete one Presence
     * const Presence = await prisma.presence.delete({
     *   where: {
     *     // ... filter to delete one Presence
     *   }
     * })
     * 
     */
    delete<T extends PresenceDeleteArgs>(args: SelectSubset<T, PresenceDeleteArgs<ExtArgs>>): Prisma__PresenceClient<$Result.GetResult<Prisma.$PresencePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Presence.
     * @param {PresenceUpdateArgs} args - Arguments to update one Presence.
     * @example
     * // Update one Presence
     * const presence = await prisma.presence.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PresenceUpdateArgs>(args: SelectSubset<T, PresenceUpdateArgs<ExtArgs>>): Prisma__PresenceClient<$Result.GetResult<Prisma.$PresencePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Presences.
     * @param {PresenceDeleteManyArgs} args - Arguments to filter Presences to delete.
     * @example
     * // Delete a few Presences
     * const { count } = await prisma.presence.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PresenceDeleteManyArgs>(args?: SelectSubset<T, PresenceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Presences.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PresenceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Presences
     * const presence = await prisma.presence.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PresenceUpdateManyArgs>(args: SelectSubset<T, PresenceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Presences and returns the data updated in the database.
     * @param {PresenceUpdateManyAndReturnArgs} args - Arguments to update many Presences.
     * @example
     * // Update many Presences
     * const presence = await prisma.presence.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Presences and only return the `id`
     * const presenceWithIdOnly = await prisma.presence.updateManyAndReturn({
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
    updateManyAndReturn<T extends PresenceUpdateManyAndReturnArgs>(args: SelectSubset<T, PresenceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PresencePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Presence.
     * @param {PresenceUpsertArgs} args - Arguments to update or create a Presence.
     * @example
     * // Update or create a Presence
     * const presence = await prisma.presence.upsert({
     *   create: {
     *     // ... data to create a Presence
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Presence we want to update
     *   }
     * })
     */
    upsert<T extends PresenceUpsertArgs>(args: SelectSubset<T, PresenceUpsertArgs<ExtArgs>>): Prisma__PresenceClient<$Result.GetResult<Prisma.$PresencePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Presences.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PresenceCountArgs} args - Arguments to filter Presences to count.
     * @example
     * // Count the number of Presences
     * const count = await prisma.presence.count({
     *   where: {
     *     // ... the filter for the Presences we want to count
     *   }
     * })
    **/
    count<T extends PresenceCountArgs>(
      args?: Subset<T, PresenceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PresenceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Presence.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PresenceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PresenceAggregateArgs>(args: Subset<T, PresenceAggregateArgs>): Prisma.PrismaPromise<GetPresenceAggregateType<T>>

    /**
     * Group by Presence.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PresenceGroupByArgs} args - Group by arguments.
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
      T extends PresenceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PresenceGroupByArgs['orderBy'] }
        : { orderBy?: PresenceGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PresenceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPresenceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Presence model
   */
  readonly fields: PresenceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Presence.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PresenceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    activity<T extends ActivityDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ActivityDefaultArgs<ExtArgs>>): Prisma__ActivityClient<$Result.GetResult<Prisma.$ActivityPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    member<T extends MemberDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MemberDefaultArgs<ExtArgs>>): Prisma__MemberClient<$Result.GetResult<Prisma.$MemberPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Presence model
   */
  interface PresenceFieldRefs {
    readonly id: FieldRef<"Presence", 'String'>
    readonly activityId: FieldRef<"Presence", 'String'>
    readonly memberId: FieldRef<"Presence", 'String'>
    readonly present: FieldRef<"Presence", 'Boolean'>
    readonly createdAt: FieldRef<"Presence", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Presence findUnique
   */
  export type PresenceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Presence
     */
    select?: PresenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Presence
     */
    omit?: PresenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PresenceInclude<ExtArgs> | null
    /**
     * Filter, which Presence to fetch.
     */
    where: PresenceWhereUniqueInput
  }

  /**
   * Presence findUniqueOrThrow
   */
  export type PresenceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Presence
     */
    select?: PresenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Presence
     */
    omit?: PresenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PresenceInclude<ExtArgs> | null
    /**
     * Filter, which Presence to fetch.
     */
    where: PresenceWhereUniqueInput
  }

  /**
   * Presence findFirst
   */
  export type PresenceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Presence
     */
    select?: PresenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Presence
     */
    omit?: PresenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PresenceInclude<ExtArgs> | null
    /**
     * Filter, which Presence to fetch.
     */
    where?: PresenceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Presences to fetch.
     */
    orderBy?: PresenceOrderByWithRelationInput | PresenceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Presences.
     */
    cursor?: PresenceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Presences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Presences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Presences.
     */
    distinct?: PresenceScalarFieldEnum | PresenceScalarFieldEnum[]
  }

  /**
   * Presence findFirstOrThrow
   */
  export type PresenceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Presence
     */
    select?: PresenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Presence
     */
    omit?: PresenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PresenceInclude<ExtArgs> | null
    /**
     * Filter, which Presence to fetch.
     */
    where?: PresenceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Presences to fetch.
     */
    orderBy?: PresenceOrderByWithRelationInput | PresenceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Presences.
     */
    cursor?: PresenceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Presences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Presences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Presences.
     */
    distinct?: PresenceScalarFieldEnum | PresenceScalarFieldEnum[]
  }

  /**
   * Presence findMany
   */
  export type PresenceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Presence
     */
    select?: PresenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Presence
     */
    omit?: PresenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PresenceInclude<ExtArgs> | null
    /**
     * Filter, which Presences to fetch.
     */
    where?: PresenceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Presences to fetch.
     */
    orderBy?: PresenceOrderByWithRelationInput | PresenceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Presences.
     */
    cursor?: PresenceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Presences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Presences.
     */
    skip?: number
    distinct?: PresenceScalarFieldEnum | PresenceScalarFieldEnum[]
  }

  /**
   * Presence create
   */
  export type PresenceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Presence
     */
    select?: PresenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Presence
     */
    omit?: PresenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PresenceInclude<ExtArgs> | null
    /**
     * The data needed to create a Presence.
     */
    data: XOR<PresenceCreateInput, PresenceUncheckedCreateInput>
  }

  /**
   * Presence createMany
   */
  export type PresenceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Presences.
     */
    data: PresenceCreateManyInput | PresenceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Presence createManyAndReturn
   */
  export type PresenceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Presence
     */
    select?: PresenceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Presence
     */
    omit?: PresenceOmit<ExtArgs> | null
    /**
     * The data used to create many Presences.
     */
    data: PresenceCreateManyInput | PresenceCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PresenceIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Presence update
   */
  export type PresenceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Presence
     */
    select?: PresenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Presence
     */
    omit?: PresenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PresenceInclude<ExtArgs> | null
    /**
     * The data needed to update a Presence.
     */
    data: XOR<PresenceUpdateInput, PresenceUncheckedUpdateInput>
    /**
     * Choose, which Presence to update.
     */
    where: PresenceWhereUniqueInput
  }

  /**
   * Presence updateMany
   */
  export type PresenceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Presences.
     */
    data: XOR<PresenceUpdateManyMutationInput, PresenceUncheckedUpdateManyInput>
    /**
     * Filter which Presences to update
     */
    where?: PresenceWhereInput
    /**
     * Limit how many Presences to update.
     */
    limit?: number
  }

  /**
   * Presence updateManyAndReturn
   */
  export type PresenceUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Presence
     */
    select?: PresenceSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Presence
     */
    omit?: PresenceOmit<ExtArgs> | null
    /**
     * The data used to update Presences.
     */
    data: XOR<PresenceUpdateManyMutationInput, PresenceUncheckedUpdateManyInput>
    /**
     * Filter which Presences to update
     */
    where?: PresenceWhereInput
    /**
     * Limit how many Presences to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PresenceIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Presence upsert
   */
  export type PresenceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Presence
     */
    select?: PresenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Presence
     */
    omit?: PresenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PresenceInclude<ExtArgs> | null
    /**
     * The filter to search for the Presence to update in case it exists.
     */
    where: PresenceWhereUniqueInput
    /**
     * In case the Presence found by the `where` argument doesn't exist, create a new Presence with this data.
     */
    create: XOR<PresenceCreateInput, PresenceUncheckedCreateInput>
    /**
     * In case the Presence was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PresenceUpdateInput, PresenceUncheckedUpdateInput>
  }

  /**
   * Presence delete
   */
  export type PresenceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Presence
     */
    select?: PresenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Presence
     */
    omit?: PresenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PresenceInclude<ExtArgs> | null
    /**
     * Filter which Presence to delete.
     */
    where: PresenceWhereUniqueInput
  }

  /**
   * Presence deleteMany
   */
  export type PresenceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Presences to delete
     */
    where?: PresenceWhereInput
    /**
     * Limit how many Presences to delete.
     */
    limit?: number
  }

  /**
   * Presence without action
   */
  export type PresenceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Presence
     */
    select?: PresenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Presence
     */
    omit?: PresenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PresenceInclude<ExtArgs> | null
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


  export const AssociationScalarFieldEnum: {
    id: 'id',
    name: 'name',
    createdAt: 'createdAt'
  };

  export type AssociationScalarFieldEnum = (typeof AssociationScalarFieldEnum)[keyof typeof AssociationScalarFieldEnum]


  export const MemberScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    role: 'role',
    associationId: 'associationId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type MemberScalarFieldEnum = (typeof MemberScalarFieldEnum)[keyof typeof MemberScalarFieldEnum]


  export const CotisationScalarFieldEnum: {
    id: 'id',
    amount: 'amount',
    paidAt: 'paidAt',
    memberId: 'memberId',
    associationId: 'associationId'
  };

  export type CotisationScalarFieldEnum = (typeof CotisationScalarFieldEnum)[keyof typeof CotisationScalarFieldEnum]


  export const ActivityScalarFieldEnum: {
    id: 'id',
    title: 'title',
    date: 'date',
    description: 'description',
    associationId: 'associationId',
    memberId: 'memberId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ActivityScalarFieldEnum = (typeof ActivityScalarFieldEnum)[keyof typeof ActivityScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    password: 'password',
    emailVerified: 'emailVerified',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    memberId: 'memberId'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const InvitationScalarFieldEnum: {
    id: 'id',
    email: 'email',
    role: 'role',
    token: 'token',
    expiresAt: 'expiresAt',
    used: 'used',
    associationId: 'associationId',
    createdAt: 'createdAt'
  };

  export type InvitationScalarFieldEnum = (typeof InvitationScalarFieldEnum)[keyof typeof InvitationScalarFieldEnum]


  export const PresenceScalarFieldEnum: {
    id: 'id',
    activityId: 'activityId',
    memberId: 'memberId',
    present: 'present',
    createdAt: 'createdAt'
  };

  export type PresenceScalarFieldEnum = (typeof PresenceScalarFieldEnum)[keyof typeof PresenceScalarFieldEnum]


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
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type AssociationWhereInput = {
    AND?: AssociationWhereInput | AssociationWhereInput[]
    OR?: AssociationWhereInput[]
    NOT?: AssociationWhereInput | AssociationWhereInput[]
    id?: StringFilter<"Association"> | string
    name?: StringFilter<"Association"> | string
    createdAt?: DateTimeFilter<"Association"> | Date | string
    members?: MemberListRelationFilter
    cotisations?: CotisationListRelationFilter
    activities?: ActivityListRelationFilter
    invitations?: InvitationListRelationFilter
  }

  export type AssociationOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    members?: MemberOrderByRelationAggregateInput
    cotisations?: CotisationOrderByRelationAggregateInput
    activities?: ActivityOrderByRelationAggregateInput
    invitations?: InvitationOrderByRelationAggregateInput
  }

  export type AssociationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AssociationWhereInput | AssociationWhereInput[]
    OR?: AssociationWhereInput[]
    NOT?: AssociationWhereInput | AssociationWhereInput[]
    name?: StringFilter<"Association"> | string
    createdAt?: DateTimeFilter<"Association"> | Date | string
    members?: MemberListRelationFilter
    cotisations?: CotisationListRelationFilter
    activities?: ActivityListRelationFilter
    invitations?: InvitationListRelationFilter
  }, "id">

  export type AssociationOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    _count?: AssociationCountOrderByAggregateInput
    _max?: AssociationMaxOrderByAggregateInput
    _min?: AssociationMinOrderByAggregateInput
  }

  export type AssociationScalarWhereWithAggregatesInput = {
    AND?: AssociationScalarWhereWithAggregatesInput | AssociationScalarWhereWithAggregatesInput[]
    OR?: AssociationScalarWhereWithAggregatesInput[]
    NOT?: AssociationScalarWhereWithAggregatesInput | AssociationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Association"> | string
    name?: StringWithAggregatesFilter<"Association"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Association"> | Date | string
  }

  export type MemberWhereInput = {
    AND?: MemberWhereInput | MemberWhereInput[]
    OR?: MemberWhereInput[]
    NOT?: MemberWhereInput | MemberWhereInput[]
    id?: StringFilter<"Member"> | string
    name?: StringFilter<"Member"> | string
    email?: StringFilter<"Member"> | string
    role?: StringFilter<"Member"> | string
    associationId?: StringFilter<"Member"> | string
    createdAt?: DateTimeFilter<"Member"> | Date | string
    updatedAt?: DateTimeFilter<"Member"> | Date | string
    association?: XOR<AssociationScalarRelationFilter, AssociationWhereInput>
    user?: UserListRelationFilter
    cotisations?: CotisationListRelationFilter
    activities?: ActivityListRelationFilter
    presences?: PresenceListRelationFilter
  }

  export type MemberOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    role?: SortOrder
    associationId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    association?: AssociationOrderByWithRelationInput
    user?: UserOrderByRelationAggregateInput
    cotisations?: CotisationOrderByRelationAggregateInput
    activities?: ActivityOrderByRelationAggregateInput
    presences?: PresenceOrderByRelationAggregateInput
  }

  export type MemberWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: MemberWhereInput | MemberWhereInput[]
    OR?: MemberWhereInput[]
    NOT?: MemberWhereInput | MemberWhereInput[]
    name?: StringFilter<"Member"> | string
    role?: StringFilter<"Member"> | string
    associationId?: StringFilter<"Member"> | string
    createdAt?: DateTimeFilter<"Member"> | Date | string
    updatedAt?: DateTimeFilter<"Member"> | Date | string
    association?: XOR<AssociationScalarRelationFilter, AssociationWhereInput>
    user?: UserListRelationFilter
    cotisations?: CotisationListRelationFilter
    activities?: ActivityListRelationFilter
    presences?: PresenceListRelationFilter
  }, "id" | "email">

  export type MemberOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    role?: SortOrder
    associationId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: MemberCountOrderByAggregateInput
    _max?: MemberMaxOrderByAggregateInput
    _min?: MemberMinOrderByAggregateInput
  }

  export type MemberScalarWhereWithAggregatesInput = {
    AND?: MemberScalarWhereWithAggregatesInput | MemberScalarWhereWithAggregatesInput[]
    OR?: MemberScalarWhereWithAggregatesInput[]
    NOT?: MemberScalarWhereWithAggregatesInput | MemberScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Member"> | string
    name?: StringWithAggregatesFilter<"Member"> | string
    email?: StringWithAggregatesFilter<"Member"> | string
    role?: StringWithAggregatesFilter<"Member"> | string
    associationId?: StringWithAggregatesFilter<"Member"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Member"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Member"> | Date | string
  }

  export type CotisationWhereInput = {
    AND?: CotisationWhereInput | CotisationWhereInput[]
    OR?: CotisationWhereInput[]
    NOT?: CotisationWhereInput | CotisationWhereInput[]
    id?: StringFilter<"Cotisation"> | string
    amount?: FloatFilter<"Cotisation"> | number
    paidAt?: DateTimeFilter<"Cotisation"> | Date | string
    memberId?: StringFilter<"Cotisation"> | string
    associationId?: StringFilter<"Cotisation"> | string
    member?: XOR<MemberScalarRelationFilter, MemberWhereInput>
    association?: XOR<AssociationScalarRelationFilter, AssociationWhereInput>
  }

  export type CotisationOrderByWithRelationInput = {
    id?: SortOrder
    amount?: SortOrder
    paidAt?: SortOrder
    memberId?: SortOrder
    associationId?: SortOrder
    member?: MemberOrderByWithRelationInput
    association?: AssociationOrderByWithRelationInput
  }

  export type CotisationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CotisationWhereInput | CotisationWhereInput[]
    OR?: CotisationWhereInput[]
    NOT?: CotisationWhereInput | CotisationWhereInput[]
    amount?: FloatFilter<"Cotisation"> | number
    paidAt?: DateTimeFilter<"Cotisation"> | Date | string
    memberId?: StringFilter<"Cotisation"> | string
    associationId?: StringFilter<"Cotisation"> | string
    member?: XOR<MemberScalarRelationFilter, MemberWhereInput>
    association?: XOR<AssociationScalarRelationFilter, AssociationWhereInput>
  }, "id">

  export type CotisationOrderByWithAggregationInput = {
    id?: SortOrder
    amount?: SortOrder
    paidAt?: SortOrder
    memberId?: SortOrder
    associationId?: SortOrder
    _count?: CotisationCountOrderByAggregateInput
    _avg?: CotisationAvgOrderByAggregateInput
    _max?: CotisationMaxOrderByAggregateInput
    _min?: CotisationMinOrderByAggregateInput
    _sum?: CotisationSumOrderByAggregateInput
  }

  export type CotisationScalarWhereWithAggregatesInput = {
    AND?: CotisationScalarWhereWithAggregatesInput | CotisationScalarWhereWithAggregatesInput[]
    OR?: CotisationScalarWhereWithAggregatesInput[]
    NOT?: CotisationScalarWhereWithAggregatesInput | CotisationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Cotisation"> | string
    amount?: FloatWithAggregatesFilter<"Cotisation"> | number
    paidAt?: DateTimeWithAggregatesFilter<"Cotisation"> | Date | string
    memberId?: StringWithAggregatesFilter<"Cotisation"> | string
    associationId?: StringWithAggregatesFilter<"Cotisation"> | string
  }

  export type ActivityWhereInput = {
    AND?: ActivityWhereInput | ActivityWhereInput[]
    OR?: ActivityWhereInput[]
    NOT?: ActivityWhereInput | ActivityWhereInput[]
    id?: StringFilter<"Activity"> | string
    title?: StringFilter<"Activity"> | string
    date?: DateTimeFilter<"Activity"> | Date | string
    description?: StringNullableFilter<"Activity"> | string | null
    associationId?: StringFilter<"Activity"> | string
    memberId?: StringNullableFilter<"Activity"> | string | null
    createdAt?: DateTimeFilter<"Activity"> | Date | string
    updatedAt?: DateTimeFilter<"Activity"> | Date | string
    association?: XOR<AssociationScalarRelationFilter, AssociationWhereInput>
    member?: XOR<MemberNullableScalarRelationFilter, MemberWhereInput> | null
    presences?: PresenceListRelationFilter
  }

  export type ActivityOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    date?: SortOrder
    description?: SortOrderInput | SortOrder
    associationId?: SortOrder
    memberId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    association?: AssociationOrderByWithRelationInput
    member?: MemberOrderByWithRelationInput
    presences?: PresenceOrderByRelationAggregateInput
  }

  export type ActivityWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ActivityWhereInput | ActivityWhereInput[]
    OR?: ActivityWhereInput[]
    NOT?: ActivityWhereInput | ActivityWhereInput[]
    title?: StringFilter<"Activity"> | string
    date?: DateTimeFilter<"Activity"> | Date | string
    description?: StringNullableFilter<"Activity"> | string | null
    associationId?: StringFilter<"Activity"> | string
    memberId?: StringNullableFilter<"Activity"> | string | null
    createdAt?: DateTimeFilter<"Activity"> | Date | string
    updatedAt?: DateTimeFilter<"Activity"> | Date | string
    association?: XOR<AssociationScalarRelationFilter, AssociationWhereInput>
    member?: XOR<MemberNullableScalarRelationFilter, MemberWhereInput> | null
    presences?: PresenceListRelationFilter
  }, "id">

  export type ActivityOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    date?: SortOrder
    description?: SortOrderInput | SortOrder
    associationId?: SortOrder
    memberId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ActivityCountOrderByAggregateInput
    _max?: ActivityMaxOrderByAggregateInput
    _min?: ActivityMinOrderByAggregateInput
  }

  export type ActivityScalarWhereWithAggregatesInput = {
    AND?: ActivityScalarWhereWithAggregatesInput | ActivityScalarWhereWithAggregatesInput[]
    OR?: ActivityScalarWhereWithAggregatesInput[]
    NOT?: ActivityScalarWhereWithAggregatesInput | ActivityScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Activity"> | string
    title?: StringWithAggregatesFilter<"Activity"> | string
    date?: DateTimeWithAggregatesFilter<"Activity"> | Date | string
    description?: StringNullableWithAggregatesFilter<"Activity"> | string | null
    associationId?: StringWithAggregatesFilter<"Activity"> | string
    memberId?: StringNullableWithAggregatesFilter<"Activity"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Activity"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Activity"> | Date | string
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    emailVerified?: DateTimeNullableFilter<"User"> | Date | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    memberId?: StringNullableFilter<"User"> | string | null
    member?: XOR<MemberNullableScalarRelationFilter, MemberWhereInput> | null
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    email?: SortOrder
    password?: SortOrder
    emailVerified?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    memberId?: SortOrderInput | SortOrder
    member?: MemberOrderByWithRelationInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringNullableFilter<"User"> | string | null
    password?: StringFilter<"User"> | string
    emailVerified?: DateTimeNullableFilter<"User"> | Date | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    memberId?: StringNullableFilter<"User"> | string | null
    member?: XOR<MemberNullableScalarRelationFilter, MemberWhereInput> | null
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    email?: SortOrder
    password?: SortOrder
    emailVerified?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    memberId?: SortOrderInput | SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    name?: StringNullableWithAggregatesFilter<"User"> | string | null
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    emailVerified?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    memberId?: StringNullableWithAggregatesFilter<"User"> | string | null
  }

  export type InvitationWhereInput = {
    AND?: InvitationWhereInput | InvitationWhereInput[]
    OR?: InvitationWhereInput[]
    NOT?: InvitationWhereInput | InvitationWhereInput[]
    id?: StringFilter<"Invitation"> | string
    email?: StringFilter<"Invitation"> | string
    role?: StringFilter<"Invitation"> | string
    token?: StringFilter<"Invitation"> | string
    expiresAt?: DateTimeFilter<"Invitation"> | Date | string
    used?: BoolFilter<"Invitation"> | boolean
    associationId?: StringFilter<"Invitation"> | string
    createdAt?: DateTimeFilter<"Invitation"> | Date | string
    association?: XOR<AssociationScalarRelationFilter, AssociationWhereInput>
  }

  export type InvitationOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    role?: SortOrder
    token?: SortOrder
    expiresAt?: SortOrder
    used?: SortOrder
    associationId?: SortOrder
    createdAt?: SortOrder
    association?: AssociationOrderByWithRelationInput
  }

  export type InvitationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    token?: string
    AND?: InvitationWhereInput | InvitationWhereInput[]
    OR?: InvitationWhereInput[]
    NOT?: InvitationWhereInput | InvitationWhereInput[]
    email?: StringFilter<"Invitation"> | string
    role?: StringFilter<"Invitation"> | string
    expiresAt?: DateTimeFilter<"Invitation"> | Date | string
    used?: BoolFilter<"Invitation"> | boolean
    associationId?: StringFilter<"Invitation"> | string
    createdAt?: DateTimeFilter<"Invitation"> | Date | string
    association?: XOR<AssociationScalarRelationFilter, AssociationWhereInput>
  }, "id" | "token">

  export type InvitationOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    role?: SortOrder
    token?: SortOrder
    expiresAt?: SortOrder
    used?: SortOrder
    associationId?: SortOrder
    createdAt?: SortOrder
    _count?: InvitationCountOrderByAggregateInput
    _max?: InvitationMaxOrderByAggregateInput
    _min?: InvitationMinOrderByAggregateInput
  }

  export type InvitationScalarWhereWithAggregatesInput = {
    AND?: InvitationScalarWhereWithAggregatesInput | InvitationScalarWhereWithAggregatesInput[]
    OR?: InvitationScalarWhereWithAggregatesInput[]
    NOT?: InvitationScalarWhereWithAggregatesInput | InvitationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Invitation"> | string
    email?: StringWithAggregatesFilter<"Invitation"> | string
    role?: StringWithAggregatesFilter<"Invitation"> | string
    token?: StringWithAggregatesFilter<"Invitation"> | string
    expiresAt?: DateTimeWithAggregatesFilter<"Invitation"> | Date | string
    used?: BoolWithAggregatesFilter<"Invitation"> | boolean
    associationId?: StringWithAggregatesFilter<"Invitation"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Invitation"> | Date | string
  }

  export type PresenceWhereInput = {
    AND?: PresenceWhereInput | PresenceWhereInput[]
    OR?: PresenceWhereInput[]
    NOT?: PresenceWhereInput | PresenceWhereInput[]
    id?: StringFilter<"Presence"> | string
    activityId?: StringFilter<"Presence"> | string
    memberId?: StringFilter<"Presence"> | string
    present?: BoolFilter<"Presence"> | boolean
    createdAt?: DateTimeFilter<"Presence"> | Date | string
    activity?: XOR<ActivityScalarRelationFilter, ActivityWhereInput>
    member?: XOR<MemberScalarRelationFilter, MemberWhereInput>
  }

  export type PresenceOrderByWithRelationInput = {
    id?: SortOrder
    activityId?: SortOrder
    memberId?: SortOrder
    present?: SortOrder
    createdAt?: SortOrder
    activity?: ActivityOrderByWithRelationInput
    member?: MemberOrderByWithRelationInput
  }

  export type PresenceWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    activityId_memberId?: PresenceActivityIdMemberIdCompoundUniqueInput
    AND?: PresenceWhereInput | PresenceWhereInput[]
    OR?: PresenceWhereInput[]
    NOT?: PresenceWhereInput | PresenceWhereInput[]
    activityId?: StringFilter<"Presence"> | string
    memberId?: StringFilter<"Presence"> | string
    present?: BoolFilter<"Presence"> | boolean
    createdAt?: DateTimeFilter<"Presence"> | Date | string
    activity?: XOR<ActivityScalarRelationFilter, ActivityWhereInput>
    member?: XOR<MemberScalarRelationFilter, MemberWhereInput>
  }, "id" | "activityId_memberId">

  export type PresenceOrderByWithAggregationInput = {
    id?: SortOrder
    activityId?: SortOrder
    memberId?: SortOrder
    present?: SortOrder
    createdAt?: SortOrder
    _count?: PresenceCountOrderByAggregateInput
    _max?: PresenceMaxOrderByAggregateInput
    _min?: PresenceMinOrderByAggregateInput
  }

  export type PresenceScalarWhereWithAggregatesInput = {
    AND?: PresenceScalarWhereWithAggregatesInput | PresenceScalarWhereWithAggregatesInput[]
    OR?: PresenceScalarWhereWithAggregatesInput[]
    NOT?: PresenceScalarWhereWithAggregatesInput | PresenceScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Presence"> | string
    activityId?: StringWithAggregatesFilter<"Presence"> | string
    memberId?: StringWithAggregatesFilter<"Presence"> | string
    present?: BoolWithAggregatesFilter<"Presence"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Presence"> | Date | string
  }

  export type AssociationCreateInput = {
    id?: string
    name: string
    createdAt?: Date | string
    members?: MemberCreateNestedManyWithoutAssociationInput
    cotisations?: CotisationCreateNestedManyWithoutAssociationInput
    activities?: ActivityCreateNestedManyWithoutAssociationInput
    invitations?: InvitationCreateNestedManyWithoutAssociationInput
  }

  export type AssociationUncheckedCreateInput = {
    id?: string
    name: string
    createdAt?: Date | string
    members?: MemberUncheckedCreateNestedManyWithoutAssociationInput
    cotisations?: CotisationUncheckedCreateNestedManyWithoutAssociationInput
    activities?: ActivityUncheckedCreateNestedManyWithoutAssociationInput
    invitations?: InvitationUncheckedCreateNestedManyWithoutAssociationInput
  }

  export type AssociationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    members?: MemberUpdateManyWithoutAssociationNestedInput
    cotisations?: CotisationUpdateManyWithoutAssociationNestedInput
    activities?: ActivityUpdateManyWithoutAssociationNestedInput
    invitations?: InvitationUpdateManyWithoutAssociationNestedInput
  }

  export type AssociationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    members?: MemberUncheckedUpdateManyWithoutAssociationNestedInput
    cotisations?: CotisationUncheckedUpdateManyWithoutAssociationNestedInput
    activities?: ActivityUncheckedUpdateManyWithoutAssociationNestedInput
    invitations?: InvitationUncheckedUpdateManyWithoutAssociationNestedInput
  }

  export type AssociationCreateManyInput = {
    id?: string
    name: string
    createdAt?: Date | string
  }

  export type AssociationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AssociationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MemberCreateInput = {
    id?: string
    name: string
    email: string
    role: string
    createdAt?: Date | string
    updatedAt?: Date | string
    association: AssociationCreateNestedOneWithoutMembersInput
    user?: UserCreateNestedManyWithoutMemberInput
    cotisations?: CotisationCreateNestedManyWithoutMemberInput
    activities?: ActivityCreateNestedManyWithoutMemberInput
    presences?: PresenceCreateNestedManyWithoutMemberInput
  }

  export type MemberUncheckedCreateInput = {
    id?: string
    name: string
    email: string
    role: string
    associationId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user?: UserUncheckedCreateNestedManyWithoutMemberInput
    cotisations?: CotisationUncheckedCreateNestedManyWithoutMemberInput
    activities?: ActivityUncheckedCreateNestedManyWithoutMemberInput
    presences?: PresenceUncheckedCreateNestedManyWithoutMemberInput
  }

  export type MemberUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    association?: AssociationUpdateOneRequiredWithoutMembersNestedInput
    user?: UserUpdateManyWithoutMemberNestedInput
    cotisations?: CotisationUpdateManyWithoutMemberNestedInput
    activities?: ActivityUpdateManyWithoutMemberNestedInput
    presences?: PresenceUpdateManyWithoutMemberNestedInput
  }

  export type MemberUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    associationId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUncheckedUpdateManyWithoutMemberNestedInput
    cotisations?: CotisationUncheckedUpdateManyWithoutMemberNestedInput
    activities?: ActivityUncheckedUpdateManyWithoutMemberNestedInput
    presences?: PresenceUncheckedUpdateManyWithoutMemberNestedInput
  }

  export type MemberCreateManyInput = {
    id?: string
    name: string
    email: string
    role: string
    associationId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MemberUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MemberUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    associationId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CotisationCreateInput = {
    id?: string
    amount: number
    paidAt: Date | string
    member: MemberCreateNestedOneWithoutCotisationsInput
    association: AssociationCreateNestedOneWithoutCotisationsInput
  }

  export type CotisationUncheckedCreateInput = {
    id?: string
    amount: number
    paidAt: Date | string
    memberId: string
    associationId: string
  }

  export type CotisationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    paidAt?: DateTimeFieldUpdateOperationsInput | Date | string
    member?: MemberUpdateOneRequiredWithoutCotisationsNestedInput
    association?: AssociationUpdateOneRequiredWithoutCotisationsNestedInput
  }

  export type CotisationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    paidAt?: DateTimeFieldUpdateOperationsInput | Date | string
    memberId?: StringFieldUpdateOperationsInput | string
    associationId?: StringFieldUpdateOperationsInput | string
  }

  export type CotisationCreateManyInput = {
    id?: string
    amount: number
    paidAt: Date | string
    memberId: string
    associationId: string
  }

  export type CotisationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    paidAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CotisationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    paidAt?: DateTimeFieldUpdateOperationsInput | Date | string
    memberId?: StringFieldUpdateOperationsInput | string
    associationId?: StringFieldUpdateOperationsInput | string
  }

  export type ActivityCreateInput = {
    id?: string
    title: string
    date: Date | string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    association: AssociationCreateNestedOneWithoutActivitiesInput
    member?: MemberCreateNestedOneWithoutActivitiesInput
    presences?: PresenceCreateNestedManyWithoutActivityInput
  }

  export type ActivityUncheckedCreateInput = {
    id?: string
    title: string
    date: Date | string
    description?: string | null
    associationId: string
    memberId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    presences?: PresenceUncheckedCreateNestedManyWithoutActivityInput
  }

  export type ActivityUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    association?: AssociationUpdateOneRequiredWithoutActivitiesNestedInput
    member?: MemberUpdateOneWithoutActivitiesNestedInput
    presences?: PresenceUpdateManyWithoutActivityNestedInput
  }

  export type ActivityUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    associationId?: StringFieldUpdateOperationsInput | string
    memberId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    presences?: PresenceUncheckedUpdateManyWithoutActivityNestedInput
  }

  export type ActivityCreateManyInput = {
    id?: string
    title: string
    date: Date | string
    description?: string | null
    associationId: string
    memberId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ActivityUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ActivityUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    associationId?: StringFieldUpdateOperationsInput | string
    memberId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateInput = {
    id?: string
    name?: string | null
    email: string
    password: string
    emailVerified?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    member?: MemberCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    name?: string | null
    email: string
    password: string
    emailVerified?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    memberId?: string | null
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    member?: MemberUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    memberId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserCreateManyInput = {
    id?: string
    name?: string | null
    email: string
    password: string
    emailVerified?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    memberId?: string | null
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    memberId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type InvitationCreateInput = {
    id?: string
    email: string
    role: string
    token: string
    expiresAt: Date | string
    used?: boolean
    createdAt?: Date | string
    association: AssociationCreateNestedOneWithoutInvitationsInput
  }

  export type InvitationUncheckedCreateInput = {
    id?: string
    email: string
    role: string
    token: string
    expiresAt: Date | string
    used?: boolean
    associationId: string
    createdAt?: Date | string
  }

  export type InvitationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    used?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    association?: AssociationUpdateOneRequiredWithoutInvitationsNestedInput
  }

  export type InvitationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    used?: BoolFieldUpdateOperationsInput | boolean
    associationId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InvitationCreateManyInput = {
    id?: string
    email: string
    role: string
    token: string
    expiresAt: Date | string
    used?: boolean
    associationId: string
    createdAt?: Date | string
  }

  export type InvitationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    used?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InvitationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    used?: BoolFieldUpdateOperationsInput | boolean
    associationId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PresenceCreateInput = {
    id?: string
    present: boolean
    createdAt?: Date | string
    activity: ActivityCreateNestedOneWithoutPresencesInput
    member: MemberCreateNestedOneWithoutPresencesInput
  }

  export type PresenceUncheckedCreateInput = {
    id?: string
    activityId: string
    memberId: string
    present: boolean
    createdAt?: Date | string
  }

  export type PresenceUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    present?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    activity?: ActivityUpdateOneRequiredWithoutPresencesNestedInput
    member?: MemberUpdateOneRequiredWithoutPresencesNestedInput
  }

  export type PresenceUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    activityId?: StringFieldUpdateOperationsInput | string
    memberId?: StringFieldUpdateOperationsInput | string
    present?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PresenceCreateManyInput = {
    id?: string
    activityId: string
    memberId: string
    present: boolean
    createdAt?: Date | string
  }

  export type PresenceUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    present?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PresenceUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    activityId?: StringFieldUpdateOperationsInput | string
    memberId?: StringFieldUpdateOperationsInput | string
    present?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type MemberListRelationFilter = {
    every?: MemberWhereInput
    some?: MemberWhereInput
    none?: MemberWhereInput
  }

  export type CotisationListRelationFilter = {
    every?: CotisationWhereInput
    some?: CotisationWhereInput
    none?: CotisationWhereInput
  }

  export type ActivityListRelationFilter = {
    every?: ActivityWhereInput
    some?: ActivityWhereInput
    none?: ActivityWhereInput
  }

  export type InvitationListRelationFilter = {
    every?: InvitationWhereInput
    some?: InvitationWhereInput
    none?: InvitationWhereInput
  }

  export type MemberOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CotisationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ActivityOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type InvitationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AssociationCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
  }

  export type AssociationMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
  }

  export type AssociationMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
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

  export type AssociationScalarRelationFilter = {
    is?: AssociationWhereInput
    isNot?: AssociationWhereInput
  }

  export type UserListRelationFilter = {
    every?: UserWhereInput
    some?: UserWhereInput
    none?: UserWhereInput
  }

  export type PresenceListRelationFilter = {
    every?: PresenceWhereInput
    some?: PresenceWhereInput
    none?: PresenceWhereInput
  }

  export type UserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PresenceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MemberCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    role?: SortOrder
    associationId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MemberMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    role?: SortOrder
    associationId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MemberMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    role?: SortOrder
    associationId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type MemberScalarRelationFilter = {
    is?: MemberWhereInput
    isNot?: MemberWhereInput
  }

  export type CotisationCountOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
    paidAt?: SortOrder
    memberId?: SortOrder
    associationId?: SortOrder
  }

  export type CotisationAvgOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type CotisationMaxOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
    paidAt?: SortOrder
    memberId?: SortOrder
    associationId?: SortOrder
  }

  export type CotisationMinOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
    paidAt?: SortOrder
    memberId?: SortOrder
    associationId?: SortOrder
  }

  export type CotisationSumOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type MemberNullableScalarRelationFilter = {
    is?: MemberWhereInput | null
    isNot?: MemberWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ActivityCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    date?: SortOrder
    description?: SortOrder
    associationId?: SortOrder
    memberId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ActivityMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    date?: SortOrder
    description?: SortOrder
    associationId?: SortOrder
    memberId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ActivityMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    date?: SortOrder
    description?: SortOrder
    associationId?: SortOrder
    memberId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
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

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    emailVerified?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    memberId?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    emailVerified?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    memberId?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    emailVerified?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    memberId?: SortOrder
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

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type InvitationCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    role?: SortOrder
    token?: SortOrder
    expiresAt?: SortOrder
    used?: SortOrder
    associationId?: SortOrder
    createdAt?: SortOrder
  }

  export type InvitationMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    role?: SortOrder
    token?: SortOrder
    expiresAt?: SortOrder
    used?: SortOrder
    associationId?: SortOrder
    createdAt?: SortOrder
  }

  export type InvitationMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    role?: SortOrder
    token?: SortOrder
    expiresAt?: SortOrder
    used?: SortOrder
    associationId?: SortOrder
    createdAt?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type ActivityScalarRelationFilter = {
    is?: ActivityWhereInput
    isNot?: ActivityWhereInput
  }

  export type PresenceActivityIdMemberIdCompoundUniqueInput = {
    activityId: string
    memberId: string
  }

  export type PresenceCountOrderByAggregateInput = {
    id?: SortOrder
    activityId?: SortOrder
    memberId?: SortOrder
    present?: SortOrder
    createdAt?: SortOrder
  }

  export type PresenceMaxOrderByAggregateInput = {
    id?: SortOrder
    activityId?: SortOrder
    memberId?: SortOrder
    present?: SortOrder
    createdAt?: SortOrder
  }

  export type PresenceMinOrderByAggregateInput = {
    id?: SortOrder
    activityId?: SortOrder
    memberId?: SortOrder
    present?: SortOrder
    createdAt?: SortOrder
  }

  export type MemberCreateNestedManyWithoutAssociationInput = {
    create?: XOR<MemberCreateWithoutAssociationInput, MemberUncheckedCreateWithoutAssociationInput> | MemberCreateWithoutAssociationInput[] | MemberUncheckedCreateWithoutAssociationInput[]
    connectOrCreate?: MemberCreateOrConnectWithoutAssociationInput | MemberCreateOrConnectWithoutAssociationInput[]
    createMany?: MemberCreateManyAssociationInputEnvelope
    connect?: MemberWhereUniqueInput | MemberWhereUniqueInput[]
  }

  export type CotisationCreateNestedManyWithoutAssociationInput = {
    create?: XOR<CotisationCreateWithoutAssociationInput, CotisationUncheckedCreateWithoutAssociationInput> | CotisationCreateWithoutAssociationInput[] | CotisationUncheckedCreateWithoutAssociationInput[]
    connectOrCreate?: CotisationCreateOrConnectWithoutAssociationInput | CotisationCreateOrConnectWithoutAssociationInput[]
    createMany?: CotisationCreateManyAssociationInputEnvelope
    connect?: CotisationWhereUniqueInput | CotisationWhereUniqueInput[]
  }

  export type ActivityCreateNestedManyWithoutAssociationInput = {
    create?: XOR<ActivityCreateWithoutAssociationInput, ActivityUncheckedCreateWithoutAssociationInput> | ActivityCreateWithoutAssociationInput[] | ActivityUncheckedCreateWithoutAssociationInput[]
    connectOrCreate?: ActivityCreateOrConnectWithoutAssociationInput | ActivityCreateOrConnectWithoutAssociationInput[]
    createMany?: ActivityCreateManyAssociationInputEnvelope
    connect?: ActivityWhereUniqueInput | ActivityWhereUniqueInput[]
  }

  export type InvitationCreateNestedManyWithoutAssociationInput = {
    create?: XOR<InvitationCreateWithoutAssociationInput, InvitationUncheckedCreateWithoutAssociationInput> | InvitationCreateWithoutAssociationInput[] | InvitationUncheckedCreateWithoutAssociationInput[]
    connectOrCreate?: InvitationCreateOrConnectWithoutAssociationInput | InvitationCreateOrConnectWithoutAssociationInput[]
    createMany?: InvitationCreateManyAssociationInputEnvelope
    connect?: InvitationWhereUniqueInput | InvitationWhereUniqueInput[]
  }

  export type MemberUncheckedCreateNestedManyWithoutAssociationInput = {
    create?: XOR<MemberCreateWithoutAssociationInput, MemberUncheckedCreateWithoutAssociationInput> | MemberCreateWithoutAssociationInput[] | MemberUncheckedCreateWithoutAssociationInput[]
    connectOrCreate?: MemberCreateOrConnectWithoutAssociationInput | MemberCreateOrConnectWithoutAssociationInput[]
    createMany?: MemberCreateManyAssociationInputEnvelope
    connect?: MemberWhereUniqueInput | MemberWhereUniqueInput[]
  }

  export type CotisationUncheckedCreateNestedManyWithoutAssociationInput = {
    create?: XOR<CotisationCreateWithoutAssociationInput, CotisationUncheckedCreateWithoutAssociationInput> | CotisationCreateWithoutAssociationInput[] | CotisationUncheckedCreateWithoutAssociationInput[]
    connectOrCreate?: CotisationCreateOrConnectWithoutAssociationInput | CotisationCreateOrConnectWithoutAssociationInput[]
    createMany?: CotisationCreateManyAssociationInputEnvelope
    connect?: CotisationWhereUniqueInput | CotisationWhereUniqueInput[]
  }

  export type ActivityUncheckedCreateNestedManyWithoutAssociationInput = {
    create?: XOR<ActivityCreateWithoutAssociationInput, ActivityUncheckedCreateWithoutAssociationInput> | ActivityCreateWithoutAssociationInput[] | ActivityUncheckedCreateWithoutAssociationInput[]
    connectOrCreate?: ActivityCreateOrConnectWithoutAssociationInput | ActivityCreateOrConnectWithoutAssociationInput[]
    createMany?: ActivityCreateManyAssociationInputEnvelope
    connect?: ActivityWhereUniqueInput | ActivityWhereUniqueInput[]
  }

  export type InvitationUncheckedCreateNestedManyWithoutAssociationInput = {
    create?: XOR<InvitationCreateWithoutAssociationInput, InvitationUncheckedCreateWithoutAssociationInput> | InvitationCreateWithoutAssociationInput[] | InvitationUncheckedCreateWithoutAssociationInput[]
    connectOrCreate?: InvitationCreateOrConnectWithoutAssociationInput | InvitationCreateOrConnectWithoutAssociationInput[]
    createMany?: InvitationCreateManyAssociationInputEnvelope
    connect?: InvitationWhereUniqueInput | InvitationWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type MemberUpdateManyWithoutAssociationNestedInput = {
    create?: XOR<MemberCreateWithoutAssociationInput, MemberUncheckedCreateWithoutAssociationInput> | MemberCreateWithoutAssociationInput[] | MemberUncheckedCreateWithoutAssociationInput[]
    connectOrCreate?: MemberCreateOrConnectWithoutAssociationInput | MemberCreateOrConnectWithoutAssociationInput[]
    upsert?: MemberUpsertWithWhereUniqueWithoutAssociationInput | MemberUpsertWithWhereUniqueWithoutAssociationInput[]
    createMany?: MemberCreateManyAssociationInputEnvelope
    set?: MemberWhereUniqueInput | MemberWhereUniqueInput[]
    disconnect?: MemberWhereUniqueInput | MemberWhereUniqueInput[]
    delete?: MemberWhereUniqueInput | MemberWhereUniqueInput[]
    connect?: MemberWhereUniqueInput | MemberWhereUniqueInput[]
    update?: MemberUpdateWithWhereUniqueWithoutAssociationInput | MemberUpdateWithWhereUniqueWithoutAssociationInput[]
    updateMany?: MemberUpdateManyWithWhereWithoutAssociationInput | MemberUpdateManyWithWhereWithoutAssociationInput[]
    deleteMany?: MemberScalarWhereInput | MemberScalarWhereInput[]
  }

  export type CotisationUpdateManyWithoutAssociationNestedInput = {
    create?: XOR<CotisationCreateWithoutAssociationInput, CotisationUncheckedCreateWithoutAssociationInput> | CotisationCreateWithoutAssociationInput[] | CotisationUncheckedCreateWithoutAssociationInput[]
    connectOrCreate?: CotisationCreateOrConnectWithoutAssociationInput | CotisationCreateOrConnectWithoutAssociationInput[]
    upsert?: CotisationUpsertWithWhereUniqueWithoutAssociationInput | CotisationUpsertWithWhereUniqueWithoutAssociationInput[]
    createMany?: CotisationCreateManyAssociationInputEnvelope
    set?: CotisationWhereUniqueInput | CotisationWhereUniqueInput[]
    disconnect?: CotisationWhereUniqueInput | CotisationWhereUniqueInput[]
    delete?: CotisationWhereUniqueInput | CotisationWhereUniqueInput[]
    connect?: CotisationWhereUniqueInput | CotisationWhereUniqueInput[]
    update?: CotisationUpdateWithWhereUniqueWithoutAssociationInput | CotisationUpdateWithWhereUniqueWithoutAssociationInput[]
    updateMany?: CotisationUpdateManyWithWhereWithoutAssociationInput | CotisationUpdateManyWithWhereWithoutAssociationInput[]
    deleteMany?: CotisationScalarWhereInput | CotisationScalarWhereInput[]
  }

  export type ActivityUpdateManyWithoutAssociationNestedInput = {
    create?: XOR<ActivityCreateWithoutAssociationInput, ActivityUncheckedCreateWithoutAssociationInput> | ActivityCreateWithoutAssociationInput[] | ActivityUncheckedCreateWithoutAssociationInput[]
    connectOrCreate?: ActivityCreateOrConnectWithoutAssociationInput | ActivityCreateOrConnectWithoutAssociationInput[]
    upsert?: ActivityUpsertWithWhereUniqueWithoutAssociationInput | ActivityUpsertWithWhereUniqueWithoutAssociationInput[]
    createMany?: ActivityCreateManyAssociationInputEnvelope
    set?: ActivityWhereUniqueInput | ActivityWhereUniqueInput[]
    disconnect?: ActivityWhereUniqueInput | ActivityWhereUniqueInput[]
    delete?: ActivityWhereUniqueInput | ActivityWhereUniqueInput[]
    connect?: ActivityWhereUniqueInput | ActivityWhereUniqueInput[]
    update?: ActivityUpdateWithWhereUniqueWithoutAssociationInput | ActivityUpdateWithWhereUniqueWithoutAssociationInput[]
    updateMany?: ActivityUpdateManyWithWhereWithoutAssociationInput | ActivityUpdateManyWithWhereWithoutAssociationInput[]
    deleteMany?: ActivityScalarWhereInput | ActivityScalarWhereInput[]
  }

  export type InvitationUpdateManyWithoutAssociationNestedInput = {
    create?: XOR<InvitationCreateWithoutAssociationInput, InvitationUncheckedCreateWithoutAssociationInput> | InvitationCreateWithoutAssociationInput[] | InvitationUncheckedCreateWithoutAssociationInput[]
    connectOrCreate?: InvitationCreateOrConnectWithoutAssociationInput | InvitationCreateOrConnectWithoutAssociationInput[]
    upsert?: InvitationUpsertWithWhereUniqueWithoutAssociationInput | InvitationUpsertWithWhereUniqueWithoutAssociationInput[]
    createMany?: InvitationCreateManyAssociationInputEnvelope
    set?: InvitationWhereUniqueInput | InvitationWhereUniqueInput[]
    disconnect?: InvitationWhereUniqueInput | InvitationWhereUniqueInput[]
    delete?: InvitationWhereUniqueInput | InvitationWhereUniqueInput[]
    connect?: InvitationWhereUniqueInput | InvitationWhereUniqueInput[]
    update?: InvitationUpdateWithWhereUniqueWithoutAssociationInput | InvitationUpdateWithWhereUniqueWithoutAssociationInput[]
    updateMany?: InvitationUpdateManyWithWhereWithoutAssociationInput | InvitationUpdateManyWithWhereWithoutAssociationInput[]
    deleteMany?: InvitationScalarWhereInput | InvitationScalarWhereInput[]
  }

  export type MemberUncheckedUpdateManyWithoutAssociationNestedInput = {
    create?: XOR<MemberCreateWithoutAssociationInput, MemberUncheckedCreateWithoutAssociationInput> | MemberCreateWithoutAssociationInput[] | MemberUncheckedCreateWithoutAssociationInput[]
    connectOrCreate?: MemberCreateOrConnectWithoutAssociationInput | MemberCreateOrConnectWithoutAssociationInput[]
    upsert?: MemberUpsertWithWhereUniqueWithoutAssociationInput | MemberUpsertWithWhereUniqueWithoutAssociationInput[]
    createMany?: MemberCreateManyAssociationInputEnvelope
    set?: MemberWhereUniqueInput | MemberWhereUniqueInput[]
    disconnect?: MemberWhereUniqueInput | MemberWhereUniqueInput[]
    delete?: MemberWhereUniqueInput | MemberWhereUniqueInput[]
    connect?: MemberWhereUniqueInput | MemberWhereUniqueInput[]
    update?: MemberUpdateWithWhereUniqueWithoutAssociationInput | MemberUpdateWithWhereUniqueWithoutAssociationInput[]
    updateMany?: MemberUpdateManyWithWhereWithoutAssociationInput | MemberUpdateManyWithWhereWithoutAssociationInput[]
    deleteMany?: MemberScalarWhereInput | MemberScalarWhereInput[]
  }

  export type CotisationUncheckedUpdateManyWithoutAssociationNestedInput = {
    create?: XOR<CotisationCreateWithoutAssociationInput, CotisationUncheckedCreateWithoutAssociationInput> | CotisationCreateWithoutAssociationInput[] | CotisationUncheckedCreateWithoutAssociationInput[]
    connectOrCreate?: CotisationCreateOrConnectWithoutAssociationInput | CotisationCreateOrConnectWithoutAssociationInput[]
    upsert?: CotisationUpsertWithWhereUniqueWithoutAssociationInput | CotisationUpsertWithWhereUniqueWithoutAssociationInput[]
    createMany?: CotisationCreateManyAssociationInputEnvelope
    set?: CotisationWhereUniqueInput | CotisationWhereUniqueInput[]
    disconnect?: CotisationWhereUniqueInput | CotisationWhereUniqueInput[]
    delete?: CotisationWhereUniqueInput | CotisationWhereUniqueInput[]
    connect?: CotisationWhereUniqueInput | CotisationWhereUniqueInput[]
    update?: CotisationUpdateWithWhereUniqueWithoutAssociationInput | CotisationUpdateWithWhereUniqueWithoutAssociationInput[]
    updateMany?: CotisationUpdateManyWithWhereWithoutAssociationInput | CotisationUpdateManyWithWhereWithoutAssociationInput[]
    deleteMany?: CotisationScalarWhereInput | CotisationScalarWhereInput[]
  }

  export type ActivityUncheckedUpdateManyWithoutAssociationNestedInput = {
    create?: XOR<ActivityCreateWithoutAssociationInput, ActivityUncheckedCreateWithoutAssociationInput> | ActivityCreateWithoutAssociationInput[] | ActivityUncheckedCreateWithoutAssociationInput[]
    connectOrCreate?: ActivityCreateOrConnectWithoutAssociationInput | ActivityCreateOrConnectWithoutAssociationInput[]
    upsert?: ActivityUpsertWithWhereUniqueWithoutAssociationInput | ActivityUpsertWithWhereUniqueWithoutAssociationInput[]
    createMany?: ActivityCreateManyAssociationInputEnvelope
    set?: ActivityWhereUniqueInput | ActivityWhereUniqueInput[]
    disconnect?: ActivityWhereUniqueInput | ActivityWhereUniqueInput[]
    delete?: ActivityWhereUniqueInput | ActivityWhereUniqueInput[]
    connect?: ActivityWhereUniqueInput | ActivityWhereUniqueInput[]
    update?: ActivityUpdateWithWhereUniqueWithoutAssociationInput | ActivityUpdateWithWhereUniqueWithoutAssociationInput[]
    updateMany?: ActivityUpdateManyWithWhereWithoutAssociationInput | ActivityUpdateManyWithWhereWithoutAssociationInput[]
    deleteMany?: ActivityScalarWhereInput | ActivityScalarWhereInput[]
  }

  export type InvitationUncheckedUpdateManyWithoutAssociationNestedInput = {
    create?: XOR<InvitationCreateWithoutAssociationInput, InvitationUncheckedCreateWithoutAssociationInput> | InvitationCreateWithoutAssociationInput[] | InvitationUncheckedCreateWithoutAssociationInput[]
    connectOrCreate?: InvitationCreateOrConnectWithoutAssociationInput | InvitationCreateOrConnectWithoutAssociationInput[]
    upsert?: InvitationUpsertWithWhereUniqueWithoutAssociationInput | InvitationUpsertWithWhereUniqueWithoutAssociationInput[]
    createMany?: InvitationCreateManyAssociationInputEnvelope
    set?: InvitationWhereUniqueInput | InvitationWhereUniqueInput[]
    disconnect?: InvitationWhereUniqueInput | InvitationWhereUniqueInput[]
    delete?: InvitationWhereUniqueInput | InvitationWhereUniqueInput[]
    connect?: InvitationWhereUniqueInput | InvitationWhereUniqueInput[]
    update?: InvitationUpdateWithWhereUniqueWithoutAssociationInput | InvitationUpdateWithWhereUniqueWithoutAssociationInput[]
    updateMany?: InvitationUpdateManyWithWhereWithoutAssociationInput | InvitationUpdateManyWithWhereWithoutAssociationInput[]
    deleteMany?: InvitationScalarWhereInput | InvitationScalarWhereInput[]
  }

  export type AssociationCreateNestedOneWithoutMembersInput = {
    create?: XOR<AssociationCreateWithoutMembersInput, AssociationUncheckedCreateWithoutMembersInput>
    connectOrCreate?: AssociationCreateOrConnectWithoutMembersInput
    connect?: AssociationWhereUniqueInput
  }

  export type UserCreateNestedManyWithoutMemberInput = {
    create?: XOR<UserCreateWithoutMemberInput, UserUncheckedCreateWithoutMemberInput> | UserCreateWithoutMemberInput[] | UserUncheckedCreateWithoutMemberInput[]
    connectOrCreate?: UserCreateOrConnectWithoutMemberInput | UserCreateOrConnectWithoutMemberInput[]
    createMany?: UserCreateManyMemberInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type CotisationCreateNestedManyWithoutMemberInput = {
    create?: XOR<CotisationCreateWithoutMemberInput, CotisationUncheckedCreateWithoutMemberInput> | CotisationCreateWithoutMemberInput[] | CotisationUncheckedCreateWithoutMemberInput[]
    connectOrCreate?: CotisationCreateOrConnectWithoutMemberInput | CotisationCreateOrConnectWithoutMemberInput[]
    createMany?: CotisationCreateManyMemberInputEnvelope
    connect?: CotisationWhereUniqueInput | CotisationWhereUniqueInput[]
  }

  export type ActivityCreateNestedManyWithoutMemberInput = {
    create?: XOR<ActivityCreateWithoutMemberInput, ActivityUncheckedCreateWithoutMemberInput> | ActivityCreateWithoutMemberInput[] | ActivityUncheckedCreateWithoutMemberInput[]
    connectOrCreate?: ActivityCreateOrConnectWithoutMemberInput | ActivityCreateOrConnectWithoutMemberInput[]
    createMany?: ActivityCreateManyMemberInputEnvelope
    connect?: ActivityWhereUniqueInput | ActivityWhereUniqueInput[]
  }

  export type PresenceCreateNestedManyWithoutMemberInput = {
    create?: XOR<PresenceCreateWithoutMemberInput, PresenceUncheckedCreateWithoutMemberInput> | PresenceCreateWithoutMemberInput[] | PresenceUncheckedCreateWithoutMemberInput[]
    connectOrCreate?: PresenceCreateOrConnectWithoutMemberInput | PresenceCreateOrConnectWithoutMemberInput[]
    createMany?: PresenceCreateManyMemberInputEnvelope
    connect?: PresenceWhereUniqueInput | PresenceWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutMemberInput = {
    create?: XOR<UserCreateWithoutMemberInput, UserUncheckedCreateWithoutMemberInput> | UserCreateWithoutMemberInput[] | UserUncheckedCreateWithoutMemberInput[]
    connectOrCreate?: UserCreateOrConnectWithoutMemberInput | UserCreateOrConnectWithoutMemberInput[]
    createMany?: UserCreateManyMemberInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type CotisationUncheckedCreateNestedManyWithoutMemberInput = {
    create?: XOR<CotisationCreateWithoutMemberInput, CotisationUncheckedCreateWithoutMemberInput> | CotisationCreateWithoutMemberInput[] | CotisationUncheckedCreateWithoutMemberInput[]
    connectOrCreate?: CotisationCreateOrConnectWithoutMemberInput | CotisationCreateOrConnectWithoutMemberInput[]
    createMany?: CotisationCreateManyMemberInputEnvelope
    connect?: CotisationWhereUniqueInput | CotisationWhereUniqueInput[]
  }

  export type ActivityUncheckedCreateNestedManyWithoutMemberInput = {
    create?: XOR<ActivityCreateWithoutMemberInput, ActivityUncheckedCreateWithoutMemberInput> | ActivityCreateWithoutMemberInput[] | ActivityUncheckedCreateWithoutMemberInput[]
    connectOrCreate?: ActivityCreateOrConnectWithoutMemberInput | ActivityCreateOrConnectWithoutMemberInput[]
    createMany?: ActivityCreateManyMemberInputEnvelope
    connect?: ActivityWhereUniqueInput | ActivityWhereUniqueInput[]
  }

  export type PresenceUncheckedCreateNestedManyWithoutMemberInput = {
    create?: XOR<PresenceCreateWithoutMemberInput, PresenceUncheckedCreateWithoutMemberInput> | PresenceCreateWithoutMemberInput[] | PresenceUncheckedCreateWithoutMemberInput[]
    connectOrCreate?: PresenceCreateOrConnectWithoutMemberInput | PresenceCreateOrConnectWithoutMemberInput[]
    createMany?: PresenceCreateManyMemberInputEnvelope
    connect?: PresenceWhereUniqueInput | PresenceWhereUniqueInput[]
  }

  export type AssociationUpdateOneRequiredWithoutMembersNestedInput = {
    create?: XOR<AssociationCreateWithoutMembersInput, AssociationUncheckedCreateWithoutMembersInput>
    connectOrCreate?: AssociationCreateOrConnectWithoutMembersInput
    upsert?: AssociationUpsertWithoutMembersInput
    connect?: AssociationWhereUniqueInput
    update?: XOR<XOR<AssociationUpdateToOneWithWhereWithoutMembersInput, AssociationUpdateWithoutMembersInput>, AssociationUncheckedUpdateWithoutMembersInput>
  }

  export type UserUpdateManyWithoutMemberNestedInput = {
    create?: XOR<UserCreateWithoutMemberInput, UserUncheckedCreateWithoutMemberInput> | UserCreateWithoutMemberInput[] | UserUncheckedCreateWithoutMemberInput[]
    connectOrCreate?: UserCreateOrConnectWithoutMemberInput | UserCreateOrConnectWithoutMemberInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutMemberInput | UserUpsertWithWhereUniqueWithoutMemberInput[]
    createMany?: UserCreateManyMemberInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutMemberInput | UserUpdateWithWhereUniqueWithoutMemberInput[]
    updateMany?: UserUpdateManyWithWhereWithoutMemberInput | UserUpdateManyWithWhereWithoutMemberInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type CotisationUpdateManyWithoutMemberNestedInput = {
    create?: XOR<CotisationCreateWithoutMemberInput, CotisationUncheckedCreateWithoutMemberInput> | CotisationCreateWithoutMemberInput[] | CotisationUncheckedCreateWithoutMemberInput[]
    connectOrCreate?: CotisationCreateOrConnectWithoutMemberInput | CotisationCreateOrConnectWithoutMemberInput[]
    upsert?: CotisationUpsertWithWhereUniqueWithoutMemberInput | CotisationUpsertWithWhereUniqueWithoutMemberInput[]
    createMany?: CotisationCreateManyMemberInputEnvelope
    set?: CotisationWhereUniqueInput | CotisationWhereUniqueInput[]
    disconnect?: CotisationWhereUniqueInput | CotisationWhereUniqueInput[]
    delete?: CotisationWhereUniqueInput | CotisationWhereUniqueInput[]
    connect?: CotisationWhereUniqueInput | CotisationWhereUniqueInput[]
    update?: CotisationUpdateWithWhereUniqueWithoutMemberInput | CotisationUpdateWithWhereUniqueWithoutMemberInput[]
    updateMany?: CotisationUpdateManyWithWhereWithoutMemberInput | CotisationUpdateManyWithWhereWithoutMemberInput[]
    deleteMany?: CotisationScalarWhereInput | CotisationScalarWhereInput[]
  }

  export type ActivityUpdateManyWithoutMemberNestedInput = {
    create?: XOR<ActivityCreateWithoutMemberInput, ActivityUncheckedCreateWithoutMemberInput> | ActivityCreateWithoutMemberInput[] | ActivityUncheckedCreateWithoutMemberInput[]
    connectOrCreate?: ActivityCreateOrConnectWithoutMemberInput | ActivityCreateOrConnectWithoutMemberInput[]
    upsert?: ActivityUpsertWithWhereUniqueWithoutMemberInput | ActivityUpsertWithWhereUniqueWithoutMemberInput[]
    createMany?: ActivityCreateManyMemberInputEnvelope
    set?: ActivityWhereUniqueInput | ActivityWhereUniqueInput[]
    disconnect?: ActivityWhereUniqueInput | ActivityWhereUniqueInput[]
    delete?: ActivityWhereUniqueInput | ActivityWhereUniqueInput[]
    connect?: ActivityWhereUniqueInput | ActivityWhereUniqueInput[]
    update?: ActivityUpdateWithWhereUniqueWithoutMemberInput | ActivityUpdateWithWhereUniqueWithoutMemberInput[]
    updateMany?: ActivityUpdateManyWithWhereWithoutMemberInput | ActivityUpdateManyWithWhereWithoutMemberInput[]
    deleteMany?: ActivityScalarWhereInput | ActivityScalarWhereInput[]
  }

  export type PresenceUpdateManyWithoutMemberNestedInput = {
    create?: XOR<PresenceCreateWithoutMemberInput, PresenceUncheckedCreateWithoutMemberInput> | PresenceCreateWithoutMemberInput[] | PresenceUncheckedCreateWithoutMemberInput[]
    connectOrCreate?: PresenceCreateOrConnectWithoutMemberInput | PresenceCreateOrConnectWithoutMemberInput[]
    upsert?: PresenceUpsertWithWhereUniqueWithoutMemberInput | PresenceUpsertWithWhereUniqueWithoutMemberInput[]
    createMany?: PresenceCreateManyMemberInputEnvelope
    set?: PresenceWhereUniqueInput | PresenceWhereUniqueInput[]
    disconnect?: PresenceWhereUniqueInput | PresenceWhereUniqueInput[]
    delete?: PresenceWhereUniqueInput | PresenceWhereUniqueInput[]
    connect?: PresenceWhereUniqueInput | PresenceWhereUniqueInput[]
    update?: PresenceUpdateWithWhereUniqueWithoutMemberInput | PresenceUpdateWithWhereUniqueWithoutMemberInput[]
    updateMany?: PresenceUpdateManyWithWhereWithoutMemberInput | PresenceUpdateManyWithWhereWithoutMemberInput[]
    deleteMany?: PresenceScalarWhereInput | PresenceScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutMemberNestedInput = {
    create?: XOR<UserCreateWithoutMemberInput, UserUncheckedCreateWithoutMemberInput> | UserCreateWithoutMemberInput[] | UserUncheckedCreateWithoutMemberInput[]
    connectOrCreate?: UserCreateOrConnectWithoutMemberInput | UserCreateOrConnectWithoutMemberInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutMemberInput | UserUpsertWithWhereUniqueWithoutMemberInput[]
    createMany?: UserCreateManyMemberInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutMemberInput | UserUpdateWithWhereUniqueWithoutMemberInput[]
    updateMany?: UserUpdateManyWithWhereWithoutMemberInput | UserUpdateManyWithWhereWithoutMemberInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type CotisationUncheckedUpdateManyWithoutMemberNestedInput = {
    create?: XOR<CotisationCreateWithoutMemberInput, CotisationUncheckedCreateWithoutMemberInput> | CotisationCreateWithoutMemberInput[] | CotisationUncheckedCreateWithoutMemberInput[]
    connectOrCreate?: CotisationCreateOrConnectWithoutMemberInput | CotisationCreateOrConnectWithoutMemberInput[]
    upsert?: CotisationUpsertWithWhereUniqueWithoutMemberInput | CotisationUpsertWithWhereUniqueWithoutMemberInput[]
    createMany?: CotisationCreateManyMemberInputEnvelope
    set?: CotisationWhereUniqueInput | CotisationWhereUniqueInput[]
    disconnect?: CotisationWhereUniqueInput | CotisationWhereUniqueInput[]
    delete?: CotisationWhereUniqueInput | CotisationWhereUniqueInput[]
    connect?: CotisationWhereUniqueInput | CotisationWhereUniqueInput[]
    update?: CotisationUpdateWithWhereUniqueWithoutMemberInput | CotisationUpdateWithWhereUniqueWithoutMemberInput[]
    updateMany?: CotisationUpdateManyWithWhereWithoutMemberInput | CotisationUpdateManyWithWhereWithoutMemberInput[]
    deleteMany?: CotisationScalarWhereInput | CotisationScalarWhereInput[]
  }

  export type ActivityUncheckedUpdateManyWithoutMemberNestedInput = {
    create?: XOR<ActivityCreateWithoutMemberInput, ActivityUncheckedCreateWithoutMemberInput> | ActivityCreateWithoutMemberInput[] | ActivityUncheckedCreateWithoutMemberInput[]
    connectOrCreate?: ActivityCreateOrConnectWithoutMemberInput | ActivityCreateOrConnectWithoutMemberInput[]
    upsert?: ActivityUpsertWithWhereUniqueWithoutMemberInput | ActivityUpsertWithWhereUniqueWithoutMemberInput[]
    createMany?: ActivityCreateManyMemberInputEnvelope
    set?: ActivityWhereUniqueInput | ActivityWhereUniqueInput[]
    disconnect?: ActivityWhereUniqueInput | ActivityWhereUniqueInput[]
    delete?: ActivityWhereUniqueInput | ActivityWhereUniqueInput[]
    connect?: ActivityWhereUniqueInput | ActivityWhereUniqueInput[]
    update?: ActivityUpdateWithWhereUniqueWithoutMemberInput | ActivityUpdateWithWhereUniqueWithoutMemberInput[]
    updateMany?: ActivityUpdateManyWithWhereWithoutMemberInput | ActivityUpdateManyWithWhereWithoutMemberInput[]
    deleteMany?: ActivityScalarWhereInput | ActivityScalarWhereInput[]
  }

  export type PresenceUncheckedUpdateManyWithoutMemberNestedInput = {
    create?: XOR<PresenceCreateWithoutMemberInput, PresenceUncheckedCreateWithoutMemberInput> | PresenceCreateWithoutMemberInput[] | PresenceUncheckedCreateWithoutMemberInput[]
    connectOrCreate?: PresenceCreateOrConnectWithoutMemberInput | PresenceCreateOrConnectWithoutMemberInput[]
    upsert?: PresenceUpsertWithWhereUniqueWithoutMemberInput | PresenceUpsertWithWhereUniqueWithoutMemberInput[]
    createMany?: PresenceCreateManyMemberInputEnvelope
    set?: PresenceWhereUniqueInput | PresenceWhereUniqueInput[]
    disconnect?: PresenceWhereUniqueInput | PresenceWhereUniqueInput[]
    delete?: PresenceWhereUniqueInput | PresenceWhereUniqueInput[]
    connect?: PresenceWhereUniqueInput | PresenceWhereUniqueInput[]
    update?: PresenceUpdateWithWhereUniqueWithoutMemberInput | PresenceUpdateWithWhereUniqueWithoutMemberInput[]
    updateMany?: PresenceUpdateManyWithWhereWithoutMemberInput | PresenceUpdateManyWithWhereWithoutMemberInput[]
    deleteMany?: PresenceScalarWhereInput | PresenceScalarWhereInput[]
  }

  export type MemberCreateNestedOneWithoutCotisationsInput = {
    create?: XOR<MemberCreateWithoutCotisationsInput, MemberUncheckedCreateWithoutCotisationsInput>
    connectOrCreate?: MemberCreateOrConnectWithoutCotisationsInput
    connect?: MemberWhereUniqueInput
  }

  export type AssociationCreateNestedOneWithoutCotisationsInput = {
    create?: XOR<AssociationCreateWithoutCotisationsInput, AssociationUncheckedCreateWithoutCotisationsInput>
    connectOrCreate?: AssociationCreateOrConnectWithoutCotisationsInput
    connect?: AssociationWhereUniqueInput
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type MemberUpdateOneRequiredWithoutCotisationsNestedInput = {
    create?: XOR<MemberCreateWithoutCotisationsInput, MemberUncheckedCreateWithoutCotisationsInput>
    connectOrCreate?: MemberCreateOrConnectWithoutCotisationsInput
    upsert?: MemberUpsertWithoutCotisationsInput
    connect?: MemberWhereUniqueInput
    update?: XOR<XOR<MemberUpdateToOneWithWhereWithoutCotisationsInput, MemberUpdateWithoutCotisationsInput>, MemberUncheckedUpdateWithoutCotisationsInput>
  }

  export type AssociationUpdateOneRequiredWithoutCotisationsNestedInput = {
    create?: XOR<AssociationCreateWithoutCotisationsInput, AssociationUncheckedCreateWithoutCotisationsInput>
    connectOrCreate?: AssociationCreateOrConnectWithoutCotisationsInput
    upsert?: AssociationUpsertWithoutCotisationsInput
    connect?: AssociationWhereUniqueInput
    update?: XOR<XOR<AssociationUpdateToOneWithWhereWithoutCotisationsInput, AssociationUpdateWithoutCotisationsInput>, AssociationUncheckedUpdateWithoutCotisationsInput>
  }

  export type AssociationCreateNestedOneWithoutActivitiesInput = {
    create?: XOR<AssociationCreateWithoutActivitiesInput, AssociationUncheckedCreateWithoutActivitiesInput>
    connectOrCreate?: AssociationCreateOrConnectWithoutActivitiesInput
    connect?: AssociationWhereUniqueInput
  }

  export type MemberCreateNestedOneWithoutActivitiesInput = {
    create?: XOR<MemberCreateWithoutActivitiesInput, MemberUncheckedCreateWithoutActivitiesInput>
    connectOrCreate?: MemberCreateOrConnectWithoutActivitiesInput
    connect?: MemberWhereUniqueInput
  }

  export type PresenceCreateNestedManyWithoutActivityInput = {
    create?: XOR<PresenceCreateWithoutActivityInput, PresenceUncheckedCreateWithoutActivityInput> | PresenceCreateWithoutActivityInput[] | PresenceUncheckedCreateWithoutActivityInput[]
    connectOrCreate?: PresenceCreateOrConnectWithoutActivityInput | PresenceCreateOrConnectWithoutActivityInput[]
    createMany?: PresenceCreateManyActivityInputEnvelope
    connect?: PresenceWhereUniqueInput | PresenceWhereUniqueInput[]
  }

  export type PresenceUncheckedCreateNestedManyWithoutActivityInput = {
    create?: XOR<PresenceCreateWithoutActivityInput, PresenceUncheckedCreateWithoutActivityInput> | PresenceCreateWithoutActivityInput[] | PresenceUncheckedCreateWithoutActivityInput[]
    connectOrCreate?: PresenceCreateOrConnectWithoutActivityInput | PresenceCreateOrConnectWithoutActivityInput[]
    createMany?: PresenceCreateManyActivityInputEnvelope
    connect?: PresenceWhereUniqueInput | PresenceWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type AssociationUpdateOneRequiredWithoutActivitiesNestedInput = {
    create?: XOR<AssociationCreateWithoutActivitiesInput, AssociationUncheckedCreateWithoutActivitiesInput>
    connectOrCreate?: AssociationCreateOrConnectWithoutActivitiesInput
    upsert?: AssociationUpsertWithoutActivitiesInput
    connect?: AssociationWhereUniqueInput
    update?: XOR<XOR<AssociationUpdateToOneWithWhereWithoutActivitiesInput, AssociationUpdateWithoutActivitiesInput>, AssociationUncheckedUpdateWithoutActivitiesInput>
  }

  export type MemberUpdateOneWithoutActivitiesNestedInput = {
    create?: XOR<MemberCreateWithoutActivitiesInput, MemberUncheckedCreateWithoutActivitiesInput>
    connectOrCreate?: MemberCreateOrConnectWithoutActivitiesInput
    upsert?: MemberUpsertWithoutActivitiesInput
    disconnect?: MemberWhereInput | boolean
    delete?: MemberWhereInput | boolean
    connect?: MemberWhereUniqueInput
    update?: XOR<XOR<MemberUpdateToOneWithWhereWithoutActivitiesInput, MemberUpdateWithoutActivitiesInput>, MemberUncheckedUpdateWithoutActivitiesInput>
  }

  export type PresenceUpdateManyWithoutActivityNestedInput = {
    create?: XOR<PresenceCreateWithoutActivityInput, PresenceUncheckedCreateWithoutActivityInput> | PresenceCreateWithoutActivityInput[] | PresenceUncheckedCreateWithoutActivityInput[]
    connectOrCreate?: PresenceCreateOrConnectWithoutActivityInput | PresenceCreateOrConnectWithoutActivityInput[]
    upsert?: PresenceUpsertWithWhereUniqueWithoutActivityInput | PresenceUpsertWithWhereUniqueWithoutActivityInput[]
    createMany?: PresenceCreateManyActivityInputEnvelope
    set?: PresenceWhereUniqueInput | PresenceWhereUniqueInput[]
    disconnect?: PresenceWhereUniqueInput | PresenceWhereUniqueInput[]
    delete?: PresenceWhereUniqueInput | PresenceWhereUniqueInput[]
    connect?: PresenceWhereUniqueInput | PresenceWhereUniqueInput[]
    update?: PresenceUpdateWithWhereUniqueWithoutActivityInput | PresenceUpdateWithWhereUniqueWithoutActivityInput[]
    updateMany?: PresenceUpdateManyWithWhereWithoutActivityInput | PresenceUpdateManyWithWhereWithoutActivityInput[]
    deleteMany?: PresenceScalarWhereInput | PresenceScalarWhereInput[]
  }

  export type PresenceUncheckedUpdateManyWithoutActivityNestedInput = {
    create?: XOR<PresenceCreateWithoutActivityInput, PresenceUncheckedCreateWithoutActivityInput> | PresenceCreateWithoutActivityInput[] | PresenceUncheckedCreateWithoutActivityInput[]
    connectOrCreate?: PresenceCreateOrConnectWithoutActivityInput | PresenceCreateOrConnectWithoutActivityInput[]
    upsert?: PresenceUpsertWithWhereUniqueWithoutActivityInput | PresenceUpsertWithWhereUniqueWithoutActivityInput[]
    createMany?: PresenceCreateManyActivityInputEnvelope
    set?: PresenceWhereUniqueInput | PresenceWhereUniqueInput[]
    disconnect?: PresenceWhereUniqueInput | PresenceWhereUniqueInput[]
    delete?: PresenceWhereUniqueInput | PresenceWhereUniqueInput[]
    connect?: PresenceWhereUniqueInput | PresenceWhereUniqueInput[]
    update?: PresenceUpdateWithWhereUniqueWithoutActivityInput | PresenceUpdateWithWhereUniqueWithoutActivityInput[]
    updateMany?: PresenceUpdateManyWithWhereWithoutActivityInput | PresenceUpdateManyWithWhereWithoutActivityInput[]
    deleteMany?: PresenceScalarWhereInput | PresenceScalarWhereInput[]
  }

  export type MemberCreateNestedOneWithoutUserInput = {
    create?: XOR<MemberCreateWithoutUserInput, MemberUncheckedCreateWithoutUserInput>
    connectOrCreate?: MemberCreateOrConnectWithoutUserInput
    connect?: MemberWhereUniqueInput
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type MemberUpdateOneWithoutUserNestedInput = {
    create?: XOR<MemberCreateWithoutUserInput, MemberUncheckedCreateWithoutUserInput>
    connectOrCreate?: MemberCreateOrConnectWithoutUserInput
    upsert?: MemberUpsertWithoutUserInput
    disconnect?: MemberWhereInput | boolean
    delete?: MemberWhereInput | boolean
    connect?: MemberWhereUniqueInput
    update?: XOR<XOR<MemberUpdateToOneWithWhereWithoutUserInput, MemberUpdateWithoutUserInput>, MemberUncheckedUpdateWithoutUserInput>
  }

  export type AssociationCreateNestedOneWithoutInvitationsInput = {
    create?: XOR<AssociationCreateWithoutInvitationsInput, AssociationUncheckedCreateWithoutInvitationsInput>
    connectOrCreate?: AssociationCreateOrConnectWithoutInvitationsInput
    connect?: AssociationWhereUniqueInput
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type AssociationUpdateOneRequiredWithoutInvitationsNestedInput = {
    create?: XOR<AssociationCreateWithoutInvitationsInput, AssociationUncheckedCreateWithoutInvitationsInput>
    connectOrCreate?: AssociationCreateOrConnectWithoutInvitationsInput
    upsert?: AssociationUpsertWithoutInvitationsInput
    connect?: AssociationWhereUniqueInput
    update?: XOR<XOR<AssociationUpdateToOneWithWhereWithoutInvitationsInput, AssociationUpdateWithoutInvitationsInput>, AssociationUncheckedUpdateWithoutInvitationsInput>
  }

  export type ActivityCreateNestedOneWithoutPresencesInput = {
    create?: XOR<ActivityCreateWithoutPresencesInput, ActivityUncheckedCreateWithoutPresencesInput>
    connectOrCreate?: ActivityCreateOrConnectWithoutPresencesInput
    connect?: ActivityWhereUniqueInput
  }

  export type MemberCreateNestedOneWithoutPresencesInput = {
    create?: XOR<MemberCreateWithoutPresencesInput, MemberUncheckedCreateWithoutPresencesInput>
    connectOrCreate?: MemberCreateOrConnectWithoutPresencesInput
    connect?: MemberWhereUniqueInput
  }

  export type ActivityUpdateOneRequiredWithoutPresencesNestedInput = {
    create?: XOR<ActivityCreateWithoutPresencesInput, ActivityUncheckedCreateWithoutPresencesInput>
    connectOrCreate?: ActivityCreateOrConnectWithoutPresencesInput
    upsert?: ActivityUpsertWithoutPresencesInput
    connect?: ActivityWhereUniqueInput
    update?: XOR<XOR<ActivityUpdateToOneWithWhereWithoutPresencesInput, ActivityUpdateWithoutPresencesInput>, ActivityUncheckedUpdateWithoutPresencesInput>
  }

  export type MemberUpdateOneRequiredWithoutPresencesNestedInput = {
    create?: XOR<MemberCreateWithoutPresencesInput, MemberUncheckedCreateWithoutPresencesInput>
    connectOrCreate?: MemberCreateOrConnectWithoutPresencesInput
    upsert?: MemberUpsertWithoutPresencesInput
    connect?: MemberWhereUniqueInput
    update?: XOR<XOR<MemberUpdateToOneWithWhereWithoutPresencesInput, MemberUpdateWithoutPresencesInput>, MemberUncheckedUpdateWithoutPresencesInput>
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

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type MemberCreateWithoutAssociationInput = {
    id?: string
    name: string
    email: string
    role: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user?: UserCreateNestedManyWithoutMemberInput
    cotisations?: CotisationCreateNestedManyWithoutMemberInput
    activities?: ActivityCreateNestedManyWithoutMemberInput
    presences?: PresenceCreateNestedManyWithoutMemberInput
  }

  export type MemberUncheckedCreateWithoutAssociationInput = {
    id?: string
    name: string
    email: string
    role: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user?: UserUncheckedCreateNestedManyWithoutMemberInput
    cotisations?: CotisationUncheckedCreateNestedManyWithoutMemberInput
    activities?: ActivityUncheckedCreateNestedManyWithoutMemberInput
    presences?: PresenceUncheckedCreateNestedManyWithoutMemberInput
  }

  export type MemberCreateOrConnectWithoutAssociationInput = {
    where: MemberWhereUniqueInput
    create: XOR<MemberCreateWithoutAssociationInput, MemberUncheckedCreateWithoutAssociationInput>
  }

  export type MemberCreateManyAssociationInputEnvelope = {
    data: MemberCreateManyAssociationInput | MemberCreateManyAssociationInput[]
    skipDuplicates?: boolean
  }

  export type CotisationCreateWithoutAssociationInput = {
    id?: string
    amount: number
    paidAt: Date | string
    member: MemberCreateNestedOneWithoutCotisationsInput
  }

  export type CotisationUncheckedCreateWithoutAssociationInput = {
    id?: string
    amount: number
    paidAt: Date | string
    memberId: string
  }

  export type CotisationCreateOrConnectWithoutAssociationInput = {
    where: CotisationWhereUniqueInput
    create: XOR<CotisationCreateWithoutAssociationInput, CotisationUncheckedCreateWithoutAssociationInput>
  }

  export type CotisationCreateManyAssociationInputEnvelope = {
    data: CotisationCreateManyAssociationInput | CotisationCreateManyAssociationInput[]
    skipDuplicates?: boolean
  }

  export type ActivityCreateWithoutAssociationInput = {
    id?: string
    title: string
    date: Date | string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    member?: MemberCreateNestedOneWithoutActivitiesInput
    presences?: PresenceCreateNestedManyWithoutActivityInput
  }

  export type ActivityUncheckedCreateWithoutAssociationInput = {
    id?: string
    title: string
    date: Date | string
    description?: string | null
    memberId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    presences?: PresenceUncheckedCreateNestedManyWithoutActivityInput
  }

  export type ActivityCreateOrConnectWithoutAssociationInput = {
    where: ActivityWhereUniqueInput
    create: XOR<ActivityCreateWithoutAssociationInput, ActivityUncheckedCreateWithoutAssociationInput>
  }

  export type ActivityCreateManyAssociationInputEnvelope = {
    data: ActivityCreateManyAssociationInput | ActivityCreateManyAssociationInput[]
    skipDuplicates?: boolean
  }

  export type InvitationCreateWithoutAssociationInput = {
    id?: string
    email: string
    role: string
    token: string
    expiresAt: Date | string
    used?: boolean
    createdAt?: Date | string
  }

  export type InvitationUncheckedCreateWithoutAssociationInput = {
    id?: string
    email: string
    role: string
    token: string
    expiresAt: Date | string
    used?: boolean
    createdAt?: Date | string
  }

  export type InvitationCreateOrConnectWithoutAssociationInput = {
    where: InvitationWhereUniqueInput
    create: XOR<InvitationCreateWithoutAssociationInput, InvitationUncheckedCreateWithoutAssociationInput>
  }

  export type InvitationCreateManyAssociationInputEnvelope = {
    data: InvitationCreateManyAssociationInput | InvitationCreateManyAssociationInput[]
    skipDuplicates?: boolean
  }

  export type MemberUpsertWithWhereUniqueWithoutAssociationInput = {
    where: MemberWhereUniqueInput
    update: XOR<MemberUpdateWithoutAssociationInput, MemberUncheckedUpdateWithoutAssociationInput>
    create: XOR<MemberCreateWithoutAssociationInput, MemberUncheckedCreateWithoutAssociationInput>
  }

  export type MemberUpdateWithWhereUniqueWithoutAssociationInput = {
    where: MemberWhereUniqueInput
    data: XOR<MemberUpdateWithoutAssociationInput, MemberUncheckedUpdateWithoutAssociationInput>
  }

  export type MemberUpdateManyWithWhereWithoutAssociationInput = {
    where: MemberScalarWhereInput
    data: XOR<MemberUpdateManyMutationInput, MemberUncheckedUpdateManyWithoutAssociationInput>
  }

  export type MemberScalarWhereInput = {
    AND?: MemberScalarWhereInput | MemberScalarWhereInput[]
    OR?: MemberScalarWhereInput[]
    NOT?: MemberScalarWhereInput | MemberScalarWhereInput[]
    id?: StringFilter<"Member"> | string
    name?: StringFilter<"Member"> | string
    email?: StringFilter<"Member"> | string
    role?: StringFilter<"Member"> | string
    associationId?: StringFilter<"Member"> | string
    createdAt?: DateTimeFilter<"Member"> | Date | string
    updatedAt?: DateTimeFilter<"Member"> | Date | string
  }

  export type CotisationUpsertWithWhereUniqueWithoutAssociationInput = {
    where: CotisationWhereUniqueInput
    update: XOR<CotisationUpdateWithoutAssociationInput, CotisationUncheckedUpdateWithoutAssociationInput>
    create: XOR<CotisationCreateWithoutAssociationInput, CotisationUncheckedCreateWithoutAssociationInput>
  }

  export type CotisationUpdateWithWhereUniqueWithoutAssociationInput = {
    where: CotisationWhereUniqueInput
    data: XOR<CotisationUpdateWithoutAssociationInput, CotisationUncheckedUpdateWithoutAssociationInput>
  }

  export type CotisationUpdateManyWithWhereWithoutAssociationInput = {
    where: CotisationScalarWhereInput
    data: XOR<CotisationUpdateManyMutationInput, CotisationUncheckedUpdateManyWithoutAssociationInput>
  }

  export type CotisationScalarWhereInput = {
    AND?: CotisationScalarWhereInput | CotisationScalarWhereInput[]
    OR?: CotisationScalarWhereInput[]
    NOT?: CotisationScalarWhereInput | CotisationScalarWhereInput[]
    id?: StringFilter<"Cotisation"> | string
    amount?: FloatFilter<"Cotisation"> | number
    paidAt?: DateTimeFilter<"Cotisation"> | Date | string
    memberId?: StringFilter<"Cotisation"> | string
    associationId?: StringFilter<"Cotisation"> | string
  }

  export type ActivityUpsertWithWhereUniqueWithoutAssociationInput = {
    where: ActivityWhereUniqueInput
    update: XOR<ActivityUpdateWithoutAssociationInput, ActivityUncheckedUpdateWithoutAssociationInput>
    create: XOR<ActivityCreateWithoutAssociationInput, ActivityUncheckedCreateWithoutAssociationInput>
  }

  export type ActivityUpdateWithWhereUniqueWithoutAssociationInput = {
    where: ActivityWhereUniqueInput
    data: XOR<ActivityUpdateWithoutAssociationInput, ActivityUncheckedUpdateWithoutAssociationInput>
  }

  export type ActivityUpdateManyWithWhereWithoutAssociationInput = {
    where: ActivityScalarWhereInput
    data: XOR<ActivityUpdateManyMutationInput, ActivityUncheckedUpdateManyWithoutAssociationInput>
  }

  export type ActivityScalarWhereInput = {
    AND?: ActivityScalarWhereInput | ActivityScalarWhereInput[]
    OR?: ActivityScalarWhereInput[]
    NOT?: ActivityScalarWhereInput | ActivityScalarWhereInput[]
    id?: StringFilter<"Activity"> | string
    title?: StringFilter<"Activity"> | string
    date?: DateTimeFilter<"Activity"> | Date | string
    description?: StringNullableFilter<"Activity"> | string | null
    associationId?: StringFilter<"Activity"> | string
    memberId?: StringNullableFilter<"Activity"> | string | null
    createdAt?: DateTimeFilter<"Activity"> | Date | string
    updatedAt?: DateTimeFilter<"Activity"> | Date | string
  }

  export type InvitationUpsertWithWhereUniqueWithoutAssociationInput = {
    where: InvitationWhereUniqueInput
    update: XOR<InvitationUpdateWithoutAssociationInput, InvitationUncheckedUpdateWithoutAssociationInput>
    create: XOR<InvitationCreateWithoutAssociationInput, InvitationUncheckedCreateWithoutAssociationInput>
  }

  export type InvitationUpdateWithWhereUniqueWithoutAssociationInput = {
    where: InvitationWhereUniqueInput
    data: XOR<InvitationUpdateWithoutAssociationInput, InvitationUncheckedUpdateWithoutAssociationInput>
  }

  export type InvitationUpdateManyWithWhereWithoutAssociationInput = {
    where: InvitationScalarWhereInput
    data: XOR<InvitationUpdateManyMutationInput, InvitationUncheckedUpdateManyWithoutAssociationInput>
  }

  export type InvitationScalarWhereInput = {
    AND?: InvitationScalarWhereInput | InvitationScalarWhereInput[]
    OR?: InvitationScalarWhereInput[]
    NOT?: InvitationScalarWhereInput | InvitationScalarWhereInput[]
    id?: StringFilter<"Invitation"> | string
    email?: StringFilter<"Invitation"> | string
    role?: StringFilter<"Invitation"> | string
    token?: StringFilter<"Invitation"> | string
    expiresAt?: DateTimeFilter<"Invitation"> | Date | string
    used?: BoolFilter<"Invitation"> | boolean
    associationId?: StringFilter<"Invitation"> | string
    createdAt?: DateTimeFilter<"Invitation"> | Date | string
  }

  export type AssociationCreateWithoutMembersInput = {
    id?: string
    name: string
    createdAt?: Date | string
    cotisations?: CotisationCreateNestedManyWithoutAssociationInput
    activities?: ActivityCreateNestedManyWithoutAssociationInput
    invitations?: InvitationCreateNestedManyWithoutAssociationInput
  }

  export type AssociationUncheckedCreateWithoutMembersInput = {
    id?: string
    name: string
    createdAt?: Date | string
    cotisations?: CotisationUncheckedCreateNestedManyWithoutAssociationInput
    activities?: ActivityUncheckedCreateNestedManyWithoutAssociationInput
    invitations?: InvitationUncheckedCreateNestedManyWithoutAssociationInput
  }

  export type AssociationCreateOrConnectWithoutMembersInput = {
    where: AssociationWhereUniqueInput
    create: XOR<AssociationCreateWithoutMembersInput, AssociationUncheckedCreateWithoutMembersInput>
  }

  export type UserCreateWithoutMemberInput = {
    id?: string
    name?: string | null
    email: string
    password: string
    emailVerified?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUncheckedCreateWithoutMemberInput = {
    id?: string
    name?: string | null
    email: string
    password: string
    emailVerified?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserCreateOrConnectWithoutMemberInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutMemberInput, UserUncheckedCreateWithoutMemberInput>
  }

  export type UserCreateManyMemberInputEnvelope = {
    data: UserCreateManyMemberInput | UserCreateManyMemberInput[]
    skipDuplicates?: boolean
  }

  export type CotisationCreateWithoutMemberInput = {
    id?: string
    amount: number
    paidAt: Date | string
    association: AssociationCreateNestedOneWithoutCotisationsInput
  }

  export type CotisationUncheckedCreateWithoutMemberInput = {
    id?: string
    amount: number
    paidAt: Date | string
    associationId: string
  }

  export type CotisationCreateOrConnectWithoutMemberInput = {
    where: CotisationWhereUniqueInput
    create: XOR<CotisationCreateWithoutMemberInput, CotisationUncheckedCreateWithoutMemberInput>
  }

  export type CotisationCreateManyMemberInputEnvelope = {
    data: CotisationCreateManyMemberInput | CotisationCreateManyMemberInput[]
    skipDuplicates?: boolean
  }

  export type ActivityCreateWithoutMemberInput = {
    id?: string
    title: string
    date: Date | string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    association: AssociationCreateNestedOneWithoutActivitiesInput
    presences?: PresenceCreateNestedManyWithoutActivityInput
  }

  export type ActivityUncheckedCreateWithoutMemberInput = {
    id?: string
    title: string
    date: Date | string
    description?: string | null
    associationId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    presences?: PresenceUncheckedCreateNestedManyWithoutActivityInput
  }

  export type ActivityCreateOrConnectWithoutMemberInput = {
    where: ActivityWhereUniqueInput
    create: XOR<ActivityCreateWithoutMemberInput, ActivityUncheckedCreateWithoutMemberInput>
  }

  export type ActivityCreateManyMemberInputEnvelope = {
    data: ActivityCreateManyMemberInput | ActivityCreateManyMemberInput[]
    skipDuplicates?: boolean
  }

  export type PresenceCreateWithoutMemberInput = {
    id?: string
    present: boolean
    createdAt?: Date | string
    activity: ActivityCreateNestedOneWithoutPresencesInput
  }

  export type PresenceUncheckedCreateWithoutMemberInput = {
    id?: string
    activityId: string
    present: boolean
    createdAt?: Date | string
  }

  export type PresenceCreateOrConnectWithoutMemberInput = {
    where: PresenceWhereUniqueInput
    create: XOR<PresenceCreateWithoutMemberInput, PresenceUncheckedCreateWithoutMemberInput>
  }

  export type PresenceCreateManyMemberInputEnvelope = {
    data: PresenceCreateManyMemberInput | PresenceCreateManyMemberInput[]
    skipDuplicates?: boolean
  }

  export type AssociationUpsertWithoutMembersInput = {
    update: XOR<AssociationUpdateWithoutMembersInput, AssociationUncheckedUpdateWithoutMembersInput>
    create: XOR<AssociationCreateWithoutMembersInput, AssociationUncheckedCreateWithoutMembersInput>
    where?: AssociationWhereInput
  }

  export type AssociationUpdateToOneWithWhereWithoutMembersInput = {
    where?: AssociationWhereInput
    data: XOR<AssociationUpdateWithoutMembersInput, AssociationUncheckedUpdateWithoutMembersInput>
  }

  export type AssociationUpdateWithoutMembersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cotisations?: CotisationUpdateManyWithoutAssociationNestedInput
    activities?: ActivityUpdateManyWithoutAssociationNestedInput
    invitations?: InvitationUpdateManyWithoutAssociationNestedInput
  }

  export type AssociationUncheckedUpdateWithoutMembersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cotisations?: CotisationUncheckedUpdateManyWithoutAssociationNestedInput
    activities?: ActivityUncheckedUpdateManyWithoutAssociationNestedInput
    invitations?: InvitationUncheckedUpdateManyWithoutAssociationNestedInput
  }

  export type UserUpsertWithWhereUniqueWithoutMemberInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutMemberInput, UserUncheckedUpdateWithoutMemberInput>
    create: XOR<UserCreateWithoutMemberInput, UserUncheckedCreateWithoutMemberInput>
  }

  export type UserUpdateWithWhereUniqueWithoutMemberInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutMemberInput, UserUncheckedUpdateWithoutMemberInput>
  }

  export type UserUpdateManyWithWhereWithoutMemberInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutMemberInput>
  }

  export type UserScalarWhereInput = {
    AND?: UserScalarWhereInput | UserScalarWhereInput[]
    OR?: UserScalarWhereInput[]
    NOT?: UserScalarWhereInput | UserScalarWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    emailVerified?: DateTimeNullableFilter<"User"> | Date | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    memberId?: StringNullableFilter<"User"> | string | null
  }

  export type CotisationUpsertWithWhereUniqueWithoutMemberInput = {
    where: CotisationWhereUniqueInput
    update: XOR<CotisationUpdateWithoutMemberInput, CotisationUncheckedUpdateWithoutMemberInput>
    create: XOR<CotisationCreateWithoutMemberInput, CotisationUncheckedCreateWithoutMemberInput>
  }

  export type CotisationUpdateWithWhereUniqueWithoutMemberInput = {
    where: CotisationWhereUniqueInput
    data: XOR<CotisationUpdateWithoutMemberInput, CotisationUncheckedUpdateWithoutMemberInput>
  }

  export type CotisationUpdateManyWithWhereWithoutMemberInput = {
    where: CotisationScalarWhereInput
    data: XOR<CotisationUpdateManyMutationInput, CotisationUncheckedUpdateManyWithoutMemberInput>
  }

  export type ActivityUpsertWithWhereUniqueWithoutMemberInput = {
    where: ActivityWhereUniqueInput
    update: XOR<ActivityUpdateWithoutMemberInput, ActivityUncheckedUpdateWithoutMemberInput>
    create: XOR<ActivityCreateWithoutMemberInput, ActivityUncheckedCreateWithoutMemberInput>
  }

  export type ActivityUpdateWithWhereUniqueWithoutMemberInput = {
    where: ActivityWhereUniqueInput
    data: XOR<ActivityUpdateWithoutMemberInput, ActivityUncheckedUpdateWithoutMemberInput>
  }

  export type ActivityUpdateManyWithWhereWithoutMemberInput = {
    where: ActivityScalarWhereInput
    data: XOR<ActivityUpdateManyMutationInput, ActivityUncheckedUpdateManyWithoutMemberInput>
  }

  export type PresenceUpsertWithWhereUniqueWithoutMemberInput = {
    where: PresenceWhereUniqueInput
    update: XOR<PresenceUpdateWithoutMemberInput, PresenceUncheckedUpdateWithoutMemberInput>
    create: XOR<PresenceCreateWithoutMemberInput, PresenceUncheckedCreateWithoutMemberInput>
  }

  export type PresenceUpdateWithWhereUniqueWithoutMemberInput = {
    where: PresenceWhereUniqueInput
    data: XOR<PresenceUpdateWithoutMemberInput, PresenceUncheckedUpdateWithoutMemberInput>
  }

  export type PresenceUpdateManyWithWhereWithoutMemberInput = {
    where: PresenceScalarWhereInput
    data: XOR<PresenceUpdateManyMutationInput, PresenceUncheckedUpdateManyWithoutMemberInput>
  }

  export type PresenceScalarWhereInput = {
    AND?: PresenceScalarWhereInput | PresenceScalarWhereInput[]
    OR?: PresenceScalarWhereInput[]
    NOT?: PresenceScalarWhereInput | PresenceScalarWhereInput[]
    id?: StringFilter<"Presence"> | string
    activityId?: StringFilter<"Presence"> | string
    memberId?: StringFilter<"Presence"> | string
    present?: BoolFilter<"Presence"> | boolean
    createdAt?: DateTimeFilter<"Presence"> | Date | string
  }

  export type MemberCreateWithoutCotisationsInput = {
    id?: string
    name: string
    email: string
    role: string
    createdAt?: Date | string
    updatedAt?: Date | string
    association: AssociationCreateNestedOneWithoutMembersInput
    user?: UserCreateNestedManyWithoutMemberInput
    activities?: ActivityCreateNestedManyWithoutMemberInput
    presences?: PresenceCreateNestedManyWithoutMemberInput
  }

  export type MemberUncheckedCreateWithoutCotisationsInput = {
    id?: string
    name: string
    email: string
    role: string
    associationId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user?: UserUncheckedCreateNestedManyWithoutMemberInput
    activities?: ActivityUncheckedCreateNestedManyWithoutMemberInput
    presences?: PresenceUncheckedCreateNestedManyWithoutMemberInput
  }

  export type MemberCreateOrConnectWithoutCotisationsInput = {
    where: MemberWhereUniqueInput
    create: XOR<MemberCreateWithoutCotisationsInput, MemberUncheckedCreateWithoutCotisationsInput>
  }

  export type AssociationCreateWithoutCotisationsInput = {
    id?: string
    name: string
    createdAt?: Date | string
    members?: MemberCreateNestedManyWithoutAssociationInput
    activities?: ActivityCreateNestedManyWithoutAssociationInput
    invitations?: InvitationCreateNestedManyWithoutAssociationInput
  }

  export type AssociationUncheckedCreateWithoutCotisationsInput = {
    id?: string
    name: string
    createdAt?: Date | string
    members?: MemberUncheckedCreateNestedManyWithoutAssociationInput
    activities?: ActivityUncheckedCreateNestedManyWithoutAssociationInput
    invitations?: InvitationUncheckedCreateNestedManyWithoutAssociationInput
  }

  export type AssociationCreateOrConnectWithoutCotisationsInput = {
    where: AssociationWhereUniqueInput
    create: XOR<AssociationCreateWithoutCotisationsInput, AssociationUncheckedCreateWithoutCotisationsInput>
  }

  export type MemberUpsertWithoutCotisationsInput = {
    update: XOR<MemberUpdateWithoutCotisationsInput, MemberUncheckedUpdateWithoutCotisationsInput>
    create: XOR<MemberCreateWithoutCotisationsInput, MemberUncheckedCreateWithoutCotisationsInput>
    where?: MemberWhereInput
  }

  export type MemberUpdateToOneWithWhereWithoutCotisationsInput = {
    where?: MemberWhereInput
    data: XOR<MemberUpdateWithoutCotisationsInput, MemberUncheckedUpdateWithoutCotisationsInput>
  }

  export type MemberUpdateWithoutCotisationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    association?: AssociationUpdateOneRequiredWithoutMembersNestedInput
    user?: UserUpdateManyWithoutMemberNestedInput
    activities?: ActivityUpdateManyWithoutMemberNestedInput
    presences?: PresenceUpdateManyWithoutMemberNestedInput
  }

  export type MemberUncheckedUpdateWithoutCotisationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    associationId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUncheckedUpdateManyWithoutMemberNestedInput
    activities?: ActivityUncheckedUpdateManyWithoutMemberNestedInput
    presences?: PresenceUncheckedUpdateManyWithoutMemberNestedInput
  }

  export type AssociationUpsertWithoutCotisationsInput = {
    update: XOR<AssociationUpdateWithoutCotisationsInput, AssociationUncheckedUpdateWithoutCotisationsInput>
    create: XOR<AssociationCreateWithoutCotisationsInput, AssociationUncheckedCreateWithoutCotisationsInput>
    where?: AssociationWhereInput
  }

  export type AssociationUpdateToOneWithWhereWithoutCotisationsInput = {
    where?: AssociationWhereInput
    data: XOR<AssociationUpdateWithoutCotisationsInput, AssociationUncheckedUpdateWithoutCotisationsInput>
  }

  export type AssociationUpdateWithoutCotisationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    members?: MemberUpdateManyWithoutAssociationNestedInput
    activities?: ActivityUpdateManyWithoutAssociationNestedInput
    invitations?: InvitationUpdateManyWithoutAssociationNestedInput
  }

  export type AssociationUncheckedUpdateWithoutCotisationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    members?: MemberUncheckedUpdateManyWithoutAssociationNestedInput
    activities?: ActivityUncheckedUpdateManyWithoutAssociationNestedInput
    invitations?: InvitationUncheckedUpdateManyWithoutAssociationNestedInput
  }

  export type AssociationCreateWithoutActivitiesInput = {
    id?: string
    name: string
    createdAt?: Date | string
    members?: MemberCreateNestedManyWithoutAssociationInput
    cotisations?: CotisationCreateNestedManyWithoutAssociationInput
    invitations?: InvitationCreateNestedManyWithoutAssociationInput
  }

  export type AssociationUncheckedCreateWithoutActivitiesInput = {
    id?: string
    name: string
    createdAt?: Date | string
    members?: MemberUncheckedCreateNestedManyWithoutAssociationInput
    cotisations?: CotisationUncheckedCreateNestedManyWithoutAssociationInput
    invitations?: InvitationUncheckedCreateNestedManyWithoutAssociationInput
  }

  export type AssociationCreateOrConnectWithoutActivitiesInput = {
    where: AssociationWhereUniqueInput
    create: XOR<AssociationCreateWithoutActivitiesInput, AssociationUncheckedCreateWithoutActivitiesInput>
  }

  export type MemberCreateWithoutActivitiesInput = {
    id?: string
    name: string
    email: string
    role: string
    createdAt?: Date | string
    updatedAt?: Date | string
    association: AssociationCreateNestedOneWithoutMembersInput
    user?: UserCreateNestedManyWithoutMemberInput
    cotisations?: CotisationCreateNestedManyWithoutMemberInput
    presences?: PresenceCreateNestedManyWithoutMemberInput
  }

  export type MemberUncheckedCreateWithoutActivitiesInput = {
    id?: string
    name: string
    email: string
    role: string
    associationId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user?: UserUncheckedCreateNestedManyWithoutMemberInput
    cotisations?: CotisationUncheckedCreateNestedManyWithoutMemberInput
    presences?: PresenceUncheckedCreateNestedManyWithoutMemberInput
  }

  export type MemberCreateOrConnectWithoutActivitiesInput = {
    where: MemberWhereUniqueInput
    create: XOR<MemberCreateWithoutActivitiesInput, MemberUncheckedCreateWithoutActivitiesInput>
  }

  export type PresenceCreateWithoutActivityInput = {
    id?: string
    present: boolean
    createdAt?: Date | string
    member: MemberCreateNestedOneWithoutPresencesInput
  }

  export type PresenceUncheckedCreateWithoutActivityInput = {
    id?: string
    memberId: string
    present: boolean
    createdAt?: Date | string
  }

  export type PresenceCreateOrConnectWithoutActivityInput = {
    where: PresenceWhereUniqueInput
    create: XOR<PresenceCreateWithoutActivityInput, PresenceUncheckedCreateWithoutActivityInput>
  }

  export type PresenceCreateManyActivityInputEnvelope = {
    data: PresenceCreateManyActivityInput | PresenceCreateManyActivityInput[]
    skipDuplicates?: boolean
  }

  export type AssociationUpsertWithoutActivitiesInput = {
    update: XOR<AssociationUpdateWithoutActivitiesInput, AssociationUncheckedUpdateWithoutActivitiesInput>
    create: XOR<AssociationCreateWithoutActivitiesInput, AssociationUncheckedCreateWithoutActivitiesInput>
    where?: AssociationWhereInput
  }

  export type AssociationUpdateToOneWithWhereWithoutActivitiesInput = {
    where?: AssociationWhereInput
    data: XOR<AssociationUpdateWithoutActivitiesInput, AssociationUncheckedUpdateWithoutActivitiesInput>
  }

  export type AssociationUpdateWithoutActivitiesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    members?: MemberUpdateManyWithoutAssociationNestedInput
    cotisations?: CotisationUpdateManyWithoutAssociationNestedInput
    invitations?: InvitationUpdateManyWithoutAssociationNestedInput
  }

  export type AssociationUncheckedUpdateWithoutActivitiesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    members?: MemberUncheckedUpdateManyWithoutAssociationNestedInput
    cotisations?: CotisationUncheckedUpdateManyWithoutAssociationNestedInput
    invitations?: InvitationUncheckedUpdateManyWithoutAssociationNestedInput
  }

  export type MemberUpsertWithoutActivitiesInput = {
    update: XOR<MemberUpdateWithoutActivitiesInput, MemberUncheckedUpdateWithoutActivitiesInput>
    create: XOR<MemberCreateWithoutActivitiesInput, MemberUncheckedCreateWithoutActivitiesInput>
    where?: MemberWhereInput
  }

  export type MemberUpdateToOneWithWhereWithoutActivitiesInput = {
    where?: MemberWhereInput
    data: XOR<MemberUpdateWithoutActivitiesInput, MemberUncheckedUpdateWithoutActivitiesInput>
  }

  export type MemberUpdateWithoutActivitiesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    association?: AssociationUpdateOneRequiredWithoutMembersNestedInput
    user?: UserUpdateManyWithoutMemberNestedInput
    cotisations?: CotisationUpdateManyWithoutMemberNestedInput
    presences?: PresenceUpdateManyWithoutMemberNestedInput
  }

  export type MemberUncheckedUpdateWithoutActivitiesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    associationId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUncheckedUpdateManyWithoutMemberNestedInput
    cotisations?: CotisationUncheckedUpdateManyWithoutMemberNestedInput
    presences?: PresenceUncheckedUpdateManyWithoutMemberNestedInput
  }

  export type PresenceUpsertWithWhereUniqueWithoutActivityInput = {
    where: PresenceWhereUniqueInput
    update: XOR<PresenceUpdateWithoutActivityInput, PresenceUncheckedUpdateWithoutActivityInput>
    create: XOR<PresenceCreateWithoutActivityInput, PresenceUncheckedCreateWithoutActivityInput>
  }

  export type PresenceUpdateWithWhereUniqueWithoutActivityInput = {
    where: PresenceWhereUniqueInput
    data: XOR<PresenceUpdateWithoutActivityInput, PresenceUncheckedUpdateWithoutActivityInput>
  }

  export type PresenceUpdateManyWithWhereWithoutActivityInput = {
    where: PresenceScalarWhereInput
    data: XOR<PresenceUpdateManyMutationInput, PresenceUncheckedUpdateManyWithoutActivityInput>
  }

  export type MemberCreateWithoutUserInput = {
    id?: string
    name: string
    email: string
    role: string
    createdAt?: Date | string
    updatedAt?: Date | string
    association: AssociationCreateNestedOneWithoutMembersInput
    cotisations?: CotisationCreateNestedManyWithoutMemberInput
    activities?: ActivityCreateNestedManyWithoutMemberInput
    presences?: PresenceCreateNestedManyWithoutMemberInput
  }

  export type MemberUncheckedCreateWithoutUserInput = {
    id?: string
    name: string
    email: string
    role: string
    associationId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    cotisations?: CotisationUncheckedCreateNestedManyWithoutMemberInput
    activities?: ActivityUncheckedCreateNestedManyWithoutMemberInput
    presences?: PresenceUncheckedCreateNestedManyWithoutMemberInput
  }

  export type MemberCreateOrConnectWithoutUserInput = {
    where: MemberWhereUniqueInput
    create: XOR<MemberCreateWithoutUserInput, MemberUncheckedCreateWithoutUserInput>
  }

  export type MemberUpsertWithoutUserInput = {
    update: XOR<MemberUpdateWithoutUserInput, MemberUncheckedUpdateWithoutUserInput>
    create: XOR<MemberCreateWithoutUserInput, MemberUncheckedCreateWithoutUserInput>
    where?: MemberWhereInput
  }

  export type MemberUpdateToOneWithWhereWithoutUserInput = {
    where?: MemberWhereInput
    data: XOR<MemberUpdateWithoutUserInput, MemberUncheckedUpdateWithoutUserInput>
  }

  export type MemberUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    association?: AssociationUpdateOneRequiredWithoutMembersNestedInput
    cotisations?: CotisationUpdateManyWithoutMemberNestedInput
    activities?: ActivityUpdateManyWithoutMemberNestedInput
    presences?: PresenceUpdateManyWithoutMemberNestedInput
  }

  export type MemberUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    associationId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cotisations?: CotisationUncheckedUpdateManyWithoutMemberNestedInput
    activities?: ActivityUncheckedUpdateManyWithoutMemberNestedInput
    presences?: PresenceUncheckedUpdateManyWithoutMemberNestedInput
  }

  export type AssociationCreateWithoutInvitationsInput = {
    id?: string
    name: string
    createdAt?: Date | string
    members?: MemberCreateNestedManyWithoutAssociationInput
    cotisations?: CotisationCreateNestedManyWithoutAssociationInput
    activities?: ActivityCreateNestedManyWithoutAssociationInput
  }

  export type AssociationUncheckedCreateWithoutInvitationsInput = {
    id?: string
    name: string
    createdAt?: Date | string
    members?: MemberUncheckedCreateNestedManyWithoutAssociationInput
    cotisations?: CotisationUncheckedCreateNestedManyWithoutAssociationInput
    activities?: ActivityUncheckedCreateNestedManyWithoutAssociationInput
  }

  export type AssociationCreateOrConnectWithoutInvitationsInput = {
    where: AssociationWhereUniqueInput
    create: XOR<AssociationCreateWithoutInvitationsInput, AssociationUncheckedCreateWithoutInvitationsInput>
  }

  export type AssociationUpsertWithoutInvitationsInput = {
    update: XOR<AssociationUpdateWithoutInvitationsInput, AssociationUncheckedUpdateWithoutInvitationsInput>
    create: XOR<AssociationCreateWithoutInvitationsInput, AssociationUncheckedCreateWithoutInvitationsInput>
    where?: AssociationWhereInput
  }

  export type AssociationUpdateToOneWithWhereWithoutInvitationsInput = {
    where?: AssociationWhereInput
    data: XOR<AssociationUpdateWithoutInvitationsInput, AssociationUncheckedUpdateWithoutInvitationsInput>
  }

  export type AssociationUpdateWithoutInvitationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    members?: MemberUpdateManyWithoutAssociationNestedInput
    cotisations?: CotisationUpdateManyWithoutAssociationNestedInput
    activities?: ActivityUpdateManyWithoutAssociationNestedInput
  }

  export type AssociationUncheckedUpdateWithoutInvitationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    members?: MemberUncheckedUpdateManyWithoutAssociationNestedInput
    cotisations?: CotisationUncheckedUpdateManyWithoutAssociationNestedInput
    activities?: ActivityUncheckedUpdateManyWithoutAssociationNestedInput
  }

  export type ActivityCreateWithoutPresencesInput = {
    id?: string
    title: string
    date: Date | string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    association: AssociationCreateNestedOneWithoutActivitiesInput
    member?: MemberCreateNestedOneWithoutActivitiesInput
  }

  export type ActivityUncheckedCreateWithoutPresencesInput = {
    id?: string
    title: string
    date: Date | string
    description?: string | null
    associationId: string
    memberId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ActivityCreateOrConnectWithoutPresencesInput = {
    where: ActivityWhereUniqueInput
    create: XOR<ActivityCreateWithoutPresencesInput, ActivityUncheckedCreateWithoutPresencesInput>
  }

  export type MemberCreateWithoutPresencesInput = {
    id?: string
    name: string
    email: string
    role: string
    createdAt?: Date | string
    updatedAt?: Date | string
    association: AssociationCreateNestedOneWithoutMembersInput
    user?: UserCreateNestedManyWithoutMemberInput
    cotisations?: CotisationCreateNestedManyWithoutMemberInput
    activities?: ActivityCreateNestedManyWithoutMemberInput
  }

  export type MemberUncheckedCreateWithoutPresencesInput = {
    id?: string
    name: string
    email: string
    role: string
    associationId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user?: UserUncheckedCreateNestedManyWithoutMemberInput
    cotisations?: CotisationUncheckedCreateNestedManyWithoutMemberInput
    activities?: ActivityUncheckedCreateNestedManyWithoutMemberInput
  }

  export type MemberCreateOrConnectWithoutPresencesInput = {
    where: MemberWhereUniqueInput
    create: XOR<MemberCreateWithoutPresencesInput, MemberUncheckedCreateWithoutPresencesInput>
  }

  export type ActivityUpsertWithoutPresencesInput = {
    update: XOR<ActivityUpdateWithoutPresencesInput, ActivityUncheckedUpdateWithoutPresencesInput>
    create: XOR<ActivityCreateWithoutPresencesInput, ActivityUncheckedCreateWithoutPresencesInput>
    where?: ActivityWhereInput
  }

  export type ActivityUpdateToOneWithWhereWithoutPresencesInput = {
    where?: ActivityWhereInput
    data: XOR<ActivityUpdateWithoutPresencesInput, ActivityUncheckedUpdateWithoutPresencesInput>
  }

  export type ActivityUpdateWithoutPresencesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    association?: AssociationUpdateOneRequiredWithoutActivitiesNestedInput
    member?: MemberUpdateOneWithoutActivitiesNestedInput
  }

  export type ActivityUncheckedUpdateWithoutPresencesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    associationId?: StringFieldUpdateOperationsInput | string
    memberId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MemberUpsertWithoutPresencesInput = {
    update: XOR<MemberUpdateWithoutPresencesInput, MemberUncheckedUpdateWithoutPresencesInput>
    create: XOR<MemberCreateWithoutPresencesInput, MemberUncheckedCreateWithoutPresencesInput>
    where?: MemberWhereInput
  }

  export type MemberUpdateToOneWithWhereWithoutPresencesInput = {
    where?: MemberWhereInput
    data: XOR<MemberUpdateWithoutPresencesInput, MemberUncheckedUpdateWithoutPresencesInput>
  }

  export type MemberUpdateWithoutPresencesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    association?: AssociationUpdateOneRequiredWithoutMembersNestedInput
    user?: UserUpdateManyWithoutMemberNestedInput
    cotisations?: CotisationUpdateManyWithoutMemberNestedInput
    activities?: ActivityUpdateManyWithoutMemberNestedInput
  }

  export type MemberUncheckedUpdateWithoutPresencesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    associationId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUncheckedUpdateManyWithoutMemberNestedInput
    cotisations?: CotisationUncheckedUpdateManyWithoutMemberNestedInput
    activities?: ActivityUncheckedUpdateManyWithoutMemberNestedInput
  }

  export type MemberCreateManyAssociationInput = {
    id?: string
    name: string
    email: string
    role: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CotisationCreateManyAssociationInput = {
    id?: string
    amount: number
    paidAt: Date | string
    memberId: string
  }

  export type ActivityCreateManyAssociationInput = {
    id?: string
    title: string
    date: Date | string
    description?: string | null
    memberId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type InvitationCreateManyAssociationInput = {
    id?: string
    email: string
    role: string
    token: string
    expiresAt: Date | string
    used?: boolean
    createdAt?: Date | string
  }

  export type MemberUpdateWithoutAssociationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateManyWithoutMemberNestedInput
    cotisations?: CotisationUpdateManyWithoutMemberNestedInput
    activities?: ActivityUpdateManyWithoutMemberNestedInput
    presences?: PresenceUpdateManyWithoutMemberNestedInput
  }

  export type MemberUncheckedUpdateWithoutAssociationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUncheckedUpdateManyWithoutMemberNestedInput
    cotisations?: CotisationUncheckedUpdateManyWithoutMemberNestedInput
    activities?: ActivityUncheckedUpdateManyWithoutMemberNestedInput
    presences?: PresenceUncheckedUpdateManyWithoutMemberNestedInput
  }

  export type MemberUncheckedUpdateManyWithoutAssociationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CotisationUpdateWithoutAssociationInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    paidAt?: DateTimeFieldUpdateOperationsInput | Date | string
    member?: MemberUpdateOneRequiredWithoutCotisationsNestedInput
  }

  export type CotisationUncheckedUpdateWithoutAssociationInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    paidAt?: DateTimeFieldUpdateOperationsInput | Date | string
    memberId?: StringFieldUpdateOperationsInput | string
  }

  export type CotisationUncheckedUpdateManyWithoutAssociationInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    paidAt?: DateTimeFieldUpdateOperationsInput | Date | string
    memberId?: StringFieldUpdateOperationsInput | string
  }

  export type ActivityUpdateWithoutAssociationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    member?: MemberUpdateOneWithoutActivitiesNestedInput
    presences?: PresenceUpdateManyWithoutActivityNestedInput
  }

  export type ActivityUncheckedUpdateWithoutAssociationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    memberId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    presences?: PresenceUncheckedUpdateManyWithoutActivityNestedInput
  }

  export type ActivityUncheckedUpdateManyWithoutAssociationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    memberId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InvitationUpdateWithoutAssociationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    used?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InvitationUncheckedUpdateWithoutAssociationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    used?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InvitationUncheckedUpdateManyWithoutAssociationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    used?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateManyMemberInput = {
    id?: string
    name?: string | null
    email: string
    password: string
    emailVerified?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CotisationCreateManyMemberInput = {
    id?: string
    amount: number
    paidAt: Date | string
    associationId: string
  }

  export type ActivityCreateManyMemberInput = {
    id?: string
    title: string
    date: Date | string
    description?: string | null
    associationId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PresenceCreateManyMemberInput = {
    id?: string
    activityId: string
    present: boolean
    createdAt?: Date | string
  }

  export type UserUpdateWithoutMemberInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateWithoutMemberInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyWithoutMemberInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CotisationUpdateWithoutMemberInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    paidAt?: DateTimeFieldUpdateOperationsInput | Date | string
    association?: AssociationUpdateOneRequiredWithoutCotisationsNestedInput
  }

  export type CotisationUncheckedUpdateWithoutMemberInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    paidAt?: DateTimeFieldUpdateOperationsInput | Date | string
    associationId?: StringFieldUpdateOperationsInput | string
  }

  export type CotisationUncheckedUpdateManyWithoutMemberInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    paidAt?: DateTimeFieldUpdateOperationsInput | Date | string
    associationId?: StringFieldUpdateOperationsInput | string
  }

  export type ActivityUpdateWithoutMemberInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    association?: AssociationUpdateOneRequiredWithoutActivitiesNestedInput
    presences?: PresenceUpdateManyWithoutActivityNestedInput
  }

  export type ActivityUncheckedUpdateWithoutMemberInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    associationId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    presences?: PresenceUncheckedUpdateManyWithoutActivityNestedInput
  }

  export type ActivityUncheckedUpdateManyWithoutMemberInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    associationId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PresenceUpdateWithoutMemberInput = {
    id?: StringFieldUpdateOperationsInput | string
    present?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    activity?: ActivityUpdateOneRequiredWithoutPresencesNestedInput
  }

  export type PresenceUncheckedUpdateWithoutMemberInput = {
    id?: StringFieldUpdateOperationsInput | string
    activityId?: StringFieldUpdateOperationsInput | string
    present?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PresenceUncheckedUpdateManyWithoutMemberInput = {
    id?: StringFieldUpdateOperationsInput | string
    activityId?: StringFieldUpdateOperationsInput | string
    present?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PresenceCreateManyActivityInput = {
    id?: string
    memberId: string
    present: boolean
    createdAt?: Date | string
  }

  export type PresenceUpdateWithoutActivityInput = {
    id?: StringFieldUpdateOperationsInput | string
    present?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    member?: MemberUpdateOneRequiredWithoutPresencesNestedInput
  }

  export type PresenceUncheckedUpdateWithoutActivityInput = {
    id?: StringFieldUpdateOperationsInput | string
    memberId?: StringFieldUpdateOperationsInput | string
    present?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PresenceUncheckedUpdateManyWithoutActivityInput = {
    id?: StringFieldUpdateOperationsInput | string
    memberId?: StringFieldUpdateOperationsInput | string
    present?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
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