# app-layout



<!-- Auto Generated Below -->


## Dependencies

### Depends on

- [chat-layout](../chat-layout)
- [messages-layout](../messages-layout)
- [archive-layout](../archive-layout)
- [medical-records-layout](../medical-records-layout)
- [examinations-layout](../examinations-layout)
- [trash-layout](../trash-layout)
- [app-header](../app-header)
- [app-sidebar](../app-sidebar)

### Graph
```mermaid
graph TD;
  app-layout --> chat-layout
  app-layout --> messages-layout
  app-layout --> archive-layout
  app-layout --> medical-records-layout
  app-layout --> examinations-layout
  app-layout --> trash-layout
  app-layout --> app-header
  app-layout --> app-sidebar
  messages-layout --> list-item
  archive-layout --> list-item
  style app-layout fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
