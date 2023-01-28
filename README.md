# spacex-frontend-project
# Spacex api project
This is a frontend project. This project build with thard pary **Api** . This Api is open source and it maintained by SpaceX Developer team.This Project is only frontend implementation. 

## Technology
- Redux toolkit
- TypeScript
- Use ant Ui library
In this app I manage store using **redux-tool kit** also use typeScirpt for better development experiences

## Features
6. Search  
1. By Rocket Name  
7. Filters data by  
1. By Launch Date  
	i. Last Week  
	ii. Last Month  
	iii. Last Year  
2. By Launch Status ( Failure, Success )  
3. Is it upcoming?

## App install
`git clone  project-path`
`yarn install`
`yarn run dev`

## Eslint and Pritter set up
-	`yarn add eslint -D`
-	`npx eslint --init`
- `npx install-peerdeps --dev eslint-config-airbnb`
```js
"extends": ["airbnb", "airbnb/hooks"] to your .eslintrc
```

- `yarn -D eslint-config-airbnb-typescript`
```js
extends: [ 'airbnb', + 'airbnb-typescript'// add this ]
```

```js
{ extends: ['airbnb', 'airbnb-typescript'], + parserOptions: { + project: './tsconfig.json' // add this to the bottom + } }
```

Go to `tsconfig.json` file and add `"include": [".eslintrc.cjs", "src"]` add `.eslintrc.cjs`
- `yarn add prettier eslint-confg-prettier eslint-plugin-prettier -D`

Now add or extends prettier file. Integrate with eslinter

```js
plugins: ['react', '@typescript-eslint', 'prettier'// add this],
```
```js
extends: [ 'airbnb', 'airbnb-typescript', 'airbnb/hooks', 'plugin:react/recommended', 'plugin:@typescript-eslint/recommended', 'plugin:prettier/recommended', // add here to the bottom. this for prevent conflict ],
