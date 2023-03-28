/*
** DON'T EDIT THIS FILE **
It's been generated by Zapatos, and is liable to be overwritten

Zapatos: https://jawj.github.io/zapatos/
Copyright (C) 2020 - 2022 George MacKerron
Released under the MIT licence: see LICENCE file
*/

declare module 'zapatos/schema' {
  import type * as db from 'zapatos/db';

  // got a type error on schemaVersionCanary below? update by running `npx zapatos`
  export interface schemaVersionCanary extends db.SchemaVersionCanary {
    version: 104;
  }

  /* === schema: public === */

  /* --- enums --- */

  export type resource_type = 'GOLD' | 'HELIUM' | 'IRON';
  export namespace every {
    export type resource_type = ['GOLD', 'HELIUM', 'IRON'];
  }

  /* --- tables --- */

  /**
   * **resources**
   * - Table in database
   */
  export namespace resources {
    export type Table = 'resources';
    export interface Selectable {
      /**
       * **resources.id**
       * - `uuid` in database
       * - `NOT NULL`, default: `uuid_generate_v4()`
       */
      id: string;
      /**
       * **resources.resourceType**
       * - `resource_type` in database
       * - `NOT NULL`, no default
       */
      resourceType: resource_type;
      /**
       * **resources.amount**
       * - `int4` in database
       * - `NOT NULL`, no default
       */
      amount: number;
    }
    export interface JSONSelectable {
      /**
       * **resources.id**
       * - `uuid` in database
       * - `NOT NULL`, default: `uuid_generate_v4()`
       */
      id: string;
      /**
       * **resources.resourceType**
       * - `resource_type` in database
       * - `NOT NULL`, no default
       */
      resourceType: resource_type;
      /**
       * **resources.amount**
       * - `int4` in database
       * - `NOT NULL`, no default
       */
      amount: number;
    }
    export interface Whereable {
      /**
       * **resources.id**
       * - `uuid` in database
       * - `NOT NULL`, default: `uuid_generate_v4()`
       */
      id?:
        | string
        | db.Parameter<string>
        | db.SQLFragment
        | db.ParentColumn
        | db.SQLFragment<any, string | db.Parameter<string> | db.SQLFragment | db.ParentColumn>;
      /**
       * **resources.resourceType**
       * - `resource_type` in database
       * - `NOT NULL`, no default
       */
      resourceType?:
        | resource_type
        | db.Parameter<resource_type>
        | db.SQLFragment
        | db.ParentColumn
        | db.SQLFragment<any, resource_type | db.Parameter<resource_type> | db.SQLFragment | db.ParentColumn>;
      /**
       * **resources.amount**
       * - `int4` in database
       * - `NOT NULL`, no default
       */
      amount?:
        | number
        | db.Parameter<number>
        | db.SQLFragment
        | db.ParentColumn
        | db.SQLFragment<any, number | db.Parameter<number> | db.SQLFragment | db.ParentColumn>;
    }
    export interface Insertable {
      /**
       * **resources.id**
       * - `uuid` in database
       * - `NOT NULL`, default: `uuid_generate_v4()`
       */
      id?: string | db.Parameter<string> | db.DefaultType | db.SQLFragment;
      /**
       * **resources.resourceType**
       * - `resource_type` in database
       * - `NOT NULL`, no default
       */
      resourceType: resource_type | db.Parameter<resource_type> | db.SQLFragment;
      /**
       * **resources.amount**
       * - `int4` in database
       * - `NOT NULL`, no default
       */
      amount: number | db.Parameter<number> | db.SQLFragment;
    }
    export interface Updatable {
      /**
       * **resources.id**
       * - `uuid` in database
       * - `NOT NULL`, default: `uuid_generate_v4()`
       */
      id?:
        | string
        | db.Parameter<string>
        | db.DefaultType
        | db.SQLFragment
        | db.SQLFragment<any, string | db.Parameter<string> | db.DefaultType | db.SQLFragment>;
      /**
       * **resources.resourceType**
       * - `resource_type` in database
       * - `NOT NULL`, no default
       */
      resourceType?:
        | resource_type
        | db.Parameter<resource_type>
        | db.SQLFragment
        | db.SQLFragment<any, resource_type | db.Parameter<resource_type> | db.SQLFragment>;
      /**
       * **resources.amount**
       * - `int4` in database
       * - `NOT NULL`, no default
       */
      amount?:
        | number
        | db.Parameter<number>
        | db.SQLFragment
        | db.SQLFragment<any, number | db.Parameter<number> | db.SQLFragment>;
    }
    export type UniqueIndex = 'resources_pkey';
    export type Column = keyof Selectable;
    export type OnlyCols<T extends readonly Column[]> = Pick<Selectable, T[number]>;
    export type SQLExpression =
      | Table
      | db.ColumnNames<Updatable | (keyof Updatable)[]>
      | db.ColumnValues<Updatable>
      | Whereable
      | Column
      | db.ParentColumn
      | db.GenericSQLExpression;
    export type SQL = SQLExpression | SQLExpression[];
  }

