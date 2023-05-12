# WebGPU Specification
This is a repository for Chinese translation of WebGPU API and WebGPU Shading Language (WGSL) specifications. 

You can find the original specifications from https://gpuweb.github.io/gpuweb/

## Dependencies

The specification is written using [Bikeshed](https://tabatkins.github.io/bikeshed)
with diagrams generated using [Mermaid](https://mermaid-js.github.io/mermaid/).

To install the necessary tools, run:

```bash
./tools/install-dependencies.sh bikeshed diagrams wgsl
```

Alternatively, invoke `pip3`/`npx` directly, using the commands in [that script](../tools/install-dependencies.sh).

> If Bikeshed is not installed locally, the Bikeshed API will be used to generate the specification
(this is generally slower).

## Building
To generate the specification, type `make` in each subfolder:

```bash
make
```

You may also need `tree_sitter` to build WGSL
```bash
pip3 install tree_sitter
```