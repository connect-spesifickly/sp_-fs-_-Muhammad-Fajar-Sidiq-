
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
 * Model Account
 * 
 */
export type Account = $Result.DefaultSelection<Prisma.$AccountPayload>
/**
 * Model Customer
 * 
 */
export type Customer = $Result.DefaultSelection<Prisma.$CustomerPayload>
/**
 * Model Device
 * 
 */
export type Device = $Result.DefaultSelection<Prisma.$DevicePayload>
/**
 * Model Merk
 * 
 */
export type Merk = $Result.DefaultSelection<Prisma.$MerkPayload>
/**
 * Model ServiceJob
 * 
 */
export type ServiceJob = $Result.DefaultSelection<Prisma.$ServiceJobPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const AccountRole: {
  Admin: 'Admin',
  Technician: 'Technician'
};

export type AccountRole = (typeof AccountRole)[keyof typeof AccountRole]


export const PickupStatus: {
  ANTAR_SENDIRI: 'ANTAR_SENDIRI',
  BELUM_DIAMBIL: 'BELUM_DIAMBIL',
  SUDAH_DIAMBIL: 'SUDAH_DIAMBIL',
  DIBATALKAN: 'DIBATALKAN'
};

export type PickupStatus = (typeof PickupStatus)[keyof typeof PickupStatus]


export const ServiceJobStatus: {
  DALAM_ANTRIAN: 'DALAM_ANTRIAN',
  TUNGGU_SPAREPART: 'TUNGGU_SPAREPART',
  PROSES_PENGERJAAN: 'PROSES_PENGERJAAN',
  SELESAI: 'SELESAI',
  DIBATALKAN: 'DIBATALKAN',
  DALAM_PENGIRIMAN: 'DALAM_PENGIRIMAN'
};

export type ServiceJobStatus = (typeof ServiceJobStatus)[keyof typeof ServiceJobStatus]

}

export type AccountRole = $Enums.AccountRole

export const AccountRole: typeof $Enums.AccountRole

export type PickupStatus = $Enums.PickupStatus

export const PickupStatus: typeof $Enums.PickupStatus

export type ServiceJobStatus = $Enums.ServiceJobStatus

