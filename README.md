*This project is experimental*

# Setting up for local development

1. Install dependencies

```
yarn install
// or
npm i
```

2. Run the tests

```
npm t
```

3. Write unit tests for your code

4. Write your code to pass the tests

5. Goto step 3

# Using built module locally

1. Build the module

```
npm start
```

2. In your project root, run `npm i -D <folder>`, where `<folder>` is a path to this project.

3. Import and use it.

4. If you make changes after this, you'll have to repeat from step 1 plus uninstalling the package before step 2

```
npm uninstall fake-xrm
npm i -D <folder>
```
