# SwitchDB

A database, and DSL, of mechanical keyboard switches. Served as a website at [https://anyswitch.xyz](https://anyswitch.xyz)

## Contributing

Know of a switch that we've missed? Found an error in one of the switches? Don't worry! You can easily contribute to this project.

In order to contribute, you will have to fork this project and submit a PR.

### Directory structure

Switches are organized in a hierarchical order: `[manufacturer]/[brand]/[switch-name-slug].ts` inside [./src/switches].

Before adding a new switch, make sure it does not yet exist.

### Adding / Modifying a switch

In order to add or modify a switch, create or edit an appropriate switch file as explain in the above section. All switches should satisfy the `Switch` type. You can achieve this by using the `satisfies` operator.

If you are creating a new switch, make sure to add to the `index.ts` file of the appropriate brand directory.

If you are creating a new switch in a new brand, make sure to add an `index.ts` inside the brands directory, as well as define the brand inside the `index.ts` of the parent manufacturer. Refer to the existing examples.

When opening a PR, please link to an existing documentation or proof regarding the change. A data sheet is the best proof, but an existence of the switch or specification inside an online store - is good as well.

## Acknowledgments & License

This project is meant entertainment purposes only. It is **not** meant to provide official specification of mechanical key switches. Always refer to the official data sheets / manufacturer website for official specifications.

All brand and manufacturer logos, mentions, product names and images are property of their respective owners, unless otherwise stated.

Refer to [LICENSE](./LICENSE) file for license for this project.
