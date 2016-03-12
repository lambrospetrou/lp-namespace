# LP-Namespace

This module is used to create (ensure existence) namespaces inside Javascript objects. By namespace I mean something like **MY.CUSTOM.NAMESPACE**. Here, we the result in an object will be the following:

```json
{
    MY: {
            CUSTOM: {
                NAMESPACE: {}
        }
    }
}
```

You can also use the ```ns.js``` file directly in browser which declares a global **LP** variable for you to use.

## API

### ns(namespace, container)

This method ensures that the @container object contains properties that represent the given namespace.

