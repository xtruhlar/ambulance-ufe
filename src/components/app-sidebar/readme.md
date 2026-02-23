# app-sidebar



<!-- Auto Generated Below -->


## Properties

| Property       | Attribute       | Description | Type                                                                        | Default      |
| -------------- | --------------- | ----------- | --------------------------------------------------------------------------- | ------------ |
| `activeLayout` | `active-layout` |             | `"archive" \| "examinations" \| "medical-records" \| "messages" \| "trash"` | `'messages'` |


## Events

| Event          | Description | Type                                                                                     |
| -------------- | ----------- | ---------------------------------------------------------------------------------------- |
| `layoutSelect` |             | `CustomEvent<"archive" \| "examinations" \| "medical-records" \| "messages" \| "trash">` |


## Dependencies

### Used by

 - [app-layout](../app-layout)

### Graph
```mermaid
graph TD;
  app-layout --> app-sidebar
  style app-sidebar fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