  /**
   * **schema_migrations**
   * - Table in database
   */
  export namespace schema_migrations {
    export type Table = 'schema_migrations';
    export interface Selectable {
      /**
       * **schema_migrations.version**
       * - `varchar` in database
       * - `NOT NULL`, no default
       */
      version: string;
    }
    export interface JSONSelectable {
      /**
       * **schema_migrations.version**
       * - `varchar` in database
       * - `NOT NULL`, no default
       */
      version: string;
    }
    export interface Whereable {
      /**
       * **schema_migrations.version**
       * - `varchar` in database
       * - `NOT NULL`, no default
       */
      version?:
        | string
        | db.Parameter<string>
        | db.SQLFragment
        | db.ParentColumn
        | db.SQLFragment<any, string | db.Parameter<string> | db.SQLFragment | db.ParentColumn>;
    }
    export interface Insertable {
      /**
       * **schema_migrations.version**
       * - `varchar` in database
       * - `NOT NULL`, no default
       */
      version: string | db.Parameter<string> | db.SQLFragment;
    }
    export interface Updatable {
      /**
       * **schema_migrations.version**
       * - `varchar` in database
       * - `NOT NULL`, no default
       */
      version?:
        | string
        | db.Parameter<string>
        | db.SQLFragment
        | db.SQLFragment<any, string | db.Parameter<string> | db.SQLFragment>;
    }
    export type UniqueIndex = 'schema_migrations_pkey';
    export type Column = keyof Selectable;
    export type OnlyCols<T extends readonly Column[]> = Pick<Selectable, T[number]>;
    export type SQLExpression =
      | Table
      | db.ColumnNames<Updatable | (keyof Updatable)[]>
      | db.ColumnValues<Updatable>
      | Whereable
      | Column
      | db.ParentColumn
      | db.GenericSQLExpression;
    export type SQL = SQLExpression | SQLExpression[];
  }

  /* --- aggregate types --- */

  export namespace public {
    export type Table = resources.Table | schema_migrations.Table;
    export type Selectable = resources.Selectable | schema_migrations.Selectable;
    export type JSONSelectable = resources.JSONSelectable | schema_migrations.JSONSelectable;
    export type Whereable = resources.Whereable | schema_migrations.Whereable;
    export type Insertable = resources.Insertable | schema_migrations.Insertable;
    export type Updatable = resources.Updatable | schema_migrations.Updatable;
    export type UniqueIndex = resources.UniqueIndex | schema_migrations.UniqueIndex;
    export type Column = resources.Column | schema_migrations.Column;

    export type AllBaseTables = [resources.Table, schema_migrations.Table];
    export type AllForeignTables = [];
    export type AllViews = [];
    export type AllMaterializedViews = [];
    export type AllTablesAndViews = [resources.Table, schema_migrations.Table];
  }

  /* === global aggregate types === */

  export type Schema = 'public';
  export type Table = public.Table;
  export type Selectable = public.Selectable;
  export type JSONSelectable = public.JSONSelectable;
  export type Whereable = public.Whereable;
  export type Insertable = public.Insertable;
  export type Updatable = public.Updatable;
  export type UniqueIndex = public.UniqueIndex;
  export type Column = public.Column;

  export type AllSchemas = ['public'];
  export type AllBaseTables = [...public.AllBaseTables];
  export type AllForeignTables = [...public.AllForeignTables];
  export type AllViews = [...public.AllViews];
  export type AllMaterializedViews = [...public.AllMaterializedViews];
  export type AllTablesAndViews = [...public.AllTablesAndViews];

  /* === lookups === */

  export type SelectableForTable<T extends Table> = {
    resources: resources.Selectable;
    schema_migrations: schema_migrations.Selectable;
  }[T];

  export type JSONSelectableForTable<T extends Table> = {
    resources: resources.JSONSelectable;
    schema_migrations: schema_migrations.JSONSelectable;
  }[T];

  export type WhereableForTable<T extends Table> = {
    resources: resources.Whereable;
    schema_migrations: schema_migrations.Whereable;
  }[T];

  export type InsertableForTable<T extends Table> = {
    resources: resources.Insertable;
    schema_migrations: schema_migrations.Insertable;
  }[T];

  export type UpdatableForTable<T extends Table> = {
    resources: resources.Updatable;
    schema_migrations: schema_migrations.Updatable;
  }[T];

  export type UniqueIndexForTable<T extends Table> = {
    resources: resources.UniqueIndex;
    schema_migrations: schema_migrations.UniqueIndex;
  }[T];

  export type ColumnForTable<T extends Table> = {
    resources: resources.Column;
    schema_migrations: schema_migrations.Column;
  }[T];

  export type SQLForTable<T extends Table> = {
    resources: resources.SQL;
    schema_migrations: schema_migrations.SQL;
  }[T];
}