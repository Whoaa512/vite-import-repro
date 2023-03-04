# vite-import-repro
> Small repo to reproduce the error:
> ```
> Sourcemap is likely to be incorrect: a plugin (vite-plugin-importus) was used to transform files, but didn't > generate a sourcemap for the transformation. Consult the plugin documentation for help
> ```


Issue: https://github.com/Geocld/vite-plugin-importus/issues/4

## To reproduce

```sh
yarn
yarn build
```