export const ServiceJobStatus: typeof $Enums.ServiceJobStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Accounts
 * const accounts = await prisma.account.findMany()
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
   * // Fetch zero or more Accounts
   * const accounts = await prisma.account.findMany()
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
   * `prisma.account`: Exposes CRUD operations for the **Account** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Accounts
    * const accounts = await prisma.account.findMany()
    * ```
    */
  get account(): Prisma.AccountDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.customer`: Exposes CRUD operations for the **Customer** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Customers
    * const customers = await prisma.customer.findMany()
    * ```
    */
  get customer(): Prisma.CustomerDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.device`: Exposes CRUD operations for the **Device** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Devices
    * const devices = await prisma.device.findMany()
    * ```
    */
  get device(): Prisma.DeviceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.merk`: Exposes CRUD operations for the **Merk** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Merks
    * const merks = await prisma.merk.findMany()
    * ```
    */
  get merk(): Prisma.MerkDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.serviceJob`: Exposes CRUD operations for the **ServiceJob** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ServiceJobs
    * const serviceJobs = await prisma.serviceJob.findMany()
    * ```
    */
  get serviceJob(): Prisma.ServiceJobDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.8.2
   * Query Engine version: 2060c79ba17c6bb9f5823312b6f6b7f4a845738e
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
    Account: 'Account',
    Customer: 'Customer',
    Device: 'Device',
    Merk: 'Merk',
    ServiceJob: 'ServiceJob'
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
      modelProps: "account" | "customer" | "device" | "merk" | "serviceJob"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Account: {
        payload: Prisma.$AccountPayload<ExtArgs>
        fields: Prisma.AccountFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AccountFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AccountFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          findFirst: {
            args: Prisma.AccountFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AccountFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          findMany: {
            args: Prisma.AccountFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          create: {
            args: Prisma.AccountCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          createMany: {
            args: Prisma.AccountCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AccountCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          delete: {
            args: Prisma.AccountDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          update: {
            args: Prisma.AccountUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          deleteMany: {
            args: Prisma.AccountDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AccountUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AccountUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          upsert: {
            args: Prisma.AccountUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          aggregate: {
            args: Prisma.AccountAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAccount>
          }
          groupBy: {
            args: Prisma.AccountGroupByArgs<ExtArgs>
            result: $Utils.Optional<AccountGroupByOutputType>[]
          }
          count: {
            args: Prisma.AccountCountArgs<ExtArgs>
            result: $Utils.Optional<AccountCountAggregateOutputType> | number
          }
        }
      }
      Customer: {
        payload: Prisma.$CustomerPayload<ExtArgs>
        fields: Prisma.CustomerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CustomerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CustomerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          findFirst: {
            args: Prisma.CustomerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CustomerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          findMany: {
            args: Prisma.CustomerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>[]
          }
          create: {
            args: Prisma.CustomerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          createMany: {
            args: Prisma.CustomerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CustomerCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>[]
          }
          delete: {
            args: Prisma.CustomerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          update: {
            args: Prisma.CustomerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          deleteMany: {
            args: Prisma.CustomerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CustomerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CustomerUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>[]
          }
          upsert: {
            args: Prisma.CustomerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          aggregate: {
            args: Prisma.CustomerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCustomer>
          }
          groupBy: {
            args: Prisma.CustomerGroupByArgs<ExtArgs>
            result: $Utils.Optional<CustomerGroupByOutputType>[]
          }
          count: {
            args: Prisma.CustomerCountArgs<ExtArgs>
            result: $Utils.Optional<CustomerCountAggregateOutputType> | number
          }
        }
      }
      Device: {
        payload: Prisma.$DevicePayload<ExtArgs>
        fields: Prisma.DeviceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DeviceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DevicePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DeviceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DevicePayload>
          }
          findFirst: {
            args: Prisma.DeviceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DevicePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DeviceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DevicePayload>
          }
          findMany: {
            args: Prisma.DeviceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DevicePayload>[]
          }
          create: {
            args: Prisma.DeviceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DevicePayload>
          }
          createMany: {
            args: Prisma.DeviceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DeviceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DevicePayload>[]
          }
          delete: {
            args: Prisma.DeviceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DevicePayload>
          }
          update: {
            args: Prisma.DeviceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DevicePayload>
          }
          deleteMany: {
            args: Prisma.DeviceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DeviceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DeviceUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DevicePayload>[]
          }
          upsert: {
            args: Prisma.DeviceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DevicePayload>
          }
          aggregate: {
            args: Prisma.DeviceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDevice>
          }
          groupBy: {
            args: Prisma.DeviceGroupByArgs<ExtArgs>
            result: $Utils.Optional<DeviceGroupByOutputType>[]
          }
          count: {
            args: Prisma.DeviceCountArgs<ExtArgs>
            result: $Utils.Optional<DeviceCountAggregateOutputType> | number
          }
        }
      }
      Merk: {
        payload: Prisma.$MerkPayload<ExtArgs>
        fields: Prisma.MerkFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MerkFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MerkPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MerkFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MerkPayload>
          }
          findFirst: {
            args: Prisma.MerkFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MerkPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MerkFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MerkPayload>
          }
          findMany: {
            args: Prisma.MerkFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MerkPayload>[]
          }
          create: {
            args: Prisma.MerkCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MerkPayload>
          }
          createMany: {
            args: Prisma.MerkCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MerkCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MerkPayload>[]
          }
          delete: {
            args: Prisma.MerkDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MerkPayload>
          }
          update: {
            args: Prisma.MerkUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MerkPayload>
          }
          deleteMany: {
            args: Prisma.MerkDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MerkUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MerkUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MerkPayload>[]
          }
          upsert: {
            args: Prisma.MerkUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MerkPayload>
          }
          aggregate: {
            args: Prisma.MerkAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMerk>
          }
          groupBy: {
            args: Prisma.MerkGroupByArgs<ExtArgs>
            result: $Utils.Optional<MerkGroupByOutputType>[]
          }
          count: {
            args: Prisma.MerkCountArgs<ExtArgs>
            result: $Utils.Optional<MerkCountAggregateOutputType> | number
          }
        }
      }
      ServiceJob: {
        payload: Prisma.$ServiceJobPayload<ExtArgs>
        fields: Prisma.ServiceJobFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ServiceJobFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceJobPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ServiceJobFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceJobPayload>
          }
          findFirst: {
            args: Prisma.ServiceJobFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceJobPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ServiceJobFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceJobPayload>
          }
          findMany: {
            args: Prisma.ServiceJobFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceJobPayload>[]
          }
          create: {
            args: Prisma.ServiceJobCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceJobPayload>
          }
          createMany: {
            args: Prisma.ServiceJobCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ServiceJobCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceJobPayload>[]
          }
          delete: {
            args: Prisma.ServiceJobDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceJobPayload>
          }
          update: {
            args: Prisma.ServiceJobUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceJobPayload>
          }
          deleteMany: {
            args: Prisma.ServiceJobDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ServiceJobUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ServiceJobUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceJobPayload>[]
          }
          upsert: {
            args: Prisma.ServiceJobUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceJobPayload>
          }
          aggregate: {
            args: Prisma.ServiceJobAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateServiceJob>
          }
          groupBy: {
            args: Prisma.ServiceJobGroupByArgs<ExtArgs>
            result: $Utils.Optional<ServiceJobGroupByOutputType>[]
          }
          count: {
            args: Prisma.ServiceJobCountArgs<ExtArgs>
            result: $Utils.Optional<ServiceJobCountAggregateOutputType> | number
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
    account?: AccountOmit
    customer?: CustomerOmit
    device?: DeviceOmit
    merk?: MerkOmit
    serviceJob?: ServiceJobOmit
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
   * Count Type AccountCountOutputType
   */

  export type AccountCountOutputType = {
    serviceJobs: number
  }

  export type AccountCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    serviceJobs?: boolean | AccountCountOutputTypeCountServiceJobsArgs
  }

  // Custom InputTypes
  /**
   * AccountCountOutputType without action
   */
  export type AccountCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccountCountOutputType
     */
    select?: AccountCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AccountCountOutputType without action
   */
  export type AccountCountOutputTypeCountServiceJobsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ServiceJobWhereInput
  }


  /**
   * Count Type CustomerCountOutputType
   */

  export type CustomerCountOutputType = {
    serviceJobs: number
  }

  export type CustomerCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    serviceJobs?: boolean | CustomerCountOutputTypeCountServiceJobsArgs
  }

  // Custom InputTypes
  /**
   * CustomerCountOutputType without action
   */
  export type CustomerCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerCountOutputType
     */
    select?: CustomerCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CustomerCountOutputType without action
   */
  export type CustomerCountOutputTypeCountServiceJobsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ServiceJobWhereInput
  }


  /**
   * Count Type DeviceCountOutputType
   */

  export type DeviceCountOutputType = {
    customers: number
  }

  export type DeviceCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customers?: boolean | DeviceCountOutputTypeCountCustomersArgs
  }

  // Custom InputTypes
  /**
   * DeviceCountOutputType without action
   */
  export type DeviceCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeviceCountOutputType
     */
    select?: DeviceCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DeviceCountOutputType without action
   */
  export type DeviceCountOutputTypeCountCustomersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CustomerWhereInput
  }


  /**
   * Count Type MerkCountOutputType
   */

  export type MerkCountOutputType = {
    customers: number
  }

  export type MerkCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customers?: boolean | MerkCountOutputTypeCountCustomersArgs
  }

  // Custom InputTypes
  /**
   * MerkCountOutputType without action
   */
  export type MerkCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MerkCountOutputType
     */
    select?: MerkCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MerkCountOutputType without action
   */
  export type MerkCountOutputTypeCountCustomersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CustomerWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Account
   */

  export type AggregateAccount = {
    _count: AccountCountAggregateOutputType | null
    _min: AccountMinAggregateOutputType | null
    _max: AccountMaxAggregateOutputType | null
  }

  export type AccountMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    password: string | null
    role: $Enums.AccountRole | null
    isVerified: boolean | null
  }

  export type AccountMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    password: string | null
    role: $Enums.AccountRole | null
    isVerified: boolean | null
  }

  export type AccountCountAggregateOutputType = {
    id: number
    name: number
    email: number
    password: number
    role: number
    isVerified: number
    _all: number
  }


  export type AccountMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    role?: true
    isVerified?: true
  }

  export type AccountMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    role?: true
    isVerified?: true
  }

  export type AccountCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    role?: true
    isVerified?: true
    _all?: true
  }

  export type AccountAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Account to aggregate.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Accounts
    **/
    _count?: true | AccountCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AccountMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AccountMaxAggregateInputType
  }

  export type GetAccountAggregateType<T extends AccountAggregateArgs> = {
        [P in keyof T & keyof AggregateAccount]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAccount[P]>
      : GetScalarType<T[P], AggregateAccount[P]>
  }




  export type AccountGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccountWhereInput
    orderBy?: AccountOrderByWithAggregationInput | AccountOrderByWithAggregationInput[]
    by: AccountScalarFieldEnum[] | AccountScalarFieldEnum
    having?: AccountScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AccountCountAggregateInputType | true
    _min?: AccountMinAggregateInputType
    _max?: AccountMaxAggregateInputType
  }

  export type AccountGroupByOutputType = {
    id: string
    name: string
    email: string
    password: string
    role: $Enums.AccountRole
    isVerified: boolean
    _count: AccountCountAggregateOutputType | null
    _min: AccountMinAggregateOutputType | null
    _max: AccountMaxAggregateOutputType | null
  }

  type GetAccountGroupByPayload<T extends AccountGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AccountGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AccountGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AccountGroupByOutputType[P]>
            : GetScalarType<T[P], AccountGroupByOutputType[P]>
        }
      >
    >


  export type AccountSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    isVerified?: boolean
    serviceJobs?: boolean | Account$serviceJobsArgs<ExtArgs>
    _count?: boolean | AccountCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type AccountSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    isVerified?: boolean
  }, ExtArgs["result"]["account"]>

  export type AccountSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    isVerified?: boolean
  }, ExtArgs["result"]["account"]>

  export type AccountSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    isVerified?: boolean
  }

  export type AccountOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "password" | "role" | "isVerified", ExtArgs["result"]["account"]>
  export type AccountInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    serviceJobs?: boolean | Account$serviceJobsArgs<ExtArgs>
    _count?: boolean | AccountCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AccountIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type AccountIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $AccountPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Account"
    objects: {
      serviceJobs: Prisma.$ServiceJobPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      email: string
      password: string
      role: $Enums.AccountRole
      isVerified: boolean
    }, ExtArgs["result"]["account"]>
    composites: {}
  }

  type AccountGetPayload<S extends boolean | null | undefined | AccountDefaultArgs> = $Result.GetResult<Prisma.$AccountPayload, S>

  type AccountCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AccountFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AccountCountAggregateInputType | true
    }

  export interface AccountDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Account'], meta: { name: 'Account' } }
    /**
     * Find zero or one Account that matches the filter.
     * @param {AccountFindUniqueArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AccountFindUniqueArgs>(args: SelectSubset<T, AccountFindUniqueArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Account that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AccountFindUniqueOrThrowArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AccountFindUniqueOrThrowArgs>(args: SelectSubset<T, AccountFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Account that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindFirstArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AccountFindFirstArgs>(args?: SelectSubset<T, AccountFindFirstArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Account that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindFirstOrThrowArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AccountFindFirstOrThrowArgs>(args?: SelectSubset<T, AccountFindFirstOrThrowArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Accounts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Accounts
     * const accounts = await prisma.account.findMany()
     * 
     * // Get first 10 Accounts
     * const accounts = await prisma.account.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const accountWithIdOnly = await prisma.account.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AccountFindManyArgs>(args?: SelectSubset<T, AccountFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Account.
     * @param {AccountCreateArgs} args - Arguments to create a Account.
     * @example
     * // Create one Account
     * const Account = await prisma.account.create({
     *   data: {
     *     // ... data to create a Account
     *   }
     * })
     * 
     */
    create<T extends AccountCreateArgs>(args: SelectSubset<T, AccountCreateArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Accounts.
     * @param {AccountCreateManyArgs} args - Arguments to create many Accounts.
     * @example
     * // Create many Accounts
     * const account = await prisma.account.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AccountCreateManyArgs>(args?: SelectSubset<T, AccountCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Accounts and returns the data saved in the database.
     * @param {AccountCreateManyAndReturnArgs} args - Arguments to create many Accounts.
     * @example
     * // Create many Accounts
     * const account = await prisma.account.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Accounts and only return the `id`
     * const accountWithIdOnly = await prisma.account.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AccountCreateManyAndReturnArgs>(args?: SelectSubset<T, AccountCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Account.
     * @param {AccountDeleteArgs} args - Arguments to delete one Account.
     * @example
     * // Delete one Account
     * const Account = await prisma.account.delete({
     *   where: {
     *     // ... filter to delete one Account
     *   }
     * })
     * 
     */
    delete<T extends AccountDeleteArgs>(args: SelectSubset<T, AccountDeleteArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Account.
     * @param {AccountUpdateArgs} args - Arguments to update one Account.
     * @example
     * // Update one Account
     * const account = await prisma.account.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AccountUpdateArgs>(args: SelectSubset<T, AccountUpdateArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Accounts.
     * @param {AccountDeleteManyArgs} args - Arguments to filter Accounts to delete.
     * @example
     * // Delete a few Accounts
     * const { count } = await prisma.account.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AccountDeleteManyArgs>(args?: SelectSubset<T, AccountDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Accounts
     * const account = await prisma.account.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AccountUpdateManyArgs>(args: SelectSubset<T, AccountUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Accounts and returns the data updated in the database.
     * @param {AccountUpdateManyAndReturnArgs} args - Arguments to update many Accounts.
     * @example
     * // Update many Accounts
     * const account = await prisma.account.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Accounts and only return the `id`
     * const accountWithIdOnly = await prisma.account.updateManyAndReturn({
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
    updateManyAndReturn<T extends AccountUpdateManyAndReturnArgs>(args: SelectSubset<T, AccountUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Account.
     * @param {AccountUpsertArgs} args - Arguments to update or create a Account.
     * @example
     * // Update or create a Account
     * const account = await prisma.account.upsert({
     *   create: {
     *     // ... data to create a Account
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Account we want to update
     *   }
     * })
     */
    upsert<T extends AccountUpsertArgs>(args: SelectSubset<T, AccountUpsertArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountCountArgs} args - Arguments to filter Accounts to count.
     * @example
     * // Count the number of Accounts
     * const count = await prisma.account.count({
     *   where: {
     *     // ... the filter for the Accounts we want to count
     *   }
     * })
    **/
    count<T extends AccountCountArgs>(
      args?: Subset<T, AccountCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AccountCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AccountAggregateArgs>(args: Subset<T, AccountAggregateArgs>): Prisma.PrismaPromise<GetAccountAggregateType<T>>

    /**
     * Group by Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountGroupByArgs} args - Group by arguments.
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
      T extends AccountGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AccountGroupByArgs['orderBy'] }
        : { orderBy?: AccountGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AccountGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAccountGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Account model
   */
  readonly fields: AccountFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Account.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AccountClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    serviceJobs<T extends Account$serviceJobsArgs<ExtArgs> = {}>(args?: Subset<T, Account$serviceJobsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServiceJobPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Account model
   */
  interface AccountFieldRefs {
    readonly id: FieldRef<"Account", 'String'>
    readonly name: FieldRef<"Account", 'String'>
    readonly email: FieldRef<"Account", 'String'>
    readonly password: FieldRef<"Account", 'String'>
    readonly role: FieldRef<"Account", 'AccountRole'>
    readonly isVerified: FieldRef<"Account", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * Account findUnique
   */
  export type AccountFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account findUniqueOrThrow
   */
  export type AccountFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account findFirst
   */
  export type AccountFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     */
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account findFirstOrThrow
   */
  export type AccountFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     */
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account findMany
   */
  export type AccountFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Accounts to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account create
   */
  export type AccountCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The data needed to create a Account.
     */
    data: XOR<AccountCreateInput, AccountUncheckedCreateInput>
  }

  /**
   * Account createMany
   */
  export type AccountCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Accounts.
     */
    data: AccountCreateManyInput | AccountCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Account createManyAndReturn
   */
  export type AccountCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * The data used to create many Accounts.
     */
    data: AccountCreateManyInput | AccountCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Account update
   */
  export type AccountUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The data needed to update a Account.
     */
    data: XOR<AccountUpdateInput, AccountUncheckedUpdateInput>
    /**
     * Choose, which Account to update.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account updateMany
   */
  export type AccountUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Accounts.
     */
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyInput>
    /**
     * Filter which Accounts to update
     */
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to update.
     */
    limit?: number
  }

  /**
   * Account updateManyAndReturn
   */
  export type AccountUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * The data used to update Accounts.
     */
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyInput>
    /**
     * Filter which Accounts to update
     */
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to update.
     */
    limit?: number
  }

  /**
   * Account upsert
   */
  export type AccountUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The filter to search for the Account to update in case it exists.
     */
    where: AccountWhereUniqueInput
    /**
     * In case the Account found by the `where` argument doesn't exist, create a new Account with this data.
     */
    create: XOR<AccountCreateInput, AccountUncheckedCreateInput>
    /**
     * In case the Account was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AccountUpdateInput, AccountUncheckedUpdateInput>
  }

  /**
   * Account delete
   */
  export type AccountDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter which Account to delete.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account deleteMany
   */
  export type AccountDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Accounts to delete
     */
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to delete.
     */
    limit?: number
  }

  /**
   * Account.serviceJobs
   */
  export type Account$serviceJobsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceJob
     */
    select?: ServiceJobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceJob
     */
    omit?: ServiceJobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceJobInclude<ExtArgs> | null
    where?: ServiceJobWhereInput
    orderBy?: ServiceJobOrderByWithRelationInput | ServiceJobOrderByWithRelationInput[]
    cursor?: ServiceJobWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ServiceJobScalarFieldEnum | ServiceJobScalarFieldEnum[]
  }

  /**
   * Account without action
   */
  export type AccountDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
  }


  /**
   * Model Customer
   */

  export type AggregateCustomer = {
    _count: CustomerCountAggregateOutputType | null
    _min: CustomerMinAggregateOutputType | null
    _max: CustomerMaxAggregateOutputType | null
  }

  export type CustomerMinAggregateOutputType = {
    id: string | null
    fullName: string | null
    deviceId: string | null
    merkId: string | null
    devicePhoto: string | null
    complaint: string | null
    preferredPickupDate: Date | null
    preferredPickupTime: string | null
    pickupStatus: $Enums.PickupStatus | null
    requestForDelivery: boolean | null
  }

  export type CustomerMaxAggregateOutputType = {
    id: string | null
    fullName: string | null
    deviceId: string | null
    merkId: string | null
    devicePhoto: string | null
    complaint: string | null
    preferredPickupDate: Date | null
    preferredPickupTime: string | null
    pickupStatus: $Enums.PickupStatus | null
    requestForDelivery: boolean | null
  }

  export type CustomerCountAggregateOutputType = {
    id: number
    fullName: number
    deviceId: number
    merkId: number
    devicePhoto: number
    complaint: number
    preferredPickupDate: number
    preferredPickupTime: number
    pickupStatus: number
    requestForDelivery: number
    _all: number
  }


  export type CustomerMinAggregateInputType = {
    id?: true
    fullName?: true
    deviceId?: true
    merkId?: true
    devicePhoto?: true
    complaint?: true
    preferredPickupDate?: true
    preferredPickupTime?: true
    pickupStatus?: true
    requestForDelivery?: true
  }

  export type CustomerMaxAggregateInputType = {
    id?: true
    fullName?: true
    deviceId?: true
    merkId?: true
    devicePhoto?: true
    complaint?: true
    preferredPickupDate?: true
    preferredPickupTime?: true
    pickupStatus?: true
    requestForDelivery?: true
  }

  export type CustomerCountAggregateInputType = {
    id?: true
    fullName?: true
    deviceId?: true
    merkId?: true
    devicePhoto?: true
    complaint?: true
    preferredPickupDate?: true
    preferredPickupTime?: true
    pickupStatus?: true
    requestForDelivery?: true
    _all?: true
  }

  export type CustomerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Customer to aggregate.
     */
    where?: CustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customers to fetch.
     */
    orderBy?: CustomerOrderByWithRelationInput | CustomerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Customers
    **/
    _count?: true | CustomerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CustomerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CustomerMaxAggregateInputType
  }

  export type GetCustomerAggregateType<T extends CustomerAggregateArgs> = {
        [P in keyof T & keyof AggregateCustomer]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCustomer[P]>
      : GetScalarType<T[P], AggregateCustomer[P]>
  }




  export type CustomerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CustomerWhereInput
    orderBy?: CustomerOrderByWithAggregationInput | CustomerOrderByWithAggregationInput[]
    by: CustomerScalarFieldEnum[] | CustomerScalarFieldEnum
    having?: CustomerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CustomerCountAggregateInputType | true
    _min?: CustomerMinAggregateInputType
    _max?: CustomerMaxAggregateInputType
  }

  export type CustomerGroupByOutputType = {
    id: string
    fullName: string
    deviceId: string
    merkId: string
    devicePhoto: string | null
    complaint: string
    preferredPickupDate: Date | null
    preferredPickupTime: string | null
    pickupStatus: $Enums.PickupStatus
    requestForDelivery: boolean
    _count: CustomerCountAggregateOutputType | null
    _min: CustomerMinAggregateOutputType | null
    _max: CustomerMaxAggregateOutputType | null
  }

  type GetCustomerGroupByPayload<T extends CustomerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CustomerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CustomerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CustomerGroupByOutputType[P]>
            : GetScalarType<T[P], CustomerGroupByOutputType[P]>
        }
      >
    >


  export type CustomerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fullName?: boolean
    deviceId?: boolean
    merkId?: boolean
    devicePhoto?: boolean
    complaint?: boolean
    preferredPickupDate?: boolean
    preferredPickupTime?: boolean
    pickupStatus?: boolean
    requestForDelivery?: boolean
    device?: boolean | DeviceDefaultArgs<ExtArgs>
    merk?: boolean | MerkDefaultArgs<ExtArgs>
    serviceJobs?: boolean | Customer$serviceJobsArgs<ExtArgs>
    _count?: boolean | CustomerCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["customer"]>

  export type CustomerSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fullName?: boolean
    deviceId?: boolean
    merkId?: boolean
    devicePhoto?: boolean
    complaint?: boolean
    preferredPickupDate?: boolean
    preferredPickupTime?: boolean
    pickupStatus?: boolean
    requestForDelivery?: boolean
    device?: boolean | DeviceDefaultArgs<ExtArgs>
    merk?: boolean | MerkDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["customer"]>

  export type CustomerSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fullName?: boolean
    deviceId?: boolean
    merkId?: boolean
    devicePhoto?: boolean
    complaint?: boolean
    preferredPickupDate?: boolean
    preferredPickupTime?: boolean
    pickupStatus?: boolean
    requestForDelivery?: boolean
    device?: boolean | DeviceDefaultArgs<ExtArgs>
    merk?: boolean | MerkDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["customer"]>

  export type CustomerSelectScalar = {
    id?: boolean
    fullName?: boolean
    deviceId?: boolean
    merkId?: boolean
    devicePhoto?: boolean
    complaint?: boolean
    preferredPickupDate?: boolean
    preferredPickupTime?: boolean
    pickupStatus?: boolean
    requestForDelivery?: boolean
  }

  export type CustomerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "fullName" | "deviceId" | "merkId" | "devicePhoto" | "complaint" | "preferredPickupDate" | "preferredPickupTime" | "pickupStatus" | "requestForDelivery", ExtArgs["result"]["customer"]>
  export type CustomerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    device?: boolean | DeviceDefaultArgs<ExtArgs>
    merk?: boolean | MerkDefaultArgs<ExtArgs>
    serviceJobs?: boolean | Customer$serviceJobsArgs<ExtArgs>
    _count?: boolean | CustomerCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CustomerIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    device?: boolean | DeviceDefaultArgs<ExtArgs>
    merk?: boolean | MerkDefaultArgs<ExtArgs>
  }
  export type CustomerIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    device?: boolean | DeviceDefaultArgs<ExtArgs>
    merk?: boolean | MerkDefaultArgs<ExtArgs>
  }

  export type $CustomerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Customer"
    objects: {
      device: Prisma.$DevicePayload<ExtArgs>
      merk: Prisma.$MerkPayload<ExtArgs>
      serviceJobs: Prisma.$ServiceJobPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      fullName: string
      deviceId: string
      merkId: string
      devicePhoto: string | null
      complaint: string
      preferredPickupDate: Date | null
      preferredPickupTime: string | null
      pickupStatus: $Enums.PickupStatus
      requestForDelivery: boolean
    }, ExtArgs["result"]["customer"]>
    composites: {}
  }

  type CustomerGetPayload<S extends boolean | null | undefined | CustomerDefaultArgs> = $Result.GetResult<Prisma.$CustomerPayload, S>

  type CustomerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CustomerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CustomerCountAggregateInputType | true
    }

  export interface CustomerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Customer'], meta: { name: 'Customer' } }
    /**
     * Find zero or one Customer that matches the filter.
     * @param {CustomerFindUniqueArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CustomerFindUniqueArgs>(args: SelectSubset<T, CustomerFindUniqueArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Customer that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CustomerFindUniqueOrThrowArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CustomerFindUniqueOrThrowArgs>(args: SelectSubset<T, CustomerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Customer that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerFindFirstArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CustomerFindFirstArgs>(args?: SelectSubset<T, CustomerFindFirstArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Customer that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerFindFirstOrThrowArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CustomerFindFirstOrThrowArgs>(args?: SelectSubset<T, CustomerFindFirstOrThrowArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Customers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Customers
     * const customers = await prisma.customer.findMany()
     * 
     * // Get first 10 Customers
     * const customers = await prisma.customer.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const customerWithIdOnly = await prisma.customer.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CustomerFindManyArgs>(args?: SelectSubset<T, CustomerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Customer.
     * @param {CustomerCreateArgs} args - Arguments to create a Customer.
     * @example
     * // Create one Customer
     * const Customer = await prisma.customer.create({
     *   data: {
     *     // ... data to create a Customer
     *   }
     * })
     * 
     */
    create<T extends CustomerCreateArgs>(args: SelectSubset<T, CustomerCreateArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Customers.
     * @param {CustomerCreateManyArgs} args - Arguments to create many Customers.
     * @example
     * // Create many Customers
     * const customer = await prisma.customer.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CustomerCreateManyArgs>(args?: SelectSubset<T, CustomerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Customers and returns the data saved in the database.
     * @param {CustomerCreateManyAndReturnArgs} args - Arguments to create many Customers.
     * @example
     * // Create many Customers
     * const customer = await prisma.customer.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Customers and only return the `id`
     * const customerWithIdOnly = await prisma.customer.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CustomerCreateManyAndReturnArgs>(args?: SelectSubset<T, CustomerCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Customer.
     * @param {CustomerDeleteArgs} args - Arguments to delete one Customer.
     * @example
     * // Delete one Customer
     * const Customer = await prisma.customer.delete({
     *   where: {
     *     // ... filter to delete one Customer
     *   }
     * })
     * 
     */
    delete<T extends CustomerDeleteArgs>(args: SelectSubset<T, CustomerDeleteArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Customer.
     * @param {CustomerUpdateArgs} args - Arguments to update one Customer.
     * @example
     * // Update one Customer
     * const customer = await prisma.customer.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CustomerUpdateArgs>(args: SelectSubset<T, CustomerUpdateArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Customers.
     * @param {CustomerDeleteManyArgs} args - Arguments to filter Customers to delete.
     * @example
     * // Delete a few Customers
     * const { count } = await prisma.customer.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CustomerDeleteManyArgs>(args?: SelectSubset<T, CustomerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Customers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Customers
     * const customer = await prisma.customer.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CustomerUpdateManyArgs>(args: SelectSubset<T, CustomerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Customers and returns the data updated in the database.
     * @param {CustomerUpdateManyAndReturnArgs} args - Arguments to update many Customers.
     * @example
     * // Update many Customers
     * const customer = await prisma.customer.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Customers and only return the `id`
     * const customerWithIdOnly = await prisma.customer.updateManyAndReturn({
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
    updateManyAndReturn<T extends CustomerUpdateManyAndReturnArgs>(args: SelectSubset<T, CustomerUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Customer.
     * @param {CustomerUpsertArgs} args - Arguments to update or create a Customer.
     * @example
     * // Update or create a Customer
     * const customer = await prisma.customer.upsert({
     *   create: {
     *     // ... data to create a Customer
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Customer we want to update
     *   }
     * })
     */
    upsert<T extends CustomerUpsertArgs>(args: SelectSubset<T, CustomerUpsertArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Customers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerCountArgs} args - Arguments to filter Customers to count.
     * @example
     * // Count the number of Customers
     * const count = await prisma.customer.count({
     *   where: {
     *     // ... the filter for the Customers we want to count
     *   }
     * })
    **/
    count<T extends CustomerCountArgs>(
      args?: Subset<T, CustomerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CustomerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Customer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CustomerAggregateArgs>(args: Subset<T, CustomerAggregateArgs>): Prisma.PrismaPromise<GetCustomerAggregateType<T>>

    /**
     * Group by Customer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerGroupByArgs} args - Group by arguments.
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
      T extends CustomerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CustomerGroupByArgs['orderBy'] }
        : { orderBy?: CustomerGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CustomerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCustomerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Customer model
   */
  readonly fields: CustomerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Customer.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CustomerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    device<T extends DeviceDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DeviceDefaultArgs<ExtArgs>>): Prisma__DeviceClient<$Result.GetResult<Prisma.$DevicePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    merk<T extends MerkDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MerkDefaultArgs<ExtArgs>>): Prisma__MerkClient<$Result.GetResult<Prisma.$MerkPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    serviceJobs<T extends Customer$serviceJobsArgs<ExtArgs> = {}>(args?: Subset<T, Customer$serviceJobsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServiceJobPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Customer model
   */
  interface CustomerFieldRefs {
    readonly id: FieldRef<"Customer", 'String'>
    readonly fullName: FieldRef<"Customer", 'String'>
    readonly deviceId: FieldRef<"Customer", 'String'>
    readonly merkId: FieldRef<"Customer", 'String'>
    readonly devicePhoto: FieldRef<"Customer", 'String'>
    readonly complaint: FieldRef<"Customer", 'String'>
    readonly preferredPickupDate: FieldRef<"Customer", 'DateTime'>
    readonly preferredPickupTime: FieldRef<"Customer", 'String'>
    readonly pickupStatus: FieldRef<"Customer", 'PickupStatus'>
    readonly requestForDelivery: FieldRef<"Customer", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * Customer findUnique
   */
  export type CustomerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customer to fetch.
     */
    where: CustomerWhereUniqueInput
  }

  /**
   * Customer findUniqueOrThrow
   */
  export type CustomerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customer to fetch.
     */
    where: CustomerWhereUniqueInput
  }

  /**
   * Customer findFirst
   */
  export type CustomerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customer to fetch.
     */
    where?: CustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customers to fetch.
     */
    orderBy?: CustomerOrderByWithRelationInput | CustomerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Customers.
     */
    cursor?: CustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Customers.
     */
    distinct?: CustomerScalarFieldEnum | CustomerScalarFieldEnum[]
  }

  /**
   * Customer findFirstOrThrow
   */
  export type CustomerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customer to fetch.
     */
    where?: CustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customers to fetch.
     */
    orderBy?: CustomerOrderByWithRelationInput | CustomerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Customers.
     */
    cursor?: CustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Customers.
     */
    distinct?: CustomerScalarFieldEnum | CustomerScalarFieldEnum[]
  }

  /**
   * Customer findMany
   */
  export type CustomerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customers to fetch.
     */
    where?: CustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customers to fetch.
     */
    orderBy?: CustomerOrderByWithRelationInput | CustomerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Customers.
     */
    cursor?: CustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customers.
     */
    skip?: number
    distinct?: CustomerScalarFieldEnum | CustomerScalarFieldEnum[]
  }

  /**
   * Customer create
   */
  export type CustomerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * The data needed to create a Customer.
     */
    data: XOR<CustomerCreateInput, CustomerUncheckedCreateInput>
  }

  /**
   * Customer createMany
   */
  export type CustomerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Customers.
     */
    data: CustomerCreateManyInput | CustomerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Customer createManyAndReturn
   */
  export type CustomerCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * The data used to create many Customers.
     */
    data: CustomerCreateManyInput | CustomerCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Customer update
   */
  export type CustomerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * The data needed to update a Customer.
     */
    data: XOR<CustomerUpdateInput, CustomerUncheckedUpdateInput>
    /**
     * Choose, which Customer to update.
     */
    where: CustomerWhereUniqueInput
  }

  /**
   * Customer updateMany
   */
  export type CustomerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Customers.
     */
    data: XOR<CustomerUpdateManyMutationInput, CustomerUncheckedUpdateManyInput>
    /**
     * Filter which Customers to update
     */
    where?: CustomerWhereInput
    /**
     * Limit how many Customers to update.
     */
    limit?: number
  }

  /**
   * Customer updateManyAndReturn
   */
  export type CustomerUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * The data used to update Customers.
     */
    data: XOR<CustomerUpdateManyMutationInput, CustomerUncheckedUpdateManyInput>
    /**
     * Filter which Customers to update
     */
    where?: CustomerWhereInput
    /**
     * Limit how many Customers to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Customer upsert
   */
  export type CustomerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * The filter to search for the Customer to update in case it exists.
     */
    where: CustomerWhereUniqueInput
    /**
     * In case the Customer found by the `where` argument doesn't exist, create a new Customer with this data.
     */
    create: XOR<CustomerCreateInput, CustomerUncheckedCreateInput>
    /**
     * In case the Customer was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CustomerUpdateInput, CustomerUncheckedUpdateInput>
  }

  /**
   * Customer delete
   */
  export type CustomerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter which Customer to delete.
     */
    where: CustomerWhereUniqueInput
  }

  /**
   * Customer deleteMany
   */
  export type CustomerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Customers to delete
     */
    where?: CustomerWhereInput
    /**
     * Limit how many Customers to delete.
     */
    limit?: number
  }

  /**
   * Customer.serviceJobs
   */
  export type Customer$serviceJobsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceJob
     */
    select?: ServiceJobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceJob
     */
    omit?: ServiceJobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceJobInclude<ExtArgs> | null
    where?: ServiceJobWhereInput
    orderBy?: ServiceJobOrderByWithRelationInput | ServiceJobOrderByWithRelationInput[]
    cursor?: ServiceJobWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ServiceJobScalarFieldEnum | ServiceJobScalarFieldEnum[]
  }

  /**
   * Customer without action
   */
  export type CustomerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
  }


  /**
   * Model Device
   */

  export type AggregateDevice = {
    _count: DeviceCountAggregateOutputType | null
    _min: DeviceMinAggregateOutputType | null
    _max: DeviceMaxAggregateOutputType | null
  }

  export type DeviceMinAggregateOutputType = {
    id: string | null
    name: string | null
  }

  export type DeviceMaxAggregateOutputType = {
    id: string | null
    name: string | null
  }

  export type DeviceCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type DeviceMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type DeviceMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type DeviceCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type DeviceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Device to aggregate.
     */
    where?: DeviceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Devices to fetch.
     */
    orderBy?: DeviceOrderByWithRelationInput | DeviceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DeviceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Devices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Devices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Devices
    **/
    _count?: true | DeviceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DeviceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DeviceMaxAggregateInputType
  }

  export type GetDeviceAggregateType<T extends DeviceAggregateArgs> = {
        [P in keyof T & keyof AggregateDevice]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDevice[P]>
      : GetScalarType<T[P], AggregateDevice[P]>
  }




  export type DeviceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DeviceWhereInput
    orderBy?: DeviceOrderByWithAggregationInput | DeviceOrderByWithAggregationInput[]
    by: DeviceScalarFieldEnum[] | DeviceScalarFieldEnum
    having?: DeviceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DeviceCountAggregateInputType | true
    _min?: DeviceMinAggregateInputType
    _max?: DeviceMaxAggregateInputType
  }

  export type DeviceGroupByOutputType = {
    id: string
    name: string
    _count: DeviceCountAggregateOutputType | null
    _min: DeviceMinAggregateOutputType | null
    _max: DeviceMaxAggregateOutputType | null
  }

  type GetDeviceGroupByPayload<T extends DeviceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DeviceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DeviceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DeviceGroupByOutputType[P]>
            : GetScalarType<T[P], DeviceGroupByOutputType[P]>
        }
      >
    >


  export type DeviceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    customers?: boolean | Device$customersArgs<ExtArgs>
    _count?: boolean | DeviceCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["device"]>

  export type DeviceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["device"]>

  export type DeviceSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["device"]>

  export type DeviceSelectScalar = {
    id?: boolean
    name?: boolean
  }

  export type DeviceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name", ExtArgs["result"]["device"]>
  export type DeviceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customers?: boolean | Device$customersArgs<ExtArgs>
    _count?: boolean | DeviceCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type DeviceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type DeviceIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $DevicePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Device"
    objects: {
      customers: Prisma.$CustomerPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
    }, ExtArgs["result"]["device"]>
    composites: {}
  }

  type DeviceGetPayload<S extends boolean | null | undefined | DeviceDefaultArgs> = $Result.GetResult<Prisma.$DevicePayload, S>

  type DeviceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DeviceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DeviceCountAggregateInputType | true
    }

  export interface DeviceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Device'], meta: { name: 'Device' } }
    /**
     * Find zero or one Device that matches the filter.
     * @param {DeviceFindUniqueArgs} args - Arguments to find a Device
     * @example
     * // Get one Device
     * const device = await prisma.device.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DeviceFindUniqueArgs>(args: SelectSubset<T, DeviceFindUniqueArgs<ExtArgs>>): Prisma__DeviceClient<$Result.GetResult<Prisma.$DevicePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Device that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DeviceFindUniqueOrThrowArgs} args - Arguments to find a Device
     * @example
     * // Get one Device
     * const device = await prisma.device.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DeviceFindUniqueOrThrowArgs>(args: SelectSubset<T, DeviceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DeviceClient<$Result.GetResult<Prisma.$DevicePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Device that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceFindFirstArgs} args - Arguments to find a Device
     * @example
     * // Get one Device
     * const device = await prisma.device.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DeviceFindFirstArgs>(args?: SelectSubset<T, DeviceFindFirstArgs<ExtArgs>>): Prisma__DeviceClient<$Result.GetResult<Prisma.$DevicePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Device that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceFindFirstOrThrowArgs} args - Arguments to find a Device
     * @example
     * // Get one Device
     * const device = await prisma.device.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DeviceFindFirstOrThrowArgs>(args?: SelectSubset<T, DeviceFindFirstOrThrowArgs<ExtArgs>>): Prisma__DeviceClient<$Result.GetResult<Prisma.$DevicePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Devices that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Devices
     * const devices = await prisma.device.findMany()
     * 
     * // Get first 10 Devices
     * const devices = await prisma.device.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const deviceWithIdOnly = await prisma.device.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DeviceFindManyArgs>(args?: SelectSubset<T, DeviceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DevicePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Device.
     * @param {DeviceCreateArgs} args - Arguments to create a Device.
     * @example
     * // Create one Device
     * const Device = await prisma.device.create({
     *   data: {
     *     // ... data to create a Device
     *   }
     * })
     * 
     */
    create<T extends DeviceCreateArgs>(args: SelectSubset<T, DeviceCreateArgs<ExtArgs>>): Prisma__DeviceClient<$Result.GetResult<Prisma.$DevicePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Devices.
     * @param {DeviceCreateManyArgs} args - Arguments to create many Devices.
     * @example
     * // Create many Devices
     * const device = await prisma.device.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DeviceCreateManyArgs>(args?: SelectSubset<T, DeviceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Devices and returns the data saved in the database.
     * @param {DeviceCreateManyAndReturnArgs} args - Arguments to create many Devices.
     * @example
     * // Create many Devices
     * const device = await prisma.device.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Devices and only return the `id`
     * const deviceWithIdOnly = await prisma.device.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DeviceCreateManyAndReturnArgs>(args?: SelectSubset<T, DeviceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DevicePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Device.
     * @param {DeviceDeleteArgs} args - Arguments to delete one Device.
     * @example
     * // Delete one Device
     * const Device = await prisma.device.delete({
     *   where: {
     *     // ... filter to delete one Device
     *   }
     * })
     * 
     */
    delete<T extends DeviceDeleteArgs>(args: SelectSubset<T, DeviceDeleteArgs<ExtArgs>>): Prisma__DeviceClient<$Result.GetResult<Prisma.$DevicePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Device.
     * @param {DeviceUpdateArgs} args - Arguments to update one Device.
     * @example
     * // Update one Device
     * const device = await prisma.device.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DeviceUpdateArgs>(args: SelectSubset<T, DeviceUpdateArgs<ExtArgs>>): Prisma__DeviceClient<$Result.GetResult<Prisma.$DevicePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Devices.
     * @param {DeviceDeleteManyArgs} args - Arguments to filter Devices to delete.
     * @example
     * // Delete a few Devices
     * const { count } = await prisma.device.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DeviceDeleteManyArgs>(args?: SelectSubset<T, DeviceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Devices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Devices
     * const device = await prisma.device.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DeviceUpdateManyArgs>(args: SelectSubset<T, DeviceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Devices and returns the data updated in the database.
     * @param {DeviceUpdateManyAndReturnArgs} args - Arguments to update many Devices.
     * @example
     * // Update many Devices
     * const device = await prisma.device.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Devices and only return the `id`
     * const deviceWithIdOnly = await prisma.device.updateManyAndReturn({
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
    updateManyAndReturn<T extends DeviceUpdateManyAndReturnArgs>(args: SelectSubset<T, DeviceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DevicePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Device.
     * @param {DeviceUpsertArgs} args - Arguments to update or create a Device.
     * @example
     * // Update or create a Device
     * const device = await prisma.device.upsert({
     *   create: {
     *     // ... data to create a Device
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Device we want to update
     *   }
     * })
     */
    upsert<T extends DeviceUpsertArgs>(args: SelectSubset<T, DeviceUpsertArgs<ExtArgs>>): Prisma__DeviceClient<$Result.GetResult<Prisma.$DevicePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Devices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceCountArgs} args - Arguments to filter Devices to count.
     * @example
     * // Count the number of Devices
     * const count = await prisma.device.count({
     *   where: {
     *     // ... the filter for the Devices we want to count
     *   }
     * })
    **/
    count<T extends DeviceCountArgs>(
      args?: Subset<T, DeviceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DeviceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Device.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DeviceAggregateArgs>(args: Subset<T, DeviceAggregateArgs>): Prisma.PrismaPromise<GetDeviceAggregateType<T>>

    /**
     * Group by Device.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceGroupByArgs} args - Group by arguments.
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
      T extends DeviceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DeviceGroupByArgs['orderBy'] }
        : { orderBy?: DeviceGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DeviceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDeviceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Device model
   */
  readonly fields: DeviceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Device.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DeviceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    customers<T extends Device$customersArgs<ExtArgs> = {}>(args?: Subset<T, Device$customersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Device model
   */
  interface DeviceFieldRefs {
    readonly id: FieldRef<"Device", 'String'>
    readonly name: FieldRef<"Device", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Device findUnique
   */
  export type DeviceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Device
     */
    select?: DeviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Device
     */
    omit?: DeviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceInclude<ExtArgs> | null
    /**
     * Filter, which Device to fetch.
     */
    where: DeviceWhereUniqueInput
  }

  /**
   * Device findUniqueOrThrow
   */
  export type DeviceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Device
     */
    select?: DeviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Device
     */
    omit?: DeviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceInclude<ExtArgs> | null
    /**
     * Filter, which Device to fetch.
     */
    where: DeviceWhereUniqueInput
  }

  /**
   * Device findFirst
   */
  export type DeviceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Device
     */
    select?: DeviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Device
     */
    omit?: DeviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceInclude<ExtArgs> | null
    /**
     * Filter, which Device to fetch.
     */
    where?: DeviceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Devices to fetch.
     */
    orderBy?: DeviceOrderByWithRelationInput | DeviceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Devices.
     */
    cursor?: DeviceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Devices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Devices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Devices.
     */
    distinct?: DeviceScalarFieldEnum | DeviceScalarFieldEnum[]
  }

  /**
   * Device findFirstOrThrow
   */
  export type DeviceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Device
     */
    select?: DeviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Device
     */
    omit?: DeviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceInclude<ExtArgs> | null
    /**
     * Filter, which Device to fetch.
     */
    where?: DeviceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Devices to fetch.
     */
    orderBy?: DeviceOrderByWithRelationInput | DeviceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Devices.
     */
    cursor?: DeviceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Devices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Devices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Devices.
     */
    distinct?: DeviceScalarFieldEnum | DeviceScalarFieldEnum[]
  }

  /**
   * Device findMany
   */
  export type DeviceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Device
     */
    select?: DeviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Device
     */
    omit?: DeviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceInclude<ExtArgs> | null
    /**
     * Filter, which Devices to fetch.
     */
    where?: DeviceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Devices to fetch.
     */
    orderBy?: DeviceOrderByWithRelationInput | DeviceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Devices.
     */
    cursor?: DeviceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Devices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Devices.
     */
    skip?: number
    distinct?: DeviceScalarFieldEnum | DeviceScalarFieldEnum[]
  }

  /**
   * Device create
   */
  export type DeviceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Device
     */
    select?: DeviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Device
     */
    omit?: DeviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceInclude<ExtArgs> | null
    /**
     * The data needed to create a Device.
     */
    data: XOR<DeviceCreateInput, DeviceUncheckedCreateInput>
  }

  /**
   * Device createMany
   */
  export type DeviceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Devices.
     */
    data: DeviceCreateManyInput | DeviceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Device createManyAndReturn
   */
  export type DeviceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Device
     */
    select?: DeviceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Device
     */
    omit?: DeviceOmit<ExtArgs> | null
    /**
     * The data used to create many Devices.
     */
    data: DeviceCreateManyInput | DeviceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Device update
   */
  export type DeviceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Device
     */
    select?: DeviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Device
     */
    omit?: DeviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceInclude<ExtArgs> | null
    /**
     * The data needed to update a Device.
     */
    data: XOR<DeviceUpdateInput, DeviceUncheckedUpdateInput>
    /**
     * Choose, which Device to update.
     */
    where: DeviceWhereUniqueInput
  }

  /**
   * Device updateMany
   */
  export type DeviceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Devices.
     */
    data: XOR<DeviceUpdateManyMutationInput, DeviceUncheckedUpdateManyInput>
    /**
     * Filter which Devices to update
     */
    where?: DeviceWhereInput
    /**
     * Limit how many Devices to update.
     */
    limit?: number
  }

  /**
   * Device updateManyAndReturn
   */
  export type DeviceUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Device
     */
    select?: DeviceSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Device
     */
    omit?: DeviceOmit<ExtArgs> | null
    /**
     * The data used to update Devices.
     */
    data: XOR<DeviceUpdateManyMutationInput, DeviceUncheckedUpdateManyInput>
    /**
     * Filter which Devices to update
     */
    where?: DeviceWhereInput
    /**
     * Limit how many Devices to update.
     */
    limit?: number
  }

  /**
   * Device upsert
   */
  export type DeviceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Device
     */
    select?: DeviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Device
     */
    omit?: DeviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceInclude<ExtArgs> | null
    /**
     * The filter to search for the Device to update in case it exists.
     */
    where: DeviceWhereUniqueInput
    /**
     * In case the Device found by the `where` argument doesn't exist, create a new Device with this data.
     */
    create: XOR<DeviceCreateInput, DeviceUncheckedCreateInput>
    /**
     * In case the Device was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DeviceUpdateInput, DeviceUncheckedUpdateInput>
  }

  /**
   * Device delete
   */
  export type DeviceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Device
     */
    select?: DeviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Device
     */
    omit?: DeviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceInclude<ExtArgs> | null
    /**
     * Filter which Device to delete.
     */
    where: DeviceWhereUniqueInput
  }

  /**
   * Device deleteMany
   */
  export type DeviceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Devices to delete
     */
    where?: DeviceWhereInput
    /**
     * Limit how many Devices to delete.
     */
    limit?: number
  }

  /**
   * Device.customers
   */
  export type Device$customersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    where?: CustomerWhereInput
    orderBy?: CustomerOrderByWithRelationInput | CustomerOrderByWithRelationInput[]
    cursor?: CustomerWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CustomerScalarFieldEnum | CustomerScalarFieldEnum[]
  }

  /**
   * Device without action
   */
  export type DeviceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Device
     */
    select?: DeviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Device
     */
    omit?: DeviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceInclude<ExtArgs> | null
  }


  /**
   * Model Merk
   */

  export type AggregateMerk = {
    _count: MerkCountAggregateOutputType | null
    _min: MerkMinAggregateOutputType | null
    _max: MerkMaxAggregateOutputType | null
  }

  export type MerkMinAggregateOutputType = {
    id: string | null
    name: string | null
  }

  export type MerkMaxAggregateOutputType = {
    id: string | null
    name: string | null
  }

  export type MerkCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type MerkMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type MerkMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type MerkCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type MerkAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Merk to aggregate.
     */
    where?: MerkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Merks to fetch.
     */
    orderBy?: MerkOrderByWithRelationInput | MerkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MerkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Merks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Merks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Merks
    **/
    _count?: true | MerkCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MerkMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MerkMaxAggregateInputType
  }

  export type GetMerkAggregateType<T extends MerkAggregateArgs> = {
        [P in keyof T & keyof AggregateMerk]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMerk[P]>
      : GetScalarType<T[P], AggregateMerk[P]>
  }




  export type MerkGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MerkWhereInput
    orderBy?: MerkOrderByWithAggregationInput | MerkOrderByWithAggregationInput[]
    by: MerkScalarFieldEnum[] | MerkScalarFieldEnum
    having?: MerkScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MerkCountAggregateInputType | true
    _min?: MerkMinAggregateInputType
    _max?: MerkMaxAggregateInputType
  }

  export type MerkGroupByOutputType = {
    id: string
    name: string
    _count: MerkCountAggregateOutputType | null
    _min: MerkMinAggregateOutputType | null
    _max: MerkMaxAggregateOutputType | null
  }

  type GetMerkGroupByPayload<T extends MerkGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MerkGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MerkGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MerkGroupByOutputType[P]>
            : GetScalarType<T[P], MerkGroupByOutputType[P]>
        }
      >
    >


  export type MerkSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    customers?: boolean | Merk$customersArgs<ExtArgs>
    _count?: boolean | MerkCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["merk"]>

  export type MerkSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["merk"]>

  export type MerkSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["merk"]>

  export type MerkSelectScalar = {
    id?: boolean
    name?: boolean
  }

  export type MerkOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name", ExtArgs["result"]["merk"]>
  export type MerkInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customers?: boolean | Merk$customersArgs<ExtArgs>
    _count?: boolean | MerkCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type MerkIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type MerkIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $MerkPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Merk"
    objects: {
      customers: Prisma.$CustomerPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
    }, ExtArgs["result"]["merk"]>
    composites: {}
  }

  type MerkGetPayload<S extends boolean | null | undefined | MerkDefaultArgs> = $Result.GetResult<Prisma.$MerkPayload, S>

  type MerkCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MerkFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MerkCountAggregateInputType | true
    }

  export interface MerkDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Merk'], meta: { name: 'Merk' } }
    /**
     * Find zero or one Merk that matches the filter.
     * @param {MerkFindUniqueArgs} args - Arguments to find a Merk
     * @example
     * // Get one Merk
     * const merk = await prisma.merk.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MerkFindUniqueArgs>(args: SelectSubset<T, MerkFindUniqueArgs<ExtArgs>>): Prisma__MerkClient<$Result.GetResult<Prisma.$MerkPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Merk that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MerkFindUniqueOrThrowArgs} args - Arguments to find a Merk
     * @example
     * // Get one Merk
     * const merk = await prisma.merk.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MerkFindUniqueOrThrowArgs>(args: SelectSubset<T, MerkFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MerkClient<$Result.GetResult<Prisma.$MerkPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Merk that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MerkFindFirstArgs} args - Arguments to find a Merk
     * @example
     * // Get one Merk
     * const merk = await prisma.merk.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MerkFindFirstArgs>(args?: SelectSubset<T, MerkFindFirstArgs<ExtArgs>>): Prisma__MerkClient<$Result.GetResult<Prisma.$MerkPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Merk that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MerkFindFirstOrThrowArgs} args - Arguments to find a Merk
     * @example
     * // Get one Merk
     * const merk = await prisma.merk.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MerkFindFirstOrThrowArgs>(args?: SelectSubset<T, MerkFindFirstOrThrowArgs<ExtArgs>>): Prisma__MerkClient<$Result.GetResult<Prisma.$MerkPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Merks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MerkFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Merks
     * const merks = await prisma.merk.findMany()
     * 
     * // Get first 10 Merks
     * const merks = await prisma.merk.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const merkWithIdOnly = await prisma.merk.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MerkFindManyArgs>(args?: SelectSubset<T, MerkFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MerkPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Merk.
     * @param {MerkCreateArgs} args - Arguments to create a Merk.
     * @example
     * // Create one Merk
     * const Merk = await prisma.merk.create({
     *   data: {
     *     // ... data to create a Merk
     *   }
     * })
     * 
     */
    create<T extends MerkCreateArgs>(args: SelectSubset<T, MerkCreateArgs<ExtArgs>>): Prisma__MerkClient<$Result.GetResult<Prisma.$MerkPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Merks.
     * @param {MerkCreateManyArgs} args - Arguments to create many Merks.
     * @example
     * // Create many Merks
     * const merk = await prisma.merk.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MerkCreateManyArgs>(args?: SelectSubset<T, MerkCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Merks and returns the data saved in the database.
     * @param {MerkCreateManyAndReturnArgs} args - Arguments to create many Merks.
     * @example
     * // Create many Merks
     * const merk = await prisma.merk.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Merks and only return the `id`
     * const merkWithIdOnly = await prisma.merk.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MerkCreateManyAndReturnArgs>(args?: SelectSubset<T, MerkCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MerkPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Merk.
     * @param {MerkDeleteArgs} args - Arguments to delete one Merk.
     * @example
     * // Delete one Merk
     * const Merk = await prisma.merk.delete({
     *   where: {
     *     // ... filter to delete one Merk
     *   }
     * })
     * 
     */
    delete<T extends MerkDeleteArgs>(args: SelectSubset<T, MerkDeleteArgs<ExtArgs>>): Prisma__MerkClient<$Result.GetResult<Prisma.$MerkPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Merk.
     * @param {MerkUpdateArgs} args - Arguments to update one Merk.
     * @example
     * // Update one Merk
     * const merk = await prisma.merk.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MerkUpdateArgs>(args: SelectSubset<T, MerkUpdateArgs<ExtArgs>>): Prisma__MerkClient<$Result.GetResult<Prisma.$MerkPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Merks.
     * @param {MerkDeleteManyArgs} args - Arguments to filter Merks to delete.
     * @example
     * // Delete a few Merks
     * const { count } = await prisma.merk.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MerkDeleteManyArgs>(args?: SelectSubset<T, MerkDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Merks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MerkUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Merks
     * const merk = await prisma.merk.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MerkUpdateManyArgs>(args: SelectSubset<T, MerkUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Merks and returns the data updated in the database.
     * @param {MerkUpdateManyAndReturnArgs} args - Arguments to update many Merks.
     * @example
     * // Update many Merks
     * const merk = await prisma.merk.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Merks and only return the `id`
     * const merkWithIdOnly = await prisma.merk.updateManyAndReturn({
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
    updateManyAndReturn<T extends MerkUpdateManyAndReturnArgs>(args: SelectSubset<T, MerkUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MerkPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Merk.
     * @param {MerkUpsertArgs} args - Arguments to update or create a Merk.
     * @example
     * // Update or create a Merk
     * const merk = await prisma.merk.upsert({
     *   create: {
     *     // ... data to create a Merk
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Merk we want to update
     *   }
     * })
     */
    upsert<T extends MerkUpsertArgs>(args: SelectSubset<T, MerkUpsertArgs<ExtArgs>>): Prisma__MerkClient<$Result.GetResult<Prisma.$MerkPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Merks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MerkCountArgs} args - Arguments to filter Merks to count.
     * @example
     * // Count the number of Merks
     * const count = await prisma.merk.count({
     *   where: {
     *     // ... the filter for the Merks we want to count
     *   }
     * })
    **/
    count<T extends MerkCountArgs>(
      args?: Subset<T, MerkCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MerkCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Merk.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MerkAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MerkAggregateArgs>(args: Subset<T, MerkAggregateArgs>): Prisma.PrismaPromise<GetMerkAggregateType<T>>

    /**
     * Group by Merk.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MerkGroupByArgs} args - Group by arguments.
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
      T extends MerkGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MerkGroupByArgs['orderBy'] }
        : { orderBy?: MerkGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MerkGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMerkGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Merk model
   */
  readonly fields: MerkFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Merk.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MerkClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    customers<T extends Merk$customersArgs<ExtArgs> = {}>(args?: Subset<T, Merk$customersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Merk model
   */
  interface MerkFieldRefs {
    readonly id: FieldRef<"Merk", 'String'>
    readonly name: FieldRef<"Merk", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Merk findUnique
   */
  export type MerkFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Merk
     */
    select?: MerkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Merk
     */
    omit?: MerkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MerkInclude<ExtArgs> | null
    /**
     * Filter, which Merk to fetch.
     */
    where: MerkWhereUniqueInput
  }

  /**
   * Merk findUniqueOrThrow
   */
  export type MerkFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Merk
     */
    select?: MerkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Merk
     */
    omit?: MerkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MerkInclude<ExtArgs> | null
    /**
     * Filter, which Merk to fetch.
     */
    where: MerkWhereUniqueInput
  }

  /**
   * Merk findFirst
   */
  export type MerkFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Merk
     */
    select?: MerkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Merk
     */
    omit?: MerkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MerkInclude<ExtArgs> | null
    /**
     * Filter, which Merk to fetch.
     */
    where?: MerkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Merks to fetch.
     */
    orderBy?: MerkOrderByWithRelationInput | MerkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Merks.
     */
    cursor?: MerkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Merks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Merks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Merks.
     */
    distinct?: MerkScalarFieldEnum | MerkScalarFieldEnum[]
  }

  /**
   * Merk findFirstOrThrow
   */
  export type MerkFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Merk
     */
    select?: MerkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Merk
     */
    omit?: MerkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MerkInclude<ExtArgs> | null
    /**
     * Filter, which Merk to fetch.
     */
    where?: MerkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Merks to fetch.
     */
    orderBy?: MerkOrderByWithRelationInput | MerkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Merks.
     */
    cursor?: MerkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Merks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Merks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Merks.
     */
    distinct?: MerkScalarFieldEnum | MerkScalarFieldEnum[]
  }

  /**
   * Merk findMany
   */
  export type MerkFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Merk
     */
    select?: MerkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Merk
     */
    omit?: MerkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MerkInclude<ExtArgs> | null
    /**
     * Filter, which Merks to fetch.
     */
    where?: MerkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Merks to fetch.
     */
    orderBy?: MerkOrderByWithRelationInput | MerkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Merks.
     */
    cursor?: MerkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Merks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Merks.
     */
    skip?: number
    distinct?: MerkScalarFieldEnum | MerkScalarFieldEnum[]
  }

  /**
   * Merk create
   */
  export type MerkCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Merk
     */
    select?: MerkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Merk
     */
    omit?: MerkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MerkInclude<ExtArgs> | null
    /**
     * The data needed to create a Merk.
     */
    data: XOR<MerkCreateInput, MerkUncheckedCreateInput>
  }

  /**
   * Merk createMany
   */
  export type MerkCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Merks.
     */
    data: MerkCreateManyInput | MerkCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Merk createManyAndReturn
   */
  export type MerkCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Merk
     */
    select?: MerkSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Merk
     */
    omit?: MerkOmit<ExtArgs> | null
    /**
     * The data used to create many Merks.
     */
    data: MerkCreateManyInput | MerkCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Merk update
   */
  export type MerkUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Merk
     */
    select?: MerkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Merk
     */
    omit?: MerkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MerkInclude<ExtArgs> | null
    /**
     * The data needed to update a Merk.
     */
    data: XOR<MerkUpdateInput, MerkUncheckedUpdateInput>
    /**
     * Choose, which Merk to update.
     */
    where: MerkWhereUniqueInput
  }

  /**
   * Merk updateMany
   */
  export type MerkUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Merks.
     */
    data: XOR<MerkUpdateManyMutationInput, MerkUncheckedUpdateManyInput>
    /**
     * Filter which Merks to update
     */
    where?: MerkWhereInput
    /**
     * Limit how many Merks to update.
     */
    limit?: number
  }

  /**
   * Merk updateManyAndReturn
   */
  export type MerkUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Merk
     */
    select?: MerkSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Merk
     */
    omit?: MerkOmit<ExtArgs> | null
    /**
     * The data used to update Merks.
     */
    data: XOR<MerkUpdateManyMutationInput, MerkUncheckedUpdateManyInput>
    /**
     * Filter which Merks to update
     */
    where?: MerkWhereInput
    /**
     * Limit how many Merks to update.
     */
    limit?: number
  }

  /**
   * Merk upsert
   */
  export type MerkUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Merk
     */
    select?: MerkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Merk
     */
    omit?: MerkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MerkInclude<ExtArgs> | null
    /**
     * The filter to search for the Merk to update in case it exists.
     */
    where: MerkWhereUniqueInput
    /**
     * In case the Merk found by the `where` argument doesn't exist, create a new Merk with this data.
     */
    create: XOR<MerkCreateInput, MerkUncheckedCreateInput>
    /**
     * In case the Merk was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MerkUpdateInput, MerkUncheckedUpdateInput>
  }

  /**
   * Merk delete
   */
  export type MerkDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Merk
     */
    select?: MerkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Merk
     */
    omit?: MerkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MerkInclude<ExtArgs> | null
    /**
     * Filter which Merk to delete.
     */
    where: MerkWhereUniqueInput
  }

  /**
   * Merk deleteMany
   */
  export type MerkDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Merks to delete
     */
    where?: MerkWhereInput
    /**
     * Limit how many Merks to delete.
     */
    limit?: number
  }

  /**
   * Merk.customers
   */
  export type Merk$customersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    where?: CustomerWhereInput
    orderBy?: CustomerOrderByWithRelationInput | CustomerOrderByWithRelationInput[]
    cursor?: CustomerWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CustomerScalarFieldEnum | CustomerScalarFieldEnum[]
  }

  /**
   * Merk without action
   */
  export type MerkDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Merk
     */
    select?: MerkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Merk
     */
    omit?: MerkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MerkInclude<ExtArgs> | null
  }


  /**
   * Model ServiceJob
   */

  export type AggregateServiceJob = {
    _count: ServiceJobCountAggregateOutputType | null
    _min: ServiceJobMinAggregateOutputType | null
    _max: ServiceJobMaxAggregateOutputType | null
  }

  export type ServiceJobMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    customerId: string | null
    accountId: string | null
    status: $Enums.ServiceJobStatus | null
    descriptionOfDamage: string | null
    updatedAt: Date | null
    endAt: Date | null
  }

  export type ServiceJobMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    customerId: string | null
    accountId: string | null
    status: $Enums.ServiceJobStatus | null
    descriptionOfDamage: string | null
    updatedAt: Date | null
    endAt: Date | null
  }

  export type ServiceJobCountAggregateOutputType = {
    id: number
    createdAt: number
    customerId: number
    accountId: number
    status: number
    descriptionOfDamage: number
    updatedAt: number
    endAt: number
    _all: number
  }


  export type ServiceJobMinAggregateInputType = {
    id?: true
    createdAt?: true
    customerId?: true
    accountId?: true
    status?: true
    descriptionOfDamage?: true
    updatedAt?: true
    endAt?: true
  }

  export type ServiceJobMaxAggregateInputType = {
    id?: true
    createdAt?: true
    customerId?: true
    accountId?: true
    status?: true
    descriptionOfDamage?: true
    updatedAt?: true
    endAt?: true
  }

  export type ServiceJobCountAggregateInputType = {
    id?: true
    createdAt?: true
    customerId?: true
    accountId?: true
    status?: true
    descriptionOfDamage?: true
    updatedAt?: true
    endAt?: true
    _all?: true
  }

  export type ServiceJobAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ServiceJob to aggregate.
     */
    where?: ServiceJobWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ServiceJobs to fetch.
     */
    orderBy?: ServiceJobOrderByWithRelationInput | ServiceJobOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ServiceJobWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ServiceJobs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ServiceJobs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ServiceJobs
    **/
    _count?: true | ServiceJobCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ServiceJobMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ServiceJobMaxAggregateInputType
  }

  export type GetServiceJobAggregateType<T extends ServiceJobAggregateArgs> = {
        [P in keyof T & keyof AggregateServiceJob]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateServiceJob[P]>
      : GetScalarType<T[P], AggregateServiceJob[P]>
  }




  export type ServiceJobGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ServiceJobWhereInput
    orderBy?: ServiceJobOrderByWithAggregationInput | ServiceJobOrderByWithAggregationInput[]
    by: ServiceJobScalarFieldEnum[] | ServiceJobScalarFieldEnum
    having?: ServiceJobScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ServiceJobCountAggregateInputType | true
    _min?: ServiceJobMinAggregateInputType
    _max?: ServiceJobMaxAggregateInputType
  }

  export type ServiceJobGroupByOutputType = {
    id: string
    createdAt: Date
    customerId: string
    accountId: string | null
    status: $Enums.ServiceJobStatus
    descriptionOfDamage: string | null
    updatedAt: Date | null
    endAt: Date | null
    _count: ServiceJobCountAggregateOutputType | null
    _min: ServiceJobMinAggregateOutputType | null
    _max: ServiceJobMaxAggregateOutputType | null
  }

  type GetServiceJobGroupByPayload<T extends ServiceJobGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ServiceJobGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ServiceJobGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ServiceJobGroupByOutputType[P]>
            : GetScalarType<T[P], ServiceJobGroupByOutputType[P]>
        }
      >
    >


  export type ServiceJobSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    customerId?: boolean
    accountId?: boolean
    status?: boolean
    descriptionOfDamage?: boolean
    updatedAt?: boolean
    endAt?: boolean
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
    account?: boolean | ServiceJob$accountArgs<ExtArgs>
  }, ExtArgs["result"]["serviceJob"]>

  export type ServiceJobSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    customerId?: boolean
    accountId?: boolean
    status?: boolean
    descriptionOfDamage?: boolean
    updatedAt?: boolean
    endAt?: boolean
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
    account?: boolean | ServiceJob$accountArgs<ExtArgs>
  }, ExtArgs["result"]["serviceJob"]>

  export type ServiceJobSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    customerId?: boolean
    accountId?: boolean
    status?: boolean
    descriptionOfDamage?: boolean
    updatedAt?: boolean
    endAt?: boolean
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
    account?: boolean | ServiceJob$accountArgs<ExtArgs>
  }, ExtArgs["result"]["serviceJob"]>

  export type ServiceJobSelectScalar = {
    id?: boolean
    createdAt?: boolean
    customerId?: boolean
    accountId?: boolean
    status?: boolean
    descriptionOfDamage?: boolean
    updatedAt?: boolean
    endAt?: boolean
  }

  export type ServiceJobOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "customerId" | "accountId" | "status" | "descriptionOfDamage" | "updatedAt" | "endAt", ExtArgs["result"]["serviceJob"]>
  export type ServiceJobInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
    account?: boolean | ServiceJob$accountArgs<ExtArgs>
  }
  export type ServiceJobIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
    account?: boolean | ServiceJob$accountArgs<ExtArgs>
  }
  export type ServiceJobIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
    account?: boolean | ServiceJob$accountArgs<ExtArgs>
  }

  export type $ServiceJobPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ServiceJob"
    objects: {
      customer: Prisma.$CustomerPayload<ExtArgs>
      account: Prisma.$AccountPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      createdAt: Date
      customerId: string
      accountId: string | null
      status: $Enums.ServiceJobStatus
      descriptionOfDamage: string | null
      updatedAt: Date | null
      endAt: Date | null
    }, ExtArgs["result"]["serviceJob"]>
    composites: {}
  }

  type ServiceJobGetPayload<S extends boolean | null | undefined | ServiceJobDefaultArgs> = $Result.GetResult<Prisma.$ServiceJobPayload, S>

  type ServiceJobCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ServiceJobFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ServiceJobCountAggregateInputType | true
    }

  export interface ServiceJobDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ServiceJob'], meta: { name: 'ServiceJob' } }
    /**
     * Find zero or one ServiceJob that matches the filter.
     * @param {ServiceJobFindUniqueArgs} args - Arguments to find a ServiceJob
     * @example
     * // Get one ServiceJob
     * const serviceJob = await prisma.serviceJob.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ServiceJobFindUniqueArgs>(args: SelectSubset<T, ServiceJobFindUniqueArgs<ExtArgs>>): Prisma__ServiceJobClient<$Result.GetResult<Prisma.$ServiceJobPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ServiceJob that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ServiceJobFindUniqueOrThrowArgs} args - Arguments to find a ServiceJob
     * @example
     * // Get one ServiceJob
     * const serviceJob = await prisma.serviceJob.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ServiceJobFindUniqueOrThrowArgs>(args: SelectSubset<T, ServiceJobFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ServiceJobClient<$Result.GetResult<Prisma.$ServiceJobPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ServiceJob that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceJobFindFirstArgs} args - Arguments to find a ServiceJob
     * @example
     * // Get one ServiceJob
     * const serviceJob = await prisma.serviceJob.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ServiceJobFindFirstArgs>(args?: SelectSubset<T, ServiceJobFindFirstArgs<ExtArgs>>): Prisma__ServiceJobClient<$Result.GetResult<Prisma.$ServiceJobPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ServiceJob that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceJobFindFirstOrThrowArgs} args - Arguments to find a ServiceJob
     * @example
     * // Get one ServiceJob
     * const serviceJob = await prisma.serviceJob.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ServiceJobFindFirstOrThrowArgs>(args?: SelectSubset<T, ServiceJobFindFirstOrThrowArgs<ExtArgs>>): Prisma__ServiceJobClient<$Result.GetResult<Prisma.$ServiceJobPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ServiceJobs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceJobFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ServiceJobs
     * const serviceJobs = await prisma.serviceJob.findMany()
     * 
     * // Get first 10 ServiceJobs
     * const serviceJobs = await prisma.serviceJob.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const serviceJobWithIdOnly = await prisma.serviceJob.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ServiceJobFindManyArgs>(args?: SelectSubset<T, ServiceJobFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServiceJobPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ServiceJob.
     * @param {ServiceJobCreateArgs} args - Arguments to create a ServiceJob.
     * @example
     * // Create one ServiceJob
     * const ServiceJob = await prisma.serviceJob.create({
     *   data: {
     *     // ... data to create a ServiceJob
     *   }
     * })
     * 
     */
    create<T extends ServiceJobCreateArgs>(args: SelectSubset<T, ServiceJobCreateArgs<ExtArgs>>): Prisma__ServiceJobClient<$Result.GetResult<Prisma.$ServiceJobPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ServiceJobs.
     * @param {ServiceJobCreateManyArgs} args - Arguments to create many ServiceJobs.
     * @example
     * // Create many ServiceJobs
     * const serviceJob = await prisma.serviceJob.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ServiceJobCreateManyArgs>(args?: SelectSubset<T, ServiceJobCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ServiceJobs and returns the data saved in the database.
     * @param {ServiceJobCreateManyAndReturnArgs} args - Arguments to create many ServiceJobs.
     * @example
     * // Create many ServiceJobs
     * const serviceJob = await prisma.serviceJob.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ServiceJobs and only return the `id`
     * const serviceJobWithIdOnly = await prisma.serviceJob.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ServiceJobCreateManyAndReturnArgs>(args?: SelectSubset<T, ServiceJobCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServiceJobPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ServiceJob.
     * @param {ServiceJobDeleteArgs} args - Arguments to delete one ServiceJob.
     * @example
     * // Delete one ServiceJob
     * const ServiceJob = await prisma.serviceJob.delete({
     *   where: {
     *     // ... filter to delete one ServiceJob
     *   }
     * })
     * 
     */
    delete<T extends ServiceJobDeleteArgs>(args: SelectSubset<T, ServiceJobDeleteArgs<ExtArgs>>): Prisma__ServiceJobClient<$Result.GetResult<Prisma.$ServiceJobPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ServiceJob.
     * @param {ServiceJobUpdateArgs} args - Arguments to update one ServiceJob.
     * @example
     * // Update one ServiceJob
     * const serviceJob = await prisma.serviceJob.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ServiceJobUpdateArgs>(args: SelectSubset<T, ServiceJobUpdateArgs<ExtArgs>>): Prisma__ServiceJobClient<$Result.GetResult<Prisma.$ServiceJobPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ServiceJobs.
     * @param {ServiceJobDeleteManyArgs} args - Arguments to filter ServiceJobs to delete.
     * @example
     * // Delete a few ServiceJobs
     * const { count } = await prisma.serviceJob.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ServiceJobDeleteManyArgs>(args?: SelectSubset<T, ServiceJobDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ServiceJobs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceJobUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ServiceJobs
     * const serviceJob = await prisma.serviceJob.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ServiceJobUpdateManyArgs>(args: SelectSubset<T, ServiceJobUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ServiceJobs and returns the data updated in the database.
     * @param {ServiceJobUpdateManyAndReturnArgs} args - Arguments to update many ServiceJobs.
     * @example
     * // Update many ServiceJobs
     * const serviceJob = await prisma.serviceJob.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ServiceJobs and only return the `id`
     * const serviceJobWithIdOnly = await prisma.serviceJob.updateManyAndReturn({
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
    updateManyAndReturn<T extends ServiceJobUpdateManyAndReturnArgs>(args: SelectSubset<T, ServiceJobUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServiceJobPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ServiceJob.
     * @param {ServiceJobUpsertArgs} args - Arguments to update or create a ServiceJob.
     * @example
     * // Update or create a ServiceJob
     * const serviceJob = await prisma.serviceJob.upsert({
     *   create: {
     *     // ... data to create a ServiceJob
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ServiceJob we want to update
     *   }
     * })
     */
    upsert<T extends ServiceJobUpsertArgs>(args: SelectSubset<T, ServiceJobUpsertArgs<ExtArgs>>): Prisma__ServiceJobClient<$Result.GetResult<Prisma.$ServiceJobPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ServiceJobs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceJobCountArgs} args - Arguments to filter ServiceJobs to count.
     * @example
     * // Count the number of ServiceJobs
     * const count = await prisma.serviceJob.count({
     *   where: {
     *     // ... the filter for the ServiceJobs we want to count
     *   }
     * })
    **/
    count<T extends ServiceJobCountArgs>(
      args?: Subset<T, ServiceJobCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ServiceJobCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ServiceJob.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceJobAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ServiceJobAggregateArgs>(args: Subset<T, ServiceJobAggregateArgs>): Prisma.PrismaPromise<GetServiceJobAggregateType<T>>

    /**
     * Group by ServiceJob.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceJobGroupByArgs} args - Group by arguments.
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
      T extends ServiceJobGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ServiceJobGroupByArgs['orderBy'] }
        : { orderBy?: ServiceJobGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ServiceJobGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetServiceJobGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ServiceJob model
   */
  readonly fields: ServiceJobFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ServiceJob.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ServiceJobClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    customer<T extends CustomerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CustomerDefaultArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    account<T extends ServiceJob$accountArgs<ExtArgs> = {}>(args?: Subset<T, ServiceJob$accountArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the ServiceJob model
   */
  interface ServiceJobFieldRefs {
    readonly id: FieldRef<"ServiceJob", 'String'>
    readonly createdAt: FieldRef<"ServiceJob", 'DateTime'>
    readonly customerId: FieldRef<"ServiceJob", 'String'>
    readonly accountId: FieldRef<"ServiceJob", 'String'>
    readonly status: FieldRef<"ServiceJob", 'ServiceJobStatus'>
    readonly descriptionOfDamage: FieldRef<"ServiceJob", 'String'>
    readonly updatedAt: FieldRef<"ServiceJob", 'DateTime'>
    readonly endAt: FieldRef<"ServiceJob", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ServiceJob findUnique
   */
  export type ServiceJobFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceJob
     */
    select?: ServiceJobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceJob
     */
    omit?: ServiceJobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceJobInclude<ExtArgs> | null
    /**
     * Filter, which ServiceJob to fetch.
     */
    where: ServiceJobWhereUniqueInput
  }

  /**
   * ServiceJob findUniqueOrThrow
   */
  export type ServiceJobFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceJob
     */
    select?: ServiceJobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceJob
     */
    omit?: ServiceJobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceJobInclude<ExtArgs> | null
    /**
     * Filter, which ServiceJob to fetch.
     */
    where: ServiceJobWhereUniqueInput
  }

  /**
   * ServiceJob findFirst
   */
  export type ServiceJobFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceJob
     */
    select?: ServiceJobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceJob
     */
    omit?: ServiceJobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceJobInclude<ExtArgs> | null
    /**
     * Filter, which ServiceJob to fetch.
     */
    where?: ServiceJobWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ServiceJobs to fetch.
     */
    orderBy?: ServiceJobOrderByWithRelationInput | ServiceJobOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ServiceJobs.
     */
    cursor?: ServiceJobWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ServiceJobs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ServiceJobs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ServiceJobs.
     */
    distinct?: ServiceJobScalarFieldEnum | ServiceJobScalarFieldEnum[]
  }

  /**
   * ServiceJob findFirstOrThrow
   */
  export type ServiceJobFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceJob
     */
    select?: ServiceJobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceJob
     */
    omit?: ServiceJobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceJobInclude<ExtArgs> | null
    /**
     * Filter, which ServiceJob to fetch.
     */
    where?: ServiceJobWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ServiceJobs to fetch.
     */
    orderBy?: ServiceJobOrderByWithRelationInput | ServiceJobOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ServiceJobs.
     */
    cursor?: ServiceJobWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ServiceJobs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ServiceJobs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ServiceJobs.
     */
    distinct?: ServiceJobScalarFieldEnum | ServiceJobScalarFieldEnum[]
  }

  /**
   * ServiceJob findMany
   */
  export type ServiceJobFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceJob
     */
    select?: ServiceJobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceJob
     */
    omit?: ServiceJobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceJobInclude<ExtArgs> | null
    /**
     * Filter, which ServiceJobs to fetch.
     */
    where?: ServiceJobWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ServiceJobs to fetch.
     */
    orderBy?: ServiceJobOrderByWithRelationInput | ServiceJobOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ServiceJobs.
     */
    cursor?: ServiceJobWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ServiceJobs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ServiceJobs.
     */
    skip?: number
    distinct?: ServiceJobScalarFieldEnum | ServiceJobScalarFieldEnum[]
  }

  /**
   * ServiceJob create
   */
  export type ServiceJobCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceJob
     */
    select?: ServiceJobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceJob
     */
    omit?: ServiceJobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceJobInclude<ExtArgs> | null
    /**
     * The data needed to create a ServiceJob.
     */
    data: XOR<ServiceJobCreateInput, ServiceJobUncheckedCreateInput>
  }

  /**
   * ServiceJob createMany
   */
  export type ServiceJobCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ServiceJobs.
     */
    data: ServiceJobCreateManyInput | ServiceJobCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ServiceJob createManyAndReturn
   */
  export type ServiceJobCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceJob
     */
    select?: ServiceJobSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceJob
     */
    omit?: ServiceJobOmit<ExtArgs> | null
    /**
     * The data used to create many ServiceJobs.
     */
    data: ServiceJobCreateManyInput | ServiceJobCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceJobIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ServiceJob update
   */
  export type ServiceJobUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceJob
     */
    select?: ServiceJobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceJob
     */
    omit?: ServiceJobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceJobInclude<ExtArgs> | null
    /**
     * The data needed to update a ServiceJob.
     */
    data: XOR<ServiceJobUpdateInput, ServiceJobUncheckedUpdateInput>
    /**
     * Choose, which ServiceJob to update.
     */
    where: ServiceJobWhereUniqueInput
  }

  /**
   * ServiceJob updateMany
   */
  export type ServiceJobUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ServiceJobs.
     */
    data: XOR<ServiceJobUpdateManyMutationInput, ServiceJobUncheckedUpdateManyInput>
    /**
     * Filter which ServiceJobs to update
     */
    where?: ServiceJobWhereInput
    /**
     * Limit how many ServiceJobs to update.
     */
    limit?: number
  }

  /**
   * ServiceJob updateManyAndReturn
   */
  export type ServiceJobUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceJob
     */
    select?: ServiceJobSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceJob
     */
    omit?: ServiceJobOmit<ExtArgs> | null
    /**
     * The data used to update ServiceJobs.
     */
    data: XOR<ServiceJobUpdateManyMutationInput, ServiceJobUncheckedUpdateManyInput>
    /**
     * Filter which ServiceJobs to update
     */
    where?: ServiceJobWhereInput
    /**
     * Limit how many ServiceJobs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceJobIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ServiceJob upsert
   */
  export type ServiceJobUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceJob
     */
    select?: ServiceJobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceJob
     */
    omit?: ServiceJobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceJobInclude<ExtArgs> | null
    /**
     * The filter to search for the ServiceJob to update in case it exists.
     */
    where: ServiceJobWhereUniqueInput
    /**
     * In case the ServiceJob found by the `where` argument doesn't exist, create a new ServiceJob with this data.
     */
    create: XOR<ServiceJobCreateInput, ServiceJobUncheckedCreateInput>
    /**
     * In case the ServiceJob was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ServiceJobUpdateInput, ServiceJobUncheckedUpdateInput>
  }

  /**
   * ServiceJob delete
   */
  export type ServiceJobDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceJob
     */
    select?: ServiceJobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceJob
     */
    omit?: ServiceJobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceJobInclude<ExtArgs> | null
    /**
     * Filter which ServiceJob to delete.
     */
    where: ServiceJobWhereUniqueInput
  }

  /**
   * ServiceJob deleteMany
   */
  export type ServiceJobDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ServiceJobs to delete
     */
    where?: ServiceJobWhereInput
    /**
     * Limit how many ServiceJobs to delete.
     */
    limit?: number
  }

  /**
   * ServiceJob.account
   */
  export type ServiceJob$accountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    where?: AccountWhereInput
  }

  /**
   * ServiceJob without action
   */
  export type ServiceJobDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceJob
     */
    select?: ServiceJobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceJob
     */
    omit?: ServiceJobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceJobInclude<ExtArgs> | null
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


  export const AccountScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    password: 'password',
    role: 'role',
    isVerified: 'isVerified'
  };

  export type AccountScalarFieldEnum = (typeof AccountScalarFieldEnum)[keyof typeof AccountScalarFieldEnum]


  export const CustomerScalarFieldEnum: {
    id: 'id',
    fullName: 'fullName',
    deviceId: 'deviceId',
    merkId: 'merkId',
    devicePhoto: 'devicePhoto',
    complaint: 'complaint',
    preferredPickupDate: 'preferredPickupDate',
    preferredPickupTime: 'preferredPickupTime',
    pickupStatus: 'pickupStatus',
    requestForDelivery: 'requestForDelivery'
  };

  export type CustomerScalarFieldEnum = (typeof CustomerScalarFieldEnum)[keyof typeof CustomerScalarFieldEnum]


  export const DeviceScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type DeviceScalarFieldEnum = (typeof DeviceScalarFieldEnum)[keyof typeof DeviceScalarFieldEnum]


  export const MerkScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type MerkScalarFieldEnum = (typeof MerkScalarFieldEnum)[keyof typeof MerkScalarFieldEnum]


  export const ServiceJobScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    customerId: 'customerId',
    accountId: 'accountId',
    status: 'status',
    descriptionOfDamage: 'descriptionOfDamage',
    updatedAt: 'updatedAt',
    endAt: 'endAt'
  };

  export type ServiceJobScalarFieldEnum = (typeof ServiceJobScalarFieldEnum)[keyof typeof ServiceJobScalarFieldEnum]


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
   * Reference to a field of type 'AccountRole'
   */
  export type EnumAccountRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AccountRole'>
    


  /**
   * Reference to a field of type 'AccountRole[]'
   */
  export type ListEnumAccountRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AccountRole[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'PickupStatus'
   */
  export type EnumPickupStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PickupStatus'>
    


  /**
   * Reference to a field of type 'PickupStatus[]'
   */
  export type ListEnumPickupStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PickupStatus[]'>
    


  /**
   * Reference to a field of type 'ServiceJobStatus'
   */
  export type EnumServiceJobStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ServiceJobStatus'>
    


  /**
   * Reference to a field of type 'ServiceJobStatus[]'
   */
  export type ListEnumServiceJobStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ServiceJobStatus[]'>
    


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


  export type AccountWhereInput = {
    AND?: AccountWhereInput | AccountWhereInput[]
    OR?: AccountWhereInput[]
    NOT?: AccountWhereInput | AccountWhereInput[]
    id?: StringFilter<"Account"> | string
    name?: StringFilter<"Account"> | string
    email?: StringFilter<"Account"> | string
    password?: StringFilter<"Account"> | string
    role?: EnumAccountRoleFilter<"Account"> | $Enums.AccountRole
    isVerified?: BoolFilter<"Account"> | boolean
    serviceJobs?: ServiceJobListRelationFilter
  }

  export type AccountOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    isVerified?: SortOrder
    serviceJobs?: ServiceJobOrderByRelationAggregateInput
  }

  export type AccountWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    email?: string
    password?: string
    AND?: AccountWhereInput | AccountWhereInput[]
    OR?: AccountWhereInput[]
    NOT?: AccountWhereInput | AccountWhereInput[]
    role?: EnumAccountRoleFilter<"Account"> | $Enums.AccountRole
    isVerified?: BoolFilter<"Account"> | boolean
    serviceJobs?: ServiceJobListRelationFilter
  }, "id" | "name" | "email" | "password">

  export type AccountOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    isVerified?: SortOrder
    _count?: AccountCountOrderByAggregateInput
    _max?: AccountMaxOrderByAggregateInput
    _min?: AccountMinOrderByAggregateInput
  }

  export type AccountScalarWhereWithAggregatesInput = {
    AND?: AccountScalarWhereWithAggregatesInput | AccountScalarWhereWithAggregatesInput[]
    OR?: AccountScalarWhereWithAggregatesInput[]
    NOT?: AccountScalarWhereWithAggregatesInput | AccountScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Account"> | string
    name?: StringWithAggregatesFilter<"Account"> | string
    email?: StringWithAggregatesFilter<"Account"> | string
    password?: StringWithAggregatesFilter<"Account"> | string
    role?: EnumAccountRoleWithAggregatesFilter<"Account"> | $Enums.AccountRole
    isVerified?: BoolWithAggregatesFilter<"Account"> | boolean
  }

  export type CustomerWhereInput = {
    AND?: CustomerWhereInput | CustomerWhereInput[]
    OR?: CustomerWhereInput[]
    NOT?: CustomerWhereInput | CustomerWhereInput[]
    id?: StringFilter<"Customer"> | string
    fullName?: StringFilter<"Customer"> | string
    deviceId?: StringFilter<"Customer"> | string
    merkId?: StringFilter<"Customer"> | string
    devicePhoto?: StringNullableFilter<"Customer"> | string | null
    complaint?: StringFilter<"Customer"> | string
    preferredPickupDate?: DateTimeNullableFilter<"Customer"> | Date | string | null
    preferredPickupTime?: StringNullableFilter<"Customer"> | string | null
    pickupStatus?: EnumPickupStatusFilter<"Customer"> | $Enums.PickupStatus
    requestForDelivery?: BoolFilter<"Customer"> | boolean
    device?: XOR<DeviceScalarRelationFilter, DeviceWhereInput>
    merk?: XOR<MerkScalarRelationFilter, MerkWhereInput>
    serviceJobs?: ServiceJobListRelationFilter
  }

  export type CustomerOrderByWithRelationInput = {
    id?: SortOrder
    fullName?: SortOrder
    deviceId?: SortOrder
    merkId?: SortOrder
    devicePhoto?: SortOrderInput | SortOrder
    complaint?: SortOrder
    preferredPickupDate?: SortOrderInput | SortOrder
    preferredPickupTime?: SortOrderInput | SortOrder
    pickupStatus?: SortOrder
    requestForDelivery?: SortOrder
    device?: DeviceOrderByWithRelationInput
    merk?: MerkOrderByWithRelationInput
    serviceJobs?: ServiceJobOrderByRelationAggregateInput
  }

  export type CustomerWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CustomerWhereInput | CustomerWhereInput[]
    OR?: CustomerWhereInput[]
    NOT?: CustomerWhereInput | CustomerWhereInput[]
    fullName?: StringFilter<"Customer"> | string
    deviceId?: StringFilter<"Customer"> | string
    merkId?: StringFilter<"Customer"> | string
    devicePhoto?: StringNullableFilter<"Customer"> | string | null
    complaint?: StringFilter<"Customer"> | string
    preferredPickupDate?: DateTimeNullableFilter<"Customer"> | Date | string | null
    preferredPickupTime?: StringNullableFilter<"Customer"> | string | null
    pickupStatus?: EnumPickupStatusFilter<"Customer"> | $Enums.PickupStatus
    requestForDelivery?: BoolFilter<"Customer"> | boolean
    device?: XOR<DeviceScalarRelationFilter, DeviceWhereInput>
    merk?: XOR<MerkScalarRelationFilter, MerkWhereInput>
    serviceJobs?: ServiceJobListRelationFilter
  }, "id">

  export type CustomerOrderByWithAggregationInput = {
    id?: SortOrder
    fullName?: SortOrder
    deviceId?: SortOrder
    merkId?: SortOrder
    devicePhoto?: SortOrderInput | SortOrder
    complaint?: SortOrder
    preferredPickupDate?: SortOrderInput | SortOrder
    preferredPickupTime?: SortOrderInput | SortOrder
    pickupStatus?: SortOrder
    requestForDelivery?: SortOrder
    _count?: CustomerCountOrderByAggregateInput
    _max?: CustomerMaxOrderByAggregateInput
    _min?: CustomerMinOrderByAggregateInput
  }

  export type CustomerScalarWhereWithAggregatesInput = {
    AND?: CustomerScalarWhereWithAggregatesInput | CustomerScalarWhereWithAggregatesInput[]
    OR?: CustomerScalarWhereWithAggregatesInput[]
    NOT?: CustomerScalarWhereWithAggregatesInput | CustomerScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Customer"> | string
    fullName?: StringWithAggregatesFilter<"Customer"> | string
    deviceId?: StringWithAggregatesFilter<"Customer"> | string
    merkId?: StringWithAggregatesFilter<"Customer"> | string
    devicePhoto?: StringNullableWithAggregatesFilter<"Customer"> | string | null
    complaint?: StringWithAggregatesFilter<"Customer"> | string
    preferredPickupDate?: DateTimeNullableWithAggregatesFilter<"Customer"> | Date | string | null
    preferredPickupTime?: StringNullableWithAggregatesFilter<"Customer"> | string | null
    pickupStatus?: EnumPickupStatusWithAggregatesFilter<"Customer"> | $Enums.PickupStatus
    requestForDelivery?: BoolWithAggregatesFilter<"Customer"> | boolean
  }

  export type DeviceWhereInput = {
    AND?: DeviceWhereInput | DeviceWhereInput[]
    OR?: DeviceWhereInput[]
    NOT?: DeviceWhereInput | DeviceWhereInput[]
    id?: StringFilter<"Device"> | string
    name?: StringFilter<"Device"> | string
    customers?: CustomerListRelationFilter
  }

  export type DeviceOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    customers?: CustomerOrderByRelationAggregateInput
  }

  export type DeviceWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    AND?: DeviceWhereInput | DeviceWhereInput[]
    OR?: DeviceWhereInput[]
    NOT?: DeviceWhereInput | DeviceWhereInput[]
    customers?: CustomerListRelationFilter
  }, "id" | "name">

  export type DeviceOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: DeviceCountOrderByAggregateInput
    _max?: DeviceMaxOrderByAggregateInput
    _min?: DeviceMinOrderByAggregateInput
  }

  export type DeviceScalarWhereWithAggregatesInput = {
    AND?: DeviceScalarWhereWithAggregatesInput | DeviceScalarWhereWithAggregatesInput[]
    OR?: DeviceScalarWhereWithAggregatesInput[]
    NOT?: DeviceScalarWhereWithAggregatesInput | DeviceScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Device"> | string
    name?: StringWithAggregatesFilter<"Device"> | string
  }

  export type MerkWhereInput = {
    AND?: MerkWhereInput | MerkWhereInput[]
    OR?: MerkWhereInput[]
    NOT?: MerkWhereInput | MerkWhereInput[]
    id?: StringFilter<"Merk"> | string
    name?: StringFilter<"Merk"> | string
    customers?: CustomerListRelationFilter
  }

  export type MerkOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    customers?: CustomerOrderByRelationAggregateInput
  }

  export type MerkWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    AND?: MerkWhereInput | MerkWhereInput[]
    OR?: MerkWhereInput[]
    NOT?: MerkWhereInput | MerkWhereInput[]
    customers?: CustomerListRelationFilter
  }, "id" | "name">

  export type MerkOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: MerkCountOrderByAggregateInput
    _max?: MerkMaxOrderByAggregateInput
    _min?: MerkMinOrderByAggregateInput
  }

  export type MerkScalarWhereWithAggregatesInput = {
    AND?: MerkScalarWhereWithAggregatesInput | MerkScalarWhereWithAggregatesInput[]
    OR?: MerkScalarWhereWithAggregatesInput[]
    NOT?: MerkScalarWhereWithAggregatesInput | MerkScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Merk"> | string
    name?: StringWithAggregatesFilter<"Merk"> | string
  }

  export type ServiceJobWhereInput = {
    AND?: ServiceJobWhereInput | ServiceJobWhereInput[]
    OR?: ServiceJobWhereInput[]
    NOT?: ServiceJobWhereInput | ServiceJobWhereInput[]
    id?: StringFilter<"ServiceJob"> | string
    createdAt?: DateTimeFilter<"ServiceJob"> | Date | string
    customerId?: StringFilter<"ServiceJob"> | string
    accountId?: StringNullableFilter<"ServiceJob"> | string | null
    status?: EnumServiceJobStatusFilter<"ServiceJob"> | $Enums.ServiceJobStatus
    descriptionOfDamage?: StringNullableFilter<"ServiceJob"> | string | null
    updatedAt?: DateTimeNullableFilter<"ServiceJob"> | Date | string | null
    endAt?: DateTimeNullableFilter<"ServiceJob"> | Date | string | null
    customer?: XOR<CustomerScalarRelationFilter, CustomerWhereInput>
    account?: XOR<AccountNullableScalarRelationFilter, AccountWhereInput> | null
  }

  export type ServiceJobOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    customerId?: SortOrder
    accountId?: SortOrderInput | SortOrder
    status?: SortOrder
    descriptionOfDamage?: SortOrderInput | SortOrder
    updatedAt?: SortOrderInput | SortOrder
    endAt?: SortOrderInput | SortOrder
    customer?: CustomerOrderByWithRelationInput
    account?: AccountOrderByWithRelationInput
  }

  export type ServiceJobWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ServiceJobWhereInput | ServiceJobWhereInput[]
    OR?: ServiceJobWhereInput[]
    NOT?: ServiceJobWhereInput | ServiceJobWhereInput[]
    createdAt?: DateTimeFilter<"ServiceJob"> | Date | string
    customerId?: StringFilter<"ServiceJob"> | string
    accountId?: StringNullableFilter<"ServiceJob"> | string | null
    status?: EnumServiceJobStatusFilter<"ServiceJob"> | $Enums.ServiceJobStatus
    descriptionOfDamage?: StringNullableFilter<"ServiceJob"> | string | null
    updatedAt?: DateTimeNullableFilter<"ServiceJob"> | Date | string | null
    endAt?: DateTimeNullableFilter<"ServiceJob"> | Date | string | null
    customer?: XOR<CustomerScalarRelationFilter, CustomerWhereInput>
    account?: XOR<AccountNullableScalarRelationFilter, AccountWhereInput> | null
  }, "id">

  export type ServiceJobOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    customerId?: SortOrder
    accountId?: SortOrderInput | SortOrder
    status?: SortOrder
    descriptionOfDamage?: SortOrderInput | SortOrder
    updatedAt?: SortOrderInput | SortOrder
    endAt?: SortOrderInput | SortOrder
    _count?: ServiceJobCountOrderByAggregateInput
    _max?: ServiceJobMaxOrderByAggregateInput
    _min?: ServiceJobMinOrderByAggregateInput
  }

  export type ServiceJobScalarWhereWithAggregatesInput = {
    AND?: ServiceJobScalarWhereWithAggregatesInput | ServiceJobScalarWhereWithAggregatesInput[]
    OR?: ServiceJobScalarWhereWithAggregatesInput[]
    NOT?: ServiceJobScalarWhereWithAggregatesInput | ServiceJobScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ServiceJob"> | string
    createdAt?: DateTimeWithAggregatesFilter<"ServiceJob"> | Date | string
    customerId?: StringWithAggregatesFilter<"ServiceJob"> | string
    accountId?: StringNullableWithAggregatesFilter<"ServiceJob"> | string | null
    status?: EnumServiceJobStatusWithAggregatesFilter<"ServiceJob"> | $Enums.ServiceJobStatus
    descriptionOfDamage?: StringNullableWithAggregatesFilter<"ServiceJob"> | string | null
    updatedAt?: DateTimeNullableWithAggregatesFilter<"ServiceJob"> | Date | string | null
    endAt?: DateTimeNullableWithAggregatesFilter<"ServiceJob"> | Date | string | null
  }

  export type AccountCreateInput = {
    id?: string
    name: string
    email: string
    password: string
    role?: $Enums.AccountRole
    isVerified?: boolean
    serviceJobs?: ServiceJobCreateNestedManyWithoutAccountInput
  }

  export type AccountUncheckedCreateInput = {
    id?: string
    name: string
    email: string
    password: string
    role?: $Enums.AccountRole
    isVerified?: boolean
    serviceJobs?: ServiceJobUncheckedCreateNestedManyWithoutAccountInput
  }

  export type AccountUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumAccountRoleFieldUpdateOperationsInput | $Enums.AccountRole
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    serviceJobs?: ServiceJobUpdateManyWithoutAccountNestedInput
  }

  export type AccountUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumAccountRoleFieldUpdateOperationsInput | $Enums.AccountRole
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    serviceJobs?: ServiceJobUncheckedUpdateManyWithoutAccountNestedInput
  }

  export type AccountCreateManyInput = {
    id?: string
    name: string
    email: string
    password: string
    role?: $Enums.AccountRole
    isVerified?: boolean
  }

  export type AccountUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumAccountRoleFieldUpdateOperationsInput | $Enums.AccountRole
    isVerified?: BoolFieldUpdateOperationsInput | boolean
  }

  export type AccountUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumAccountRoleFieldUpdateOperationsInput | $Enums.AccountRole
    isVerified?: BoolFieldUpdateOperationsInput | boolean
  }

  export type CustomerCreateInput = {
    id?: string
    fullName: string
    devicePhoto?: string | null
    complaint: string
    preferredPickupDate?: Date | string | null
    preferredPickupTime?: string | null
    pickupStatus: $Enums.PickupStatus
    requestForDelivery: boolean
    device: DeviceCreateNestedOneWithoutCustomersInput
    merk: MerkCreateNestedOneWithoutCustomersInput
    serviceJobs?: ServiceJobCreateNestedManyWithoutCustomerInput
  }

  export type CustomerUncheckedCreateInput = {
    id?: string
    fullName: string
    deviceId: string
    merkId: string
    devicePhoto?: string | null
    complaint: string
    preferredPickupDate?: Date | string | null
    preferredPickupTime?: string | null
    pickupStatus: $Enums.PickupStatus
    requestForDelivery: boolean
    serviceJobs?: ServiceJobUncheckedCreateNestedManyWithoutCustomerInput
  }

  export type CustomerUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    devicePhoto?: NullableStringFieldUpdateOperationsInput | string | null
    complaint?: StringFieldUpdateOperationsInput | string
    preferredPickupDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    preferredPickupTime?: NullableStringFieldUpdateOperationsInput | string | null
    pickupStatus?: EnumPickupStatusFieldUpdateOperationsInput | $Enums.PickupStatus
    requestForDelivery?: BoolFieldUpdateOperationsInput | boolean
    device?: DeviceUpdateOneRequiredWithoutCustomersNestedInput
    merk?: MerkUpdateOneRequiredWithoutCustomersNestedInput
    serviceJobs?: ServiceJobUpdateManyWithoutCustomerNestedInput
  }

  export type CustomerUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    deviceId?: StringFieldUpdateOperationsInput | string
    merkId?: StringFieldUpdateOperationsInput | string
    devicePhoto?: NullableStringFieldUpdateOperationsInput | string | null
    complaint?: StringFieldUpdateOperationsInput | string
    preferredPickupDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    preferredPickupTime?: NullableStringFieldUpdateOperationsInput | string | null
    pickupStatus?: EnumPickupStatusFieldUpdateOperationsInput | $Enums.PickupStatus
    requestForDelivery?: BoolFieldUpdateOperationsInput | boolean
    serviceJobs?: ServiceJobUncheckedUpdateManyWithoutCustomerNestedInput
  }

  export type CustomerCreateManyInput = {
    id?: string
    fullName: string
    deviceId: string
    merkId: string
    devicePhoto?: string | null
    complaint: string
    preferredPickupDate?: Date | string | null
    preferredPickupTime?: string | null
    pickupStatus: $Enums.PickupStatus
    requestForDelivery: boolean
  }

  export type CustomerUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    devicePhoto?: NullableStringFieldUpdateOperationsInput | string | null
    complaint?: StringFieldUpdateOperationsInput | string
    preferredPickupDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    preferredPickupTime?: NullableStringFieldUpdateOperationsInput | string | null
    pickupStatus?: EnumPickupStatusFieldUpdateOperationsInput | $Enums.PickupStatus
    requestForDelivery?: BoolFieldUpdateOperationsInput | boolean
  }

  export type CustomerUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    deviceId?: StringFieldUpdateOperationsInput | string
    merkId?: StringFieldUpdateOperationsInput | string
    devicePhoto?: NullableStringFieldUpdateOperationsInput | string | null
    complaint?: StringFieldUpdateOperationsInput | string
    preferredPickupDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    preferredPickupTime?: NullableStringFieldUpdateOperationsInput | string | null
    pickupStatus?: EnumPickupStatusFieldUpdateOperationsInput | $Enums.PickupStatus
    requestForDelivery?: BoolFieldUpdateOperationsInput | boolean
  }

  export type DeviceCreateInput = {
    id?: string
    name: string
    customers?: CustomerCreateNestedManyWithoutDeviceInput
  }

  export type DeviceUncheckedCreateInput = {
    id?: string
    name: string
    customers?: CustomerUncheckedCreateNestedManyWithoutDeviceInput
  }

  export type DeviceUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    customers?: CustomerUpdateManyWithoutDeviceNestedInput
  }

  export type DeviceUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    customers?: CustomerUncheckedUpdateManyWithoutDeviceNestedInput
  }

  export type DeviceCreateManyInput = {
    id?: string
    name: string
  }

  export type DeviceUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type DeviceUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type MerkCreateInput = {
    id?: string
    name: string
    customers?: CustomerCreateNestedManyWithoutMerkInput
  }

  export type MerkUncheckedCreateInput = {
    id?: string
    name: string
    customers?: CustomerUncheckedCreateNestedManyWithoutMerkInput
  }

  export type MerkUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    customers?: CustomerUpdateManyWithoutMerkNestedInput
  }

  export type MerkUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    customers?: CustomerUncheckedUpdateManyWithoutMerkNestedInput
  }

  export type MerkCreateManyInput = {
    id?: string
    name: string
  }

  export type MerkUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type MerkUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type ServiceJobCreateInput = {
    id?: string
    createdAt?: Date | string
    status: $Enums.ServiceJobStatus
    descriptionOfDamage?: string | null
    updatedAt?: Date | string | null
    endAt?: Date | string | null
    customer: CustomerCreateNestedOneWithoutServiceJobsInput
    account?: AccountCreateNestedOneWithoutServiceJobsInput
  }

  export type ServiceJobUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    customerId: string
    accountId?: string | null
    status: $Enums.ServiceJobStatus
    descriptionOfDamage?: string | null
    updatedAt?: Date | string | null
    endAt?: Date | string | null
  }

  export type ServiceJobUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumServiceJobStatusFieldUpdateOperationsInput | $Enums.ServiceJobStatus
    descriptionOfDamage?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    customer?: CustomerUpdateOneRequiredWithoutServiceJobsNestedInput
    account?: AccountUpdateOneWithoutServiceJobsNestedInput
  }

  export type ServiceJobUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    customerId?: StringFieldUpdateOperationsInput | string
    accountId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumServiceJobStatusFieldUpdateOperationsInput | $Enums.ServiceJobStatus
    descriptionOfDamage?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ServiceJobCreateManyInput = {
    id?: string
    createdAt?: Date | string
    customerId: string
    accountId?: string | null
    status: $Enums.ServiceJobStatus
    descriptionOfDamage?: string | null
    updatedAt?: Date | string | null
    endAt?: Date | string | null
  }

  export type ServiceJobUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumServiceJobStatusFieldUpdateOperationsInput | $Enums.ServiceJobStatus
    descriptionOfDamage?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ServiceJobUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    customerId?: StringFieldUpdateOperationsInput | string
    accountId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumServiceJobStatusFieldUpdateOperationsInput | $Enums.ServiceJobStatus
    descriptionOfDamage?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
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

  export type EnumAccountRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.AccountRole | EnumAccountRoleFieldRefInput<$PrismaModel>
    in?: $Enums.AccountRole[] | ListEnumAccountRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.AccountRole[] | ListEnumAccountRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumAccountRoleFilter<$PrismaModel> | $Enums.AccountRole
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type ServiceJobListRelationFilter = {
    every?: ServiceJobWhereInput
    some?: ServiceJobWhereInput
    none?: ServiceJobWhereInput
  }

  export type ServiceJobOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AccountCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    isVerified?: SortOrder
  }

  export type AccountMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    isVerified?: SortOrder
  }

  export type AccountMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    isVerified?: SortOrder
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

  export type EnumAccountRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AccountRole | EnumAccountRoleFieldRefInput<$PrismaModel>
    in?: $Enums.AccountRole[] | ListEnumAccountRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.AccountRole[] | ListEnumAccountRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumAccountRoleWithAggregatesFilter<$PrismaModel> | $Enums.AccountRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAccountRoleFilter<$PrismaModel>
    _max?: NestedEnumAccountRoleFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type EnumPickupStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PickupStatus | EnumPickupStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PickupStatus[] | ListEnumPickupStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PickupStatus[] | ListEnumPickupStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPickupStatusFilter<$PrismaModel> | $Enums.PickupStatus
  }

  export type DeviceScalarRelationFilter = {
    is?: DeviceWhereInput
    isNot?: DeviceWhereInput
  }

  export type MerkScalarRelationFilter = {
    is?: MerkWhereInput
    isNot?: MerkWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type CustomerCountOrderByAggregateInput = {
    id?: SortOrder
    fullName?: SortOrder
    deviceId?: SortOrder
    merkId?: SortOrder
    devicePhoto?: SortOrder
    complaint?: SortOrder
    preferredPickupDate?: SortOrder
    preferredPickupTime?: SortOrder
    pickupStatus?: SortOrder
    requestForDelivery?: SortOrder
  }

  export type CustomerMaxOrderByAggregateInput = {
    id?: SortOrder
    fullName?: SortOrder
    deviceId?: SortOrder
    merkId?: SortOrder
    devicePhoto?: SortOrder
    complaint?: SortOrder
    preferredPickupDate?: SortOrder
    preferredPickupTime?: SortOrder
    pickupStatus?: SortOrder
    requestForDelivery?: SortOrder
  }

  export type CustomerMinOrderByAggregateInput = {
    id?: SortOrder
    fullName?: SortOrder
    deviceId?: SortOrder
    merkId?: SortOrder
    devicePhoto?: SortOrder
    complaint?: SortOrder
    preferredPickupDate?: SortOrder
    preferredPickupTime?: SortOrder
    pickupStatus?: SortOrder
    requestForDelivery?: SortOrder
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

  export type EnumPickupStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PickupStatus | EnumPickupStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PickupStatus[] | ListEnumPickupStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PickupStatus[] | ListEnumPickupStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPickupStatusWithAggregatesFilter<$PrismaModel> | $Enums.PickupStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPickupStatusFilter<$PrismaModel>
    _max?: NestedEnumPickupStatusFilter<$PrismaModel>
  }

  export type CustomerListRelationFilter = {
    every?: CustomerWhereInput
    some?: CustomerWhereInput
    none?: CustomerWhereInput
  }

  export type CustomerOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DeviceCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type DeviceMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type DeviceMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type MerkCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type MerkMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type MerkMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
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

  export type EnumServiceJobStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ServiceJobStatus | EnumServiceJobStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ServiceJobStatus[] | ListEnumServiceJobStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ServiceJobStatus[] | ListEnumServiceJobStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumServiceJobStatusFilter<$PrismaModel> | $Enums.ServiceJobStatus
  }

  export type CustomerScalarRelationFilter = {
    is?: CustomerWhereInput
    isNot?: CustomerWhereInput
  }

  export type AccountNullableScalarRelationFilter = {
    is?: AccountWhereInput | null
    isNot?: AccountWhereInput | null
  }

  export type ServiceJobCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    customerId?: SortOrder
    accountId?: SortOrder
    status?: SortOrder
    descriptionOfDamage?: SortOrder
    updatedAt?: SortOrder
    endAt?: SortOrder
  }

  export type ServiceJobMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    customerId?: SortOrder
    accountId?: SortOrder
    status?: SortOrder
    descriptionOfDamage?: SortOrder
    updatedAt?: SortOrder
    endAt?: SortOrder
  }

  export type ServiceJobMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    customerId?: SortOrder
    accountId?: SortOrder
    status?: SortOrder
    descriptionOfDamage?: SortOrder
    updatedAt?: SortOrder
    endAt?: SortOrder
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

  export type EnumServiceJobStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ServiceJobStatus | EnumServiceJobStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ServiceJobStatus[] | ListEnumServiceJobStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ServiceJobStatus[] | ListEnumServiceJobStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumServiceJobStatusWithAggregatesFilter<$PrismaModel> | $Enums.ServiceJobStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumServiceJobStatusFilter<$PrismaModel>
    _max?: NestedEnumServiceJobStatusFilter<$PrismaModel>
  }

  export type ServiceJobCreateNestedManyWithoutAccountInput = {
    create?: XOR<ServiceJobCreateWithoutAccountInput, ServiceJobUncheckedCreateWithoutAccountInput> | ServiceJobCreateWithoutAccountInput[] | ServiceJobUncheckedCreateWithoutAccountInput[]
    connectOrCreate?: ServiceJobCreateOrConnectWithoutAccountInput | ServiceJobCreateOrConnectWithoutAccountInput[]
    createMany?: ServiceJobCreateManyAccountInputEnvelope
    connect?: ServiceJobWhereUniqueInput | ServiceJobWhereUniqueInput[]
  }

  export type ServiceJobUncheckedCreateNestedManyWithoutAccountInput = {
    create?: XOR<ServiceJobCreateWithoutAccountInput, ServiceJobUncheckedCreateWithoutAccountInput> | ServiceJobCreateWithoutAccountInput[] | ServiceJobUncheckedCreateWithoutAccountInput[]
    connectOrCreate?: ServiceJobCreateOrConnectWithoutAccountInput | ServiceJobCreateOrConnectWithoutAccountInput[]
    createMany?: ServiceJobCreateManyAccountInputEnvelope
    connect?: ServiceJobWhereUniqueInput | ServiceJobWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumAccountRoleFieldUpdateOperationsInput = {
    set?: $Enums.AccountRole
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type ServiceJobUpdateManyWithoutAccountNestedInput = {
    create?: XOR<ServiceJobCreateWithoutAccountInput, ServiceJobUncheckedCreateWithoutAccountInput> | ServiceJobCreateWithoutAccountInput[] | ServiceJobUncheckedCreateWithoutAccountInput[]
    connectOrCreate?: ServiceJobCreateOrConnectWithoutAccountInput | ServiceJobCreateOrConnectWithoutAccountInput[]
    upsert?: ServiceJobUpsertWithWhereUniqueWithoutAccountInput | ServiceJobUpsertWithWhereUniqueWithoutAccountInput[]
    createMany?: ServiceJobCreateManyAccountInputEnvelope
    set?: ServiceJobWhereUniqueInput | ServiceJobWhereUniqueInput[]
    disconnect?: ServiceJobWhereUniqueInput | ServiceJobWhereUniqueInput[]
    delete?: ServiceJobWhereUniqueInput | ServiceJobWhereUniqueInput[]
    connect?: ServiceJobWhereUniqueInput | ServiceJobWhereUniqueInput[]
    update?: ServiceJobUpdateWithWhereUniqueWithoutAccountInput | ServiceJobUpdateWithWhereUniqueWithoutAccountInput[]
    updateMany?: ServiceJobUpdateManyWithWhereWithoutAccountInput | ServiceJobUpdateManyWithWhereWithoutAccountInput[]
    deleteMany?: ServiceJobScalarWhereInput | ServiceJobScalarWhereInput[]
  }

  export type ServiceJobUncheckedUpdateManyWithoutAccountNestedInput = {
    create?: XOR<ServiceJobCreateWithoutAccountInput, ServiceJobUncheckedCreateWithoutAccountInput> | ServiceJobCreateWithoutAccountInput[] | ServiceJobUncheckedCreateWithoutAccountInput[]
    connectOrCreate?: ServiceJobCreateOrConnectWithoutAccountInput | ServiceJobCreateOrConnectWithoutAccountInput[]
    upsert?: ServiceJobUpsertWithWhereUniqueWithoutAccountInput | ServiceJobUpsertWithWhereUniqueWithoutAccountInput[]
    createMany?: ServiceJobCreateManyAccountInputEnvelope
    set?: ServiceJobWhereUniqueInput | ServiceJobWhereUniqueInput[]
    disconnect?: ServiceJobWhereUniqueInput | ServiceJobWhereUniqueInput[]
    delete?: ServiceJobWhereUniqueInput | ServiceJobWhereUniqueInput[]
    connect?: ServiceJobWhereUniqueInput | ServiceJobWhereUniqueInput[]
    update?: ServiceJobUpdateWithWhereUniqueWithoutAccountInput | ServiceJobUpdateWithWhereUniqueWithoutAccountInput[]
    updateMany?: ServiceJobUpdateManyWithWhereWithoutAccountInput | ServiceJobUpdateManyWithWhereWithoutAccountInput[]
    deleteMany?: ServiceJobScalarWhereInput | ServiceJobScalarWhereInput[]
  }

  export type DeviceCreateNestedOneWithoutCustomersInput = {
    create?: XOR<DeviceCreateWithoutCustomersInput, DeviceUncheckedCreateWithoutCustomersInput>
    connectOrCreate?: DeviceCreateOrConnectWithoutCustomersInput
    connect?: DeviceWhereUniqueInput
  }

  export type MerkCreateNestedOneWithoutCustomersInput = {
    create?: XOR<MerkCreateWithoutCustomersInput, MerkUncheckedCreateWithoutCustomersInput>
    connectOrCreate?: MerkCreateOrConnectWithoutCustomersInput
    connect?: MerkWhereUniqueInput
  }

  export type ServiceJobCreateNestedManyWithoutCustomerInput = {
    create?: XOR<ServiceJobCreateWithoutCustomerInput, ServiceJobUncheckedCreateWithoutCustomerInput> | ServiceJobCreateWithoutCustomerInput[] | ServiceJobUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: ServiceJobCreateOrConnectWithoutCustomerInput | ServiceJobCreateOrConnectWithoutCustomerInput[]
    createMany?: ServiceJobCreateManyCustomerInputEnvelope
    connect?: ServiceJobWhereUniqueInput | ServiceJobWhereUniqueInput[]
  }

  export type ServiceJobUncheckedCreateNestedManyWithoutCustomerInput = {
    create?: XOR<ServiceJobCreateWithoutCustomerInput, ServiceJobUncheckedCreateWithoutCustomerInput> | ServiceJobCreateWithoutCustomerInput[] | ServiceJobUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: ServiceJobCreateOrConnectWithoutCustomerInput | ServiceJobCreateOrConnectWithoutCustomerInput[]
    createMany?: ServiceJobCreateManyCustomerInputEnvelope
    connect?: ServiceJobWhereUniqueInput | ServiceJobWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type EnumPickupStatusFieldUpdateOperationsInput = {
    set?: $Enums.PickupStatus
  }

  export type DeviceUpdateOneRequiredWithoutCustomersNestedInput = {
    create?: XOR<DeviceCreateWithoutCustomersInput, DeviceUncheckedCreateWithoutCustomersInput>
    connectOrCreate?: DeviceCreateOrConnectWithoutCustomersInput
    upsert?: DeviceUpsertWithoutCustomersInput
    connect?: DeviceWhereUniqueInput
    update?: XOR<XOR<DeviceUpdateToOneWithWhereWithoutCustomersInput, DeviceUpdateWithoutCustomersInput>, DeviceUncheckedUpdateWithoutCustomersInput>
  }

  export type MerkUpdateOneRequiredWithoutCustomersNestedInput = {
    create?: XOR<MerkCreateWithoutCustomersInput, MerkUncheckedCreateWithoutCustomersInput>
    connectOrCreate?: MerkCreateOrConnectWithoutCustomersInput
    upsert?: MerkUpsertWithoutCustomersInput
    connect?: MerkWhereUniqueInput
    update?: XOR<XOR<MerkUpdateToOneWithWhereWithoutCustomersInput, MerkUpdateWithoutCustomersInput>, MerkUncheckedUpdateWithoutCustomersInput>
  }

  export type ServiceJobUpdateManyWithoutCustomerNestedInput = {
    create?: XOR<ServiceJobCreateWithoutCustomerInput, ServiceJobUncheckedCreateWithoutCustomerInput> | ServiceJobCreateWithoutCustomerInput[] | ServiceJobUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: ServiceJobCreateOrConnectWithoutCustomerInput | ServiceJobCreateOrConnectWithoutCustomerInput[]
    upsert?: ServiceJobUpsertWithWhereUniqueWithoutCustomerInput | ServiceJobUpsertWithWhereUniqueWithoutCustomerInput[]
    createMany?: ServiceJobCreateManyCustomerInputEnvelope
    set?: ServiceJobWhereUniqueInput | ServiceJobWhereUniqueInput[]
    disconnect?: ServiceJobWhereUniqueInput | ServiceJobWhereUniqueInput[]
    delete?: ServiceJobWhereUniqueInput | ServiceJobWhereUniqueInput[]
    connect?: ServiceJobWhereUniqueInput | ServiceJobWhereUniqueInput[]
    update?: ServiceJobUpdateWithWhereUniqueWithoutCustomerInput | ServiceJobUpdateWithWhereUniqueWithoutCustomerInput[]
    updateMany?: ServiceJobUpdateManyWithWhereWithoutCustomerInput | ServiceJobUpdateManyWithWhereWithoutCustomerInput[]
    deleteMany?: ServiceJobScalarWhereInput | ServiceJobScalarWhereInput[]
  }

  export type ServiceJobUncheckedUpdateManyWithoutCustomerNestedInput = {
    create?: XOR<ServiceJobCreateWithoutCustomerInput, ServiceJobUncheckedCreateWithoutCustomerInput> | ServiceJobCreateWithoutCustomerInput[] | ServiceJobUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: ServiceJobCreateOrConnectWithoutCustomerInput | ServiceJobCreateOrConnectWithoutCustomerInput[]
    upsert?: ServiceJobUpsertWithWhereUniqueWithoutCustomerInput | ServiceJobUpsertWithWhereUniqueWithoutCustomerInput[]
    createMany?: ServiceJobCreateManyCustomerInputEnvelope
    set?: ServiceJobWhereUniqueInput | ServiceJobWhereUniqueInput[]
    disconnect?: ServiceJobWhereUniqueInput | ServiceJobWhereUniqueInput[]
    delete?: ServiceJobWhereUniqueInput | ServiceJobWhereUniqueInput[]
    connect?: ServiceJobWhereUniqueInput | ServiceJobWhereUniqueInput[]
    update?: ServiceJobUpdateWithWhereUniqueWithoutCustomerInput | ServiceJobUpdateWithWhereUniqueWithoutCustomerInput[]
    updateMany?: ServiceJobUpdateManyWithWhereWithoutCustomerInput | ServiceJobUpdateManyWithWhereWithoutCustomerInput[]
    deleteMany?: ServiceJobScalarWhereInput | ServiceJobScalarWhereInput[]
  }

  export type CustomerCreateNestedManyWithoutDeviceInput = {
    create?: XOR<CustomerCreateWithoutDeviceInput, CustomerUncheckedCreateWithoutDeviceInput> | CustomerCreateWithoutDeviceInput[] | CustomerUncheckedCreateWithoutDeviceInput[]
    connectOrCreate?: CustomerCreateOrConnectWithoutDeviceInput | CustomerCreateOrConnectWithoutDeviceInput[]
    createMany?: CustomerCreateManyDeviceInputEnvelope
    connect?: CustomerWhereUniqueInput | CustomerWhereUniqueInput[]
  }

  export type CustomerUncheckedCreateNestedManyWithoutDeviceInput = {
    create?: XOR<CustomerCreateWithoutDeviceInput, CustomerUncheckedCreateWithoutDeviceInput> | CustomerCreateWithoutDeviceInput[] | CustomerUncheckedCreateWithoutDeviceInput[]
    connectOrCreate?: CustomerCreateOrConnectWithoutDeviceInput | CustomerCreateOrConnectWithoutDeviceInput[]
    createMany?: CustomerCreateManyDeviceInputEnvelope
    connect?: CustomerWhereUniqueInput | CustomerWhereUniqueInput[]
  }

  export type CustomerUpdateManyWithoutDeviceNestedInput = {
    create?: XOR<CustomerCreateWithoutDeviceInput, CustomerUncheckedCreateWithoutDeviceInput> | CustomerCreateWithoutDeviceInput[] | CustomerUncheckedCreateWithoutDeviceInput[]
    connectOrCreate?: CustomerCreateOrConnectWithoutDeviceInput | CustomerCreateOrConnectWithoutDeviceInput[]
    upsert?: CustomerUpsertWithWhereUniqueWithoutDeviceInput | CustomerUpsertWithWhereUniqueWithoutDeviceInput[]
    createMany?: CustomerCreateManyDeviceInputEnvelope
    set?: CustomerWhereUniqueInput | CustomerWhereUniqueInput[]
    disconnect?: CustomerWhereUniqueInput | CustomerWhereUniqueInput[]
    delete?: CustomerWhereUniqueInput | CustomerWhereUniqueInput[]
    connect?: CustomerWhereUniqueInput | CustomerWhereUniqueInput[]
    update?: CustomerUpdateWithWhereUniqueWithoutDeviceInput | CustomerUpdateWithWhereUniqueWithoutDeviceInput[]
    updateMany?: CustomerUpdateManyWithWhereWithoutDeviceInput | CustomerUpdateManyWithWhereWithoutDeviceInput[]
    deleteMany?: CustomerScalarWhereInput | CustomerScalarWhereInput[]
  }

  export type CustomerUncheckedUpdateManyWithoutDeviceNestedInput = {
    create?: XOR<CustomerCreateWithoutDeviceInput, CustomerUncheckedCreateWithoutDeviceInput> | CustomerCreateWithoutDeviceInput[] | CustomerUncheckedCreateWithoutDeviceInput[]
    connectOrCreate?: CustomerCreateOrConnectWithoutDeviceInput | CustomerCreateOrConnectWithoutDeviceInput[]
    upsert?: CustomerUpsertWithWhereUniqueWithoutDeviceInput | CustomerUpsertWithWhereUniqueWithoutDeviceInput[]
    createMany?: CustomerCreateManyDeviceInputEnvelope
    set?: CustomerWhereUniqueInput | CustomerWhereUniqueInput[]
    disconnect?: CustomerWhereUniqueInput | CustomerWhereUniqueInput[]
    delete?: CustomerWhereUniqueInput | CustomerWhereUniqueInput[]
    connect?: CustomerWhereUniqueInput | CustomerWhereUniqueInput[]
    update?: CustomerUpdateWithWhereUniqueWithoutDeviceInput | CustomerUpdateWithWhereUniqueWithoutDeviceInput[]
    updateMany?: CustomerUpdateManyWithWhereWithoutDeviceInput | CustomerUpdateManyWithWhereWithoutDeviceInput[]
    deleteMany?: CustomerScalarWhereInput | CustomerScalarWhereInput[]
  }

  export type CustomerCreateNestedManyWithoutMerkInput = {
    create?: XOR<CustomerCreateWithoutMerkInput, CustomerUncheckedCreateWithoutMerkInput> | CustomerCreateWithoutMerkInput[] | CustomerUncheckedCreateWithoutMerkInput[]
    connectOrCreate?: CustomerCreateOrConnectWithoutMerkInput | CustomerCreateOrConnectWithoutMerkInput[]
    createMany?: CustomerCreateManyMerkInputEnvelope
    connect?: CustomerWhereUniqueInput | CustomerWhereUniqueInput[]
  }

  export type CustomerUncheckedCreateNestedManyWithoutMerkInput = {
    create?: XOR<CustomerCreateWithoutMerkInput, CustomerUncheckedCreateWithoutMerkInput> | CustomerCreateWithoutMerkInput[] | CustomerUncheckedCreateWithoutMerkInput[]
    connectOrCreate?: CustomerCreateOrConnectWithoutMerkInput | CustomerCreateOrConnectWithoutMerkInput[]
    createMany?: CustomerCreateManyMerkInputEnvelope
    connect?: CustomerWhereUniqueInput | CustomerWhereUniqueInput[]
  }

  export type CustomerUpdateManyWithoutMerkNestedInput = {
    create?: XOR<CustomerCreateWithoutMerkInput, CustomerUncheckedCreateWithoutMerkInput> | CustomerCreateWithoutMerkInput[] | CustomerUncheckedCreateWithoutMerkInput[]
    connectOrCreate?: CustomerCreateOrConnectWithoutMerkInput | CustomerCreateOrConnectWithoutMerkInput[]
    upsert?: CustomerUpsertWithWhereUniqueWithoutMerkInput | CustomerUpsertWithWhereUniqueWithoutMerkInput[]
    createMany?: CustomerCreateManyMerkInputEnvelope
    set?: CustomerWhereUniqueInput | CustomerWhereUniqueInput[]
    disconnect?: CustomerWhereUniqueInput | CustomerWhereUniqueInput[]
    delete?: CustomerWhereUniqueInput | CustomerWhereUniqueInput[]
    connect?: CustomerWhereUniqueInput | CustomerWhereUniqueInput[]
    update?: CustomerUpdateWithWhereUniqueWithoutMerkInput | CustomerUpdateWithWhereUniqueWithoutMerkInput[]
    updateMany?: CustomerUpdateManyWithWhereWithoutMerkInput | CustomerUpdateManyWithWhereWithoutMerkInput[]
    deleteMany?: CustomerScalarWhereInput | CustomerScalarWhereInput[]
  }

  export type CustomerUncheckedUpdateManyWithoutMerkNestedInput = {
    create?: XOR<CustomerCreateWithoutMerkInput, CustomerUncheckedCreateWithoutMerkInput> | CustomerCreateWithoutMerkInput[] | CustomerUncheckedCreateWithoutMerkInput[]
    connectOrCreate?: CustomerCreateOrConnectWithoutMerkInput | CustomerCreateOrConnectWithoutMerkInput[]
    upsert?: CustomerUpsertWithWhereUniqueWithoutMerkInput | CustomerUpsertWithWhereUniqueWithoutMerkInput[]
    createMany?: CustomerCreateManyMerkInputEnvelope
    set?: CustomerWhereUniqueInput | CustomerWhereUniqueInput[]
    disconnect?: CustomerWhereUniqueInput | CustomerWhereUniqueInput[]
    delete?: CustomerWhereUniqueInput | CustomerWhereUniqueInput[]
    connect?: CustomerWhereUniqueInput | CustomerWhereUniqueInput[]
    update?: CustomerUpdateWithWhereUniqueWithoutMerkInput | CustomerUpdateWithWhereUniqueWithoutMerkInput[]
    updateMany?: CustomerUpdateManyWithWhereWithoutMerkInput | CustomerUpdateManyWithWhereWithoutMerkInput[]
    deleteMany?: CustomerScalarWhereInput | CustomerScalarWhereInput[]
  }

  export type CustomerCreateNestedOneWithoutServiceJobsInput = {
    create?: XOR<CustomerCreateWithoutServiceJobsInput, CustomerUncheckedCreateWithoutServiceJobsInput>
    connectOrCreate?: CustomerCreateOrConnectWithoutServiceJobsInput
    connect?: CustomerWhereUniqueInput
  }

  export type AccountCreateNestedOneWithoutServiceJobsInput = {
    create?: XOR<AccountCreateWithoutServiceJobsInput, AccountUncheckedCreateWithoutServiceJobsInput>
    connectOrCreate?: AccountCreateOrConnectWithoutServiceJobsInput
    connect?: AccountWhereUniqueInput
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type EnumServiceJobStatusFieldUpdateOperationsInput = {
    set?: $Enums.ServiceJobStatus
  }

  export type CustomerUpdateOneRequiredWithoutServiceJobsNestedInput = {
    create?: XOR<CustomerCreateWithoutServiceJobsInput, CustomerUncheckedCreateWithoutServiceJobsInput>
    connectOrCreate?: CustomerCreateOrConnectWithoutServiceJobsInput
    upsert?: CustomerUpsertWithoutServiceJobsInput
    connect?: CustomerWhereUniqueInput
    update?: XOR<XOR<CustomerUpdateToOneWithWhereWithoutServiceJobsInput, CustomerUpdateWithoutServiceJobsInput>, CustomerUncheckedUpdateWithoutServiceJobsInput>
  }

  export type AccountUpdateOneWithoutServiceJobsNestedInput = {
    create?: XOR<AccountCreateWithoutServiceJobsInput, AccountUncheckedCreateWithoutServiceJobsInput>
    connectOrCreate?: AccountCreateOrConnectWithoutServiceJobsInput
    upsert?: AccountUpsertWithoutServiceJobsInput
    disconnect?: AccountWhereInput | boolean
    delete?: AccountWhereInput | boolean
    connect?: AccountWhereUniqueInput
    update?: XOR<XOR<AccountUpdateToOneWithWhereWithoutServiceJobsInput, AccountUpdateWithoutServiceJobsInput>, AccountUncheckedUpdateWithoutServiceJobsInput>
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

  export type NestedEnumAccountRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.AccountRole | EnumAccountRoleFieldRefInput<$PrismaModel>
    in?: $Enums.AccountRole[] | ListEnumAccountRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.AccountRole[] | ListEnumAccountRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumAccountRoleFilter<$PrismaModel> | $Enums.AccountRole
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type NestedEnumAccountRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AccountRole | EnumAccountRoleFieldRefInput<$PrismaModel>
    in?: $Enums.AccountRole[] | ListEnumAccountRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.AccountRole[] | ListEnumAccountRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumAccountRoleWithAggregatesFilter<$PrismaModel> | $Enums.AccountRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAccountRoleFilter<$PrismaModel>
    _max?: NestedEnumAccountRoleFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type NestedEnumPickupStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PickupStatus | EnumPickupStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PickupStatus[] | ListEnumPickupStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PickupStatus[] | ListEnumPickupStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPickupStatusFilter<$PrismaModel> | $Enums.PickupStatus
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

  export type NestedEnumPickupStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PickupStatus | EnumPickupStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PickupStatus[] | ListEnumPickupStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PickupStatus[] | ListEnumPickupStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPickupStatusWithAggregatesFilter<$PrismaModel> | $Enums.PickupStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPickupStatusFilter<$PrismaModel>
    _max?: NestedEnumPickupStatusFilter<$PrismaModel>
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

  export type NestedEnumServiceJobStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ServiceJobStatus | EnumServiceJobStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ServiceJobStatus[] | ListEnumServiceJobStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ServiceJobStatus[] | ListEnumServiceJobStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumServiceJobStatusFilter<$PrismaModel> | $Enums.ServiceJobStatus
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

  export type NestedEnumServiceJobStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ServiceJobStatus | EnumServiceJobStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ServiceJobStatus[] | ListEnumServiceJobStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ServiceJobStatus[] | ListEnumServiceJobStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumServiceJobStatusWithAggregatesFilter<$PrismaModel> | $Enums.ServiceJobStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumServiceJobStatusFilter<$PrismaModel>
    _max?: NestedEnumServiceJobStatusFilter<$PrismaModel>
  }

  export type ServiceJobCreateWithoutAccountInput = {
    id?: string
    createdAt?: Date | string
    status: $Enums.ServiceJobStatus
    descriptionOfDamage?: string | null
    updatedAt?: Date | string | null
    endAt?: Date | string | null
    customer: CustomerCreateNestedOneWithoutServiceJobsInput
  }

  export type ServiceJobUncheckedCreateWithoutAccountInput = {
    id?: string
    createdAt?: Date | string
    customerId: string
    status: $Enums.ServiceJobStatus
    descriptionOfDamage?: string | null
    updatedAt?: Date | string | null
    endAt?: Date | string | null
  }

  export type ServiceJobCreateOrConnectWithoutAccountInput = {
    where: ServiceJobWhereUniqueInput
    create: XOR<ServiceJobCreateWithoutAccountInput, ServiceJobUncheckedCreateWithoutAccountInput>
  }

  export type ServiceJobCreateManyAccountInputEnvelope = {
    data: ServiceJobCreateManyAccountInput | ServiceJobCreateManyAccountInput[]
    skipDuplicates?: boolean
  }

  export type ServiceJobUpsertWithWhereUniqueWithoutAccountInput = {
    where: ServiceJobWhereUniqueInput
    update: XOR<ServiceJobUpdateWithoutAccountInput, ServiceJobUncheckedUpdateWithoutAccountInput>
    create: XOR<ServiceJobCreateWithoutAccountInput, ServiceJobUncheckedCreateWithoutAccountInput>
  }

  export type ServiceJobUpdateWithWhereUniqueWithoutAccountInput = {
    where: ServiceJobWhereUniqueInput
    data: XOR<ServiceJobUpdateWithoutAccountInput, ServiceJobUncheckedUpdateWithoutAccountInput>
  }

  export type ServiceJobUpdateManyWithWhereWithoutAccountInput = {
    where: ServiceJobScalarWhereInput
    data: XOR<ServiceJobUpdateManyMutationInput, ServiceJobUncheckedUpdateManyWithoutAccountInput>
  }

  export type ServiceJobScalarWhereInput = {
    AND?: ServiceJobScalarWhereInput | ServiceJobScalarWhereInput[]
    OR?: ServiceJobScalarWhereInput[]
    NOT?: ServiceJobScalarWhereInput | ServiceJobScalarWhereInput[]
    id?: StringFilter<"ServiceJob"> | string
    createdAt?: DateTimeFilter<"ServiceJob"> | Date | string
    customerId?: StringFilter<"ServiceJob"> | string
    accountId?: StringNullableFilter<"ServiceJob"> | string | null
    status?: EnumServiceJobStatusFilter<"ServiceJob"> | $Enums.ServiceJobStatus
    descriptionOfDamage?: StringNullableFilter<"ServiceJob"> | string | null
    updatedAt?: DateTimeNullableFilter<"ServiceJob"> | Date | string | null
    endAt?: DateTimeNullableFilter<"ServiceJob"> | Date | string | null
  }

  export type DeviceCreateWithoutCustomersInput = {
    id?: string
    name: string
  }

  export type DeviceUncheckedCreateWithoutCustomersInput = {
    id?: string
    name: string
  }

  export type DeviceCreateOrConnectWithoutCustomersInput = {
    where: DeviceWhereUniqueInput
    create: XOR<DeviceCreateWithoutCustomersInput, DeviceUncheckedCreateWithoutCustomersInput>
  }

  export type MerkCreateWithoutCustomersInput = {
    id?: string
    name: string
  }

  export type MerkUncheckedCreateWithoutCustomersInput = {
    id?: string
    name: string
  }

  export type MerkCreateOrConnectWithoutCustomersInput = {
    where: MerkWhereUniqueInput
    create: XOR<MerkCreateWithoutCustomersInput, MerkUncheckedCreateWithoutCustomersInput>
  }

  export type ServiceJobCreateWithoutCustomerInput = {
    id?: string
    createdAt?: Date | string
    status: $Enums.ServiceJobStatus
    descriptionOfDamage?: string | null
    updatedAt?: Date | string | null
    endAt?: Date | string | null
    account?: AccountCreateNestedOneWithoutServiceJobsInput
  }

  export type ServiceJobUncheckedCreateWithoutCustomerInput = {
    id?: string
    createdAt?: Date | string
    accountId?: string | null
    status: $Enums.ServiceJobStatus
    descriptionOfDamage?: string | null
    updatedAt?: Date | string | null
    endAt?: Date | string | null
  }

  export type ServiceJobCreateOrConnectWithoutCustomerInput = {
    where: ServiceJobWhereUniqueInput
    create: XOR<ServiceJobCreateWithoutCustomerInput, ServiceJobUncheckedCreateWithoutCustomerInput>
  }

  export type ServiceJobCreateManyCustomerInputEnvelope = {
    data: ServiceJobCreateManyCustomerInput | ServiceJobCreateManyCustomerInput[]
    skipDuplicates?: boolean
  }

  export type DeviceUpsertWithoutCustomersInput = {
    update: XOR<DeviceUpdateWithoutCustomersInput, DeviceUncheckedUpdateWithoutCustomersInput>
    create: XOR<DeviceCreateWithoutCustomersInput, DeviceUncheckedCreateWithoutCustomersInput>
    where?: DeviceWhereInput
  }

  export type DeviceUpdateToOneWithWhereWithoutCustomersInput = {
    where?: DeviceWhereInput
    data: XOR<DeviceUpdateWithoutCustomersInput, DeviceUncheckedUpdateWithoutCustomersInput>
  }

  export type DeviceUpdateWithoutCustomersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type DeviceUncheckedUpdateWithoutCustomersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type MerkUpsertWithoutCustomersInput = {
    update: XOR<MerkUpdateWithoutCustomersInput, MerkUncheckedUpdateWithoutCustomersInput>
    create: XOR<MerkCreateWithoutCustomersInput, MerkUncheckedCreateWithoutCustomersInput>
    where?: MerkWhereInput
  }

  export type MerkUpdateToOneWithWhereWithoutCustomersInput = {
    where?: MerkWhereInput
    data: XOR<MerkUpdateWithoutCustomersInput, MerkUncheckedUpdateWithoutCustomersInput>
  }

  export type MerkUpdateWithoutCustomersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type MerkUncheckedUpdateWithoutCustomersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type ServiceJobUpsertWithWhereUniqueWithoutCustomerInput = {
    where: ServiceJobWhereUniqueInput
    update: XOR<ServiceJobUpdateWithoutCustomerInput, ServiceJobUncheckedUpdateWithoutCustomerInput>
    create: XOR<ServiceJobCreateWithoutCustomerInput, ServiceJobUncheckedCreateWithoutCustomerInput>
  }

  export type ServiceJobUpdateWithWhereUniqueWithoutCustomerInput = {
    where: ServiceJobWhereUniqueInput
    data: XOR<ServiceJobUpdateWithoutCustomerInput, ServiceJobUncheckedUpdateWithoutCustomerInput>
  }

  export type ServiceJobUpdateManyWithWhereWithoutCustomerInput = {
    where: ServiceJobScalarWhereInput
    data: XOR<ServiceJobUpdateManyMutationInput, ServiceJobUncheckedUpdateManyWithoutCustomerInput>
  }

  export type CustomerCreateWithoutDeviceInput = {
    id?: string
    fullName: string
    devicePhoto?: string | null
    complaint: string
    preferredPickupDate?: Date | string | null
    preferredPickupTime?: string | null
    pickupStatus: $Enums.PickupStatus
    requestForDelivery: boolean
    merk: MerkCreateNestedOneWithoutCustomersInput
    serviceJobs?: ServiceJobCreateNestedManyWithoutCustomerInput
  }

  export type CustomerUncheckedCreateWithoutDeviceInput = {
    id?: string
    fullName: string
    merkId: string
    devicePhoto?: string | null
    complaint: string
    preferredPickupDate?: Date | string | null
    preferredPickupTime?: string | null
    pickupStatus: $Enums.PickupStatus
    requestForDelivery: boolean
    serviceJobs?: ServiceJobUncheckedCreateNestedManyWithoutCustomerInput
  }

  export type CustomerCreateOrConnectWithoutDeviceInput = {
    where: CustomerWhereUniqueInput
    create: XOR<CustomerCreateWithoutDeviceInput, CustomerUncheckedCreateWithoutDeviceInput>
  }

  export type CustomerCreateManyDeviceInputEnvelope = {
    data: CustomerCreateManyDeviceInput | CustomerCreateManyDeviceInput[]
    skipDuplicates?: boolean
  }

  export type CustomerUpsertWithWhereUniqueWithoutDeviceInput = {
    where: CustomerWhereUniqueInput
    update: XOR<CustomerUpdateWithoutDeviceInput, CustomerUncheckedUpdateWithoutDeviceInput>
    create: XOR<CustomerCreateWithoutDeviceInput, CustomerUncheckedCreateWithoutDeviceInput>
  }

  export type CustomerUpdateWithWhereUniqueWithoutDeviceInput = {
    where: CustomerWhereUniqueInput
    data: XOR<CustomerUpdateWithoutDeviceInput, CustomerUncheckedUpdateWithoutDeviceInput>
  }

  export type CustomerUpdateManyWithWhereWithoutDeviceInput = {
    where: CustomerScalarWhereInput
    data: XOR<CustomerUpdateManyMutationInput, CustomerUncheckedUpdateManyWithoutDeviceInput>
  }

  export type CustomerScalarWhereInput = {
    AND?: CustomerScalarWhereInput | CustomerScalarWhereInput[]
    OR?: CustomerScalarWhereInput[]
    NOT?: CustomerScalarWhereInput | CustomerScalarWhereInput[]
    id?: StringFilter<"Customer"> | string
    fullName?: StringFilter<"Customer"> | string
    deviceId?: StringFilter<"Customer"> | string
    merkId?: StringFilter<"Customer"> | string
    devicePhoto?: StringNullableFilter<"Customer"> | string | null
    complaint?: StringFilter<"Customer"> | string
    preferredPickupDate?: DateTimeNullableFilter<"Customer"> | Date | string | null
    preferredPickupTime?: StringNullableFilter<"Customer"> | string | null
    pickupStatus?: EnumPickupStatusFilter<"Customer"> | $Enums.PickupStatus
    requestForDelivery?: BoolFilter<"Customer"> | boolean
  }

  export type CustomerCreateWithoutMerkInput = {
    id?: string
    fullName: string
    devicePhoto?: string | null
    complaint: string
    preferredPickupDate?: Date | string | null
    preferredPickupTime?: string | null
    pickupStatus: $Enums.PickupStatus
    requestForDelivery: boolean
    device: DeviceCreateNestedOneWithoutCustomersInput
    serviceJobs?: ServiceJobCreateNestedManyWithoutCustomerInput
  }

  export type CustomerUncheckedCreateWithoutMerkInput = {
    id?: string
    fullName: string
    deviceId: string
    devicePhoto?: string | null
    complaint: string
    preferredPickupDate?: Date | string | null
    preferredPickupTime?: string | null
    pickupStatus: $Enums.PickupStatus
    requestForDelivery: boolean
    serviceJobs?: ServiceJobUncheckedCreateNestedManyWithoutCustomerInput
  }

  export type CustomerCreateOrConnectWithoutMerkInput = {
    where: CustomerWhereUniqueInput
    create: XOR<CustomerCreateWithoutMerkInput, CustomerUncheckedCreateWithoutMerkInput>
  }

  export type CustomerCreateManyMerkInputEnvelope = {
    data: CustomerCreateManyMerkInput | CustomerCreateManyMerkInput[]
    skipDuplicates?: boolean
  }

  export type CustomerUpsertWithWhereUniqueWithoutMerkInput = {
    where: CustomerWhereUniqueInput
    update: XOR<CustomerUpdateWithoutMerkInput, CustomerUncheckedUpdateWithoutMerkInput>
    create: XOR<CustomerCreateWithoutMerkInput, CustomerUncheckedCreateWithoutMerkInput>
  }

  export type CustomerUpdateWithWhereUniqueWithoutMerkInput = {
    where: CustomerWhereUniqueInput
    data: XOR<CustomerUpdateWithoutMerkInput, CustomerUncheckedUpdateWithoutMerkInput>
  }

  export type CustomerUpdateManyWithWhereWithoutMerkInput = {
    where: CustomerScalarWhereInput
    data: XOR<CustomerUpdateManyMutationInput, CustomerUncheckedUpdateManyWithoutMerkInput>
  }

  export type CustomerCreateWithoutServiceJobsInput = {
    id?: string
    fullName: string
    devicePhoto?: string | null
    complaint: string
    preferredPickupDate?: Date | string | null
    preferredPickupTime?: string | null
    pickupStatus: $Enums.PickupStatus
    requestForDelivery: boolean
    device: DeviceCreateNestedOneWithoutCustomersInput
    merk: MerkCreateNestedOneWithoutCustomersInput
  }

  export type CustomerUncheckedCreateWithoutServiceJobsInput = {
    id?: string
    fullName: string
    deviceId: string
    merkId: string
    devicePhoto?: string | null
    complaint: string
    preferredPickupDate?: Date | string | null
    preferredPickupTime?: string | null
    pickupStatus: $Enums.PickupStatus
    requestForDelivery: boolean
  }

  export type CustomerCreateOrConnectWithoutServiceJobsInput = {
    where: CustomerWhereUniqueInput
    create: XOR<CustomerCreateWithoutServiceJobsInput, CustomerUncheckedCreateWithoutServiceJobsInput>
  }

  export type AccountCreateWithoutServiceJobsInput = {
    id?: string
    name: string
    email: string
    password: string
    role?: $Enums.AccountRole
    isVerified?: boolean
  }

  export type AccountUncheckedCreateWithoutServiceJobsInput = {
    id?: string
    name: string
    email: string
    password: string
    role?: $Enums.AccountRole
    isVerified?: boolean
  }

  export type AccountCreateOrConnectWithoutServiceJobsInput = {
    where: AccountWhereUniqueInput
    create: XOR<AccountCreateWithoutServiceJobsInput, AccountUncheckedCreateWithoutServiceJobsInput>
  }

  export type CustomerUpsertWithoutServiceJobsInput = {
    update: XOR<CustomerUpdateWithoutServiceJobsInput, CustomerUncheckedUpdateWithoutServiceJobsInput>
    create: XOR<CustomerCreateWithoutServiceJobsInput, CustomerUncheckedCreateWithoutServiceJobsInput>
    where?: CustomerWhereInput
  }

  export type CustomerUpdateToOneWithWhereWithoutServiceJobsInput = {
    where?: CustomerWhereInput
    data: XOR<CustomerUpdateWithoutServiceJobsInput, CustomerUncheckedUpdateWithoutServiceJobsInput>
  }

  export type CustomerUpdateWithoutServiceJobsInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    devicePhoto?: NullableStringFieldUpdateOperationsInput | string | null
    complaint?: StringFieldUpdateOperationsInput | string
    preferredPickupDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    preferredPickupTime?: NullableStringFieldUpdateOperationsInput | string | null
    pickupStatus?: EnumPickupStatusFieldUpdateOperationsInput | $Enums.PickupStatus
    requestForDelivery?: BoolFieldUpdateOperationsInput | boolean
    device?: DeviceUpdateOneRequiredWithoutCustomersNestedInput
    merk?: MerkUpdateOneRequiredWithoutCustomersNestedInput
  }

  export type CustomerUncheckedUpdateWithoutServiceJobsInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    deviceId?: StringFieldUpdateOperationsInput | string
    merkId?: StringFieldUpdateOperationsInput | string
    devicePhoto?: NullableStringFieldUpdateOperationsInput | string | null
    complaint?: StringFieldUpdateOperationsInput | string
    preferredPickupDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    preferredPickupTime?: NullableStringFieldUpdateOperationsInput | string | null
    pickupStatus?: EnumPickupStatusFieldUpdateOperationsInput | $Enums.PickupStatus
    requestForDelivery?: BoolFieldUpdateOperationsInput | boolean
  }

  export type AccountUpsertWithoutServiceJobsInput = {
    update: XOR<AccountUpdateWithoutServiceJobsInput, AccountUncheckedUpdateWithoutServiceJobsInput>
    create: XOR<AccountCreateWithoutServiceJobsInput, AccountUncheckedCreateWithoutServiceJobsInput>
    where?: AccountWhereInput
  }

  export type AccountUpdateToOneWithWhereWithoutServiceJobsInput = {
    where?: AccountWhereInput
    data: XOR<AccountUpdateWithoutServiceJobsInput, AccountUncheckedUpdateWithoutServiceJobsInput>
  }

  export type AccountUpdateWithoutServiceJobsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumAccountRoleFieldUpdateOperationsInput | $Enums.AccountRole
    isVerified?: BoolFieldUpdateOperationsInput | boolean
  }

  export type AccountUncheckedUpdateWithoutServiceJobsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumAccountRoleFieldUpdateOperationsInput | $Enums.AccountRole
    isVerified?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ServiceJobCreateManyAccountInput = {
    id?: string
    createdAt?: Date | string
    customerId: string
    status: $Enums.ServiceJobStatus
    descriptionOfDamage?: string | null
    updatedAt?: Date | string | null
    endAt?: Date | string | null
  }

  export type ServiceJobUpdateWithoutAccountInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumServiceJobStatusFieldUpdateOperationsInput | $Enums.ServiceJobStatus
    descriptionOfDamage?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    customer?: CustomerUpdateOneRequiredWithoutServiceJobsNestedInput
  }

  export type ServiceJobUncheckedUpdateWithoutAccountInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    customerId?: StringFieldUpdateOperationsInput | string
    status?: EnumServiceJobStatusFieldUpdateOperationsInput | $Enums.ServiceJobStatus
    descriptionOfDamage?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ServiceJobUncheckedUpdateManyWithoutAccountInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    customerId?: StringFieldUpdateOperationsInput | string
    status?: EnumServiceJobStatusFieldUpdateOperationsInput | $Enums.ServiceJobStatus
    descriptionOfDamage?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ServiceJobCreateManyCustomerInput = {
    id?: string
    createdAt?: Date | string
    accountId?: string | null
    status: $Enums.ServiceJobStatus
    descriptionOfDamage?: string | null
    updatedAt?: Date | string | null
    endAt?: Date | string | null
  }

  export type ServiceJobUpdateWithoutCustomerInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumServiceJobStatusFieldUpdateOperationsInput | $Enums.ServiceJobStatus
    descriptionOfDamage?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    account?: AccountUpdateOneWithoutServiceJobsNestedInput
  }

  export type ServiceJobUncheckedUpdateWithoutCustomerInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accountId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumServiceJobStatusFieldUpdateOperationsInput | $Enums.ServiceJobStatus
    descriptionOfDamage?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ServiceJobUncheckedUpdateManyWithoutCustomerInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accountId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumServiceJobStatusFieldUpdateOperationsInput | $Enums.ServiceJobStatus
    descriptionOfDamage?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type CustomerCreateManyDeviceInput = {
    id?: string
    fullName: string
    merkId: string
    devicePhoto?: string | null
    complaint: string
    preferredPickupDate?: Date | string | null
    preferredPickupTime?: string | null
    pickupStatus: $Enums.PickupStatus
    requestForDelivery: boolean
  }

  export type CustomerUpdateWithoutDeviceInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    devicePhoto?: NullableStringFieldUpdateOperationsInput | string | null
    complaint?: StringFieldUpdateOperationsInput | string
    preferredPickupDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    preferredPickupTime?: NullableStringFieldUpdateOperationsInput | string | null
    pickupStatus?: EnumPickupStatusFieldUpdateOperationsInput | $Enums.PickupStatus
    requestForDelivery?: BoolFieldUpdateOperationsInput | boolean
    merk?: MerkUpdateOneRequiredWithoutCustomersNestedInput
    serviceJobs?: ServiceJobUpdateManyWithoutCustomerNestedInput
  }

  export type CustomerUncheckedUpdateWithoutDeviceInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    merkId?: StringFieldUpdateOperationsInput | string
    devicePhoto?: NullableStringFieldUpdateOperationsInput | string | null
    complaint?: StringFieldUpdateOperationsInput | string
    preferredPickupDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    preferredPickupTime?: NullableStringFieldUpdateOperationsInput | string | null
    pickupStatus?: EnumPickupStatusFieldUpdateOperationsInput | $Enums.PickupStatus
    requestForDelivery?: BoolFieldUpdateOperationsInput | boolean
    serviceJobs?: ServiceJobUncheckedUpdateManyWithoutCustomerNestedInput
  }

  export type CustomerUncheckedUpdateManyWithoutDeviceInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    merkId?: StringFieldUpdateOperationsInput | string
    devicePhoto?: NullableStringFieldUpdateOperationsInput | string | null
    complaint?: StringFieldUpdateOperationsInput | string
    preferredPickupDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    preferredPickupTime?: NullableStringFieldUpdateOperationsInput | string | null
    pickupStatus?: EnumPickupStatusFieldUpdateOperationsInput | $Enums.PickupStatus
    requestForDelivery?: BoolFieldUpdateOperationsInput | boolean
  }

  export type CustomerCreateManyMerkInput = {
    id?: string
    fullName: string
    deviceId: string
    devicePhoto?: string | null
    complaint: string
    preferredPickupDate?: Date | string | null
    preferredPickupTime?: string | null
    pickupStatus: $Enums.PickupStatus
    requestForDelivery: boolean
  }

  export type CustomerUpdateWithoutMerkInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    devicePhoto?: NullableStringFieldUpdateOperationsInput | string | null
    complaint?: StringFieldUpdateOperationsInput | string
    preferredPickupDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    preferredPickupTime?: NullableStringFieldUpdateOperationsInput | string | null
    pickupStatus?: EnumPickupStatusFieldUpdateOperationsInput | $Enums.PickupStatus
    requestForDelivery?: BoolFieldUpdateOperationsInput | boolean
    device?: DeviceUpdateOneRequiredWithoutCustomersNestedInput
    serviceJobs?: ServiceJobUpdateManyWithoutCustomerNestedInput
  }

  export type CustomerUncheckedUpdateWithoutMerkInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    deviceId?: StringFieldUpdateOperationsInput | string
    devicePhoto?: NullableStringFieldUpdateOperationsInput | string | null
    complaint?: StringFieldUpdateOperationsInput | string
    preferredPickupDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    preferredPickupTime?: NullableStringFieldUpdateOperationsInput | string | null
    pickupStatus?: EnumPickupStatusFieldUpdateOperationsInput | $Enums.PickupStatus
    requestForDelivery?: BoolFieldUpdateOperationsInput | boolean
    serviceJobs?: ServiceJobUncheckedUpdateManyWithoutCustomerNestedInput
  }

  export type CustomerUncheckedUpdateManyWithoutMerkInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    deviceId?: StringFieldUpdateOperationsInput | string
    devicePhoto?: NullableStringFieldUpdateOperationsInput | string | null
    complaint?: StringFieldUpdateOperationsInput | string
    preferredPickupDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    preferredPickupTime?: NullableStringFieldUpdateOperationsInput | string | null
    pickupStatus?: EnumPickupStatusFieldUpdateOperationsInput | $Enums.PickupStatus
    requestForDelivery?: BoolFieldUpdateOperationsInput | boolean
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