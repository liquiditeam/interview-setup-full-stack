# Interview

## Backend Tasks

- write migrations

  - asteroids
  - starships
  - relationship tables for asteroids to resources and starships to resources

- write queries + mutations

  - asteroid queries
  - starship queries
  - resource queries

  - mutations

    - reset simulation (delete all asteroids, starships and resources, create 10 asteroids with random resources, create 5 starships with 0 resources)

    - fly starship (starship leaves asteroid if necessary, starship arrives at new asteroid)

    - mine asteroid (check if asteroid has no minedAt and starship is on asteroid)
      - resources from asteroid to starship
      - set minedAt

## Bonus

- Do you know what loaders are? Write a loader that resolves resources for asteroids / starships

## Frontend Tasks

- setup
  
    - typescript
    - react
    - vite or next
    - graphql client
    - any UI library (CSS library or component library)

- home page

  - reset simulation button

    - use reset simulation mutation

  - start simulation button

    - link to starships page

- starships page

  - list starships with basic info (asteroid, combined resources per resource type)

- starship detail page

  - show starship info
  - show resources
  - show current asteroid (if on asteroid)
  - show button to mine asteroid (if on asteroid and asteroid is not mined)
  - show list of asteroids with resources and button to fly to asteroid (if not on asteroid or current asteroid is mined)
